import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundLines } from "@/components/ui/background-lines";

// Import Google Fonts (Geist Sans and Geist Mono)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Darwin Koirala",
  description: "This is Darwin`s potfolio website",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-hidden">
      <head>
        <title>Darwin Koirala</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50`}
      >
        <BackgroundLines svgOptions={{ duration: 5 }} className="bg-black"> 
          <div className="flex md:hidden bg-black items-center justify-center h-[100vh]">
            <h1 className="text-white font-bold text-2xl text-center">
              Please visit using your Laptop or Computer
            </h1>
          </div>
          <div className="hidden md:block">
            <nav className="w-full text-white flex justify-center items-center bg-black z-11 max-h-fit">
              <ul className="flex w-fit space-x-8 bg-[#191919] z-11 p-2.5 rounded-xl mt-10 ">
                <li className="group">
                  <a
                    href="/"
                    className="text-white hover:text-gray-300 transition-colors text-lg font-medium tracking-widest px-4 py-2 rounded-md group-hover:bg-gray-800"
                  >
                    Home
                  </a>
                </li>
                <li className="group">
                  <a
                    href="/projects"
                    className="text-white hover:text-gray-300 transition-colors text-lg font-medium tracking-widest px-4 py-2 rounded-md group-hover:bg-gray-800"
                  >
                    Projects
                  </a>
                </li>
                <li className="group">
                  <a
                    href="/contact"
                    className="text-white hover:text-gray-300 transition-colors text-lg font-medium tracking-widest px-4 py-2 rounded-md group-hover:bg-gray-800"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>

            <main>{children}</main>
          </div>
        </BackgroundLines>
      </body>
    </html>
  );
}
