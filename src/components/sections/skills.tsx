import type React from 'react';

export function SkillsSection() { return (<section className={"section"} id={"skills"}>
<div className={"container skills-wrap"}>
<div >
<p className={"eyebrow"}>{"— Toolkit"}</p>
<h2 className={"heading"}>{"Sharp tools."}<br  /><span >{"Sharper timing."}</span></h2>
<p className={"muted"} style={{"marginTop":"20px"} as React.CSSProperties}>{"Editing is not only software. It is timing, taste, story and knowing exactly where a viewer might swipe away."}</p>
</div>
<div className={"glass"} style={{"borderRadius":"30px","padding":"30px"} as React.CSSProperties}>
<div className={"point-grid"} style={{"marginTop":"0"} as React.CSSProperties}>
<div className={"point tool-point"}><img src={"/tools/premiere-pro.svg"} alt={"Adobe Premiere Pro logo"} loading={"lazy"} /><span >{"Adobe Premiere Pro"}</span></div>
<div className={"point tool-point"}><img src={"/tools/after-effects.svg"} alt={"Adobe After Effects logo"} loading={"lazy"} /><span >{"Adobe After Effects"}</span></div>
<div className={"point tool-point"}><img src={"/tools/capcut.png"} alt={"CapCut logo"} loading={"lazy"} /><span >{"CapCut Pro"}</span></div>
<div className={"point"}><span className={"check"}>{"✓"}</span>{" Storytelling & pacing"}</div>
<div className={"point"}><span className={"check"}>{"✓"}</span>{" Motion graphics"}</div>
<div className={"point"}><span className={"check"}>{"✓"}</span>{" AI-assisted content"}</div>
</div>
</div>
</div>
</section>); }
