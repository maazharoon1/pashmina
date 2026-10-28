import type React from 'react';

export function AiToolsSection() { return (<section className={"section"} id={"ai-tools"}>
<div className={"container"} style={{"textAlign":"center"} as React.CSSProperties}>
<p className={"eyebrow"}>{"— AI-Powered Workflow"}</p>
<h2 className={"heading"}>{"Tools I "}<span >{"create with."}</span></h2>
<p className={"muted"} style={{"maxWidth":"560px","margin":"14px auto 0"} as React.CSSProperties}>{"A blend of AI tools that speed up my workflow without ever replacing the craft."}</p>
<div className={"tools-grid"}>
<div className={"tool-badge glass spotlight"}><img className={"official-tool-logo"} src={"/tools/higgsfield.png"} alt={"Higgsfield logo"} loading={"lazy"} /><p >{"Higgsfield"}</p></div>
<div className={"tool-badge glass spotlight"}><img className={"official-tool-logo"} src={"/tools/claude.png"} alt={"Claude logo"} loading={"lazy"} /><p >{"Claude"}</p></div>
<div className={"tool-badge glass spotlight"}><img className={"official-tool-logo"} src={"/tools/higgsfield.png"} alt={"Higgsfield Omni Flash logo"} loading={"lazy"} /><p >{"Omni Flash"}</p></div>
<div className={"tool-badge glass spotlight"}><img className={"official-tool-logo"} src={"/tools/deepmind.png"} alt={"Google Veo logo"} loading={"lazy"} /><p >{"Veo 3"}</p></div>
<div className={"tool-badge glass spotlight"}><img className={"official-tool-logo"} src={"/tools/fable.svg"} alt={"Fable logo"} loading={"lazy"} /><p >{"Fable"}</p></div>
<div className={"tool-badge glass spotlight"}><img className={"official-tool-logo"} src={"/tools/astra.svg"} alt={"Astra logo"} loading={"lazy"} /><p >{"Astra 6"}</p></div>
<div className={"tool-badge glass spotlight"}><img className={"official-tool-logo"} src={"/tools/heygen.png"} alt={"HeyGen logo"} loading={"lazy"} /><p >{"HeyGen"}</p></div>
<div className={"tool-badge glass spotlight"}><img className={"official-tool-logo"} src={"/tools/gemini.png"} alt={"Google Gemini logo"} loading={"lazy"} /><p >{"Gemini"}</p></div>
<div className={"tool-badge glass spotlight"}><img className={"official-tool-logo"} src={"/tools/claude.png"} alt={"Claude logo"} loading={"lazy"} /><p >{"Sonnet 6"}</p></div>
</div>
</div>
</section>); }
