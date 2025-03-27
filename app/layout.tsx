import type { Metadata } from "next";
import { Gantari, Lora } from "next/font/google";
import "./globals.css";
import Nav from "@/components/nav/nav";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Background from "@/components/background/background";
import RightclickMenu from "@/components/ui/rightclick-menu";
import { UIContextProvider } from "@/storage/UIcontext/UIcontext";
import HoverFooter from "@/components/hover-footer";
import NextPageButton from "@/components/nav/next-page-button";

const fontface2 = Lora({ subsets: ["latin"] });
const fontface = Gantari({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santiago Salkin | Web Dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en">
        <body className={`${fontface2.className} ${fontface.className} `}>
          <UIContextProvider>
            <RightclickMenu>
              <ThemeProvider attribute="class" defaultTheme="dark">
                <Background />
                <Nav />
                <main
                  id="content"
                  className="text-text dark:text-darkText mx-auto w-[920px] max-w-full px-5 pb-10 pt-28 mt-16"
                >
                  {children}
                </main>
                <HoverFooter />
                <NextPageButton />
              </ThemeProvider>
            </RightclickMenu>
          </UIContextProvider>
        </body>
      </html>
    </>
  );
}
