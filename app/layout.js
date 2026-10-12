import "./globals.css";

const siteUrl = "https://jbtsolutions.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Izuchukwu Johnbosco | Software Developer",
    template: "%s | Izuchukwu Johnbosco",
  },
  description:
    "Izuchukwu Johnbosco is a full-stack developer building modern web applications and digital products with a focus on performance, usability, and clean engineering.",
  keywords:
    "Izuchukwu Johnbosco, full-stack developer, web developer, Next.js developer, React developer, backend developer, software engineer, portfolio",
  applicationName: "Izuchukwu Johnbosco Portfolio",
  authors: [{ name: "Izuchukwu Johnbosco", url: siteUrl }],
  creator: "Izuchukwu Johnbosco",
  publisher: "Izuchukwu Johnbosco",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Izuchukwu Johnbosco | Software Developer",
    description:
      "Full-stack developer building high-performance web applications, backend services, and thoughtful digital products.",
    url: siteUrl,
    siteName: "Izuchukwu Johnbosco",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Izuchukwu Johnbosco | Software Developer",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Izuchukwu Johnbosco | Software Developer",
    description:
      "Full-stack web development services tailored for modern businesses.",
    creator: "@JBTechSolutions",
    images: ["/logo1.png"],
  },
  icons: {
    icon: "/logo1.png",
    shortcut: "/logo1.png",
    apple: "/logo1.png",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Izuchukwu Johnbosco",
    url: siteUrl,
    image: `${siteUrl}/logo1.png`,
    jobTitle: "Software Developer",
    sameAs: [
      "https://github.com/Elite-tch",
      "https://www.linkedin.com/in/izuchukwu-johnbosco-364657323",
      "https://x.com/IzuchukwuJ99034",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Full-Stack Development",
      "Backend Development",
      "API Integration",
      "Database Design",
    ],
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
