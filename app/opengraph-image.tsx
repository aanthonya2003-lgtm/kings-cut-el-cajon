import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "King's Cut — El Cajon's Premier Barbershop";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
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
          background:
            "radial-gradient(ellipse at 20% 30%, #1a1209 0%, #0a0a0a 70%)",
          color: "#F0EDE6",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Top */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 18,
            letterSpacing: 8,
            textTransform: "uppercase",
            color: "#C8A227",
          }}
        >
          <div>King&apos;s Cut</div>
          <div>El Cajon · Est. 2007</div>
        </div>

        {/* Center */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 130,
              lineHeight: 1.02,
              letterSpacing: -2,
              color: "#F0EDE6",
              display: "flex",
            }}
          >
            Your Cut.
          </div>
          <div
            style={{
              fontSize: 130,
              lineHeight: 1.02,
              letterSpacing: -2,
              fontStyle: "italic",
              color: "#C8A227",
              display: "flex",
            }}
          >
            Your Crown.
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "#F0EDE6",
            opacity: 0.85,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div>729 Jamacha Rd · El Cajon, CA</div>
            <div style={{ color: "#C8A227" }}>(619) 334-6665</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: 18,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#C8A227",
            }}
          >
            18 Years · 4.1★ Yelp
          </div>
        </div>

        {/* Hairline */}
        <div
          style={{
            position: "absolute",
            left: 80,
            right: 80,
            top: 130,
            height: 1,
            background:
              "linear-gradient(90deg, transparent, #C8A227, transparent)",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
