import "@/app/globals.css";
import Aside from "@/components/aside";
import type { Metadata } from "next";
import { Prompt } from "next/font/google";
const prompt = Prompt({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
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
    <html lang="pt-br" className={prompt.className}>
      <body>
        <div className="my-14 container flex gap-7 h-screen">
          <Aside />
          {children}
        </div>
      </body>
    </html>
  );
}
