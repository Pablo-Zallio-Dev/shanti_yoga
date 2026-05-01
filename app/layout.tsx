import { NavBar } from "@/components/ui/navbar/NavBar";
import "./globals.css";
import { Montserrat, Lora, Story_Script } from 'next/font/google'
import { BtnPrimary } from "@/components/ui/buttons/BtnPrimary";
import { BtnRound } from "@/components/ui/buttons/BtnRound";


const montserrat = Montserrat({
      subsets: ['latin'],
      variable: '--font-montserrat'
})

const lora = Lora({
      subsets: ['latin'],
      variable: '--font-lora'
})

const storyScript = Story_Script({
      weight: '400',
      subsets: ['latin'],
      variable: '--font-storyScript'
})




export default function RootLayout({
      children,
}: Readonly<{
      children: React.ReactNode;
}>) {
      return (
            <html lang="en" className={`  ${montserrat.variable} ${lora.variable} ${storyScript.variable} scroll-smooth `}>
                  <body className=" py-3 px-5 md:px-12 xl:px-25 2xl:px-50 lg:py-8 md:bg-[url(/images/background_desktop.png)] bg-size-[100%] bg-repeat ">
                        <header className=" ">
                              <NavBar />
                        </header>
                        <main className=" pt-20  ">
                        {children}
                        </main>
                  </body>
            </html>
      );
}
