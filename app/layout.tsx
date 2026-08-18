import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arjun Gund — Video Editor & Motion Designer",
  description: "Portfolio of Arjun Gund",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0a0a0a] text-white antialiased selection:bg-neutral-800 selection:text-white">
        {children}
      </body>
    </html>
  );
}
