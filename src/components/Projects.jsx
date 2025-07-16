import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// Image imports
import certerusImg from "../assets/certerusapp.png";
import lucesImg from "../assets/luces.png";
import nearbyImg from "../assets/nearby.png";
import flowmeImg from "../assets/flowme.png";
import aztecplumbingImg from "../assets/aztecplumbing.png";
import hotelfiestaImg from "../assets/hotelfiesta.png";
import plaforamaImg from "../assets/plaforama.png";
import securlifeImg from "../assets/securlife.png";
import casarooftopImg from "../assets/casarooftop.png";
import { FiExternalLink } from "react-icons/fi";

const containerVariants = { visible: { transition: { staggerChildren: 0.05 } }, hidden: {} };
const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const projects = [
  { title: "📱 Official Certerus App", desc: "Mobile app for securely managing domains and websites crossplatform for iOS/Android.", img: certerusImg, tags: ["React Native", "Expo Go", "RESTful APIs"], accent: "from-red-500 to-green-500", url:"https://github.com/wonseobi/Certerus-App" },
  { title: "🎄 Luces y Novedades", desc: "Website showcasing holiday decorations with appealing visuals and smooth user experience.", img: lucesImg, tags: ["JavaScript", "Bootstrap", "HTML/CSS"], accent: "from-blue-500 to-purple-500", url:"https://luces.sitios.pro/" },
  { title: "📍 Nearby", desc: "Web app for discovering local events, concerts, and cultural experiences with easy navigation.", img: nearbyImg, tags: ["PHP", "JavaScript", "Laravel"], accent: "from-pink-500 to-red-500", url:"https://nortips4trips.com/" },
  { title: "🧭 Flowme", desc: "Platform for managing teams, projects, and tasks to improve collaboration and productivity.", img: flowmeImg, tags: ["JavaScript", "MySQL", "RESTful APIs"], accent: "from-sky-500 to-indigo-500", url:"https://flowme.work/" },
  { title: "🔧 Aztec Plumbing", desc: "Landing page highlighting plumbing services and quality tools for residential and commercial clients.", img: aztecplumbingImg, tags: ["Wordpress", "Figma", "JavaScript"], accent: "from-blue-600 to-teal-400", url:"https://aztec-plumbing.com/conocenos/" },
  { title: "🏨 Hotel Fiesta Versalles", desc: "Hotel website featuring easy reservation booking and an accessible, user-friendly interface.", img: hotelfiestaImg, tags: ["React", "Booking System", "Accessibility"], accent: "from-yellow-500 to-red-500", url:"https://hotelfiestaversalles.com.mx/" },
  { title: "🏗️ Plaforama", desc: "E-commerce site for construction materials with user login, cart, and integrated customer support.", img: plaforamaImg, tags: ["PHP", "MySQL", "Laravel"], accent: "from-orange-500 to-yellow-500", url:"https://plaforama.com/?srsltid=AfmBOooC5H8zcimxaXrnJxjw9N0uybTlokXlef8O12NncHhAysq3dp8z?srsltid=AfmBOooC5H8zcimxaXrnJxjw9N0uybTlokXlef8O12NncHhAysq3dp8z" },
  { title: "🛡️ Securlife", desc: "Website for personal protection services offering trained security staff, civil defense, and military-grade equipment.", img: securlifeImg, tags: ["JavaScript", "MySQL", "Figma"], accent: "from-gray-700 to-red-600", url:"https://securlife.com.mx/" },
  { title: "🌅 Casa Rooftop Geovana", desc: "Reservation site for a scenic Mexican-style rooftop house with a relaxing and inviting atmosphere.", img: casarooftopImg, tags: ["Wordpress", "JavaScript", "HTML/CSS"], accent: "from-amber-500 to-rose-400", url: "https://casarooftopgeovana.com/" },
];

