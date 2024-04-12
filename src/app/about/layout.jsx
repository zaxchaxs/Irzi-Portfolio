import Navbar from "@/components/Navbar";

export default function Layout({ children }) {
    return(
        <>
            <Navbar isHomePage={false} />
            {children}
        </>
    )

}