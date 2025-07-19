import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Import tech stack icons
import reactIcon from "../assets/react.png";
import javascriptIcon from "../assets/javascript.png";
import nodejsIcon from "../assets/nodejs.png";
import htmlIcon from "../assets/html.png";
import cssIcon from "../assets/css.png";
import pythonIcon from "../assets/python.png";
import gitIcon from "../assets/git.png";
import postgresqlIcon from "../assets/postgresql.png";
import typescriptIcon from "../assets/typescript.png";
import vueIcon from "../assets/vue.png";
import sassIcon from "../assets/sass.png";
import nextjsIcon from "../assets/nextjs.png";
import wordpressIcon from "../assets/wordpress.png";
import figmaIcon from "../assets/figma.png";
import mongodbIcon from "../assets/mongodb.png";
import csharpIcon from "../assets/csharp.png";
import phpIcon from "../assets/php.png";
import mysqlIcon from "../assets/mysql.png";
import laravelIcon from "../assets/laravel.png";
import graphqlIcon from "../assets/graphql.png";
import awsIcon from "../assets/aws.png";
import googlecloudIcon from "../assets/googlecloud.png";
import azureIcon from "../assets/azure.png";
import dockerIcon from "../assets/docker.png";
import kubernetesIcon from "../assets/kubernetes.png";

const ease = [0.6, -0.05, 0.01, 0.99];

const skills = [
  "React", "JavaScript", "Node.js", "Python", "HTML", "CSS", "Git",
  "PostgreSQL", "TypeScript", "Vue.js", "SASS", "Next.js", "WordPress", "Figma", "MongoDB", "C#", "PHP", "MySQL",
  "Laravel", "GraphQL", "AWS", "Google Cloud", "Azure", "Docker", "Kubernetes"
];

