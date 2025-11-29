import React from "react";

function About() {
  return (
    <div style={{ padding: "2.5rem", maxWidth: 1100, margin: "0 auto" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: 18,
          fontSize: 32,
          fontWeight: 700,
          color: "#2575fc",
        }}
      >
        About Us
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "#555",
          marginBottom: 32,
          fontSize: 18,
        }}
      >
        BSING Wears is a fashion design brand specializing in male and female
        clothing, with a school for aspiring designers. Our mission is to blend
        creativity, quality, and education for the next generation of fashion
        leaders.
      </p>
      {/* Divider */}
      <div
        style={{
          width: "100vw",
          height: 10,
          background: "linear-gradient(90deg, #e0e7ff 0%, #fff 100%)",
          margin: "0 0 24px 0",
        }}
      />
      <h3
        style={{
          textAlign: "center",
          marginBottom: 32,
          fontWeight: 700,
          fontSize: 24,
          color: "#2575fc",
        }}
      >
        Meet Our Team
      </h3>
      <div
        className="about-team"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 32,
          justifyContent: "center",
          alignItems: "stretch",
        }}
      >
        {/* CEO/Founder */}
        <div
          style={{
            flex: 1,
            minWidth: 260,
            maxWidth: 340,
            background: "#fff",
            borderRadius: 18,
            boxShadow: "0 4px 24px rgba(37,117,252,0.10)",
            padding: "40px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            animation: "fadeIn 1.1s",
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "#eee",
              marginBottom: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              color: "#bbb",
            }}
          >
            {/* Upload photo here */}
            <span role="img" aria-label="CEO">
              👩‍💼
            </span>
          </div>
          <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
            BSING OGUMA
          </h4>
          <p style={{ color: "#222", fontWeight: 600, marginBottom: 6 }}>
            CEO / Founder
          </p>
          <p style={{ color: "#555", fontSize: 16, textAlign: "center" }}>
            A passionate fashion designer with exceptional customer service
            qualities. BSING OGUMA leads with vision, creativity, and a
            commitment to making every client feel unique and valued.
          </p>
        </div>
        {/* Leather Maker */}
        <div
          style={{
            flex: 1,
            minWidth: 260,
            maxWidth: 340,
            background: "#fff",
            borderRadius: 18,
            boxShadow: "0 4px 24px rgba(37,117,252,0.10)",
            padding: "40px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            animation: "fadeIn 1.1s",
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "#eee",
              marginBottom: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              color: "#bbb",
            }}
          >
            {/* Upload photo here */}
            <span role="img" aria-label="Shoemaker">
              👞
            </span>
          </div>
          <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
            Akwe Kenni
          </h4>
          <p style={{ color: "#222", fontWeight: 600, marginBottom: 6 }}>
            Kenni Leathers
          </p>
          <p style={{ color: "#555", fontSize: 16, textAlign: "center" }}>
            Professional leather shoe maker, bringing craftsmanship and
            innovation to BSING Wears. A key contributor to the team’s creative
            spirit and product excellence.
          </p>
        </div>
        {/* Product & Developer */}
        <div
          style={{
            flex: 1,
            minWidth: 260,
            maxWidth: 340,
            background: "#fff",
            borderRadius: 18,
            boxShadow: "0 4px 24px rgba(37,117,252,0.10)",
            padding: "40px 24px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            animation: "fadeIn 1.1s",
          }}
        >
          <div
            style={{
              width: 120,
              height: 120,
              borderRadius: "50%",
              background: "#eee",
              marginBottom: 18,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              color: "#bbb",
            }}
          >
            {/* Upload photo here */}
            <span role="img" aria-label="Developer">
              💻
            </span>
          </div>
          <h4 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>
            Nathaniel Usikpedo
          </h4>
          <p style={{ color: "#222", fontWeight: 600, marginBottom: 6 }}>
            CEO Jobbridge Africa
          </p>
          <p style={{ color: "#555", fontSize: 16, textAlign: "center" }}>
            Product and developer for BSING Wears, driving technology and
            digital experience for the brand. Dedicated to innovation and
            seamless customer journeys.
          </p>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 900px) {
          .about-team {
            flex-direction: column !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}

export default About;
