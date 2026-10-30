import type React from 'react';
import { personalize } from '@/config/site';

export function AboutSection() { return (<section className={"section"} id={"about"}>
<div className={"container about-grid"}>
<div >
<p className={"eyebrow"}>{"— About"}</p>
<h2 className={"heading"}>{"Creative thinking."}<br  /><span >{"Measurable growth."}</span></h2>
</div>
<div >
<p className={"muted"} style={{"fontSize":"18px"} as React.CSSProperties}>{"I'm "}<b style={{"color":"#fff"} as React.CSSProperties}>{personalize("Pashmina")}</b>{", a video editor and creative producer working with "}<b style={{"color":"#fff"} as React.CSSProperties}>{"Vidicraze"}</b>{" to strengthen brands through video production and digital-first creative strategy."}</p>
<p className={"muted"} style={{"marginTop":"18px"} as React.CSSProperties}>{"Our production focus includes short-form videos, AI UGC, talking-head content, product creatives and selected long-form projects—supported by a team-led approach to planning, creative decisions and delivery. Professional enquiries are handled by Vidicraze."}</p>
<div className={"point-grid"}>
<div className={"point"}><span className={"check"}>{"✓"}</span>{" Hook-first editing style"}</div>
<div className={"point"}><span className={"check"}>{"✓"}</span>{" Retention-optimized pacing"}</div>
<div className={"point"}><span className={"check"}>{"✓"}</span>{" Fast turnaround"}</div>
<div className={"point"}><span className={"check"}>{"✓"}</span>{" Professional revisions"}</div>
</div>
<div className={"stats"}>
<div className={"stat glass"}><b >{"Reels"}</b><p >{"Short-form Content"}</p></div>
<div className={"stat glass"}><b >{"Ads"}</b><p >{"Product & Brand Videos"}</p></div>
<div className={"stat glass"}><b >{"AI"}</b><p >{"AI-assisted Creatives"}</p></div>
</div>
</div>
</div>
<div className={"container"} style={{"marginTop":"70px"} as React.CSSProperties}>
<p className={"eyebrow"}>{"— Video styles"}</p>
<h2 className={"heading"} style={{"fontSize":"clamp(32px,4.5vw,56px)"} as React.CSSProperties}>{"How each style "}<span >{"grows your brand."}</span></h2>
<p className={"muted"} style={{"maxWidth":"640px","marginTop":"14px"} as React.CSSProperties}>{"Different goals need different edits. Here's how each style I work in actually moves the needle for a brand."}</p>
<div className={"style-grid"}>
<div className={"style-card glass spotlight"}><h3 >{"UGC Product Ad"}</h3><p >{"Feels like a friend's recommendation, not an ad. Builds trust fast and drives conversions straight from the feed."}</p></div>
<div className={"style-card glass spotlight"}><h3 >{"Talking Head Premium Edit"}</h3><p >{"Puts a real face and voice to your brand, building authority and a personal connection with your audience."}</p></div>
<div className={"style-card glass spotlight"}><h3 >{"Commercial Tech Reel"}</h3><p >{"Polished, confident visuals that position your brand as the premium, trustworthy choice in a crowded market."}</p></div>
<div className={"style-card glass spotlight"}><h3 >{"Documentary and Motion Graphics"}</h3><p >{"Real, narrative-driven storytelling blended with clean motion graphics to bring facts and moments to life."}</p></div>
<div className={"style-card glass spotlight"}><h3 >{"Focusing On Your Brand"}</h3><p >{"Story-driven edits that keep your identity front and center in every single frame."}</p></div>
<div className={"style-card glass spotlight"}><h3 >{"Beauty & Skincare Ads"}</h3><p >{"Sensory, aesthetic visuals that make products impossible to scroll past."}</p></div>
<div className={"style-card glass spotlight"}><h3 >{"Fashion & Apparel Ads"}</h3><p >{"Bold, stylish cuts built to turn browsers into buyers."}</p></div>
<div className={"style-card glass spotlight"}><h3 >{"Corporate and Industries Marketing"}</h3><p >{"Polished, professional marketing content built for corporate brands and industrial businesses."}</p></div>
</div>
</div>
</section>); }
