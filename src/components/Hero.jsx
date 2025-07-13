import { motion } from "framer-motion";
import { useState, useEffect } from "react";
// Image imports
import reactImg from "../assets/react.png";


const ease = [0.6, -0.05, 0.01, 0.99];

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", 
  "UI/UX Design", "Three.js", "GraphQL", "MongoDB"
];

const floatingElements = [
  { 
    icon: "React", 
    symbol: "⚛️", 
    color: "#61DAFB",
    delay: 0, 
    duration: 4 
  },
  { 
    icon: "JS", 
    symbol: "JS", 
    color: "#F7DF1E",
    delay: 0.5, 
    duration: 5 
  },
  { 
    icon: "HTML", 
    symbol: "</>", 
    color: "#E34F26",
    delay: 1, 
    duration: 3.5 
  },
  { 
    icon: "CSS", 
    symbol: "{}",
    color: "#1572B6",
    delay: 1.5, 
    duration: 4.5 
  },
  { 
    icon: "Python", 
    symbol: "🐍",
    color: "#3776AB",
    delay: 2, 
    duration: 4 
  },
  { 
    icon: "Node", 
    symbol: "⬢",
    color: "#339933",
    delay: 2.5, 
    duration: 4.2 
  },
  { 
    icon: "Git", 
    symbol: "⎇",
    color: "#F05032",
    delay: 3, 
    duration: 3.8 
  },
  { 
    icon: "DB", 
    symbol: "⚡",
    color: "#FFD43B",
    delay: 3.5, 
    duration: 4.3 
  },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease }}
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, rgba(15, 23, 42, 0.98) 0%, rgba(30, 41, 59, 0.95) 50%, rgba(51, 65, 85, 0.92) 100%)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Animated background elements */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 60% 40%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)
        `,
        animation: "float 8s ease-in-out infinite",
      }} />

      {/* Floating tech stack icons */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
            y: [0, -20, -40, -60],
            x: [0, Math.sin(index) * 20, Math.cos(index) * 30, Math.sin(index + 1) * 10],
            rotate: [0, 360, 720, 1080]
          }}
          transition={{
            duration: element.duration,
            repeat: Infinity,
            delay: element.delay,
            ease: "easeInOut"
          }}
          style={{
            position: "absolute",
            fontSize: element.symbol.length > 1 ? "1.2rem" : "2rem",
            fontWeight: "bold",
            left: `${15 + (index * 12) % 70}%`,
            top: `${20 + (index * 8) % 60}%`,
            zIndex: 1,
            filter: "blur(0.5px)",
            opacity: 0.8,
            color: element.color,
            textShadow: `0 0 10px ${element.color}`,
            background: element.symbol === "JS" || element.symbol === "HTML" || element.symbol === "CSS" || element.symbol === "DB" ? 
              `linear-gradient(135deg, ${element.color}20, ${element.color}10)` : 'transparent',
            padding: element.symbol.length > 1 ? "0.3rem 0.5rem" : "0.2rem",
            borderRadius: element.symbol.length > 1 ? "6px" : "50%",
            border: element.symbol.length > 1 ? `1px solid ${element.color}40` : 'none',
            backdropFilter: element.symbol.length > 1 ? "blur(10px)" : 'none',
            fontFamily: element.symbol.length > 1 ? "'Courier New', monospace" : 'inherit',
          }}
        >
          {element.symbol}
        </motion.div>
      ))}

      {/* Grid pattern overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
        `,
        backgroundSize: "50px 50px",
        opacity: 0.5,
      }} />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(1deg); }
          66% { transform: translateY(-10px) rotate(-1deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.8; }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
        }
      `}</style>

      {/* Main content */}
      <div style={{
        textAlign: "center",
        zIndex: 2,
        maxWidth: "800px",
        padding: "2rem",
        transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
        transition: "transform 0.3s ease-out",
      }}>
        
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          style={{
            fontSize: "1.2rem",
            color: "rgba(255, 255, 255, 0.8)",
            fontWeight: "500",
            marginBottom: "1rem",
            letterSpacing: "0.05em",
          }}
        >
          Hello, I'm
        </motion.div>

        {/* Name with dramatic effect */}
        <motion.h1
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontWeight: "900",
            background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 40%, #3b82f6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "1rem",
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            textShadow: "0 0 40px rgba(59, 130, 246, 0.3)",
            position: "relative",
          }}
        >
          Won Lee
          
          {/* Animated underline */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1, delay: 1.2, ease }}
            style={{
              height: "4px",
              background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)",
              position: "absolute",
              bottom: "-10px",
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: "2px",
              boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
            }}
          />
        </motion.h1>

        {/* Rotating skill showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          style={{
            fontSize: "1.4rem",
            color: "rgba(255, 255, 255, 0.9)",
            fontWeight: "600",
            marginBottom: "2rem",
            lineHeight: "1.6",
            minHeight: "3rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          I specialize in{" "}
          <motion.span
            key={currentSkill}
            initial={{ opacity: 0, y: 20, rotateX: 90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -20, rotateX: -90 }}
            transition={{ duration: 0.5 }}
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontWeight: "700",
              textShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
            }}
          >
            {skills[currentSkill]}
          </motion.span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
          style={{
            fontSize: "1.25rem",
            color: "rgba(255, 255, 255, 0.8)",
            lineHeight: "1.8",
            maxWidth: "600px",
            margin: "0 auto 3rem",
            fontWeight: "400",
          }}
        >
          I build clean, fast, and creative experiences that combine cutting-edge technology with exceptional user experience. Let's bring your vision to life.
        </motion.p>

        {/* Call to action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease }}
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <motion.button
            onClick={() => {
              const target = document.getElementById("projects");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(59, 130, 246, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              color: "white",
              padding: "1rem 2.5rem",
              borderRadius: "50px",
              border: "none",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3)",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <span style={{ position: "relative", zIndex: 1 }}>View My Work</span>
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
                zIndex: 0,
              }}
            />
          </motion.button>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderColor: "rgba(255, 255, 255, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "transparent",
              color: "white",
              padding: "1rem 2.5rem",
              borderRadius: "50px",
              border: "2px solid rgba(255, 255, 255, 0.3)",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              backdropFilter: "blur(10px)",
            }}
          >
            Let's Connect
          </motion.button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          style={{
            position: "absolute",
            bottom: "2rem",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            style={{
              width: "2px",
              height: "30px",
              background: "linear-gradient(to bottom, #3b82f6, transparent)",
              borderRadius: "1px",
            }}
          />
        </motion.div>
      </div>

      {/* Particles effect */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        pointerEvents: "none",
      }}>
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              width: "4px",
              height: "4px",
              background: "rgba(59, 130, 246, 0.6)",
              borderRadius: "50%",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 10px rgba(59, 130, 246, 0.8)",
            }}
          />
        ))}
      </div>
    </motion.section>
  );
}