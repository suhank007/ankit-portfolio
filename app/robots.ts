import type { MetadataRoute } from "next";

const siteUrl = "https://ankit-portfolio-suhank007s-projects.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
