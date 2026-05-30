import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Open_Sans } from "next/font/google";



export const metadata: Metadata = {
  title: 'Om Pappu Pan - Authentic & Gourmet Indian Pan',
  description: 'Experience the rich flavors of traditional and innovative Pan at Om Pappu Pan. Handcrafted with premium ingredients for an unforgettable taste. Order now!',
  keywords: ["Om Pappu Pan, Indian Pan, Betel Leaf, Meetha Pan, Fire Pan, Chocolate Pan, Gourmet Pan, Traditional Pan, Pan Shop, Catering"],
  openGraph: {
    "title": "Om Pappu Pan - Authentic & Gourmet Indian Pan",
    "description": "Experience the rich flavors of traditional and innovative Pan at Om Pappu Pan. Handcrafted with premium ingredients for an unforgettable taste. Order now!",
    "url": "https://www.ompappupan.com",
    "siteName": "Om Pappu Pan",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/bowls-malaysian-cendol-dessert_53876-30707.jpg",
        "alt": "Om Pappu Pan Main Image"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Om Pappu Pan - Authentic & Gourmet Indian Pan",
    "description": "Experience the rich flavors of traditional and innovative Pan at Om Pappu Pan. Handcrafted with premium ingredients for an unforgettable taste. Order now!",
    "images": [
      "http://img.b2bpic.net/free-photo/bowls-malaysian-cendol-dessert_53876-30707.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${openSans.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
