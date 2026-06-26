export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://jbtsolutions.vercel.app/sitemap.xml",
    host: "https://jbtsolutions.vercel.app",
  };
}
