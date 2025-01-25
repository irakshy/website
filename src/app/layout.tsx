import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { AuroraBackground } from "@/components/aceternityui/aurora-background";
import { BackgroundBeamsWithCollision } from "@/components/aceternityui/background-beams-with-collision";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen  bg-background font-sans antialiased dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="dark">
          {/* <AuroraBackground className="h-screen  w-full  fixed top-0  max-h-screen  ">
            <></>
          </AuroraBackground> */}
          <BackgroundBeamsWithCollision className="h-screen  w-full  fixed top-0 max-h-[99svh]  ">
            <></>
          </BackgroundBeamsWithCollision>
          <div className=" max-w-3xl mx-auto py-12  sm:py-24 px-6 h-full overflow-auto">
            <TooltipProvider delayDuration={0}>
              {children}
              <Navbar />
            </TooltipProvider>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
