import AboutMeSection from '@/components/Sections/aboutMeSection';
import HomeSection from '@/components/Sections/homeSection';
import { Lexend_Deca } from 'next/font/google';

const lexendDeca = Lexend_Deca({
    weight: "800",
    subsets: ["latin"],
    display: "swap",
})

export default function Home() {

    return(
        <>
            <HomeSection fontLexend={lexendDeca.className} />
            <AboutMeSection fontLexend={lexendDeca.className} />
        </>
    )
}