import "./globals.css";
import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Victor Platform",
  description: "Home renovation management simplified — powered by Markus AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
            if (typeof lockdown !== 'undefined') {
              console.log('SES lockdown detected, disabling...');
              lockdown = undefined;
            }
          `,
        }} />
      </head>
      <body className="font-sans bg-slate-gray text-graphite antialiased">
        {children}
      </body>
    </html>
  );
}