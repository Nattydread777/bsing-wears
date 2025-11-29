import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpeg";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Signup failed");
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "3rem auto",
        background: "#fff",
        borderRadius: 18,
        boxShadow: "0 4px 24px rgba(37,117,252,0.10)",
        padding: "2.5rem",
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          display: "block",
          margin: "0 auto 18px auto",
          height: 56,
          borderRadius: 12,
          boxShadow: "0 2px 8px rgba(37,117,252,0.10)",
        }}
      />
      <h2
        style={{
          textAlign: "center",
          color: "#2575fc",
          fontWeight: 700,
          marginBottom: 18,
        }}
      >
        Sign Up
      </h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 18 }}>
          <label
            htmlFor="name"
            style={{ display: "block", fontWeight: "bold", marginBottom: 6 }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px 14px",
              borderRadius: 6,
              border: "1px solid #ccc",
              fontSize: 16,
            }}
          />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label
            htmlFor="email"
            style={{ display: "block", fontWeight: "bold", marginBottom: 6 }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px 14px",
              borderRadius: 6,
              border: "1px solid #ccc",
              fontSize: 16,
            }}
          />
        </div>
        <div style={{ marginBottom: 18 }}>
          <label
            htmlFor="password"
            style={{ display: "block", fontWeight: "bold", marginBottom: 6 }}
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "10px 14px",
              borderRadius: 6,
              border: "1px solid #ccc",
              fontSize: 16,
            }}
          />
        </div>
        {error && (
          <div
            style={{ color: "#d32f2f", marginBottom: 16, textAlign: "center" }}
          >
            {error}
          </div>
        )}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "14px 0",
            borderRadius: 24,
            background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
            color: "#fff",
            fontWeight: "bold",
            fontSize: 20,
            border: "none",
            boxShadow: "0 2px 8px rgba(37,117,252,0.10)",
            cursor: "pointer",
            marginTop: 8,
          }}
        >
          Sign Up
        </button>
      </form>
      <div style={{ textAlign: "center", marginTop: 18 }}>
        <span style={{ color: "#555", fontSize: 15 }}>
          Already have an account?{" "}
          <a
            href="/login"
            style={{
              color: "#2575fc",
              textDecoration: "underline",
              fontWeight: 500,
            }}
          >
            Login
          </a>
        </span>
      </div>
    </div>
  );
}

export default Signup;
