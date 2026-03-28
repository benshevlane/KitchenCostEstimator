import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kitchen Cost Estimator — Free Renovation Cost Calculator",
};

const webAppJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Kitchen Cost Estimator",
  description:
    "Free online kitchen renovation cost calculator for UK, US, and Canada",
  url: "https://kitchencostestimator.com",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "GBP",
  },

};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a kitchen renovation cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A kitchen renovation typically costs between £5,000 and £30,000 in the UK, $15,000 to $75,000 in the US, or CA$20,000 to CA$80,000 in Canada. The final price depends on kitchen size, material choices, appliance quality, and whether you hire professionals or DIY.",
      },
    },
    {
      "@type": "Question",
      name: "What is the biggest cost in a kitchen renovation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Kitchen units and cabinetry are typically the largest expense, accounting for 30-40% of the total budget. Custom or semi-custom cabinets can cost significantly more than flat-pack options. Worktops are the second largest cost, especially if you choose natural stone like granite or marble.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a kitchen renovation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A straightforward kitchen renovation takes 4-8 weeks on average. A simple refresh with new doors and worktops might take 2-3 weeks, while a full gut renovation involving layout changes can take 10-16 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Can I renovate a kitchen on a tight budget?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Focus on cosmetic updates like repainting cabinets, replacing doors and handles, fitting new worktops, and upgrading lighting. Keep the existing layout to avoid plumbing and electrical costs.",
      },
    },
    {
      "@type": "Question",
      name: "Is it cheaper to DIY a kitchen installation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "DIY installation can save 20-40% on labour costs, but only if you have the skills. Gas and certain electrical work must legally be done by certified professionals in the UK. A common middle ground is to install units yourself and hire trades for plumbing, gas, and electrics.",
      },
    },
    {
      "@type": "Question",
      name: "How accurate is this kitchen cost estimator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our estimates are based on 2025-2026 pricing data from trusted UK, US, and Canadian sources. We provide low, mid, and high ranges to reflect market variation. While no online estimator can replace a detailed quote, our tool gives you a reliable ballpark figure.",
      },
    },
    {
      "@type": "Question",
      name: "What worktop material offers the best value?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Laminate worktops offer the best value, starting from around £20-40 per linear metre. For a mid-range option, quartz offers excellent durability and low maintenance at £200-500 per m². Granite and marble are premium choices.",
      },
    },
    {
      "@type": "Question",
      name: "Should I get a kitchen from IKEA or a specialist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "IKEA kitchens offer excellent value with good quality for the price. Specialist kitchen companies offer more customisation, better build quality, and professional design services. For complex layouts or high-end finishes, a specialist is usually worth the extra investment.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-CJFMCKDFJG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-CJFMCKDFJG');
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="ph7dqTOpebfvbQ8enZ8Nuw"
          async
        />
      </head>
      <body className="min-h-screen bg-light-bg antialiased">
        {children}
      </body>
    </html>
  );
}
