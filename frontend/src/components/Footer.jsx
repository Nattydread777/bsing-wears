import React from "react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer
      style={{
        background: "#222",
        color: "#fff",
        padding: "28px 0 16px 0",
        marginTop: 32,
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 16px" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: 32,
          }}
        >
          {/* Brand & Mission */}
          <div
            style={{
              flex: 1,
              minWidth: 220,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <img
              src={logo}
              alt="BSING Wears Logo"
              style={{
                width: 64,
                height: 64,
                borderRadius: 12,
                marginBottom: 12,
              }}
            />
            <h2
              style={{
                color: "#fff",
                fontWeight: 900,
                fontSize: 32,
                marginBottom: 8,
                letterSpacing: 2,
              }}
            >
              BSING Wears
            </h2>
            <p
              style={{
                color: "#bbb",
                fontSize: 16,
                marginBottom: 8,
                fontWeight: 500,
                maxWidth: 220,
              }}
            >
              Fashion for male and female. Shop, learn, and connect with us.
            </p>
            <p style={{ color: "#bbb", fontSize: 14, marginBottom: 0 }}>
              &copy; {new Date().getFullYear()} BSING Wears. All rights
              reserved.
            </p>
          </div>
          {/* Navigation Links */}
          <div
            style={{
              flex: 2,
              minWidth: 220,
              display: "flex",
              flexDirection: "row",
              gap: 48,
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link
                to="/shop"
                style={{
                  color: "#bbb",
                  textDecoration: "none",
                  fontSize: 17,
                  fontWeight: 600,
                }}
              >
                Shop
              </Link>
              <Link
                to="/school"
                style={{
                  color: "#bbb",
                  textDecoration: "none",
                  fontSize: 17,
                  fontWeight: 600,
                }}
              >
                School
              </Link>
              <Link
                to="/about"
                style={{
                  color: "#bbb",
                  textDecoration: "none",
                  fontSize: 17,
                  fontWeight: 600,
                }}
              >
                About
              </Link>
              <Link
                to="/contact"
                style={{
                  color: "#bbb",
                  textDecoration: "none",
                  fontSize: 17,
                  fontWeight: 600,
                }}
              >
                Contact
              </Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Link
                to="/login"
                style={{
                  color: "#bbb",
                  textDecoration: "none",
                  fontSize: 17,
                  fontWeight: 600,
                }}
              >
                Login
              </Link>
              <Link
                to="/signup"
                style={{
                  color: "#bbb",
                  textDecoration: "none",
                  fontSize: 17,
                  fontWeight: 600,
                }}
              >
                Sign Up
              </Link>
              <Link
                to="/privacy"
                style={{
                  color: "#bbb",
                  textDecoration: "none",
                  fontSize: 17,
                  fontWeight: 600,
                }}
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                style={{
                  color: "#bbb",
                  textDecoration: "none",
                  fontSize: 17,
                  fontWeight: 600,
                }}
              >
                Terms
              </Link>
            </div>
          </div>
          {/* Contact Info, Social & Newsletter */}
          <div
            style={{
              flex: 1.2,
              minWidth: 220,
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 18,
            }}
          >
            <div style={{ width: "100%" }}>
              <h4
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 10,
                }}
              >
                Contact
              </h4>
              <p style={{ color: "#bbb", fontSize: 15, marginBottom: 6 }}>
                Email: info@bsingwears.com
              </p>
              <p style={{ color: "#bbb", fontSize: 15, marginBottom: 6 }}>
                Phone: 08136145003
              </p>
              <p style={{ color: "#bbb", fontSize: 15, marginBottom: 6 }}>
                Lagos, Nigeria
              </p>
              <div style={{ marginTop: 12, display: "flex", gap: 10 }}>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#bbb", fontSize: 22 }}
                >
                  <span role="img" aria-label="Facebook">
                    📘
                  </span>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#bbb", fontSize: 22 }}
                >
                  <span role="img" aria-label="Instagram">
                    📸
                  </span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#bbb", fontSize: 22 }}
                >
                  <span role="img" aria-label="Twitter">
                    🐦
                  </span>
                </a>
              </div>
            </div>
            {/* Newsletter Signup */}
            <div style={{ width: "100%", marginTop: 18 }}>
              <h4
                style={{
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 18,
                  marginBottom: 10,
                  textAlign: "right",
                }}
              >
                Stay in Touch with BSING Wears
              </h4>
              <form
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  gap: 8,
                  flexWrap: "wrap",
                }}
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={{
                    padding: "8px 12px",
                    borderRadius: 6,
                    border: "1px solid #ccc",
                    fontSize: 15,
                    width: 160,
                    marginBottom: 8,
                  }}
                  required
                />
                <button
                  type="submit"
                  style={{
                    padding: "8px 18px",
                    borderRadius: 6,
                    border: "none",
                    background: "#fff",
                    color: "#222",
                    fontWeight: "bold",
                    fontSize: 15,
                    cursor: "pointer",
                    marginBottom: 8,
                  }}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Removed 'Made with ♥ by BSING Wears Team' */}
        {/* Responsive styles */}
        <div
          style={{
            color: "#bbb",
            fontSize: 13,
            marginTop: 32,
            paddingBottom: 8,
            textAlign: "center",
            width: "100%",
            letterSpacing: 1,
          }}
        >
          &copy; {new Date().getFullYear()} BSING Wears. All rights reserved.
        </div>
        <style>{`
          @media (max-width: 900px) {
            footer > div {
              flex-direction: column !important;
              gap: 24px !important;
              align-items: center !important;
              text-align: center !important;
            }
            footer > div > div {
              align-items: center !important;
              justify-content: center !important;
              min-width: 0 !important;
              margin-bottom: 18px !important;
              width: 100% !important;
            }
            footer h2 {
              font-size: 24px !important;
              text-align: center !important;
              width: 100% !important;
            }
            footer h4 {
              font-size: 16px !important;
              text-align: center !important;
            }
            footer p, footer a {
              text-align: center !important;
              margin: 0 auto !important;
            }
            footer img {
              display: block !important;
              margin-left: auto !important;
              margin-right: auto !important;
              margin-bottom: 12px !important;
            }
          }
        `}</style>
      </div>
    </footer>
  );
}
export default Footer;
