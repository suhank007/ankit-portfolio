import type { Metadata } from "next";
import { ResumeViewer } from "@/components/sections/resume-viewer";

export const metadata: Metadata = {
  title: "Resume, Ankit Parihar",
};

export default function ResumePage() {
  return <ResumeViewer />;
}
