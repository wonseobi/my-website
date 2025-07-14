import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const ease = [0.6, -0.05, 0.01, 0.99];

const skills = [

  "React", "Python", "TypeScript", "React Native", "Node.js", "UI/UX Design", "GraphQL", "JavaScript", "HTML/CSS", "MongoDB", "Three.js", "Next.js", "Vite", "AWS"
];

const techStack = [
  { name: "React", symbol: "⚛️", color: "#61DAFB" },
  { name: "JavaScript", symbol: "JS", color: "#F7DF1E" },
  { name: "Node.js", symbol: "⬢", color: "#339933" },
  { name: "TypeScript", symbol: "TS", color: "#3178C6" },
  { name: "Python", symbol: "🐍", color: "#3776AB" },
  { name: "HTML", symbol: "</>", color: "#E34F26" },
  { name: "CSS", symbol: "{}", color: "#1572B6" },
  { name: "Git", symbol: "⎇", color: "#F05032" },
];

const FloatingOrb = ({ index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.3, 0.6, 0.3, 0],
      scale: [0, 1, 1.2, 1, 0],
      x: [0, Math.sin(index * 0.5) * 40, Math.cos(index * 0.8) * 60, Math.sin(index * 1.2) * 30, 0],
      y: [0, -20, -40, -60, -80],
    }}
    transition={{
      duration: 6 + index * 0.5,
      repeat: Infinity,
      delay: index * 0.8,
      ease: "easeInOut"
    }}
    style={{
      position: "absolute",
      width: "8px",
      height: "8px",
      background: `radial-gradient(circle, ${["#3b82f6", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b", "#ef4444"][index]} 0%, transparent 70%)`,
      borderRadius: "50%",
      left: `${20 + (index * 12)}%`,
      top: `${30 + (index * 8) % 40}%`,
      boxShadow: `0 0 20px ${["#3b82f6", "#8b5cf6", "#ec4899", "#10b981", "#f59e0b", "#ef4444"][index]}60`,
      filter: "blur(1px)",
    }}
  />
);

const TechIcon = ({ tech, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.7, 0.7, 0],
      scale: [0, 1, 1.1, 0],
      y: [0, -30, -60, -90],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      delay: index * 0.8,
      ease: "easeInOut"
    }}
    style={{
      position: "absolute",
      fontSize: tech.symbol.length > 1 ? "1.1rem" : "1.8rem",
      fontWeight: "700",
      left: `${15 + (index * 10)}%`,
      top: `${25 + (index * 9) % 50}%`,
      zIndex: 1,
      color: tech.color,
      textShadow: `0 0 15px ${tech.color}80`,
      background: tech.symbol.length > 1 ? `linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))` : 'transparent',
      padding: tech.symbol.length > 1 ? "0.5rem 0.8rem" : "0.4rem",
      borderRadius: tech.symbol.length > 1 ? "10px" : "50%",
      border: tech.symbol.length > 1 ? `1px solid rgba(255, 255, 255, 0.15)` : 'none',
      backdropFilter: tech.symbol.length > 1 ? "blur(15px)" : 'none',
      fontFamily: tech.symbol.length > 1 ? "'Inter', -apple-system, sans-serif" : 'inherit',
      boxShadow: tech.symbol.length > 1 ? `0 4px 15px rgba(0, 0, 0, 0.1), 0 0 10px ${tech.color}30` : `0 0 15px ${tech.color}40`,
    }}
  >
    {tech.symbol}
  </motion.div>
);

const Particle = ({ index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.8, 0],
      scale: [0, 1, 0],
      x: [0, Math.random() * 200 - 100],
      y: [0, Math.random() * 200 - 100],
    }}
    transition={{
      duration: 4 + Math.random() * 3,
      repeat: Infinity,
      delay: Math.random() * 3,
      ease: "easeInOut",
    }}
    style={{
      position: "absolute",
      width: "6px",
      height: "6px",
      background: `radial-gradient(circle, ${["#3b82f6", "#8b5cf6", "#ec4899"][index % 3]} 0%, transparent 70%)`,
      borderRadius: "50%",
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      boxShadow: `0 0 15px ${["#3b82f6", "#8b5cf6", "#ec4899"][index % 3]}80`,
      filter: "blur(0.5px)",
    }}
  />
);

