import type React from 'react';
import { site, personalize } from '@/config/site';
import { imageSource } from '@/config/media';

export function HomeSection() { return (<section className={"hero"} id={"home"}>
<div className={"container hero-grid"}>
<div >
<div className={"pill"}><span className={"spark"}></span>{" Video Editor · Creative Producer"}</div>
<h1 className={"hero-name"} aria-label={personalize("Jaspal")}>{personalize("Jaspal")}</h1>
<div className={"underline"}></div>
<p className={"role"}>{"Video Editor & Creative Producer"}</p>
<p className={"tagline"}>{"I create engaging, story-driven videos for brands, creators and businesses—combining strong hooks, thoughtful pacing and a cinematic finish. For professionally managed business projects, I collaborate with Crawl Vision's team."}</p>
<div className={"actions"}>
<a className={"btn btn-primary"} href={site.contact.upwork} target={"_blank"} rel="noopener noreferrer">{"Discuss a Business Project ↗"}</a>
<a className={"btn btn-ghost"} href={"#work"}>{"▶ View My Work"}</a>
</div>
<div className={"trust"}>
<div className={"dots"}><i style={{"--c":"#9d2c41"} as React.CSSProperties}></i><i style={{"--c":"#641222"} as React.CSSProperties}></i><i style={{"--c":"#d77a8c"} as React.CSSProperties}></i><i style={{"--c":"#50101d"} as React.CSSProperties}></i></div>
<div ><b style={{"color":"#fdf4f5"} as React.CSSProperties}>{"CREATIVE PARTNER"}</b>
<span >{"Video Editor & Creative Producer"}</span></div>
</div>
</div>
<div className={"visual"}>
<div className={"phone"} id={"phoneShape"}>
<img src={imageSource("profile-hero.jpg")} alt={personalize("Jaspal video editor portrait")} />
</div>
</div>
</div>
</section>); }
