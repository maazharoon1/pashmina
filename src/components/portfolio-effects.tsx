"use client";
import { useEffect } from "react";

export function PortfolioEffects() {
  useEffect(() => {
    const abort = new AbortController();
    const { signal } = abort;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const filters = document.querySelectorAll<HTMLButtonElement>(".filter");
    const applyFilter = (selected: string) => {
      filters.forEach(button => {
        const active = button.dataset.filter === selected;
        button.classList.toggle("active", active);
        button.setAttribute("aria-pressed", String(active));
      });
      document.querySelectorAll<HTMLElement>(".work-float").forEach(wrapper => {
        const card = wrapper.querySelector<HTMLElement>(".work-card");
        // Hide the grid wrapper too, so filtering never leaves empty grid cells.
        wrapper.hidden = selected !== "All" && card?.dataset.cat !== selected;
        wrapper.querySelectorAll("video").forEach(video => { if (wrapper.hidden) { video.pause(); video.muted = true; } });
      });
      window.dispatchEvent(new CustomEvent("portfolio:audio", { detail: null }));
    };
    filters.forEach(button => {
      button.setAttribute("aria-pressed", String(button.classList.contains("active")));
      button.addEventListener("click", () => applyFilter(button.dataset.filter || "All"), { signal });
    });
    window.addEventListener("portfolio:filter", event => applyFilter((event as CustomEvent<string>).detail), { signal });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add("in-view"); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.04 });
    if (!reduced) {
      document.querySelectorAll<HTMLElement>(".section .container").forEach(element => { element.classList.add("reveal"); observer.observe(element); });
      document.querySelectorAll<HTMLElement>(".style-grid > *, .service-grid > *, .tools-grid > *, .brand-grid > *, .work-card").forEach((element, index) => {
        element.classList.add("reveal-card");
        element.style.transitionDelay = `${index % 4 * 0.06}s`;
        observer.observe(element);
      });
    }
    let frame = 0;
    const updateScroll = () => {
      frame = 0;
      const y = window.scrollY;
      document.getElementById("phoneShape")?.classList.toggle("circle", y > 600);
      document.getElementById("floatBuddy")?.classList.toggle("show", y > innerHeight * 1.6);
      if (!reduced) {
        [[".pill", .15], [".hero-name", .35], [".role", .25], [".tagline", .18]].forEach(([selector, factor]) => {
          const el = document.querySelector<HTMLElement>(String(selector));
          if (el) el.style.transform = innerWidth < 860 ? "" : `translateY(${-Math.min(y, 1000) * Number(factor)}px)`;
        });
      }
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(updateScroll); };
    window.addEventListener("scroll", scroll, { passive: true, signal });
    window.addEventListener("resize", scroll, { passive: true, signal });
    updateScroll();

    if (finePointer && !reduced) {
      document.querySelectorAll<HTMLElement>(".phone, .style-card, .service, .tool-badge, .quiz-box").forEach(el => {
        el.addEventListener("mousemove", e => {
          const rect = el.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
          const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
          el.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) scale(1.015)`;
          el.style.setProperty("--mx", `${(x + 1) * 50}%`);
          el.style.setProperty("--my", `${(y + 1) * 50}%`);
        }, { signal });
        el.addEventListener("mouseleave", () => { el.style.transform = ""; }, { signal });
      });
      document.querySelectorAll<HTMLElement>(".btn-primary, .btn-ghost, .hire, .icon-btn").forEach(el => {
        el.addEventListener("mousemove", e => {
          const rect = el.getBoundingClientRect();
          el.style.transform = `translate(${(e.clientX - rect.left - rect.width / 2) * .18}px, ${(e.clientY - rect.top - rect.height / 2) * .28}px)`;
        }, { signal });
        el.addEventListener("mouseleave", () => { el.style.transform = ""; }, { signal });
      });
    }
    // Match the reference's subtle button tick after a real user interaction.
    let audio: AudioContext | undefined;
    document.addEventListener("click", event => {
      if (!(event.target instanceof Element) || !event.target.closest("button")) return;
      try {
        audio ??= new AudioContext();
        void audio.resume();
        const buffer = audio.createBuffer(1, audio.sampleRate * .045, audio.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < data.length; i++) data[i] = (Math.random() * 2 - 1) * (1 - i / data.length);
        const source = audio.createBufferSource(); source.buffer = buffer;
        const filter = audio.createBiquadFilter(); filter.type = "highpass"; filter.frequency.value = 1800;
        const gain = audio.createGain(); gain.gain.value = .025;
        source.connect(filter); filter.connect(gain); gain.connect(audio.destination); source.start();
      } catch { /* Browsers may prohibit Web Audio; navigation still works. */ }
    }, { signal });
    return () => { abort.abort(); observer.disconnect(); cancelAnimationFrame(frame); void audio?.close(); };
  }, []);
  return null;
}
