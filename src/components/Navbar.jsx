import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMail, FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e) => {
    setIsMobileMenuOpen(false);
  };

  const socialLinks = [
    { icon: <FiMail />, href: "mailto:wonseob2207@gmail.com", label: "Email" },
    { icon: <FaGithub />, href: "https://github.com/wonseobi", label: "GitHub" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/won.seobi/", label: "Instagram" },
  ];

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "afterChildren",
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    }
  };

  const menuItemVariants = {
    closed: {
      opacity: 0,
      x: -20,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const socialIconVariants = {
    closed: {
      opacity: 0,
      scale: 0.8,
      transition: { duration: 0.2 }
    },
    open: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <>
      <style jsx>{`
        /* Reset anchor styles globally */
        a,
        a:link,
        a:visited,
        a:hover,
        a:active,
        a:focus {
          color: inherit;
          text-decoration: none;
        }

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
          background: linear-gradient(90deg, #e2e8f0 20%, #ffffff 40%, #e2e8f0 60%);
          background-size: 200% 100%;
          background-position: 0% 0;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          transition: background-position 1s ease;
          padding-right: 2em !important;
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
        }

        .social-icons {
          display: flex;
          gap: 1.25rem;
          justify-content: flex-end;
          flex: 1;
        }

        @media (min-width: 768px) {
          .social-icons {
            padding-left: 2em;
          }
        }

        .social-icons a {
          color: #ffffff;
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

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.5rem;
          cursor: pointer;
          padding: 0.5rem;
          transition: color 0.3s ease, transform 0.2s ease;
        }

        .mobile-menu-button:hover {
          color: #ffffff;
          transform: scale(1.1);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: rgba(15, 23, 42, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
          z-index: 999;
        }

        .mobile-menu-content {
          padding: 1rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .mobile-menu-item {
          display: block;
          color: #fff;
          text-decoration: none;
          font-size: 1.1rem;
          font-weight: 500;
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          transition: color 0.3s ease, padding-left 0.3s ease;
          cursor: pointer;
        }

        .mobile-menu-item:hover {
          color: #fff;
          padding-left: 1rem;
        }

        .mobile-menu-item:last-of-type {
          border-bottom: none;
        }

        .mobile-social-icons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .mobile-social-icon {
          color: #fff;
          font-size: 1.4rem;
          transition: color 0.3s ease, transform 0.3s ease;
          padding: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-social-icon:hover {
          color: #fff;
          transform: scale(1.1);
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 0.5rem 1.5rem !important;
          }

          .navbar-brand {
            font-size: 1.3rem;
            padding-right: 0;
          }

          .menu,
          .social-icons {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 0.4rem 1rem !important;
          }

          .navbar-brand {
            font-size: 1.2rem;
          }
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
            position: "relative",
          }}
        >
          <motion.h1
            onClick={scrollToHero}
            className="navbar-brand"
            whileHover={{ scale: 1.05, ease: "easeOut" }}
          >
            Won Lee
          </motion.h1>

          <div className="menu">
            {["Projects", "About", "Experience", "Contact"].map((item, index) => (
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
                onClick={handleNavClick}
              >
                {item}
              </motion.a>
            ))}
          </div>

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

          <motion.button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            whileTap={{ scale: 0.9 }}
            animate={{
              rotate: isMobileMenuOpen ? 90 : 0,
            }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              initial={false}
              animate={{
                rotate: isMobileMenuOpen ? 180 : 0,
                scale: isMobileMenuOpen ? 1.1 : 1,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </motion.div>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="mobile-menu-content">
                {["Projects", "Experience", "About", "Contact"].map((item, index) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={handleNavClick}
                    className="mobile-menu-item"
                    variants={menuItemVariants}
                    custom={index}
                    whileHover={{ x: 10, transition: { duration: 0.2 } }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item}
                  </motion.a>
                ))}

                <motion.div
                  className="mobile-social-icons"
                  variants={{
                    closed: { opacity: 0 },
                    open: {
                      opacity: 1,
                      transition: {
                        delay: 0.4,
                        staggerChildren: 0.1,
                      }
                    }
                  }}
                >
                  {socialLinks.map(({ icon, href, label }, index) => (
                    <motion.a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="mobile-social-icon"
                      variants={socialIconVariants}
                      whileHover={{
                        scale: 1.2,
                        rotate: 10,
                        transition: { duration: 0.2 }
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {icon}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
