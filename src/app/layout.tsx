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
  title: "Crevix — Modern Creative Agency & Digital Studio",
  description:
    "We create strategic design and development solutions that elevate brands and drive scalable digital growth effectively.",
  icons: {
    icon: "/seo/favicon.svg",
  },
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
