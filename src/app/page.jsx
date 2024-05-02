'use client'
// Components
import HomeSection from '@/components/Sections/homeSection';
import AboutMeSection from '@/components/Sections/aboutMeSection';
import ProjectsSection from '@/components/Sections/projectsSection';
import ContactSection from '@/components/Sections/contactSection';
import { Lexend_Deca } from 'next/font/google';

// framework
import ReactFullpage from '@fullpage/react-fullpage';

const lexendDeca = Lexend_Deca({
    weight: "800",
    subsets: ["latin"],
    display: "swap",
})

export default function HomePage() {
	const fullpageOptions = {
		anchors: ["home", "about", "projects", "contacts"],
		scrollingSpeed: 1000,
		licenseKey: "gplv3-license",
		menu: "#sidebar",
		lockAnchors: false,
	};

	return (
		<div>
			<ReactFullpage
				render={({ state, fullpageApi }) => (
					<ReactFullpage.Wrapper>
						<div className="section">
                            <HomeSection fontLexend={lexendDeca.className} />
						</div>
						<div className="section">
                            <AboutMeSection fontLexend={lexendDeca.className} />
						</div>
						<div className='section'>
							{/* <AboutMeSection fontLexend={lexendDeca.className} /> */}
							<ProjectsSection fontLexend={lexendDeca.className} />
						</div>
						<div className='section'>
							<ContactSection fontLexend={lexendDeca.className} />
						</div>
					</ReactFullpage.Wrapper>
				)}
				{...fullpageOptions}
			/>
		</div>
	);
};