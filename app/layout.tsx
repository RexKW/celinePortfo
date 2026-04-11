import type { Metadata } from "next";
import { Grenze_Gotisch, Pirata_One, Geist } from "next/font/google";
import "./globals.css";
import { grenzeGotisch, pirataOne } from "./fonts";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "Pixerunii Portfolio",
  description: "A Portfolio about Celine's Design Work",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={`${grenzeGotisch.className} ${pirataOne.className} text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
