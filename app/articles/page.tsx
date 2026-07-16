import type { Metadata } from "next";
import { ComingSoon } from "@/components/ui/coming-soon";

export const metadata: Metadata = {
  title: "Articles, Ankit Parihar",
};

export default function ArticlesPage() {
  return (
    <ComingSoon
      eyebrow="Thoughts"
      title="Writing on data strategy, BI, and AI is coming soon."
      description="A magazine-style archive of essays on Power BI, Microsoft Fabric, PLM, data governance, and AI automation will live here. Subscribe by reaching out and I'll notify you at launch."
    />
  );
}
