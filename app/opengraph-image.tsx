import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Phœnix Global Trade — Sourcing Chine-Afrique";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    <div
      style={{
        width: 1200,
        height: 630,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#000814",
        padding: "72px 80px",
        fontFamily: "serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent circles */}
      <div
        style={{
          position: "absolute",
          top: -120,
          right: -80,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(228,44,51,0.18) 0%, transparent 70%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -80,
          left: -60,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(10,26,49,0.9) 0%, transparent 70%)",
        }}
      />

      {/* Top: logo + wordmark */}
      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <div
          style={{
            width: 56,
            height: 56,
            background: "rgba(228,44,51,0.12)",
            border: "1.5px solid rgba(228,44,51,0.35)",
            borderRadius: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              color: "#e42c33",
              fontSize: 30,
              fontStyle: "italic",
              fontWeight: 900,
              lineHeight: 1,
            }}
          >
            Φ
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <span
            style={{
              color: "#ffffff",
              fontSize: 13,
              letterSpacing: "0.35em",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            PHŒNIX
          </span>
          <span
            style={{
              color: "rgba(255,255,255,0.35)",
              fontSize: 10,
              letterSpacing: "0.4em",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            GLOBAL TRADE
          </span>
        </div>
      </div>

      {/* Center: headline */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div
            style={{
              width: 4,
              height: 48,
              backgroundColor: "#e42c33",
              borderRadius: 2,
            }}
          />
          <span
            style={{
              color: "#e42c33",
              fontSize: 13,
              letterSpacing: "0.4em",
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Import–Export · Chine → Afrique de l'Ouest
          </span>
        </div>

        <h1
          style={{
            margin: 0,
            color: "#ffffff",
            fontSize: 72,
            fontWeight: 900,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            fontStyle: "italic",
          }}
        >
          L'ingénierie du
          <br />
          <span style={{ color: "#e42c33" }}>sourcing</span> de demain.
        </h1>
      </div>

      {/* Bottom: trust signals */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 40,
          paddingTop: 32,
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {[
          { dot: "#e42c33", text: "Délai moyen : 35–45 jours" },
          { dot: "#4ade80", text: "Devis gratuit sous 48h" },
          { dot: "rgba(255,255,255,0.4)", text: "Paiement sécurisé escrow" },
        ].map(({ dot, text }) => (
          <div
            key={text}
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: dot,
              }}
            />
            <span
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: 12,
                letterSpacing: "0.25em",
                fontWeight: 700,
                textTransform: "uppercase",
              }}
            >
              {text}
            </span>
          </div>
        ))}

        <div style={{ flex: 1 }} />

        <span
          style={{
            color: "rgba(255,255,255,0.15)",
            fontSize: 12,
            letterSpacing: "0.25em",
            fontWeight: 700,
            textTransform: "uppercase",
          }}
        >
          phoenixglobaltrade.com
        </span>
      </div>
    </div>,
    { ...size },
  );
}
