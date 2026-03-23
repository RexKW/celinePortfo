import type { Metadata } from "next";
import { Grenze_Gotisch, Pirata_One } from "next/font/google";
import "./globals.css";

export const grenzeGotisch = Grenze_Gotisch({
  variable: "--font-grenze-gotisch",
  subsets: ["latin"],
});

export const pirataOne = Pirata_One({
  variable: "--font-pirata-one",
  weight: "400",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Celine's Portfolio",
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
