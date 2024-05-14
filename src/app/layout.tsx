import type { Metadata } from "next";
import "./globals.css";
//import { Roboto } from "next/font/google";
import { FixedPlugin, Layout } from "@/components";
//import { FacebookMsg } from "./FacebookMsg";

/**const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
  display: "swap",
});**/

export const metadata: Metadata = {
  title: "Hurricane Massage & SPA",
  description:
    "Introducing Tailwind Event Landing Page, a dynamic and visually appealing landing page template designed using Tailwind CSS and Material Tailwind.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          data-site="https://hurricane-massage.vercel.app/"
          src="https://api.nepcha.com/js/nepcha-analytics.js"
        ></script>
        <link rel="shortcut icon" href="/logos/hurricane-logo-final.ico"/>
      </head>
      <body> 
        <Layout>
          {children}
          <FixedPlugin />
        </Layout>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

      </body>
    </html>
  );
}
