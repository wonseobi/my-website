import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMail } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

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

  const socialLinks = [
    { icon: <FiMail />, href: "mailto:wonseob2207@gmail.com", label: "Email" },
    { icon: <FaGithub />, href: "https://github.com/wonseobi", label: "GitHub" },
    { icon: <FaLinkedin />, href: "https://linkedin.com/in/yourlinkedin", label: "LinkedIn" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/won.seobi/", label: "Instagram" },
  ];

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
          font-weight: 700;
          font-size: 1.5rem;
          letter-spacing: -0.02em;
          margin: 0;
          cursor: pointer;
          flex: 1;
          text-align: left;
          padding-right: 3em;

          background: linear-gradient(
            90deg,
            #e2e8f0 20%,
            #ffffff 40%,
            #e2e8f0 60%
          );
          background-size: 200% 100%;
          background-position: 0% 0;

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;

          transition: background-position 1s ease;
        }
        .navbar-brand:hover {
          background-position: 100% 0;
        }

        .menu {
          display: flex;
          gap: 2rem;
          justify-content: center;
          flex: 2;
        }

        .menu a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 0.5rem;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-block;
        }
        .menu a:hover {
          scale: 1.05;
          color: #ffffff;
          transition: all 0.3s ease;
        }

        .social-icons {
          display: flex;
          gap: 1.25rem;
          justify-content: flex-end;
          flex: 1;
          padding-left: 4em;
        }
        .social-icons a {
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.3rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: color 0.3s ease, transform 0.3s ease;
        }
        .social-icons a:hover {
          color: #ffffff;
          transform: scale(1.05);
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
            whileHover={{ scale: 1.05, ease: "easeOut" }}
          >
            Won Lee
          </motion.h1>

          {/* Center: Menu */}
          <div className="menu">
            {["Projects", "Experience", "About", "Contact"].map((item, index) => (
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
              >
                {item}
              </motion.a>
            ))}
          </div>

          {/* Right: Social Icons */}
          <div className="social-icons">
            {socialLinks.map(({ icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </motion.nav>
    </>
  );
}
