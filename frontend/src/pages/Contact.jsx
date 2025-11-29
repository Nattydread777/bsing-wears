import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    requestType: "",
    budget: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Simple validation
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    // Email format check
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
    setError("");
  }

  return (
    <div style={{ padding: "2.5rem", maxWidth: 600, margin: "0 auto" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: 18,
          fontSize: 32,
          fontWeight: 700,
          color: "#2575fc",
        }}
      >
        Contact Us
      </h2>
      <p
        style={{
          textAlign: "center",
          color: "#555",
          marginBottom: 32,
          fontSize: 18,
        }}
      >
        For inquiries, appointments, or enrollment, please email us at{" "}
        <a
          href="mailto:info@bsingwears.com"
          style={{ color: "#2575fc", textDecoration: "underline" }}
        >
          info@bsingwears.com
        </a>{" "}
        or call
        <span style={{ color: "#2575fc", fontWeight: 500 }}>
          {" "}
          +234-XXX-XXXX
        </span>
        .
      </p>
      {submitted ? (
        <div
          style={{
            background: "#e6ffed",
            borderRadius: 12,
            padding: 24,
            textAlign: "center",
            color: "#1a7f37",
            fontWeight: "bold",
            marginBottom: 24,
          }}
        >
          Thank you for contacting us! We have received your message and will
          get back to you soon.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          style={{
            background: "#fff",
            borderRadius: 18,
            boxShadow: "0 4px 24px rgba(37,117,252,0.10)",
            padding: "40px 28px",
            maxWidth: 520,
            margin: "0 auto",
            animation: "fadeIn 1.1s",
          }}
        >
          {/* What do you want dropdown */}
          <div style={{ marginBottom: 18 }}>
            <label
              htmlFor="requestType"
              style={{ display: "block", fontWeight: "bold", marginBottom: 6 }}
            >
              What do you want?
            </label>
            <select
              id="requestType"
              name="requestType"
              value={form.requestType}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: 6,
                border: "1px solid #ccc",
                fontSize: 16,
                background: "#f6f8fa",
                color: "#222",
              }}
            >
              <option value="">Select an option</option>
              <option value="Product Inquiry">Product Inquiry</option>
              <option value="Appointment">Appointment</option>
              <option value="Enrollment">Enrollment</option>
              <option value="Custom Order">Custom Order</option>
              <option value="Other">Other</option>
            </select>
          </div>
          {/* Budget (optional) */}
          <div style={{ marginBottom: 18 }}>
            <label
              htmlFor="budget"
              style={{ display: "block", fontWeight: "bold", marginBottom: 6 }}
            >
              Budget (optional)
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              value={form.budget}
              onChange={handleChange}
              placeholder="e.g. ₦10,000 - ₦50,000"
              style={{
                width: "100%",
                padding: "10px 14px",
                borderRadius: 6,
                border: "1px solid #ccc",
                fontSize: 16,
                background: "#f6f8fa",
                color: "#222",
              }}
            />
          </div>
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
              name="name"
              value={form.name}
              onChange={handleChange}
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
              name="email"
              value={form.email}
              onChange={handleChange}
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
              htmlFor="subject"
              style={{ display: "block", fontWeight: "bold", marginBottom: 6 }}
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
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
          <div style={{ marginBottom: 24 }}>
            <label
              htmlFor="message"
              style={{ display: "block", fontWeight: "bold", marginBottom: 6 }}
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={form.message}
              onChange={handleChange}
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
              style={{
                color: "#d32f2f",
                marginBottom: 16,
                textAlign: "center",
              }}
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
              transition: "background 0.2s, color 0.2s",
            }}
          >
            Send Message
          </button>
          {/* Fade-in animation keyframes */}
          <style>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: translateY(24px); }
              to { opacity: 1; transform: translateY(0); }
            }
          `}</style>
        </form>
      )}
    </div>
  );
}

export default Contact;
