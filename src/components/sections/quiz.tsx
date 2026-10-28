import type React from 'react';
import { Quiz } from '@/components/quiz';

export function QuizSection() { return (<section className={"section"} id={"quiz"}>
<div className={"container"} style={{"textAlign":"center"} as React.CSSProperties}>
<div className={"quiz-mascot"}>
<svg viewBox={"0 0 680 480"} xmlns={"http://www.w3.org/2000/svg"}>
<defs >
<radialGradient id={"glow2"} cx={"50%"} cy={"38%"} r={"55%"}>
<stop offset={"0%"} stopColor={"#9b4dff"} stopOpacity={"0.5"}></stop>
<stop offset={"100%"} stopColor={"#9b4dff"} stopOpacity={"0"}></stop>
</radialGradient>
<linearGradient id={"body"} x1={"0"} y1={"0"} x2={"0"} y2={"1"}>
<stop offset={"0%"} stopColor={"#c18aff"}></stop>
<stop offset={"100%"} stopColor={"#5e17c9"}></stop>
</linearGradient>
</defs>
<ellipse cx={"340"} cy={"210"} rx={"230"} ry={"200"} fill={"url(#glow2)"}></ellipse>
<ellipse cx={"340"} cy={"430"} rx={"120"} ry={"18"} fill={"#000000"} opacity={"0.4"}></ellipse>
<path d={"M260 300 Q220 300 215 340 Q212 370 245 375 L285 375 L285 300 Z"} fill={"#9b4dff"}></path>
<path d={"M245 375 Q235 335 260 310"} stroke={"#5e17c9"} strokeWidth={"6"} fill={"none"} strokeLinecap={"round"}></path>
<rect x={"200"} y={"230"} width={"72"} height={"72"} rx={"14"} fill={"#f8f4ff"} transform={"rotate(-14 236 266)"}></rect>
<text x={"236"} y={"275"} textAnchor={"middle"} fontSize={"20"} fontWeight={"700"} fill={"#5e17c9"} fontFamily={"Arial, sans-serif"} transform={"rotate(-14 236 266)"}>{"WAIT"}</text>
<path d={"M340 130 C420 130 460 190 460 250 C460 330 400 380 340 380 C280 380 220 330 220 250 C220 190 260 130 340 130 Z"} fill={"url(#body)"}></path>
<path d={"M420 300 Q470 290 480 250 Q485 225 465 220 Q448 220 448 240"} fill={"#5e17c9"}></path>
<ellipse cx={"300"} cy={"240"} rx={"20"} ry={"26"} fill={"#10091c"}></ellipse>
<ellipse cx={"380"} cy={"240"} rx={"20"} ry={"26"} fill={"#10091c"}></ellipse>
<circle cx={"307"} cy={"232"} r={"6"} fill={"#ffffff"}></circle>
<circle cx={"387"} cy={"232"} r={"6"} fill={"#ffffff"}></circle>
<path d={"M310 300 Q340 320 370 300"} stroke={"#10091c"} strokeWidth={"6"} fill={"none"} strokeLinecap={"round"}></path>
<ellipse cx={"270"} cy={"270"} rx={"14"} ry={"9"} fill={"#d8b5ff"} opacity={"0.55"}></ellipse>
<ellipse cx={"410"} cy={"270"} rx={"14"} ry={"9"} fill={"#d8b5ff"} opacity={"0.55"}></ellipse>
<circle cx={"150"} cy={"120"} r={"4"} fill={"#c18aff"}></circle>
<circle cx={"540"} cy={"150"} r={"5"} fill={"#c18aff"} opacity={"0.8"}></circle>
<circle cx={"520"} cy={"360"} r={"4"} fill={"#9b4dff"} opacity={"0.7"}></circle>
<circle cx={"160"} cy={"380"} r={"3"} fill={"#c18aff"} opacity={"0.6"}></circle>
<path d={"M300 150 Q340 120 380 150"} stroke={"#f8f4ff"} strokeWidth={"4"} fill={"none"} strokeLinecap={"round"} opacity={"0.5"}></path>
</svg>
</div>
<p className={"eyebrow"}>{"— Quick Quiz"}</p>
<h2 className={"heading quiz-heading"}>{"Find your "}<span >{"edit style."}</span></h2>
<p className={"muted"} style={{"maxWidth":"520px","margin":"14px auto 0"} as React.CSSProperties}>{"Answer 4 quick questions and find out which edit style fits your brand best."}</p>
<Quiz />
</div>
</section>); }
