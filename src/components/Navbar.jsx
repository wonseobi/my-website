import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMail, FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaInstagram } from "react-icons/fa";

// Custom Logo Component
const Logo = ({ className = "" }) => (
  <motion.div
    className={`logo-container ${className}`}
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  >
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="logo-svg"
    >
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="50%" stopColor="#A78BFA" />
          <stop offset="100%" stopColor="#F472B6" />
        </linearGradient>
      </defs>
      <motion.path
        d="M8 8 L16 24 L24 8 M12 16 L20 16"
        stroke="url(#logoGradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
      />
      <motion.circle
        cx="16"
        cy="16"
        r="14"
        stroke="url(#logoGradient)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.3"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
      />
    </svg>
  </motion.div>
);

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

  const handleNavClick = () => setIsMobileMenuOpen(false);

  const socialLinks = [
    { icon: <FiMail />, href: "mailto:wonseob2207@gmail.com", label: "Email" },
    { icon: <FaGithub />, href: "https://github.com/wonseobi", label: "GitHub" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/won.seobi/", label: "Instagram" },
  ];

  // Simplified mobile menu animation
  const mobileMenuVariants = {
    closed: { opacity: 0, y: -10, transition: { duration: 0.2, ease: "easeInOut" } },
    open: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  };

  const menuItemVariants = {
    closed: { opacity: 0, y: -5 },
    open: { opacity: 1, y: 0 },
  };

  return (
    <>
      <style jsx>{`
        a, a:link, a:visited, a:hover, a:active, a:focus { color: inherit; text-decoration: none; }

        .navbar { backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); animation: fadeIn 0.6s ease-out; font-family: 'Figtree', sans-serif; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .navbar-brand-container { display: flex; align-items: center; gap: 0.75rem; cursor: pointer; flex: 1; text-align: left; padding-right: 2em !important; }
        .logo-container { display: flex; align-items: center; justify-content: center; position: relative; }
        .logo-svg { filter: drop-shadow(0 0 8px rgba(0, 217, 255, 0.3)); transition: all 0.3s ease; }
        .navbar-brand-container:hover .logo-svg { filter: drop-shadow(0 0 16px rgba(0, 217, 255, 0.5)) drop-shadow(0 0 8px rgba(0, 255, 170, 0.3)); transform: rotate(5deg); }
        .navbar-brand { font-weight: 700; font-size: 1.4rem; letter-spacing: -0.025em; margin: 0; background: linear-gradient(135deg, #f8fafc 0%, #ffffff 25%, #e2e8f0 50%, #ffffff 75%, #f1f5f9 100%); background-size: 200% 200%; background-position: 0% 50%; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1); }
        .navbar-brand-container:hover .navbar-brand { background-position: 100% 50%; transform: translateX(2px); }
        .menu { display: flex; gap: 2.5rem; justify-content: center; flex: 2; }
        .menu a { color: rgba(255, 255, 255, 0.85); font-size: 0.95rem; font-weight: 500; padding: 0.75rem 0.5rem; transition: all 0.3s cubic-bezier(0.4,0,0.2,1); cursor: pointer; display: inline-block; position: relative; font-family: 'Figtree', sans-serif; letter-spacing: -0.01em; }
        .menu a::after { content: ''; position: absolute; bottom: 0.25rem; left: 50%; width: 0; height: 2px; background: linear-gradient(90deg, #60A5FA, #A78BFA); transition: all 0.3s cubic-bezier(0.4,0,0.2,1); transform: translateX(-50%); border-radius: 1px; }
        .menu a:hover { color: #fff; transform: translateY(-1px); }
        .menu a:hover::after { width: 100%; }
        .social-icons { display: flex; gap: 1.5rem; justify-content: flex-end; flex: 1; padding-left: 2em}
        .social-icons a { color: rgba(255, 255, 255, 0.8); font-size: 1.25rem; cursor: pointer; display: flex; align-items: center; padding: 0.5rem; border-radius: 8px; transition: all 0.3s cubic-bezier(0.4,0,0.2,1); position: relative; }
        .social-icons a:hover { color: #fff; transform: translateY(-2px); }

        .mobile-menu-button { display: none; background: none; border: none; color: rgba(255,255,255,0.85); font-size: 1.5rem; cursor: pointer; padding: 0.625rem; border-radius: 8px; position: relative; }
        .mobile-menu { position: absolute; top: 100%; left: 0; right: 0; background: rgba(15,23,42,0.98); backdrop-filter: blur(24px); border-bottom: 1px solid rgba(255,255,255,0.08); overflow: hidden; z-index: 999; box-shadow: 0 20px 50px rgba(0,0,0,0.3); }
        .mobile-menu-content { padding: 1.5rem; max-width: 1200px; margin: 0 auto; }
        .mobile-menu-item { display: block; color: rgba(255,255,255,0.9); font-size: 1.1rem; font-weight: 500; padding: 1rem 0; border-bottom: 1px solid rgba(255,255,255,0.08); cursor: pointer; font-family: 'Figtree', sans-serif; letter-spacing: -0.01em; }
        .mobile-menu-item:hover { color: #fff; padding-left: 1.5rem; }
        .mobile-menu-item:last-of-type { border-bottom: none; }
        .mobile-social-icons { display: flex; gap: 2rem; justify-content: center; margin-top: 1.5rem; padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.08); }
        .mobile-social-icon { color: rgba(255,255,255,0.8); font-size: 1.5rem; padding: 0.75rem; display: flex; align-items: center; justify-content: center; border-radius: 12px; background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); transition: all 0.3s ease; }
        .mobile-social-icon:hover { color: #fff; transform: translateY(-2px); background: rgba(255,255,255,0.08); border-color: rgba(255,255,255,0.12); }

        @media (max-width: 768px) {
          .menu, .social-icons { display: none; }
          .mobile-menu-button { display: block; }
        }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
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
          background: isScrolled ? "rgba(15, 23, 42, 0.96)" : "rgba(15, 23, 42, 0.85)",
          boxShadow: isScrolled ? "0 12px 40px rgba(0,0,0,0.35)" : "0 4px 20px rgba(0,0,0,0.15)",
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
          <motion.div
            onClick={scrollToHero}
            className="navbar-brand-container"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <Logo />
            <h1 className="navbar-brand">Won Lee</h1>
          </motion.div>

          <div className="menu">
            {["Projects", "About", "Experience", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index, ease: "easeOut" }}
                whileHover={{ y: -1, transition: { duration: 0.2 } }}
                onClick={handleNavClick}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="social-icons">
            {socialLinks.map(({ icon, href, label }, index) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + 0.1 * index, ease: "easeOut" }}
                whileHover={{ y: -2, scale: 1.05, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.95 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>

          {/* Mobile menu button */}
          <motion.button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiX />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiMenu />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile menu */}
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
                {["Projects", "Experience", "About", "Contact"].map((item) => (
                  <motion.a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    onClick={handleNavClick}
                    className="mobile-menu-item"
                    variants={menuItemVariants}
                  >
                    {item}
                  </motion.a>
                ))}

                <div className="mobile-social-icons">
                  {socialLinks.map(({ icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="mobile-social-icon"
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
