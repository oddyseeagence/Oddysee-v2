import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const hostGrotesk = localFont({
  src: [
    {
      path: "../../public/images/font/Host_Grotesk/HostGrotesk-VariableFont_wght.ttf",
      weight: "300 800",
      style: "normal",
    },
    {
      path: "../../public/images/font/Host_Grotesk/HostGrotesk-Italic-VariableFont_wght.ttf",
      weight: "300 800",
      style: "italic",
    },
  ],
  variable: "--font-host-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oddysee",
  description:
    "Oddysee crée des écosystèmes digitaux performants pour aider les entreprises à attirer, convertir et accélérer leur croissance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={hostGrotesk.variable + " dark h-full antialiased"}
    >
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground"
      >
        {children}
      </body>
    </html>
  );
}
