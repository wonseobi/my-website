import { motion } from "framer-motion";

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
    title: "🎄 Luces y Novedades",
    desc: "Festividades y decoraciones navidenas.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "📱 Mobile App UI",
    desc: "Sleek concept UI design.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "📊 Admin Dashboard",
    desc: "Dark-mode friendly admin panel.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "🛒 E-commerce Platform",
    desc: "Modern online store UI.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "🎨 Portfolio Gallery",
    desc: "Creative portfolio showcase.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "🌐 Landing Page",
    desc: "High-conversion landing page.",
    img: "https://images.unsplash.com/photo-1467320424268-f91a16cf7c77?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "📅 Event Scheduler",
    desc: "Interactive event calendar.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "💬 Chat App",
    desc: "Real-time messaging UI.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "📷 Photo Blog",
    desc: "Minimalist photo blogging.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
];

export default function Projects() {
  return (
    <div
      style={{
        background: "rgba(20, 30, 40, 0.65)",
        padding: "2rem 0",
        margin: "2rem 0",
        boxShadow: "0 8px 40px rgba(0,0,0,0.18)",
        backdropFilter: "blur(4px)",
        borderRadius: "2rem",
        overflow: "hidden",
        width: "100%",
      }}
    >
      <section className="projects" style={{ padding: "0 2rem" }}>
        <h2 style={{ marginBottom: "2rem" }}>My Projects</h2>
        <motion.div
          style={{
            overflowX: "hidden",
            overflowY: "visible", // Changed to visible to prevent hover cutoff
            width: "100%",
            paddingBottom: "2rem", // Added more padding for hover effect
            paddingTop: "1rem", // Added padding top for hover effect
          }}
        >
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "2rem",
              listStyle: "none",
              padding: 0,
              margin: 0,
              width: "max-content", // Changed to max-content to allow full scroll
              minWidth: "100%", // Ensure it spans full width
            }}
            drag="x"
            dragConstraints={{ 
              left: -(projects.length * 360 - window.innerWidth + 160), // Dynamic constraint based on content
              right: 0 
            }}
            whileTap={{ cursor: "grabbing" }}
          >
            {projects.map((proj, i) => (
              <motion.li
                key={i}
                variants={itemVariants}
                whileHover={{
                  y: -15, // Increased hover lift
                  boxShadow: "0 10px 30px rgba(255, 255, 255, 0.3)",
                  scale: 1.02, // Added slight scale on hover
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  borderRadius: "1rem",
                  minWidth: "320px",
                  maxWidth: "340px",
                  padding: 0,
                  boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
                  willChange: "transform, box-shadow",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "stretch",
                  overflow: "hidden",
                  cursor: "grab",
                  userSelect: "none",
                  // Ensure first card starts at left edge
                  marginLeft: i === 0 ? "0" : "0",
                }}
              >
                <img
                  src={proj.img}
                  alt={proj.title}
                  draggable={false}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: "1rem 1rem 0 0",
                    marginBottom: 0,
                    boxShadow: "none",
                    display: "block",
                    userSelect: "none",
                    pointerEvents: "none", // Prevent image interference with drag
                  }}
                />
                <div
                  style={{
                    padding: "1.2rem 1.2rem 1.5rem 1.2rem",
                    display: "flex",
                    flexDirection: "column",
                    flex: "1 1 auto",
                  }}
                >
                  <h3 style={{ 
                    margin: "0 0 0.5rem 0",
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: "1.1rem",
                    fontWeight: "600"
                  }}>{proj.title}</h3>
                  <p style={{ 
                    margin: 0,
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: "0.9rem",
                    lineHeight: "1.4"
                  }}>{proj.desc}</p>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </section>
    </div>
  );
}