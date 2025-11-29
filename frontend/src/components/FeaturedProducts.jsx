import React from "react";
import maleSuit from "../assets/image-top-male.jpeg";
import femaleDress from "../assets/image-female.jpeg";
import teamCollection from "../assets/image-team.jpeg";
import entrance from "../assets/image-entrance.jpeg";
import entranceLogo from "../assets/image-entrance-logo.jpeg";
import packageImg from "../assets/image-package.jpeg";
import female1 from "../assets/image-female1.jpeg";
import female2 from "../assets/image-female2.jpeg";
import topMale1 from "../assets/image-top-male1.jpeg";
import topMale2 from "../assets/image-top-male2.jpeg";

const products = [
  // Add 'featured' property to some products for badge demo
  {
    id: 13,
    name: "Male Style 3",
    image: topMale1,
    price: "₦",
    category: "Male",
    featured: true,
  },
  {
    id: 14,
    name: "Female Style 3",
    image: female1,
    price: "₦",
    category: "Female",
    featured: false,
  },
  {
    id: 11,
    name: "Team Collection",
    image: teamCollection,
    price: "₦",
    category: "Unisex",
    featured: true,
  },
  // ...existing code...
  {
    id: 13,
    name: "Male Style 3",
    image: topMale1,
    price: "₦",
    category: "Male",
  },
  {
    id: 14,
    name: "Female Style 3",
    image: female1,
    price: "₦",
    category: "Female",
  },
  {
    id: 11,
    name: "Team Collection",
    image: teamCollection,
    price: "₦",
    category: "Unisex",
  },
  {
    id: 1,
    name: "Classic Male Suit",
    image: maleSuit,
    price: "₦",
    category: "Male",
  },
  {
    id: 2,
    name: "Elegant Female Dress",
    image: femaleDress,
    price: "₦",
    category: "Female",
  },
  {
    id: 4,
    name: "Entrance Look",
    image: entrance,
    price: "₦",
    category: "Unisex",
  },
  {
    id: 8,
    name: "Female Style 2",
    image: female2,
    price: "₦",
    category: "Female",
  },
  {
    id: 6,
    name: "Package",
    image: packageImg,
    price: "₦",
    category: "Unisex",
  },
  {
    id: 7,
    name: "Female Style 1",
    image: female1,
    price: "₦",
    category: "Female",
  },
  {
    id: 10,
    name: "Top Male 2",
    image: topMale2,
    price: "₦",
    category: "Male",
  },
  {
    id: 9,
    name: "Top Male 1",
    image: topMale1,
    price: "₦",
    category: "Male",
  },
];

const categories = ["All", "Male", "Female", "Unisex"];
import { useState } from "react";

function FeaturedProducts() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);
  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 8);

  return (
    <section style={{ padding: "3rem 0 4rem 0", background: "#fafafa" }}>
      <h2
        style={{
          textAlign: "center",
          marginBottom: "0.5rem",
          fontSize: 32,
          fontWeight: 700,
          letterSpacing: "-1px",
        }}
      >
        Featured Products
      </h2>
      <div
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          color: "#2575fc",
          fontSize: 18,
          fontWeight: 500,
        }}
      >
        Handpicked styles for you
      </div>
      {/* Divider */}
      <div
        style={{
          width: "100vw",
          height: 10,
          background: "linear-gradient(90deg, #e0e7ff 0%, #fff 100%)",
          margin: "0 0 24px 0",
        }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            style={{
              padding: "8px 22px",
              borderRadius: 24,
              border:
                selectedCategory === cat
                  ? "2px solid #2575fc"
                  : "1px solid #ccc",
              background:
                selectedCategory === cat
                  ? "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)"
                  : "#fff",
              color: selectedCategory === cat ? "#fff" : "#222",
              fontWeight: "bold",
              cursor: "pointer",
              fontSize: 16,
              boxShadow:
                selectedCategory === cat
                  ? "0 2px 8px rgba(37,117,252,0.10)"
                  : "none",
              transition: "background 0.2s, color 0.2s",
            }}
          >
            {cat}
          </button>
        ))}
        <button
          onClick={() => setSelectedCategory("All")}
          style={{
            padding: "8px 22px",
            borderRadius: 24,
            border: "2px solid #6a11cb",
            background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
            color: "#fff",
            fontWeight: "bold",
            cursor: "pointer",
            fontSize: 16,
            marginLeft: 8,
            boxShadow: "0 2px 8px rgba(37,117,252,0.10)",
            transition: "background 0.2s, color 0.2s",
          }}
        >
          View All
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "3rem",
          justifyItems: "center",
          padding: "0 1rem",
        }}
      >
        {displayedProducts.map((product) => (
          <div
            key={product.id}
            style={{
              background: "#fff",
              borderRadius: 18,
              boxShadow: "0 4px 18px rgba(0,0,0,0.12)",
              width: 280,
              minHeight: 370,
              padding: 28,
              textAlign: "center",
              transition: "transform 0.22s, box-shadow 0.22s",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              position: "relative",
              animation: "fadeIn 1s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-8px) scale(1.04)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.16)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "none";
              e.currentTarget.style.boxShadow = "0 4px 18px rgba(0,0,0,0.12)";
            }}
          >
            {/* Featured badge */}
            {product.featured && (
              <span
                style={{
                  position: "absolute",
                  top: 18,
                  left: 18,
                  background:
                    "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 13,
                  padding: "4px 12px",
                  borderRadius: 12,
                  boxShadow: "0 2px 8px rgba(37,117,252,0.10)",
                  zIndex: 2,
                }}
              >
                Featured
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: 200,
                objectFit: "cover",
                borderRadius: 12,
                marginBottom: 16,
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            />
            <h3
              style={{ margin: "1rem 0 0.5rem", fontSize: 20, fontWeight: 600 }}
            >
              {product.name}
            </h3>
            <p
              style={{
                color: "#222",
                fontWeight: "bold",
                fontSize: 17,
                marginBottom: 6,
              }}
            >
              {product.price}
            </p>
            <span style={{ fontSize: 15, color: "#888" }}>
              {product.category}
            </span>
            {/* View Details button */}
            <button
              style={{
                marginTop: 16,
                padding: "8px 22px",
                borderRadius: 24,
                background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
                color: "#fff",
                fontWeight: "bold",
                fontSize: 15,
                border: "none",
                boxShadow: "0 2px 8px rgba(37,117,252,0.10)",
                cursor: "pointer",
                transition: "background 0.2s, color 0.2s",
              }}
              onClick={() => alert(`View details for ${product.name}`)}
            >
              View Details
            </button>
          </div>
        ))}
      </div>
      {!showAll && filteredProducts.length > 6 && (
        <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
          <button
            onClick={() => setShowAll(true)}
            style={{
              padding: "12px 32px",
              borderRadius: 8,
              background: "linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)",
              color: "#fff",
              fontWeight: "bold",
              fontSize: 17,
              border: "none",
              boxShadow: "0 2px 8px rgba(37,117,252,0.10)",
              cursor: "pointer",
              marginTop: 8,
              transition: "background 0.2s",
            }}
          >
            See All Products
          </button>
        </div>
      )}
      {/* Fade-in animation keyframes */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default FeaturedProducts;
