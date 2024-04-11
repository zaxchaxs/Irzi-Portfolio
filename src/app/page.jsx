'use client'
import AboutMeSection from '@/components/Sections/aboutMeSection';
import HomeSection from '@/components/Sections/homeSection';
import ReactFullpage from '@fullpage/react-fullpage';
import { Lexend_Deca } from 'next/font/google';

const lexendDeca = Lexend_Deca({
    weight: "800",
    subsets: ["latin"],
    display: "swap",
})

const MyPage = () => {
	const fullpageOptions = {
		anchors: ["home", "about", "projects", "contact"],
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
							<AboutMeSection fontLexend={lexendDeca.className} />
						</div>
					</ReactFullpage.Wrapper>
				)}
				{...fullpageOptions}
			/>
		</div>
	);
};

export default MyPage;


// export default function Home() {

//     return(
//         <>
//             <HomeSection fontLexend={lexendDeca.className} />
//             <AboutMeSection fontLexend={lexendDeca.className} />
//         </>
//     )
// }