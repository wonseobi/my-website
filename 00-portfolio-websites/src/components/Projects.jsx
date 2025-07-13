import { motion } from "framer-motion";

const containerVariants = {
  visible: { transition: { staggerChildren: 0.05 } }, // faster stagger
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
  { title: "🌐 Personal Portfolio", desc: "A modern, responsive site." },
  { title: "📱 Mobile App UI", desc: "Sleek concept UI design." },
  { title: "📊 Admin Dashboard", desc: "Dark-mode friendly admin panel." },
];

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        style={{ listStyle: "none", padding: 0, display: "grid", gridGap: "2rem", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))" }}
      >
        {projects.map((proj, i) => (
          <motion.li
            key={i}
            variants={itemVariants}
            whileHover={{
              scale: 1.1,
              y: -10,
              boxShadow: "0 10px 40px rgba(255, 255, 255, 0.6)", // lighter white glow
              transition: { duration: 0.2, ease: "easeOut" },     // faster and no delay
            }}
            style={{
              background: "rgba(255,255,255,0.05)",
              borderRadius: "1rem",
              padding: "2rem",
              boxShadow: "0 4px 30px rgba(0,0,0,0.2)",
              willChange: "transform, box-shadow",
            }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
