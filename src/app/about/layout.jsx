import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Irzi | About Me",
  description: "About Me!"
}

export default function Layout({ children }) {
    return(
        <div className={`min-h-screen relative `}>
          <Navbar isHomePage={false} />
          {children}
        </div>
    )

}