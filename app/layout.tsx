import "./globals.css";
import { DM_Mono, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["300", "400"],
  style: ["normal", "italic"],
  variable: "--font-dm-mono",
});

export const metadata = {
  title: "Kushtrim Marke — Senior Frontend Engineer",
  description:
    "Senior Frontend Engineer with 5+ years building production React and Next.js applications across real estate, edtech, SaaS, and e-commerce.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmMono.variable} !scroll-smooth`}
    >
      <head>
        <script
          defer
          src="/stats/script.js"
          data-website-id="53976bca-38e4-44c9-9120-90aafa6f969a"
        ></script>
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "s1wypzbegp");
            `,
          }}
        />
      </head>
      <body className="font-body bg-[var(--paper)] text-[var(--ink)] antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
