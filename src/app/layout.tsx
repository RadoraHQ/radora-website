import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radora",
  description: "Building trust. Creating innovation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
