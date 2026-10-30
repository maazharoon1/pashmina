import { portfolioCategories, portfolioProjects } from '@/config/portfolio';
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
{portfolioCategories.map(category => <button key={category.name} className="filter" data-filter={category.name}>{category.name.toUpperCase()}</button>)}
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
{portfolioProjects.map(project => <div className="work-float" key={project.key}>
<article className="work-card glass" data-cat={project.category} data-title={project.title}>
<PortfolioVideo mediaKey={project.key} className="work-video" label={project.title} />
</article>
</div>)}
</div>
</div>
</section>); }
