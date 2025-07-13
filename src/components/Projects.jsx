import { motion } from "framer-motion";
import { useState } from "react";
//Image imports
import certerusImg from "../assets/certerusapp.png";
import lucesImg from "../assets/luces.png";
import nearbyImg from "../assets/nearby.png";
import flowmeImg from "../assets/flowme.png";
import aztecplumbingImg from "../assets/aztecplumbing.png";
import hotelfiestaImg from "../assets/hotelfiesta.png";
import plaforamaImg from "../assets/plaforama.png";
import securlifeImg from "../assets/securlife.png";
import casarooftopImg from "../assets/casarooftop.png";

const containerVariants = {
  visible: { transition: { staggerChildren: 0.05 } },
  hidden: {},
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const projects = [
  {
    title: "📱 Official Certerus App",
    desc: "Mobile app for securely managing domains and websites crossplatform for iOS/Android.",
    img: certerusImg,
    tags: ["React Native", "Expo Go", "RESTful APIs"],
    accent: "from-red-500 to-green-500"
  },
  {
    title: "🎄 Luces y Novedades",
    desc: "Website showcasing holiday decorations with appealing visuals and smooth user experience.",
    img: lucesImg,
    tags: ["JavaScript", "Bootstrap", "HTML/CSS"],
    accent: "from-blue-500 to-purple-500"
  },
  {
    title: "📍 Nearby",
    desc: "Web app for discovering local events, concerts, and cultural experiences with easy navigation.",
    img: nearbyImg,
    tags: ["PHP", "JavaScript", "Laravel"],
    accent: "from-pink-500 to-red-500"
  },
  {
    title: "🧭 Flowme",
    desc: "Platform for managing teams, projects, and tasks to improve collaboration and productivity.",
    img: flowmeImg,
    tags: ["JavaScript", "MySQL", "RESTful APIs"],
    accent: "from-sky-500 to-indigo-500"
  },
  {
    title: "🔧 Aztec Plumbing",
    desc: "Landing page highlighting plumbing services and quality tools for residential and commercial clients.",
    img: aztecplumbingImg,
    tags: ["Wordpress", "Figma", "JavaScript"],
    accent: "from-blue-600 to-teal-400"
  },
  {
    title: "🏨 Hotel Fiesta Versalles",
    desc: "Hotel website featuring easy reservation booking and an accessible, user-friendly interface.",
    img: hotelfiestaImg,
    tags: ["React", "Booking System", "Accessibility"],
    accent: "from-yellow-500 to-red-500"
  },
  {
    title: "🏗️ Plaforama",
    desc: "E-commerce site for construction materials with user login, cart, and integrated customer support.",
    img: plaforamaImg,
    tags: ["PHP", "MySQL", "Laravel"],
    accent: "from-orange-500 to-yellow-500"
  },
  {
    title: "🛡️ Securlife",
    desc: "Website for personal protection services offering trained security staff, civil defense, and military-grade equipment.",
    img: securlifeImg,
    tags: ["JavaScript", "MySQL", "Figma"],
    accent: "from-gray-700 to-red-600"
  },
  {
    title: "🌅 Casa Rooftop Geovana",
    desc: "Reservation site for a scenic Mexican-style rooftop house with a relaxing and inviting atmosphere.",
    img: casarooftopImg,
    tags: ["Wordpress", "JavaScript", "HTML/CSS"],
    accent: "from-amber-500 to-rose-400"
  },
];

export default function Projects() {
  const [dragProgress, setDragProgress] = useState(0);

  return (
    <div id="projects" className="projects"
      style={{
        background: "linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.85) 100%)",
        padding: "4rem 0",
        margin: "2rem 0",
        boxShadow: "0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
        backdropFilter: "blur(20px)",
        overflow: "hidden",
        position: "relative",
      }}>
      
      {/* Animated background elements */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.1) 0%, transparent 50%)",
        animation: "float 6s ease-in-out infinite",
      }} />
      
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
          *::selection {
          background: white;
          color: black;
        }
      `}</style>

      <section className="projects" style={{ padding: "0 2rem", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ 
              fontSize: "3rem",
              fontWeight: "800",
              background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "1rem",
              letterSpacing: "-0.02em"
            }}
          >
            My Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "1.1rem",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6"
            }}
          >
            Discover my latest projects • Scroll to explore past and present works
          </motion.p>
        </div>

        <motion.div
          style={{
            overflowX: "visible",
            overflowY: "visible", 
            width: "100%",
            paddingBottom: "2rem", 
            paddingTop: "1rem", 
          }}
        >
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2rem",
              listStyle: "none",
              padding: 0,
              margin: 0,
              width: "100%",
              minWidth: 0,
            }}
            drag="x"
            dragConstraints={{ 
              left: -(projects.length * 360 - (typeof window !== 'undefined' ? window.innerWidth : 1200) + 500),
              right: 0 
            }}
            whileTap={{ cursor: "grabbing" }}
            onDrag={(event, info) => {
              const progress = Math.abs(info.offset.x) / 1000;
              setDragProgress(Math.min(progress, 1));
            }}
          >
            {projects.map((proj, i) => (
             <motion.li
              key={i}
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.01,
                transition: { duration: 0.15, ease: "easeOut" },
              }}
              style={{
                transition: "all 0.15s ease-out", // <- Add this line to reduce return delay
                background: "rgba(255, 255, 255, 0.08)",
                borderRadius: "1.5rem",
                minWidth: "340px",
                maxWidth: "340px",
                padding: 0,
                boxShadow: "0 10px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)",
                willChange: "transform, box-shadow",
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
                overflow: "hidden",
                cursor: "grab",
                position: "relative",
                backdropFilter: "blur(10px)",
              }}
            >
                {/* Gradient accent bar */}
                <div
                  style={{
                    height: "4px",
                    background: `linear-gradient(90deg, ${proj.accent})`,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 2,
                  }}
                />
                
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <img
                    src={proj.img}
                    alt={proj.title}
                    draggable={false}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                      borderRadius: "1.5rem 1.5rem 0 0",
                      marginBottom: 0,
                      display: "block",
                      userSelect: "none",
                      pointerEvents: "auto",
                      transition: "transform 0.4s ease",
                    }}
                  />
                  
                  {/* Overlay gradient */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: "60px",
                      background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                      pointerEvents: "none",
                    }}
                  />
                </div>
                
                <div
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    flex: "1 1 auto",
                    gap: "1rem",
                  }}
                >
                  <h3 style={{ 
                    margin: 0, 
                    fontSize: "1.25rem", 
                    fontWeight: "700",
                    color: "#ffffff",
                    lineHeight: "1.3"
                  }}>
                    {proj.title}
                  </h3>
                  
                  <p style={{ 
                    margin: 0, 
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "0.9rem",
                    lineHeight: "1.5",
                    flex: "1"
                  }}>
                    {proj.desc}
                  </p>
                  
                  {/* Tags */}
                  <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginTop: "0.5rem"
                  }}>
                    {proj.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        style={{
                          background: "rgba(255, 255, 255, 0.1)",
                          color: "rgba(255, 255, 255, 0.9)",
                          padding: "0.25rem 0.75rem",
                          borderRadius: "1rem",
                          fontSize: "0.75rem",
                          fontWeight: "500",
                          border: "1px solid rgba(255, 255, 255, 0.2)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Hover effect overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, ${proj.accent.replace('from-', 'rgba(').replace('to-', 'rgba(').replace('-500', ', 0.1)')})`,
                    pointerEvents: "none",
                    borderRadius: "1.5rem",
                  }}
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        
        {/* Drag indicator */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
          gap: "0.5rem"
        }}>
          <div style={{
            width: "24px",
            height: "2px",
            background: "rgba(255, 255, 255, 0.3)",
            borderRadius: "1px",
            overflow: "hidden"
          }}>
            <div style={{
              width: `${dragProgress * 100}%`,
              height: "100%",
              background: "linear-gradient(90deg, #3b82f6, #8b5cf6)",
              transition: "width 0.3s ease"
            }} />
          </div>
          <span style={{
            color: "rgba(255, 255, 255, 0.5)",
            fontSize: "0.8rem",
            fontWeight: "500"
          }}>
            Drag to explore
          </span>
        </div>
      </section>
    </div>  
  );
}