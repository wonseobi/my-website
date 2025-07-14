import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHero = (e) => {
    e.preventDefault();
    const heroSection = document.getElementById("hero");
    if (heroSection) {
        heroSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <style jsx>{`
        .navbar {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transition: all 0.3s ease;
          animation: fadeIn 0.6s ease-out;
        }

        .navbar-brand {
          background: linear-gradient(135deg, #ffffff, #e2e8f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          transition: all 0.3s ease;
        }

        .navbar-brand:hover {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <motion.nav
        className="navbar"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "1rem 2rem",
          background: isScrolled
            ? "rgba(15, 23, 42, 0.95)"
            : "rgba(15, 23, 42, 0.8)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          boxShadow: isScrolled
            ? "0 8px 32px rgba(0,0,0,0.3)"
            : "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Left: Name */}
          <motion.h1
            onClick={scrollToHero}
            className="navbar-brand"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              letterSpacing: "-0.02em",
              margin: 0,
              cursor: "pointer",
              flex: 1,
              textAlign: "left",
              paddingRight: "1.5em",
            }}
          >
            Won Lee
          </motion.h1>

          {/* Center: Menu */}
          <div
            style={{
              display: "flex",
              gap: "2rem",
              justifyContent: "center",
              flex: 2,
            }}
          >
            {["Projects", "About", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, delay: 0.1 * index }}
                whileHover={{
                  scale: 1.05,
                  color: "#ffffff",
                  transition: { duration: 0.3 },
                }}
                style={{
                  color: "rgba(255,255,255,0.8)",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: "500",
                  padding: "0.5rem 1rem",
                  transition: "all 0.1s ease",
                }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Spacer to push content below navbar */}
      <div style={{ height: "80px" }} />
    </>
  );
}
