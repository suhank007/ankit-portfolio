import type { MetadataRoute } from "next";

const siteUrl = "https://ankit-portfolio-suhank007s-projects.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/projects", "/resume", "/articles"];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
