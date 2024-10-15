import "@/app/globals.css";
import Aside from "@/components/aside";
import Header from "@/components/header";
import type { Metadata } from "next";
import { Prompt, JetBrains_Mono } from "next/font/google";
const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-prompt",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Code Connect",
  description: "Uma rede social para devs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${prompt.variable} ${jetBrainsMono.variable}`}
    >
      <body className="my-14 container md:px-[3.75rem] xl:px-0 min-h-screen font-sans">
        <Header />
        <div className="lg:flex lg:gap-7 min-h-dvh">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
