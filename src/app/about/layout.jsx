import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Irzi | About Me",
  description: "About Me!"
}

export default function AboutLayout({ children }) {
    return (
      <>
        <Navbar isHomePage={false} />
        {children}
      </>
    );
}