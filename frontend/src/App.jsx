import React, { useState } from "react";
import logo from "./assets/logo.jpeg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Shop from "./pages/Shop";
import School from "./pages/School";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Brand from "./pages/Brand";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
function App() {
  const [navOpen, setNavOpen] = useState(false);
  const navLinks = (
    <>
      <Link
        to="/"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: 500,
          fontSize: 18,
        }}
      >
        Home
      </Link>
      <Link
        to="/about"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: 500,
          fontSize: 18,
        }}
      >
        About Us
      </Link>
      <Link
        to="/contact"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: 500,
          fontSize: 18,
        }}
      >
        Contact Us
      </Link>
      <Link
        to="/shop"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: 500,
          fontSize: 18,
        }}
      >
        Explore Products
      </Link>
      <Link
        to="/orders"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: 500,
          fontSize: 18,
        }}
      >
        Check Orders
      </Link>
      <Link
        to="/cart"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: 500,
          fontSize: 18,
        }}
      >
        View Cart
      </Link>
      <Link
        to="/school"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: 500,
          fontSize: 18,
        }}
      >
        School
      </Link>
      <Link
        to="/login"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontWeight: 500,
          fontSize: 18,
          border: "1px solid #fff",
          borderRadius: 6,
          padding: "4px 16px",
          background: "#333",
        }}
      >
        Login
      </Link>
      <Link
        to="/signup"
        style={{
          color: "#222",
          textDecoration: "none",
          fontWeight: 500,
          fontSize: 18,
          border: "1px solid #fff",
          borderRadius: 6,
          padding: "4px 16px",
          background: "#fff",
        }}
      >
        Sign Up
      </Link>
    </>
  );
  return (
    <Router>
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
          padding: "1rem 2.5rem",
          marginBottom: 0,
          minHeight: 64,
          boxShadow: "0 4px 16px rgba(106,17,203,0.08)",
          borderRadius: "0 0 18px 18px",
          position: "relative",
        }}
      >
        <img
          src={logo}
          alt="Logo"
          style={{
            height: 52,
            marginRight: 18,
            borderRadius: 12,
            boxShadow: "0 2px 8px rgba(37,117,252,0.10)",
          }}
        />
        {/* Hamburger for mobile */}
        <button
          onClick={() => setNavOpen(!navOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            color: "#fff",
            fontSize: 32,
            cursor: "pointer",
            marginLeft: "auto",
          }}
          className="nav-hamburger"
        >
          &#9776;
        </button>
        <div
          className="nav-links"
          style={{
            display: "flex",
            gap: "2rem",
            alignItems: "center",
          }}
        >
          {navLinks}
        </div>
        {/* Mobile menu overlay */}
        {navOpen && (
          <div
            style={{
              position: "absolute",
              top: 60,
              left: 0,
              width: "100%",
              background: "#222",
              zIndex: 99,
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              padding: "2rem 0",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            }}
          >
            {navLinks}
          </div>
        )}
      </nav>
      {/* Enhanced styles for navbar and body */}
      <style>{`
        body {
          background: #f6f8fa;
          font-family: 'Segoe UI', Arial, sans-serif;
          color: #222;
        }
        .main-container {
          background: #fff;
          border-radius: 18px;
          box-shadow: 0 4px 24px rgba(37,117,252,0.06);
          padding: 0;
          max-width: 100vw;
          width: 100vw;
          min-height: 100vh;
          margin: 0;
          box-sizing: border-box;
        }
        }
        @media (max-width: 900px) {
          .main-container {
            max-width: 600px;
            width: 100%;
            margin: 0 auto;
          }
        }
        }
        @media (max-width: 900px) {
          .main-container {
            max-width: 600px;
          }
        }
        }
        .nav-links a {
          color: #fff !important;
          margin: 0 0.5rem;
          text-decoration: none;
          font-weight: 500;
          font-size: 18px;
          transition: color 0.2s, background 0.2s;
          padding: 4px 12px;
          border-radius: 6px;
        }
        .nav-links a:hover {
          color: #ffd700 !important;
          background: rgba(255,255,255,0.08);
        }
        .nav-links a:last-child {
          color: #222 !important;
          background: #fff;
          border: 1px solid #fff;
        }
        .nav-links a:last-child:hover {
          background: #ffd700;
          color: #222 !important;
        }
        .nav-hamburger {
          color: #fff;
        }
        @media (max-width: 900px) {
          .nav-links {
            display: none !important;
          }
          .nav-hamburger {
            display: block !important;
          }
        }
        @media (min-width: 901px) {
          .nav-hamburger {
            display: none !important;
          }
          .nav-links {
            display: flex !important;
          }
        }
      `}</style>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/school" element={<School />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
