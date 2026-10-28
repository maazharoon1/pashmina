"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { quizQuestions, quizResults, type ResultKey } from "@/config/quiz";
import { Button } from "@/components/ui/button";

export function Quiz() {
  const [answers, setAnswers] = useState<ResultKey[]>([]);
  const complete = answers.length === quizQuestions.length;
  const question = quizQuestions[answers.length];
  const scores: Record<ResultKey, number> = { ugc: 0, commercial: 0, product: 0, creative: 0 };
  answers.forEach(key => scores[key]++);
  const top = (Object.keys(scores) as ResultKey[]).reduce((best, key) => scores[key] > scores[best] ? key : best, "ugc");
  const result = quizResults[top];
  return <div className="quiz-box glass spotlight" id="quizBox">
    <div className="quiz-progress" role="progressbar" aria-label="Quiz progress" aria-valuemin={0} aria-valuemax={4} aria-valuenow={answers.length}>
      <div className="quiz-progress-bar" style={{ width: `${answers.length * 25}%` }} />
    </div>
    <div aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div key={answers.length} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.16 }}>
          {complete ? <div className="quiz-result" id="quizResultWrap">
            <p className="tag">Your Edit Style</p><h3>{result.title}</h3><p>{result.desc}</p>
            <Button asChild><a href="#work" onClick={() => window.dispatchEvent(new CustomEvent("portfolio:filter", { detail: result.filter }))}>See Matching Work ↗</a></Button>
            <div><Button variant="bare" className="quiz-restart" onClick={() => setAnswers([])}>Retake the quiz</Button></div>
          </div> : <div id="quizQuestionWrap">
            <p className="quiz-step-label">Question {answers.length + 1} of 4</p>
            <p className="quiz-question">{question.text}</p>
            <div className="quiz-options">{question.options.map((option, i) => <Button key={option.label} variant="bare" className="quiz-option" onClick={() => setAnswers(current => current.length === answers.length ? [...current, option.key] : current)}>
              <span className="qnum">{String.fromCharCode(65 + i)}</span><span>{option.label}</span>
            </Button>)}</div>
          </div>}
        </motion.div>
      </AnimatePresence>
    </div>
  </div>;
}
