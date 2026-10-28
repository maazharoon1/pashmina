import { PortfolioVideo } from '@/components/portfolio-video';

export function Feature1Section() { return (<section className={"velocity-section"} aria-labelledby={"velocity-title"}>
<div className={"container"}>
<div className={"velocity-head"}>
<div >
<p className={"velocity-kicker"}>{"Featured edit · 2:1"}</p>
<h2 className={"velocity-title"} id={"velocity-title"}>{"Velocity "}<span >{"Edit"}</span></h2>
</div>
</div>
<div className={"velocity-card"}>
<PortfolioVideo mediaKey="2004" className="velocity-video" label="Velocity Edit car video" />
<div className={"velocity-overlay"}>
<div >
<p className={"velocity-subtitle"}>{"Cinematic automotive edit"}</p>
</div>

</div>
</div>
</div>
</section>); }
