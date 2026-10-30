import type React from 'react';


export function PackagesSection() { return (<section className={"section"} id={"packages"}>
<div className={"container"} style={{"textAlign":"center"} as React.CSSProperties}>
<p className={"eyebrow"}>{"— Custom Project Enquiries"}</p>
<h2 className={"heading"}>{"Your brief."}<br  /><span >{"Our creative team."}</span></h2>
<p className={"muted"} style={{"maxWidth":"650px","margin":"18px auto 28px"} as React.CSSProperties}>{"Every project has different goals, formats and production needs. Vidicraze will review your brief and recommend a scope that fits your brand, audience and timeline."}</p>
<a className={"btn btn-primary"} href="#contact">{"Request a Project Quote ↗"}</a>
</div>
</section>); }
