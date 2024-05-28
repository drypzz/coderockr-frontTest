import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "./style/contact.css";
import "./style/blog.css";
import "./style/header.css";
import "./globals.css";
import "./style/view.css";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#F1A10A",
  initialScale: 1,
  width: "device-width",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://coderockrtester.netlify.app"),
  title: "Coderockr Front-End Test",
  description: "Coderockr Front-End Test",
  applicationName: "Coderockr Front-End Test",
  creator: "Drypzz",
  authors: [{ name: "Drypzz Dev", url: "https://drypzz.netlify.app" }],
  generator: "NextJS",
  twitter: {
    site: "@drypzz",
    card: "summary_large_image",
    images: "favicon.ico",
  },
  openGraph: {
    title: "Coderockr Front-End Test",
    description: "Coderockr Front-End Test",
    siteName: "Coderockr Front-End Test",
    type: "website",
    url: "https://coderockrtester.netlify.app",
    images: [{ url: "favicon.ico" }],
    countryName: "Brazil",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
};