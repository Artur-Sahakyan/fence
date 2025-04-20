import "react-datepicker/dist/react-datepicker.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Montserrat } from "next/font/google";
import Layout from "@/components/layout";
import "@/styles/globals.css";
import "@/styles/common.css";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

const metaTitle =
  "SecureFence Installations | Custom Residential & Commercial Fencing";
const metaDescription =
  "Enhance your property’s privacy, safety, and curb appeal with professionally installed fences. Serving homes and businesses with wood, vinyl, and metal options.";

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: metaTitle,
  description: metaDescription,
  keywords: [
    "vinyl fence",
    "fencing",
    "fence company near me",
    "aluminium fence",
    "rolling gate",
    "picket fence",
    "privacy fence",
    "pro vinyl fencing",
    "vinyl fence depot",
    "gng",
    "pacific vinyl",
    "k star vinyl",
    "alumission",
    "globusgates"
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/images/favicons/180x180.png",
    other: [
      { rel: "icon", url: "/images/favicons/16x16.png", sizes: "16x16" },
      { rel: "icon", url: "/images/favicons/32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/images/favicons/120x120.png", sizes: "120x120" },
      { rel: "icon", url: "/images/favicons/144x144.png", sizes: "144x144" },
      { rel: "icon", url: "/images/favicons/180x180.png", sizes: "180x180" },
      { rel: "icon", url: "/images/favicons/192x192.png", sizes: "192x192" },
      { rel: "icon", url: "/images/favicons/512x512.png", sizes: "512x512" },
    ],
  },
  // openGraph: {
  //   title: metaTitle,
  //   description: metaDescription,
  //   url: process.env.NEXT_PUBLIC_WEBSITE_URL,
  //   siteName: "SecureFence Installations",
  //   images: [
  //     {
  //       url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/images/og.jpg`,
  //       alt: "SecureFence backyard fencing project",
  //       width: 800,
  //       height: 600,
  //     },
  //   ],
  //   type: "website",
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Layout>
          {children}
          <ToastContainer />
        </Layout>
      </body>
    </html>
  );
}
