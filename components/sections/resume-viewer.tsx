"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, Printer } from "lucide-react";
import { profile, certifications } from "@/lib/data";
import { Reveal } from "@/components/ui/reveal";

export function ResumeViewer() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  function handlePrint() {
    const win = iframeRef.current?.contentWindow;
    if (win) {
      win.focus();
      win.print();
    }
  }

  return (
    <section className="px-6 pt-32 pb-24 md:px-10">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Resume</p>
          <h1 className="mt-4 max-w-2xl text-balance font-sans font-semibold tracking-tight text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] text-foreground">
            9 years turning enterprise data into decisions.
          </h1>
        </Reveal>

        <Reveal index={1}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={profile.resumeUrl}
              download

              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background"
            >
              <Download className="h-4 w-4" strokeWidth={1.5} />
              Download Resume
            </a>
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"

              className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
              Open in New Tab
            </a>
            <button
              type="button"
              onClick={handlePrint}

              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-border px-6 py-3 text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <Printer className="h-4 w-4" strokeWidth={1.5} />
              Print Resume
            </button>
          </div>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 overflow-hidden rounded-3xl border border-border bg-surface"
        >
          <iframe
            ref={iframeRef}
            src={`${profile.resumeUrl}#toolbar=0`}
            title="Ankit Parihar, Resume preview"
            className="h-[80vh] w-full"
          />
        </motion.div>

        <Reveal index={2}>
          <div className="mt-16">
            <p className="text-xs uppercase tracking-[0.25em] text-muted">Certifications</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {certifications.map((cert) =>
                cert.verifyUrl ? (
                  <a
                    key={cert.name}
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noreferrer"

                    className="rounded-2xl border border-border bg-surface px-5 py-4 text-sm transition-colors hover:border-accent"
                  >
                    <p className="font-medium text-foreground">{cert.name}</p>
                    <p className="mt-1 text-xs text-muted">
                      {cert.issuer}
                      {cert.date ? ` · ${cert.date}` : ""}
                    </p>
                  </a>
                ) : (
                  <div
                    key={cert.name}
                    className="rounded-2xl border border-border bg-surface px-5 py-4 text-sm"
                  >
                    <p className="font-medium text-foreground">{cert.name}</p>
                    <p className="mt-1 text-xs text-muted">{cert.issuer}</p>
                  </div>
                )
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
