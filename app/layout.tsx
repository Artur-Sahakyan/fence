// ✅ app/layout.tsx (SEO Optimized Root Layout)
import Script from "next/script";
import { ToastContainer } from "react-toastify";
import Layout from "@/components/layout";
import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import "@/styles/common.css";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "SecureFence | Vinyl & Privacy Fence Installation in Los Angeles",
  description:
    "Affordable vinyl, privacy, picket, aluminum, and rolling gate fence installation services in Los Angeles.",
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
    icon: "/favicon.ico"
  },
  openGraph: {
    title: "SecureFence | Vinyl & Privacy Fence Installation in Los Angeles",
    description:
      "Affordable vinyl, privacy, picket, aluminum, and rolling gate fence installation services in Los Angeles.",
    url: "https://secfences.com",
    siteName: "SecureFence",
    images: [
      {
        url: "https://secfences.com/images/banner.png",
        width: 1200,
        height: 630,
        alt: "SecureFence preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SecureFence | Vinyl & Privacy Fence Installation in Los Angeles",
    description:
      "Affordable vinyl, privacy, picket, aluminum, and rolling gate fence installation services in Los Angeles.",
    images: ["https://secfences.com/images/banner.png"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WR9Z8V707Q"
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-WR9Z8V707Q', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <Layout>
          {children}
          <ToastContainer />
        </Layout>
      </body>
    </html>
  );
}
