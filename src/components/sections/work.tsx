import { PortfolioVideo } from '@/components/portfolio-video';

export function WorkSection() { return (<section className={"section"} id={"work"}>
<div className={"container"}>
<div className={"section-top"}>
<div >
<p className={"eyebrow"}>{"— Selected Work"}</p>
<h2 className={"heading"}>{"Projects that "}<span >{"move."}</span></h2>
</div>
<p className={"muted"}>{"A taste of recent edits across UGC, talking-head, commercial and product storytelling. Every preview plays on loop — tap the speaker to hear it."}</p>
</div>
<div className={"filters"}>
<button className={"filter active"} data-filter={"All"}>{"ALL"}</button>
<button className={"filter"} data-filter={"Commercial Tech Reel"}>{"COMMERCIAL TECH REEL"}</button>
<button className={"filter"} data-filter={"UGC Product Ad"}>{"UGC PRODUCT AD"}</button>
<button className={"filter"} data-filter={"Talking Head Premium Edit"}>{"TALKING HEAD PREMIUM EDIT"}</button>
<button className={"filter"} data-filter={"Documentary and Motion Graphics"}>{"DOCUMENTARY AND MOTION GRAPHICS"}</button>
<button className={"filter"} data-filter={"Focusing On Your Brand"}>{"FOCUSING ON YOUR BRAND"}</button>
<button className={"filter"} data-filter={"Beauty & Skincare Promotional Ads"}>{"BEAUTY & SKINCARE PROMOTIONAL ADS"}</button>
<button className={"filter"} data-filter={"Fashion & Apparel Promotional Ads"}>{"FASHION & APPAREL PROMOTIONAL ADS"}</button>
<button className={"filter"} data-filter={"Car Edit"}>{"CAR EDIT"}</button>
</div>
<div className={"work-grid"}>
<div className={"work-float wide-float"}>
<article className={"work-card wide-card glass"} data-cat={"Hyper Editz"} data-title={"Hyper Editz"}>
<PortfolioVideo mediaKey="hyper-editz-reel" className="work-video" label="hyper editz reel" />

<div className={"work-info"}>
<div className={"wide-card-content"}>
<span className={"wide-card-eyebrow"}><span className={"spark"}></span>{" Featured Reel"}</span>
<p className={"wide-card-text"}><span className={"row1"}>{"HYPER"}</span><span className={"row2"}>{"EDITZ"}</span></p>
<span className={"wide-card-underline"}></span>
<p className={"wide-card-tagline"}>{"Cuts engineered to stop the scroll."}</p>
<p className={"wide-card-desc"}>{"From raw clips to a hook-first cut — sharp pacing, sound design and motion polish built to make viewers stop scrolling and watch till the very end."}</p>
</div>
</div>
</article>
</div>
<div className={"work-float"}>
<article className={"work-card glass"} data-cat={"Commercial Tech Reel"} data-title={"Commercial Tech Reel"}>
<PortfolioVideo mediaKey="commercial-tech-reel" className="work-video" label="commercial tech reel" />

<div className={"work-info"}><p className={"work-cat"}>{"Commercial Tech Reel"}</p></div>
</article>
</div>
<div className={"work-float"}>
<article className={"work-card glass"} data-cat={"UGC Product Ad"} data-title={"UGC Product Ad"}>
<PortfolioVideo mediaKey="ugc-product-ad" className="work-video" label="ugc product ad" />

<div className={"work-info"}><p className={"work-cat"}>{"UGC Product Ad"}</p></div>
</article>
</div>
<div className={"work-float"}>
<article className={"work-card glass"} data-cat={"Talking Head Premium Edit"} data-title={"Talking Head Premium Edit"}>
<PortfolioVideo mediaKey="talking-head-premium-edit" className="work-video" label="talking head premium edit" />

<div className={"work-info"}><p className={"work-cat"}>{"Talking Head Premium Edit"}</p></div>
</article>
</div>
<div className={"work-float"}>
<article className={"work-card glass"} data-cat={"Documentary and Motion Graphics"} data-title={"Documentary and Motion Graphics"}>
<PortfolioVideo mediaKey="documentary-and-motion-graphics" className="work-video" label="documentary and motion graphics" />

<div className={"work-info"}><p className={"work-cat"}>{"Documentary and Motion Graphics"}</p></div>
</article>
</div>
<div className={"work-float"}>
<article className={"work-card glass"} data-cat={"Focusing On Your Brand"} data-title={"Focusing On Your Brand"}>
<PortfolioVideo mediaKey="focusing-on-your-brand" className="work-video" label="focusing on your brand" />

<div className={"work-info"}><p className={"work-cat"}>{"Focusing On Your Brand"}</p></div>
</article>
</div>
<div className={"work-float"}>
<article className={"work-card glass"} data-cat={"Beauty & Skincare Promotional Ads"} data-title={"Beauty & Skincare Promotional Ads"}>
<PortfolioVideo mediaKey="beauty-skincare-promotional-ad" className="work-video" label="beauty skincare promotional ad" />

<div className={"work-info"}><p className={"work-cat"}>{"Beauty & Skincare Promotional Ads"}</p></div>
</article>
</div>
<div className={"work-float"}>
<article className={"work-card glass"} data-cat={"Fashion & Apparel Promotional Ads"} data-title={"Fashion & Apparel Promotional Ads"}>
<PortfolioVideo mediaKey="fashion-apparel-promotional-ad" className="work-video" label="fashion apparel promotional ad" />

<div className={"work-info"}><p className={"work-cat"}>{"Fashion & Apparel Promotional Ads"}</p></div>
</article>
</div>
<div className={"work-float"}>
<article className={"work-card glass"} data-cat={"Car Edit"} data-title={"Car Edit"}>
<PortfolioVideo mediaKey="car-edit" className="work-video" label="car edit" />

<div className={"work-info"}><p className={"work-cat"}>{"Car Edit"}</p></div>
</article>
</div>
</div>
</div>
</section>); }
