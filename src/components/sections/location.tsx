import type React from 'react';
import { imageSource } from '@/config/media';

export function LocationSection() { return (<section className={"section"} id={"location"}>
<div className={"container"} style={{"textAlign":"center"} as React.CSSProperties}>
<p className={"eyebrow"}>{"— Where I'm From"}</p>
<h2 className={"heading"}>{"Based in "}<span >{"Illinois, USA."}</span></h2>
<p className={"muted"} style={{"maxWidth":"560px","margin":"14px auto 0"} as React.CSSProperties}>{"Based in Illinois, USA — available for local opportunities and remote projects worldwide."}</p>
<div className={"hp-map-wrap glass"}>
<img src={imageSource("illinois-location")} alt={"Illustrated map of the United States highlighting Illinois"} className={"hp-map-img"} width={1536} height={1024} loading="lazy" />
</div>
</div>
</section>); }
