import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "DevUnity",
  description:
    "DevUnity Team: A dedicated group of developers, designers, and tech enthusiasts united by a shared vision of creating innovative solutions for the developer community. Our team combines expertise in mobile development, backend systems, UI/UX design, and project management to build impactful, user-focused applications. With collaboration, creativity, and a passion for excellence, the DevUnity Team strives to push the boundaries of technology and foster a supportive environment for developers globally.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <link rel="icon" href="/logo.png" />
      <body>
        <Navbar />
        <main className="container pb-[50px]">{children}</main>
      </body>
    </html>
  );
}
