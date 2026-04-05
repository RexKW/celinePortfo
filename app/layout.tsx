import type { Metadata } from "next";
import { Grenze_Gotisch, Pirata_One } from "next/font/google";
import "./globals.css";
import { grenzeGotisch, pirataOne } from "./fonts";


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
    <html lang="en">
      <body
        className={`${grenzeGotisch.className} ${pirataOne.className} text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
