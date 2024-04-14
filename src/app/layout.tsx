import type { Metadata } from "next";
import Script from 'next/script'
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <Script id="theme_mode_toggle">
        
        {/* {`


          // implement custome theme toggle 
          
          console.log({m: localStorage.theme})
          // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          //   document.documentElement.classList.add('dark')
          // } else {
          //   document.documentElement.classList.remove('dark')
          // }
          
          // // Whenever the user explicitly chooses light mode
          // localStorage.theme = 'light'
          
          // // Whenever the user explicitly chooses dark mode
          localStorage.theme = 'dark'
          document.documentElement.classList.add('dark')

          
        `} */}
      </Script>
      </head>
      <body className={inter.className}>
        <div className="w-full h-full min-h-screen bg-light-gray dark:bg-charcoal">
          <main className="max-w-[900px] mx-auto p-2">{children}</main>
        </div>
      </body>
    </html>
  );
}
