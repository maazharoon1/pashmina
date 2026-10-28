import type React from 'react';
import { imageSource } from '@/config/media';

export function BrandsSection() { return (<section className={"section"} id={"brands"}>
<div className={"container"} style={{"textAlign":"center"} as React.CSSProperties}>
<p className={"eyebrow"}>{"— Selected Brand Experience"}</p>
<h2 className={"heading"}>{"Brands I've "}<span >{"worked with."}</span></h2>
<p className={"muted"} style={{"maxWidth":"560px","margin":"14px auto 0"} as React.CSSProperties}>{"A selection of brands and projects from my creative production experience."}</p>
<div className={"brand-grid"}>
<div className={"brand-tile"}><div className={"brand-logo"} style={{"backgroundImage":`url('${imageSource("lifeoz.webp")}')`} as React.CSSProperties} role={"img"} aria-label={"Lifeo'z"}></div></div>
<div className={"brand-tile"}><div className={"brand-logo"} style={{"backgroundImage":`url('${imageSource("samridhi-organic.webp")}')`} as React.CSSProperties} role={"img"} aria-label={"Samridhi Organic"}></div></div>
<div className={"brand-tile"}><div className={"brand-logo"} style={{"backgroundImage":`url('${imageSource("5ive-minutes-of-beauty.webp")}')`} as React.CSSProperties} role={"img"} aria-label={"5ive Minutes of Beauty"}></div></div>
<div className={"brand-tile"}><div className={"brand-logo"} style={{"backgroundImage":`url('${imageSource("bislova.webp")}')`} as React.CSSProperties} role={"img"} aria-label={"Bislova"}></div></div>
<div className={"brand-tile"}><div className={"brand-logo"} style={{"backgroundImage":`url('${imageSource("healthy-jeena-sikho.webp")}')`} as React.CSSProperties} role={"img"} aria-label={"Healthy Jeena Sikho"}></div></div>
<div className={"brand-tile"}><div className={"brand-logo"} style={{"backgroundImage":`url('${imageSource("study-abroad-campus.webp")}')`} as React.CSSProperties} role={"img"} aria-label={"Study Abroad Campus"}></div></div>
<div className={"brand-tile"}><div className={"brand-logo"} style={{"backgroundImage":`url('${imageSource("bringle-tech.webp")}')`} as React.CSSProperties} role={"img"} aria-label={"Bringle Tech"}></div></div>
<div className={"brand-tile"}><div className={"brand-logo"} style={{"backgroundImage":`url('${imageSource("brand-x.webp")}')`} as React.CSSProperties} role={"img"} aria-label={"Brand logo"}></div></div>
</div>
</div>
</section>); }