const techStack = [
  // Technologies with available icons
  { name: "React", icon: reactIcon, color: "#61DAFB" },
  { name: "JavaScript", icon: javascriptIcon, color: "#F7DF1E" },
  { name: "Node.js", icon: nodejsIcon, color: "#339933" },
  { name: "Python", icon: pythonIcon, color: "#3776AB" },
  { name: "HTML", icon: htmlIcon, color: "#E34F26" },
  { name: "CSS", icon: cssIcon, color: "#1572B6" },
  { name: "Git", icon: gitIcon, color: "#F05032" },
  { name: "PostgreSQL", icon: postgresqlIcon, color: "#336791" },
  { name: "TypeScript", icon: typescriptIcon, color: "#3178C6" },
  { name: "Vue.js", icon: vueIcon, color: "#4FC08D" },
  { name: "SASS", icon: sassIcon, color: "#CC6699" },
  { name: "Next.js", icon: nextjsIcon, color: "#000000" },
  { name: "WordPress", icon: wordpressIcon, color: "#21759B" },
  { name: "Figma", icon: figmaIcon, color: "#F24E1E" },
  { name: "MongoDB", icon: mongodbIcon, color: "#47A248" },
  { name: "C#", icon: csharpIcon, color: "#239120" },
  { name: "PHP", icon: phpIcon, color: "#777BB4" },
  { name: "MySQL", icon: mysqlIcon, color: "#4479A1" },
  { name: "Laravel", icon: laravelIcon, color: "#FF2D20" },
  { name: "GraphQL", icon: graphqlIcon, color: "#E10098" },
  { name: "AWS", icon: awsIcon, color: "#FF9900" },
  { name: "Google Cloud", icon: googlecloudIcon, color: "#4285F4" },
  { name: "Azure", icon: azureIcon, color: "#0078D4" },
  { name: "Docker", icon: dockerIcon, color: "#2496ED" },
  { name: "Kubernetes", icon: kubernetesIcon, color: "#326CE5" },
];const FloatingOrb = ({ index }) => (
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

const TechIcon = ({ tech, index, position, onAnimationComplete }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 0.7, 0.7, 0],
      scale: [0, 1, 1.1, 0],
      y: [0, -30, -60, -90],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 8,
      delay: index * 0.8,
      ease: "easeInOut"
    }}
    onAnimationComplete={() => {
      if (index === 6) { // Last bubble (index 6 of 7 bubbles)
        onAnimationComplete();
      }
    }}
    style={{
      position: "absolute",
      left: `${position?.left || 15 + (index * 10)}%`,
      top: `${position?.top || 25 + (index * 9) % 50}%`,
      zIndex: 1,
      background: `linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02))`,
      padding: "0.8rem",
      borderRadius: "12px",
      border: `1px solid rgba(255, 255, 255, 0.15)`,
      backdropFilter: "blur(15px)",
      boxShadow: `0 4px 15px rgba(0, 0, 0, 0.1), 0 0 10px ${tech.color}30`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    {tech.icon ? (
      <img
        src={tech.icon}
        alt={tech.name}
        style={{
          width: "32px",
          height: "32px",
          filter: `drop-shadow(0 0 8px ${tech.color}80)`,
          transition: "all 0.3s ease",
        }}
      />
    ) : (
      <div
        style={{
          fontSize: "0.7rem",
          fontWeight: "700",
          color: tech.color,
          textAlign: "center",
          textShadow: `0 0 8px ${tech.color}80`,
          lineHeight: "1.2",
          maxWidth: "32px",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {tech.name.length > 6 ? tech.name.substring(0, 4) + "..." : tech.name}
      </div>
    )}
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

// Function to shuffle array
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Function to generate random positions
const generateRandomPositions = (count) => {
  return Array.from({ length: count }, () => ({
    left: Math.random() * 80 + 10, // 10% to 90% from left
    top: Math.random() * 60 + 20,  // 20% to 80% from top
  }));
};

export default function Hero() {
  const [currentSkill, setCurrentSkill] = useState(0);
  const [shuffledTechStack, setShuffledTechStack] = useState([]);
  const [randomPositions, setRandomPositions] = useState([]);
  const [animationKey, setAnimationKey] = useState(0);

  // Function to get a random tech item
  const getRandomTech = () => {
    return techStack[Math.floor(Math.random() * techStack.length)];
  };

  // Function to get 7 unique random tech items
  const getUniqueRandomTech = (count = 7) => {
    const shuffled = shuffleArray(techStack);
    return shuffled.slice(0, count);
  };

  // Function to regenerate tech stack with new random items
  const regenerateTechStack = () => {
    const newTechStack = getUniqueRandomTech(7);
    const newPositions = generateRandomPositions(7);
    setShuffledTechStack(newTechStack);
    setRandomPositions(newPositions);
    setAnimationKey(prev => prev + 1); // Force re-render with new key
  };

  // Handle when animation cycle completes
  const handleAnimationComplete = () => {
    // Wait a bit before starting new cycle
    setTimeout(() => {
      regenerateTechStack();
    }, 1000);
  };

  useEffect(() => {
    // Initialize with 7 random tech items
    regenerateTechStack();

    const skillInterval = setInterval(() => {
      setCurrentSkill((prev) => (prev + 1) % skills.length);
    }, 3000);

    return () => {
      clearInterval(skillInterval);
    };
  }, []);

  return (
    <div
      id="hero"
      style={{
        padding: 0,
        margin: 0,
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
          radial-gradient(circle at 20% 50%, rgba(59,130,246,0.03), transparent),
          radial-gradient(circle at 80% 20%, rgba(236,72,153,0.03), transparent)
        `,
          animation: "float 6s ease-in-out infinite",
          opacity: 0.4,
        }}
      />

      <div
        style={{
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
        }}
      />

      {[...Array(4)].map((_, i) => (
        <FloatingOrb key={i} index={i} />
      ))}

      {shuffledTechStack.map((tech, index) => (
        <TechIcon
          key={`${tech.name}-${index}-${animationKey}`}
          tech={tech}
          index={index}
          position={randomPositions[index]}
          onAnimationComplete={handleAnimationComplete}
        />
      ))}

      <div
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, pointerEvents: "none" }}
      >
        {[...Array(12)].map((_, i) => (
          <Particle key={i} index={i} />
        ))}
      </div>

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

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          style={{
            fontSize: "clamp(3rem, 8vw, 5.5rem)",
            fontWeight: "800",
            color: "#ffffff",
            marginBottom: "1.5rem",
            letterSpacing: "-0.02em",
            lineHeight: "1.1",
            position: "relative",
          }}
        >
          Won Lee
        </motion.h1>

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
              background:
                "linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.15))",
              padding: "0.4rem 1rem",
              borderRadius: "12px",
              border: "1px solid rgba(59, 130, 246, 0.3)",
              boxShadow:
                "0 4px 15px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(15px)",
              textShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
            }}
          >
            {skills[currentSkill]}
          </motion.span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease }}
          style={{
            fontSize: "1.1rem",
            color: "rgba(255, 255, 255, 0.7)",
            lineHeight: "1.7",
            maxWidth: "600px",
            margin: "0 auto 0",
            fontWeight: "400",
          }}
        >
          I create fast, clean digital experiences that merge cutting-edge tech with intuitive design. Let’s build something exceptional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease }}
          style={{
            display: "flex",
            gap: "1.5rem",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "2rem",
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
              backgroundColor: "rgba(255, 255, 255, 0.12)",
              boxShadow: "0 10px 30px rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              background: "linear-gradient(135deg, #008cffff, #ff00ffe6)",
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
            onClick={() => {
              const target = document.getElementById("contact");
              if (target) {
                target.scrollIntoView({ behavior: "smooth" });
              }
            }}
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
        body {
          margin: 0;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }
        *::selection {
          background: white;
          color: black;
        }
      `}</style>
    </div>
  );
}
