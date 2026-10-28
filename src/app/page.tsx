import { SiteHeader, SiteFooter, FloatingBuddy } from '@/components/site-chrome';
import { PortfolioEffects } from '@/components/portfolio-effects';
import { MobileNav } from '@/components/mobile-nav';
import { HomeSection } from '@/components/sections/home';
import { Feature1Section } from '@/components/sections/feature-1';
import { AboutSection } from '@/components/sections/about';
import { WorkSection } from '@/components/sections/work';
import { ServicesSection } from '@/components/sections/services';
import { SkillsSection } from '@/components/sections/skills';
import { AiToolsSection } from '@/components/sections/ai-tools';
import { LocationSection } from '@/components/sections/location';
import { PackagesSection } from '@/components/sections/packages';
import { QuizSection } from '@/components/sections/quiz';
import { ContactSection } from '@/components/sections/contact';
import { BrandsSection } from '@/components/sections/brands';
export default function Home() { return <><a className="skip-link" href="#home">Skip to content</a><div className="noise" aria-hidden="true" /><SiteHeader /><MobileNav /><main><HomeSection /><Feature1Section /><AboutSection /><WorkSection /><ServicesSection /><SkillsSection /><AiToolsSection /><LocationSection /><PackagesSection /><QuizSection /><ContactSection /><BrandsSection /></main><SiteFooter /><FloatingBuddy /><PortfolioEffects /></>; }
