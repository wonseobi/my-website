import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiDownload, FiChevronRight, FiCalendar, FiMapPin } from "react-icons/fi";

const experiences = [
  {
    id: 3,
    title: "Software Engineering Student",
    company: "UANL",
    location: "Monterrey, Mexico",
    period: "2021 – 2025",
    type: "Academic",
    description: "Studied Software Engineering with a focus on core development principles, teamwork, and technical growth.",
    details: [
      "Participated in team-based academic software projects.",
      "Supported peers with development work and collaborative problem-solving.",
      "Built strong foundations in algorithms, programming, and system design.",
      "Demonstrated adaptability and fast learning in technical subjects."
    ],
    technologies: ["Team Collaboration", "Software Fundamentals", "Critical Thinking", "Problem Solving"],
    accent: "from-yellow-500 to-orange-500",
    companyColor: "#0b84f5ff"
  },
  {
    id: 2,
    title: "Frontend Developer Intern",
    company: "Cash App",
    location: "Remote, USA",
    period: "JUN 2023 - JAN 2024",
    type: "Internship",
    description: "Worked on creating modern and responsive user interfaces for a major U.S. banking app.",
    details: [
      "Developed user-facing features with JavaScript and implemented responsive design practices.",
      "Contributed to frontend development for scalable, production-grade UI systems.",
      "Focused on user experience and performance in financial services contexts.",
      "Collaborated with design and product teams in fast-paced agile workflows."
    ],
    technologies: ["JavaScript", "HTML", "CSS", "UX/UI"],
    accent: "from-green-500 to-blue-500",
    companyColor: "#00C244"
  },
  {
    id: 1,
    title: "Fullstack & Mobile Developer",
    company: "Certerus",
    location: "Monterrey, Mexico",
    period: "JAN 2025 - SEP 2025",
    type: "Full-time",
    description: "Developed mobile and web solutions that enabled new revenue streams and improved business operations.",
    details: [
      "Led development of the company's mobile app using React Native, launching a new business line.",
      "Designed and maintained RESTful APIs using JavaScript and PHP for both web and mobile platforms.",
      "Started as a WordPress web developer, building responsive and dynamic websites.",
      "Quickly transitioned into fullstack roles handling impactful projects across departments.",
      "Contributed to business growth through rapid development and technical innovation."
    ],
    technologies: ["React Native", "JavaScript", "PHP", "REST APIs", "WordPress", "HTML/CSS"],
    accent: "from-blue-500 to-purple-500",
    companyColor: "#ff9100ff"
  },
  {
    id: 4,
    title: "Frontend Software Engineer",
    company: "DDS Marketing",
    location: "Miami, Florida, USA",
    period: "OCT 2025 - Present",
    type: "Full-time",
    description: "Driving high-impact, user-focused web applications while shaping front-end architecture and collaborating with an international team.",
    details: [
      "Built responsive, dynamic web interfaces using React and TypeScript, boosting user engagement and app performance.",
      "Worked closely with global design teams via Figma, translating complex UI/UX concepts into pixel-perfect interfaces.",
      "Optimized performance and implemented reusable components, ensuring scalable front-end architecture.",
      "Integrated multiple APIs and managed application state efficiently, improving overall development speed.",
      "Leveraged full-stack knowledge and strong English proficiency to coordinate seamlessly with international backend teams."
    ],
    technologies: ["React", "TypeScript", "JavaScript", "HTML/CSS", "Figma", "REST APIs"],
    accent: "from-green-500 to-teal-500",
    companyColor: "#f626fdff"
  }
];

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const contentVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerVariants = {
    visible: isMobile ? {} : { transition: { staggerChildren: 0.1 } },
    hidden: {}
  };

  return (
    <div id="experience" style={{ padding: "4rem 0", position: "relative" }}>
      <div style={{
        position: "absolute",
        inset: 0,
        background: `
          radial-gradient(circle at 30% 70%, rgba(59,130,246,0.03), transparent),
          radial-gradient(circle at 70% 30%, rgba(236,72,153,0.03), transparent)
        `,
        animation: "float 6s ease-in-out infinite",
        opacity: 0.4,
      }} />

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem", position: "relative", zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h2 style={{ fontSize: "2.2rem", fontWeight: 800, background: "linear-gradient(135deg, #fff, #e2e8f0)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Professional Experience</h2>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.1rem", maxWidth: 600, margin: "0 auto 4rem", lineHeight: "1.6" }}>
            My journey through the tech industry • Click on any company to explore
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "400px 1fr", gap: "3rem", alignItems: "start" }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={{ position: isMobile ? "static" : "sticky", top: "2rem" }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem", padding: "0 1rem" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#fff", margin: 0 }}>Timeline</h3>
              <div style={{ flex: 1, height: "2px", background: "linear-gradient(90deg, rgba(255, 255, 255, 0.3), transparent)" }} />
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: "flex", flexDirection: "column", gap: "0.5rem", overflowX: isMobile ? "visible" : "hidden" }}
            >
              {experiences.map(exp => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  style={{
                    padding: "1.5rem",
                    background: "rgba(255,255,255,0.05)",
                    borderRadius: "1rem",
                    backdropFilter: "blur(10px)",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                    marginBottom: "0.5rem",
                  }}
                  onClick={() => setSelectedExperience(exp)}
                  whileTap={{ scale: 0.98 }}
                >
                  <div style={{
                    position: "absolute",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: "4px",
                    background: `linear-gradient(180deg, ${exp.accent})`,
                    opacity: selectedExperience?.id === exp.id ? 1 : 0.3,
                    transition: "opacity 0.3s ease",
                  }} />

                  <div style={{ fontSize: "1.1rem", fontWeight: 700, color: "#fff", display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.25rem" }}>
                    {exp.company.toUpperCase()}
                    <FiChevronRight size={16} style={{ transition: "transform 0.3s ease", transform: selectedExperience?.id === exp.id ? "rotate(90deg)" : "rotate(0deg)" }} />
                  </div>
                  <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", marginBottom: "0.5rem" }}>{exp.title}</div>
                  <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", fontWeight: 500 }}>{exp.period}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <div style={{ minHeight: "600px", position: "relative" }}>
            <AnimatePresence mode="wait">
              {selectedExperience ? (
                <motion.div
                  key={selectedExperience.id}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    borderRadius: "1.5rem",
                    padding: "2.5rem",
                    boxShadow: "0 10px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)",
                    backdropFilter: "blur(10px)",
                    height: "100%",
                    position: "relative",
                    overflow: "hidden"
                  }}
                >
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: `linear-gradient(90deg, ${selectedExperience.accent})`,
                    borderRadius: "1.5rem 1.5rem 0 0",
                  }} />

                  <h3 style={{ fontSize: "2rem", fontWeight: 700, color: "#fff", margin: "0 0 0.5rem 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span>{selectedExperience.title}</span>
                    <span style={{ fontSize: "1rem", fontWeight: 500, background: "rgba(255,255,255,0.1)", padding: "0.25rem 0.75rem", borderRadius: "1rem", color: "rgba(255,255,255,0.8)" }}>
                      {selectedExperience.type}
                    </span>
                  </h3>

                  <h4 style={{ fontSize: "1.3rem", fontWeight: 600, margin: "0 0 1rem 0", color: selectedExperience.companyColor || "#3b82f6" }}>
                    @ {selectedExperience.company}
                  </h4>

                  <div style={{ display: "flex", gap: "2rem", color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", marginBottom: "1.5rem", flexDirection: isMobile ? "column" : "row" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><FiCalendar size={16} /><span>{selectedExperience.period}</span></div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}><FiMapPin size={16} /><span>{selectedExperience.location}</span></div>
                  </div>

                  <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.1rem", lineHeight: "1.6", fontStyle: "italic", borderLeft: `3px solid ${selectedExperience.companyColor}`, paddingLeft: "1em", marginBottom: "2rem" }}>
                    "{selectedExperience.description}"
                  </div>

                  <ul style={{ margin: "0 0 2rem 0", paddingLeft: 0, listStyle: "none" }}>
                    {selectedExperience.details.map((detail, idx) => (
                        <li key={idx} style={{ color: "rgba(255,255,255,0.85)", fontSize: "1rem", lineHeight: "1.6", marginBottom: "1rem", paddingLeft: "1.5rem", position: "relative" }}>
                        <div style={{ position: "absolute", left: 0, top: "0.6rem", width: "6px", height: "6px", borderRadius: "50%", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)" }} />
                        {detail}
                        </li>
                    ))}
                    </ul>


                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                    {selectedExperience.technologies.map((tech, idx) => (
                      <span key={idx} style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.9)", padding: "0.5rem 1rem", borderRadius: "2rem", fontSize: "0.85rem", fontWeight: 500, border: "1px solid rgba(255,255,255,0.2)", transition: "all 0.3s ease" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100%", color: "rgba(255,255,255,0.5)", textAlign: "center", background: "rgba(255,255,255,0.08)", borderRadius: "1.5rem", padding: "2.5rem", backdropFilter: "blur(10px)" }}
                >
                  <div style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>Select a company to view details</div>
                  <div style={{ fontSize: "1rem", opacity: 0.7 }}>Click on any company from the list to explore my experience</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.button
          style={{ display: "flex", alignItems: "center", gap: "0.75rem", margin: "4rem auto 0", padding: "1.5rem 3rem", background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", color: "#fff", border: "none", borderRadius: "50px", fontSize: "1rem", fontWeight: 600, cursor: "pointer", transition: "all 0.3s ease", boxShadow: "0 10px 30px rgba(59,130,246,0.3)", textDecoration: "none" }}
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/my-website/cv.pdf";
            link.download = "Won_Lee_CV.pdf";
            link.target = "_blank";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FiDownload size={20} /> Download my CV
        </motion.button>
      </div>
    </div>
  );
}
