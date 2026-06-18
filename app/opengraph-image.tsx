import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "William Schulz — Developer, Designer, Creative, Founder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          background: "#0a0a0a",
          padding: "96px",
        }}
      >
        <div
          style={{
            fontSize: 30,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#888888",
            marginBottom: 32,
          }}
        >
          Portfolio
        </div>
        <div
          style={{
            fontSize: 130,
            fontStyle: "italic",
            color: "#f5f5f5",
            lineHeight: 1.0,
          }}
        >
          William Schulz
        </div>
        <div
          style={{
            fontSize: 38,
            color: "#888888",
            marginTop: 40,
          }}
        >
          Developer · Designer · Creative · Founder
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 10,
            background: "linear-gradient(90deg, #2563eb, #9333ea, #ec4899)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
