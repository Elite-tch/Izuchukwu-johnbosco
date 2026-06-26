export default function sitemap() {
  const url = "https://jbtsolutions.vercel.app";

  return [
    {
      url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
