'use client'
import 'bootstrap/dist/css/bootstrap.min.css';
import PrimaryNavigation from "@/views/components/primary-nav";
import PortfolioLayout from "@/views/layouts/portfolio";
import PortfolioNav from '@/views/components/portfolio_nav';
import Intro from '@/views/sections/page_sections/intro';
import AboutMe from '@/views/sections/page_sections/about';
import Education from '@/views/sections/page_sections/education';
import Skills from '@/views/sections/page_sections/skill';
import Experience from '@/views/sections/page_sections/experience';
import Projects from '@/views/sections/page_sections/projects';
import Contact from '@/views/sections/page_sections/contact';

export default function Home() {
	return(
		<PortfolioLayout 
			primaryNavigation={<PrimaryNavigation/>}
			mainContent={
				<>
					<PortfolioNav/>
					<Intro/>
					<AboutMe/>
					<Education/>
					<Skills/>
					<Experience/>
					<Projects/>
					<Contact/>
				</>
			}
		/>
	);
}