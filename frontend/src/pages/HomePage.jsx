import Testimonials from "../components/Testimonials";
import React, { useState, useEffect } from "react";
import FeaturedProducts from "../components/FeaturedProducts";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import entrance from "../assets/image-entrance.jpeg";
import entranceLogo from "../assets/image-entrance-logo.jpeg";
import team from "../assets/image-team.jpeg";

function HomePage() {
  const [current, setCurrent] = useState(0);
  const heroImages = [entrance, entranceLogo, team];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroImages.length]);
  // Import mobile CSS
  React.useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/src/pages/HomePage.mobile.css";
    link.id = "mobile-hero-css";
    document.head.appendChild(link);
    return () => {
      const el = document.getElementById("mobile-hero-css");
      if (el) document.head.removeChild(el);
    };
  }, []);
  return (
    <div style={{ textAlign: "center", padding: 0, margin: 0 }}>
      {/* Hero Section with overlay gradient and fade-in animation */}
      <div
        className="hero-section"
        style={{
          width: "100vw",
          minHeight: 300,
          maxHeight: 450,
          height: "40vw",
          margin: "0",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(90deg, #fff 0%, #e0e7ff 100%)",
          overflow: "hidden",
          position: "relative",
          animation: "fadeIn 1.2s",
        }}
      >
        <img
          src={heroImages[current]}
          alt={`Hero ${current + 1}`}
          style={{
            width: "100%",
            height: "100%",
            minHeight: 300,
            maxHeight: 450,
            objectFit: "cover",
            objectPosition: "center center",
            background: "transparent",
            display: "block",
            margin: 0,
            padding: 0,
            transition: "all 0.3s",
          }}
        />
        {/* Overlay gradient for text readability */}
        <div
          className="hero-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(180deg, rgba(37,117,252,0.18) 0%, rgba(255,255,255,0.68) 100%)",
            zIndex: 1,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            className="hero-text-container"
            style={{
              background: "rgba(255,255,255,0.82)",
              padding: "2rem 1rem 1.5rem 1rem",
              boxShadow: "0 4px 24px rgba(0,0,0,0.12)",
              maxWidth: 520,
              width: "90vw",
              textAlign: "center",
            }}
          >
            <h1
              style={{
                fontSize: 38,
                fontWeight: 800,
                marginBottom: 16,
                wordBreak: "break-word",
                lineHeight: 1.12,
                color: "#2575fc",
                letterSpacing: "-1px",
              }}
            >
              Welcome to Bsing Wears
            </h1>
            <p
              style={{
                fontSize: 20,
                color: "#222",
                marginBottom: 18,
                wordBreak: "break-word",
                lineHeight: 1.25,
                fontWeight: 500,
              }}
            >
              Premium fashion for men, women & teams
            </p>
            <Link
              to="/shop"
              style={{
                display: "inline-block",
                background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
                color: "#fff",
                fontWeight: 600,
                fontSize: 18,
                padding: "10px 32px",
                borderRadius: 8,
                boxShadow: "0 2px 8px rgba(37,117,252,0.10)",
                textDecoration: "none",
                marginTop: 8,
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#2575fc")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background =
                  "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)")
              }
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
      {/* Video Showroom Section */}
      <section
        style={{
          width: "100vw",
          background: "#f6f8fa",
          padding: "2.5rem 0 3rem 0",
          margin: "0",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: 28,
            fontWeight: 700,
            color: "#2575fc",
            marginBottom: 18,
          }}
        >
          Video Showroom
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#555",
            fontSize: 18,
            marginBottom: 32,
          }}
        >
          Explore our latest collections and behind-the-scenes in motion.
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 32,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {[
            "showroom1-thumb.jpg.mp4",
            "showroom2-thumb.jpg.mp4",
            "showroom3-thumb.jpg.mp4",
          ].map((file, idx) => (
            <div
              key={file}
              style={{
                background: "#fff",
                borderRadius: 18,
                boxShadow: "0 4px 24px rgba(37,117,252,0.10)",
                padding: 18,
                maxWidth: 400,
                width: "100%",
                animation: "fadeIn 1.1s",
              }}
            >
              <video
                controls
                style={{
                  width: "100%",
                  borderRadius: 12,
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  marginBottom: 12,
                }}
              >
                <source src={`/videos/${file}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div
                style={{
                  textAlign: "center",
                  color: "#2575fc",
                  fontWeight: 600,
                  fontSize: 17,
                }}
              >
                Showroom Video {idx + 1}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Section divider */}
      <div
        style={{
          width: "100vw",
          height: 18,
          background: "linear-gradient(90deg, #e0e7ff 0%, #fff 100%)",
          margin: "0 0 24px 0",
        }}
      />
      <FeaturedProducts />
      {/* Section divider */}
      <div
        style={{
          width: "100vw",
          height: 18,
          background: "linear-gradient(90deg, #fff 0%, #e0e7ff 100%)",
          margin: "24px 0",
        }}
      />
      <Testimonials />
      {/* Fade-in animation keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default HomePage;
