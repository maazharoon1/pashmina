import type React from 'react';
import { site, personalize } from '@/config/site';
import { imageSource } from '@/config/media';

export function SiteHeader() { return (<header >
<nav className={"nav"}>
<a className="brand" href="#home">{site.brandFirst + site.brandLast === site.name.toUpperCase() ? <>{site.brandFirst}<span>{site.brandLast}</span></> : site.name.toUpperCase()}</a>
<div className={"navlinks"}>
<a href={"#about"}>{"About"}</a>
<a href={"#services"}>{"Services"}</a>
<a href={"#work"}>{"Work"}</a>
<a href={"#brands"}>{"Brands"}</a>
<a href={"#quiz"}>{"Creative Quiz"}</a>
<a href={"#skills"}>{"Skills"}</a>
<a href={"#contact"}>{"Contact"}</a>
</div>
<div style={{"display":"flex","alignItems":"center","gap":"8px"} as React.CSSProperties}><a className={"btn btn-ghost"} style={{"padding":"10px 14px","fontSize":"12px"} as React.CSSProperties} href={site.contact.upwork} target="_blank" rel="noopener noreferrer">{personalize("Contact Jaspal ↗")}</a><a className={"hire"} href={site.contact.upwork} target={"_blank"} rel="noopener noreferrer">{"Discuss a Business Project ↗"}</a></div>
</nav>
</header>); }
export function SiteFooter() { return (<footer >
<div className={"container footer-row"}>
<div className="brand">{site.name.toUpperCase()}</div>
<div>© 2026 {site.name} · Video Editor &amp; Creative Producer</div>
</div>
</footer>); }
export function FloatingBuddy() { return (<div className={"float-buddy"} id={"floatBuddy"}>
<a className={"float-avatar"} href={site.contact.upwork} target="_blank" rel="noopener noreferrer" aria-label={`Contact ${site.name} on Upwork`}>
<img src={imageSource("profile-hero.jpg")} alt={personalize("Jaspal")} />
</a>
<div className={"float-msg"} id={"floatMsg"}>{"Still with me? 👀"}</div>
</div>); }
