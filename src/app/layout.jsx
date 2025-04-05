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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-gray-200 scroll-smooth " + jost.className}>
        <div className='min-h-screen relative'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