export default function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="hero" style={{
      background: "linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.85))",
      padding: "0", // Remove top and bottom gap
      margin: "0",
      boxShadow: "0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
      backdropFilter: "blur(20px)",
      overflow: "hidden",
      position: "relative",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      {/* Background gradients */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `
          radial-gradient(circle at 20% 50%, rgba(59,130,246,0.1), transparent),
          radial-gradient(circle at 80% 20%, rgba(236,72,153,0.1), transparent)
        `,
        animation: "float 6s ease-in-out infinite"
      }} />

      {/* Grid pattern */}
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
        opacity: 0.4,
      }} />

      {/* Floating orbs */}
      {[...Array(6)].map((_, i) => (
        <FloatingOrb key={i} index={i} />
      ))}

      {/* Tech icons */}
      {techStack.map((tech, index) => (
        <TechIcon key={index} tech={tech} index={index} />
      ))}

      {/* Particles */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none" }}>
        {[...Array(12)].map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

      {/* Main content */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease }}
        style={{
          textAlign: "center",
          zIndex: 2,
          maxWidth: "800px",
          padding: "0 2rem",
          position: "relative",
        }}
      >
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          style={{
            fontSize: "1.1rem",
            color: "rgba(255, 255, 255, 0.7)",
            fontWeight: "500",
            marginBottom: "1rem",
            letterSpacing: "0.05em",
          }}
        >
          Hello, I'm
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            fontWeight: "800",
            background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #3b82f6 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            position: "relative",
          }}
        >
          Won Lee
        </motion.h1>

        {/* Animated underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "200px" }}
          transition={{ duration: 0.8, delay: 1.2, ease }}
          style={{
            height: "4px",
            background: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)",
            margin: "0 auto 2rem",
            borderRadius: "2px",
            boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
          }}
        />

        {/* Skill rotation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease }}
          style={{
            fontSize: "1.3rem",
            color: "rgba(255, 255, 255, 0.85)",
            fontWeight: "500",
            marginBottom: "2rem",
            lineHeight: "1.6",
            minHeight: "2.5rem",
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
            initial={{ opacity: 0, y: 15, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.8 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            style={{
              color: "#ffffff",
              fontWeight: "700",
              background: "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.15))",
              padding: "0.4rem 1rem",
              borderRadius: "12px",
              border: "1px solid rgba(59, 130, 246, 0.3)",
              boxShadow: "0 4px 15px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(15px)",
              textShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
            }}
          >
            {skills[currentSkill]}
          </motion.span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
          style={{
            fontSize: "1.1rem",
            color: "rgba(255, 255, 255, 0.7)",
            lineHeight: "1.7",
            maxWidth: "600px",
            margin: "0 auto 3rem",
            fontWeight: "400",
          }}
        >
          I create fast, clean digital experiences that merge cutting-edge tech with intuitive design. Let’s build something exceptional.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
              boxShadow: "0 15px 40px rgba(59, 130, 246, 0.4), 0 0 20px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
              color: "white",
              padding: "1rem 2.5rem",
              borderRadius: "16px",
              border: "none",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              boxShadow: "0 8px 25px rgba(59, 130, 246, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
              transition: "all 0.3s ease",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <span style={{ position: "relative", zIndex: 1 }}>View My Work</span>
            <motion.div
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6 }}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)",
                zIndex: 0,
              }}
            />
          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "rgba(255, 255, 255, 0.08)",
              color: "white",
              padding: "1rem 2.5rem",
              borderRadius: "16px",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              fontSize: "1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
              backdropFilter: "blur(15px)",
              boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </motion.section>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        *::selection { background: white; color: black; }
      `}</style>
    </div>
  );
}
