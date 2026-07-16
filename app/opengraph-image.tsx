import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#0a0a0c",
          color: "#f4f4f5",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#5b7cfa" }} />
          <div style={{ fontSize: 24, color: "#a1a1aa", letterSpacing: 4, textTransform: "uppercase" }}>
            Paris, France · 9+ Years Experience
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2, lineHeight: 1.1 }}>
            Ankit Parihar
          </div>
          <div style={{ fontSize: 36, color: "#5b7cfa", marginTop: 20, fontWeight: 600 }}>
            Business Data &amp; AI Consultant
          </div>
          <div style={{ fontSize: 26, color: "#a1a1aa", marginTop: 24, maxWidth: 820 }}>
            Enterprise BI, PLM data strategy and AI-enabled reporting for
            organizations that can&apos;t afford to guess.
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
