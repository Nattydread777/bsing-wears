import React from "react";

const testimonials = [
  {
    name: "Chinedu Okafor",
    role: "Client",
    text: "BSING Wears exceeded my expectations! The quality and fit are perfect. I always get compliments whenever I wear their designs.",
    photo: null, // Replace with image path if available
  },
  {
    name: "Amina Yusuf",
    role: "Fashion School Graduate",
    text: "The training at BSING Wears School was hands-on and inspiring. I now run my own fashion business thanks to their mentorship.",
    photo: null,
  },
  {
    name: "Emeka Uzoho",
    role: "Client",
    text: "I ordered custom shoes and they were delivered on time, with amazing craftsmanship. Highly recommended!",
    photo: null,
  },
  {
    name: "Grace Eze",
    role: "Student",
    text: "Learning at BSING Wears was a game changer. The instructors are supportive and the environment is creative.",
    photo: null,
  },
];

function Testimonials() {
  return (
    <section
      style={{ background: "#f8fafc", padding: "48px 0", margin: "32px 0" }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: 28,
          fontWeight: 800,
          marginBottom: 32,
          color: "#222",
        }}
      >
        Success Stories & Testimonials
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 32,
          justifyContent: "center",
        }}
      >
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
              padding: "32px 24px",
              maxWidth: 320,
              minWidth: 220,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                background: "#e0e7ef",
                marginBottom: 16,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 36,
                color: "#bbb",
              }}
            >
              {/* Photo placeholder or icon */}
              <span role="img" aria-label="User">
                👤
              </span>
            </div>
            <p
              style={{
                fontSize: 16,
                color: "#444",
                fontStyle: "italic",
                marginBottom: 14,
                textAlign: "center",
              }}
            >
              "{t.text}"
            </p>
            <div style={{ fontWeight: 700, color: "#222", fontSize: 17 }}>
              {t.name}
            </div>
            <div style={{ color: "#555", fontSize: 15, marginBottom: 0 }}>
              {t.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
