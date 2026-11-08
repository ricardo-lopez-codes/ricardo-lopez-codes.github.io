import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ricardo Lopez | Digital Engineering Workspace",
  description: "Welcome to Ricardo Lopez's digital engineering workspace. Premium developer portfolio built with Next.js, Tailwind CSS, and WebGL Three.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased dark`}
      style={{ colorScheme: 'dark' }}
    >
      <body className="min-h-full flex flex-col bg-[#0B0B0C] text-zinc-50 relative selection:bg-[#DC143C]/30 selection:text-white">
        <main className="flex-grow flex flex-col relative">
          {children}
        </main>
      </body>
    </html>
  );
}
