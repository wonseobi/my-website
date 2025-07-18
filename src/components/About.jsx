import { motion } from "framer-motion";
import profileImg from "../assets/profile.PNG";

const styles = {
  section: {
    padding: "4rem 0",
    margin: 0,
    position: "relative",
    isolation: "isolate",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 2rem",
    position: "relative",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "40vh",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "4rem",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: "900px",
  },
  textContent: {
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem",
  },
  name: {
    fontSize: "3.5rem",
    fontWeight: 800,
    background: "linear-gradient(135deg, #fff, #e2e8f0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    margin: 0,
    padding: 0,
    letterSpacing: "-0.02em",
    lineHeight: "1.1",
  },
  subtitle: {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "rgba(255,255,255,0.9)",
    margin: "0.1rem 0",
    padding: 0,
    background: "linear-gradient(135deg, #3b82f6, #f634d2ff)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    lineHeight: "1.2",
  },
  paragraph: {
    color: "rgba(255,255,255,0.8)",
    fontSize: "1.1rem",
    lineHeight: "1.7",
    maxWidth: "600px",
  },
  techStackContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    marginTop: "0.5rem",
  },
  techStackTitle: {
    fontSize: "1.1rem",
    fontWeight: 600,
    color: "rgba(255,255,255,0.9)",
    margin: 0,
    padding: 0,
    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  techStackGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "0.75rem",
    marginTop: "0.5rem",
  },
  techStackItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "0.5rem 0.75rem",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
    cursor: "default",
  },
  techStackBullet: {
    width: "4px",
    height: "4px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #ffffffff, #ffffffff)",
    flexShrink: 0,
  },
  techStackText: {
    color: "rgba(255,255,255,0.85)",
    fontSize: "0.9rem",
    fontWeight: 500,
    margin: 0,
  },
  imageContainer: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    position: "relative",
    width: "280px",
    height: "280px",
    borderRadius: "50%",
    overflow: "hidden",
    background: "rgba(255,255,255,0.08)",
    boxShadow:
      "0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "50%",
  },
  gradientRing: {
    position: "absolute",
    inset: "-4px",
    borderRadius: "50%",
    background:
      "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)",
    animation: "rotate 3s linear infinite",
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const techStackVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const techStackItemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function About() {
  const techStack = [
    "React", "Python", "Node.js", "TypeScript", "MongoDB",
    "Next.js", "JavaScript", "AWS", "Git",
  ];

  return (
    <div id="about" style={styles.section}>
      {/* Animated background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 80% 20%, rgba(59,130,246,0.05), transparent), radial-gradient(circle at 20% 80%, rgba(236,72,153,0.05), transparent)",
          animation: "float 6s ease-in-out infinite",
          opacity: 0.6,
        }}
      />

      {/* CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0);
          }
          50% {
            transform: translateY(-10px) rotate(1deg);
          }
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        *::selection {
          background: white;
          color: black;
        }

        .tech-stack-item:hover {
          background: rgba(255, 255, 255, 0.1) !important;
          border-color: rgba(255, 255, 255, 0.3) !important;
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.15) !important;
        }

        @media (max-width: 768px) {
          .content-wrapper {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
            text-align: center !important;
          }
          .name {
            font-size: 2.5rem !important;
          }
          .subtitle {
            font-size: 1.25rem !important;
          }
          .image-wrapper {
            width: 220px !important;
            height: 220px !important;
          }
          .tech-stack-grid {
            grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)) !important;
          }
        }
      `}</style>

      <div style={styles.container}>
        <div className="content-wrapper" style={styles.contentWrapper}>
          {/* Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={styles.textContent}
          >
            <motion.h1
              variants={textVariants}
              className="name"
              style={styles.name}
            >
              Won Lee
            </motion.h1>

            <motion.h2
              variants={{ ...textVariants, transition: { duration: 0.6, delay: 0.2 } }}
              className="subtitle"
              style={styles.subtitle}
            >
              Full-Stack Developer & UI/UX Designer
            </motion.h2>

            <motion.p
              variants={{ ...textVariants, transition: { duration: 0.6, delay: 0.4 } }}
              style={styles.paragraph}
            >
              I'm a passionate developer with a love for creating beautiful, functional, and user-centered digital experiences. With expertise in modern web technologies and a keen eye for design, I transform ideas into reality through clean code and innovative solutions. I enjoy working on challenging projects that push the boundaries of what's possible on the web.
            </motion.p>

            {/* Tech Stack Section */}
            <motion.div
              variants={{ ...techStackVariants, transition: { duration: 0.6, delay: 0.6 } }}
              style={styles.techStackContainer}
            >
              <h3 style={styles.techStackTitle}>Tech Stack</h3>
              <div className="tech-stack-grid" style={styles.techStackGrid}>
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech}
                    variants={techStackItemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="tech-stack-item"
                    style={styles.techStackItem}
                  >
                    <div style={styles.techStackBullet} />
                    <span style={styles.techStackText}>{tech}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Image section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={imageVariants}
            style={styles.imageContainer}
          >
            <div style={styles.gradientRing} />
            <div className="image-wrapper" style={styles.imageWrapper}>
              <img src={profileImg} alt="Your Name" style={styles.image} />
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              style={{
                position: "absolute",
                top: "20%",
                right: "-20px",
                width: "60px",
                height: "60px",
                background: "rgba(59,130,246,0.2)",
                borderRadius: "50%",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              style={{
                position: "absolute",
                bottom: "10%",
                left: "-30px",
                width: "40px",
                height: "40px",
                background: "rgba(236,72,153,0.2)",
                borderRadius: "50%",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
