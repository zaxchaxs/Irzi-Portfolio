import { Jost } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const jost = Jost({
  weight: "400",
  subsets: ["cyrillic"],
  display: "swap",
});

export const metadata = {
  title: "Irzi Rahmatullah",
  description: "Irzi Rahmatullah portfolio",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-gray-200  " + jost.className}>
        <div className='min-h-screen relative'>
          <Navbar isHomePage={true} />
          {children}
        </div>
      </body>
    </html>
  );
}
