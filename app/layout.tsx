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
  metadataBase: new URL("https://riseafternest.com"),
  title: "Rise After Nest | Doug & Tara's Next Adventure",
  description: "Travel stories, honest advice, and new adventures with Doug and Tara Markott.",
  openGraph: {
    title: "Rise After Nest",
    description: "The nest is empty. The itinerary isn’t.",
    url: "https://riseafternest.com",
    siteName: "Rise After Nest",
    images: [{ url: "/og.png", width: 1792, height: 1024, alt: "Rise After Nest — The nest is empty. The itinerary isn’t." }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rise After Nest",
    description: "The nest is empty. The itinerary isn’t.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
