import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Irzi | About Me",
  description: "About Me!"
}

export default function Layout({ children }) {
    return(
        <div className={`min-h-screen relative scroll-smooth`}>
          <Navbar isHomePage={false} />
          {children}
        </div>
    )

}