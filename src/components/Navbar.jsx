import { motion } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    // Add scroll effect (optional)
    useState(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <style jsx>{`
                .navbar {
                    backdrop-filter: blur(20px);
                    -webkit-backdrop-filter: blur(20px);
                    transition: all 0.3s ease;
                }
                
                .navbar-brand {
                    background: linear-gradient(90deg, #e2e8f0, #3b82f6, #8b5cf6, #e2e8f0);
                    background-size: 200% 200%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                    animation: subtleFlow 6s ease-in-out infinite;
                }
                
                @keyframes subtleFlow {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
                
                .menu-item {
                    position: relative;
                    transition: all 0.3s ease;
                }
                
                .menu-item:hover {
                    color: rgba(255, 255, 255, 1) !important;
                    text-shadow: 0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.4);
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                
                .navbar {
                    animation: fadeIn 0.6s ease-out;
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
                    backdropFilter: "blur(20px)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: isScrolled 
                        ? "0 8px 32px rgba(0, 0, 0, 0.3)" 
                        : "0 4px 20px rgba(0, 0, 0, 0.1)",
                }}
            >
                <div style={{
                    maxWidth: "1200px",
                    margin: "0 auto",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    position: "relative",
                    width: "100%",
                }}>
                    <motion.h1 
                        className="navbar-brand"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            margin: 0,
                            fontSize: "1.5rem",
                            fontWeight: "700",
                            letterSpacing: "-0.02em",
                            cursor: "pointer",
                        }}
                    >
                        Won Lee
                    </motion.h1>
                    
                    {/* Centered navigation links */}
                    <div style={{
                        display: "flex",
                        gap: "3rem",
                        alignItems: "center",
                    }}>
                        {['My Projects', 'About', 'Contact'].map((item, index) => (
                            <motion.a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="menu-item"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                    duration: 0.5, 
                                    delay: 0.1 * index,
                                    ease: "easeOut" 
                                }}
                                style={{
                                    color: "rgba(255, 255, 255, 0.8)",
                                    textDecoration: "none",
                                    fontSize: "0.9rem",
                                    fontWeight: "500",
                                    padding: "0.5rem 1rem",
                                    borderRadius: "0.5rem",
                                    transition: "all 0.2s ease",
                                    position: "relative",
                                }}
                                onMouseEnter={(e) => {
                                    // Handled by CSS hover
                                }}
                                onMouseLeave={(e) => {
                                    // Handled by CSS hover
                                }}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>
                    
                    {/* Social Icons */}
                    <div style={{
                        display: "flex",
                        gap: "1rem",
                        alignItems: "center",
                    }}>
                        {[
                            { name: 'email', icon: '@', href: 'mailto:your.email@example.com' },
                            { name: 'github', icon: 'GH', href: 'https://github.com/wonseobi' },
                            { name: 'instagram', icon: 'IG', href: 'https://instagram.com/yourusername' },
                            { name: 'linkedin', icon: 'in', href: 'https://linkedin.com/in/yourusername' }
                        ].map((social, index) => (
                            <motion.a
                                key={social.name}
                                href={social.href}
                                target={social.name !== 'email' ? '_blank' : undefined}
                                rel={social.name !== 'email' ? 'noopener noreferrer' : undefined}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ 
                                    duration: 0.4, 
                                    delay: 0.2 + (0.1 * index),
                                    ease: "easeOut" 
                                }}
                                whileHover={{ 
                                    scale: 1.1,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    color: "rgba(255, 255, 255, 0.7)",
                                    textDecoration: "none",
                                    fontSize: "0.8rem",
                                    fontWeight: "600",
                                    padding: "0.4rem 0.6rem",
                                    borderRadius: "0.4rem",
                                    transition: "all 0.2s ease",
                                    background: "rgba(255, 255, 255, 0.05)",
                                    border: "1px solid rgba(255, 255, 255, 0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    minWidth: "32px",
                                    height: "32px",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em",
                                }}
                                onMouseEnter={(e) => {
                                    e.target.style.background = "rgba(255, 255, 255, 0.1)";
                                    e.target.style.borderColor = "rgba(255, 255, 255, 0.3)";
                                    e.target.style.color = "rgba(255, 255, 255, 1)";
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.background = "rgba(255, 255, 255, 0.05)";
                                    e.target.style.borderColor = "rgba(255, 255, 255, 0.1)";
                                    e.target.style.color = "rgba(255, 255, 255, 0.7)";
                                }}
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </div>
                </div>
            </motion.nav>
            
            {/* Spacer to prevent content from hiding behind fixed navbar */}
            <div style={{ height: "80px" }} />
        </>
    );
}