const styles = {
  section: {
    background: "linear-gradient(135deg, rgba(15, 23, 42, 0.95), rgba(30, 41, 59, 0.85))",
    padding: "4rem 0", margin: 0,
    boxShadow: "0 20px 60px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
    backdropFilter: "blur(20px)", overflow: "hidden", position: "relative",
  },
  card: {
    background: "rgba(255,255,255,0.08)",
    borderRadius: "1.5rem", minWidth: "340px", maxWidth: "340px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)",
    display: "flex", flexDirection: "column", overflow: "hidden",
    cursor: "grab", position: "relative", backdropFilter: "blur(10px)"
  },
  headerText: {
    fontSize: "3rem", fontWeight: 800,
    background: "linear-gradient(135deg, #fff, #e2e8f0)",
    WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
    marginBottom: "1rem", letterSpacing: "-0.02em"
  },
  tag: {
    background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.9)",
    padding: "0.25rem 0.75rem", borderRadius: "1rem", fontSize: "0.75rem",
    fontWeight: 500, border: "1px solid rgba(255,255,255,0.2)"
  }
};

export default function Projects() {
  const [dragProgress, setDragProgress] = useState(0);
  const [dragLimits, setDragLimits] = useState({ left: 0, right: 0 });
  const containerRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    function updateDragLimits() {
      if (containerRef.current && listRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const listWidth = listRef.current.scrollWidth;
        const left = Math.min(0, containerWidth - listWidth);
        setDragLimits({ left, right: 0 });
      }
    }
    updateDragLimits();
    window.addEventListener('resize', updateDragLimits);
    return () => window.removeEventListener('resize', updateDragLimits);
  }, []);

  return (
    <div id="projects" style={styles.section}>
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.1), transparent), radial-gradient(circle at 80% 20%, rgba(236,72,153,0.1), transparent)",
        animation: "float 6s ease-in-out infinite"
      }} />
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        *::selection { background: white; color: black; }
      `}</style>

      <section style={{ padding: 0, position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <motion.h2 initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={styles.headerText}>
            My Featured Projects
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto", lineHeight: "1.6" }}>
            Discover my latest projects • Scroll to explore past and present works
          </motion.p>
        </div>

        <motion.div style={{ overflow: "visible", width: "100%", padding: "1rem 0 2rem" }} ref={containerRef}>
          <motion.ul
            ref={listRef}
            variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}
            style={{ display: "flex", gap: "2rem", listStyle: "none", padding: 0, margin: 0 }}
            drag="x"
            dragConstraints={dragLimits}
            whileTap={{ cursor: "grabbing" }}
            onDrag={(e, info) => setDragProgress(Math.min(Math.abs(info.offset.x) / 1000, 1))}
          >
            {projects.map((p, i) => (
              <motion.li key={i} variants={itemVariants} whileHover={{ y: -10, scale: 1.01, transition: { duration: 0.15 } }} style={styles.card}>
                <div style={{ height: "4px", background: `linear-gradient(90deg, ${p.accent})`, position: "absolute", top: 0, left: 0, right: 0, zIndex: 2 }} />
                <div style={{ position: "relative" }}>
                  <img src={p.img} alt={p.title} draggable={false} style={{ width: "100%", height: 200, objectFit: "cover", borderRadius: "1.5rem 1.5rem 0 0" }} />
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 60, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />
                </div>
                <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem", flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem" }}>
                        <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#fff", margin: 0 }}>
                            {p.title}
                        </h3>
                        <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ textDecoration: "none", display: "flex", alignItems: "center", color: "#93c5fd" }}
                        >
                        <FiExternalLink
                            size={18}
                            color="#dbdbdb"
                            style={{
                            transition: "transform 0.15s ease",
                            }}
                            onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.2)")}
                            onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                        />
                        </a>
                    </div>
                  <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem", lineHeight: "1.5", flex: 1 }}>{p.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0rem" }}>
                    {p.tags.map((t, idx) => <span key={idx} style={styles.tag}>{t}</span>)}
                  </div>
                </div>
                <motion.div initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} style={{
                  position: "absolute", inset: 0,
                  background: `linear-gradient(135deg, ${p.accent.replace('from-', 'rgba(').replace('to-', 'rgba(').replace('-500', ', 0.1)')})`,
                  pointerEvents: "none", borderRadius: "1.5rem"
                }} />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "2rem", gap: "0.5rem" }}>
          <div style={{ width: 24, height: 2, background: "rgba(255,255,255,0.3)", borderRadius: 1 }}>
            <div style={{ width: `${dragProgress * 100}%`, height: "100%", background: "linear-gradient(90deg, #3b82f6, #8b5cf6)", transition: "width 0.3s ease" }} />
          </div>
          <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", fontWeight: 500 }}>Drag to explore</span>
        </div>
      </section>
    </div>
  );
}
