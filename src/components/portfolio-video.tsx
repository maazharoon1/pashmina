"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Play, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";
import { videoSource, videoPoster } from "@/config/media";

export function PortfolioVideo({ mediaKey, className, label }: { mediaKey: string; className: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const visible = useRef(false);
  const [muted, setMuted] = useState(true);
  const [status, setStatus] = useState<"idle" | "playing" | "blocked" | "error">("idle");
  const play = useCallback(() => {
    const video = ref.current;
    if (!video || !visible.current || document.hidden) return;
    const url = videoSource(mediaKey);
    if (!url) { setStatus("error"); return; }
    if (!video.getAttribute("src")) { video.src = url; video.load(); }
    void video.play().catch((error: DOMException) => {
      if (error.name === "NotAllowedError") setStatus("blocked");
      // AbortError is expected when an offscreen or filtered video pauses during loading.
    });
  }, [mediaKey]);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    const mute = () => { video.muted = true; setMuted(true); };
    const observer = new IntersectionObserver(([entry]) => {
      visible.current = entry.isIntersecting;
      if (entry.isIntersecting) play();
      else { video.pause(); mute(); }
    }, { threshold: 0.08 });
    observer.observe(video);
    const visibility = () => { if (document.hidden) video.pause(); else play(); };
    const claim = (event: Event) => { if ((event as CustomEvent).detail !== mediaKey) mute(); };
    document.addEventListener("visibilitychange", visibility);
    window.addEventListener("portfolio:audio", claim);
    return () => { observer.disconnect(); video.pause(); document.removeEventListener("visibilitychange", visibility); window.removeEventListener("portfolio:audio", claim); };
  }, [mediaKey, play]);

  const toggleSound = () => {
    const video = ref.current;
    if (!video) return;
    const nextMuted = !video.muted;
    if (!nextMuted) window.dispatchEvent(new CustomEvent("portfolio:audio", { detail: mediaKey }));
    video.muted = nextMuted;
    setMuted(nextMuted);
    play();
  };
  const isVelocity = className === "velocity-video";
  const buttonClass = isVelocity ? "velocity-mute media-sound" : className === "work-video" ? "mute-btn" : `cv-mute-btn ${className === "cv-longform-video" ? "cv-longform-mute-btn" : ""}`;
  return <>
    <video ref={ref} className={className} data-media-key={mediaKey} aria-label={label} autoPlay muted loop playsInline preload="none" poster={videoPoster(mediaKey)}
      onPlaying={() => setStatus("playing")} onError={() => setStatus("error")} onCanPlay={play} />
    <Button variant="bare" className={buttonClass} onClick={toggleSound} aria-label={`${muted ? "Unmute" : "Mute"} ${label}`} title={muted ? "Unmute video" : "Mute video"} aria-pressed={!muted}>
      {muted ? <VolumeX /> : <Volume2 />}
    </Button>
    {(status === "blocked" || status === "error") && <Button variant="bare" className="media-retry" onClick={() => {
      const video = ref.current;
      if (video && status === "error") { video.removeAttribute("src"); setStatus("idle"); }
      play();
    }} aria-label={`${status === "error" ? "Retry" : "Play"} ${label}`}>
      {status === "error" ? <RotateCcw /> : <Play />}{status === "error" ? "Retry video" : "Play video"}
    </Button>}
  </>;
}
