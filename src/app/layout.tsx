import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./style/blog.css";
import "./style/header.css";
import "./globals.css";
import "./style/view.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Coderockr Front-End - Test",
  description: "Coderockr Front-End - Test",
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