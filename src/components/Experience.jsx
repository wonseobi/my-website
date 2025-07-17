import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FiDownload, FiChevronRight, FiCalendar, FiMapPin, FiExternalLink } from "react-icons/fi";

const containerVariants = {
  visible: { transition: { staggerChildren: 0.1 } },
  hidden: {}
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const contentVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const experiences = [
  {
  id: 1,
  title: "Fullstack & Mobile Developer",
  company: "Certerus",
  location: "Monterrey, Mexico",
  period: "JAN 2025 - JAN 2027",
  type: "Full-time",
  description: "Developed mobile and web solutions that enabled new revenue streams and improved business operations.",
  details: [
    "Led development of the company's mobile app using React Native, launching a new business line",
    "Designed and maintained RESTful APIs using JavaScript and PHP for both web and mobile platforms",
    "Started as a WordPress web developer, building responsive and dynamic websites",
    "Quickly transitioned into fullstack roles handling impactful projects across departments",
    "Contributed to business growth through rapid development and technical innovation"
  ],
  technologies: ["React Native", "JavaScript", "PHP", "REST APIs", "WordPress"],
  accent: "from-blue-500 to-purple-500",
  companyColor: "#4F46E5"
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
    "Developed user-facing features with JavaScript and implemented responsive design practices",
    "Contributed to frontend development for scalable, production-grade UI systems",
    "Focused on user experience and performance in financial services contexts",
    "Collaborated with design and product teams in fast-paced agile workflows"
  ],
  technologies: ["JavaScript", "HTML", "CSS", "UX/UI"],
  accent: "from-green-500 to-blue-500",
  companyColor: "#00C244"
},
{
  id: 3,
  title: "Software Engineering Student",
  company: "UANL – FIME",
  location: "Monterrey, Mexico",
  period: "2025 – Present",
  type: "Academic",
  description: "Pursuing a Bachelor's degree in Software Technology Engineering with a focus on collaboration and technical skills.",
  details: [
    "Led and coordinated software projects in academic team settings",
    "Assisted peers with development work and contributed to team outcomes",
    "Demonstrated rapid understanding in technical and scientific subjects",
    "Built foundational knowledge in software development and problem-solving"
  ],
  technologies: ["Project Leadership", "Team Collaboration", "Software Fundamentals", "Problem Solving"],
  accent: "from-yellow-500 to-orange-500",
  companyColor: "#F59E0B"
}

];

const styles = {
  section: {
    padding: "4rem 0",
    margin: 0,
    position: "relative",
    isolation: "isolate",
  },
  container: {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0 2rem",
    position: "relative",
    zIndex: 1,
  },
  headerText: {
    fontSize: "3rem",
    fontWeight: 800,
    background: "linear-gradient(135deg, #fff, #e2e8f0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "1rem",
    letterSpacing: "-0.02em",
    textAlign: "center"
  },
  subtitle: {
    color: "rgba(255,255,255,0.7)",
    fontSize: "1.1rem",
    maxWidth: 600,
    margin: "0 auto 4rem",
    lineHeight: "1.6",
    textAlign: "center"
  },
  mainContent: {
    display: "grid",
    gridTemplateColumns: "400px 1fr",
    gap: "3rem",
    alignItems: "start",
  },
  sidebar: {
    position: "sticky",
    top: "2rem",
  },
  sidebarHeader: {
    display: "flex",
    alignItems: "center",
    gap: "1rem",
    marginBottom: "2rem",
    padding: "0 1rem",
  },
  sidebarTitle: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#fff",
    margin: 0,
  },
  sidebarLine: {
    flex: 1,
    height: "2px",
    background: "linear-gradient(90deg, rgba(255,255,255,0.3), transparent)",
  },
  experienceList: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  experienceItem: {
    padding: "1.5rem",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "1rem",
    border: "1px solid rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    cursor: "pointer",
    transition: "all 0.3s ease",
    position: "relative",
    overflow: "hidden",
    outline: "none", // Remove outline
  },
  experienceItemActive: {
    background: "rgba(255,255,255,0.1)",
    borderColor: "rgba(255,255,255,0.3)",
    transform: "translateX(10px)",
  },
  companyName: {
    fontSize: "1.1rem",
    fontWeight: 700,
    color: "#fff",
    margin: "0 0 0.25rem 0",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  jobTitle: {
    fontSize: "0.9rem",
    color: "rgba(255,255,255,0.7)",
    margin: "0 0 0.5rem 0",
  },
  period: {
    fontSize: "0.8rem",
    color: "rgba(255,255,255,0.5)",
    fontWeight: 500,
  },
  contentArea: {
    minHeight: "600px",
    position: "relative",
  },
  contentCard: {
    background: "rgba(255,255,255,0.08)",
    borderRadius: "1.5rem",
    padding: "2.5rem",
    boxShadow: "0 10px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    height: "100%",
    position: "relative",
    overflow: "hidden",
    outline: "none", // Remove outline
  },
  contentHeader: {
    marginBottom: "2rem",
    paddingBottom: "1.5rem",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },
  contentTitle: {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#fff",
    margin: "0 0 0.5rem 0",
    display: "flex",
    alignItems: "center",
    gap: "1rem",
  },
  contentCompany: {
    fontSize: "1.3rem",
    fontWeight: 600,
    margin: "0 0 1rem 0",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  contentMeta: {
    display: "flex",
    gap: "2rem",
    color: "rgba(255,255,255,0.6)",
    fontSize: "0.95rem",
    marginBottom: "1rem",
  },
  contentMetaItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  contentDescription: {
    color: "rgba(255,255,255,0.8)",
    fontSize: "1.1rem",
    lineHeight: "1.6",
    fontStyle: "italic",
  },
  detailsList: {
    margin: "0 0 2rem 0",
    paddingLeft: "0",
    listStyle: "none",
  },
  detailItem: {
    color: "rgba(255,255,255,0.85)",
    fontSize: "1rem",
    lineHeight: "1.6",
    marginBottom: "1rem",
    paddingLeft: "1.5rem",
    position: "relative",
  },
  detailBullet: {
    position: "absolute",
    left: "0",
    top: "0.6rem",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
  },
  techGrid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "0.75rem",
  },
  techTag: {
    background: "rgba(255,255,255,0.1)",
    color: "rgba(255,255,255,0.9)",
    padding: "0.5rem 1rem",
    borderRadius: "2rem",
    fontSize: "0.85rem",
    fontWeight: 500,
    border: "1px solid rgba(255,255,255,0.2)",
    transition: "all 0.3s ease",
  },
  downloadButton: {
    display: "flex",
    alignItems: "center",
    gap: "0.75rem",
    margin: "4rem auto 0",
    padding: "1rem 2rem",
    background: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
    color: "#fff",
    border: "none",
    borderRadius: "50px",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 10px 30px rgba(59,130,246,0.3)",
    textDecoration: "none",
    outline: "none", // Remove outline
  },
  placeholder: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    color: "rgba(255,255,255,0.5)",
    textAlign: "center",
  },
  placeholderText: {
    fontSize: "1.2rem",
    marginBottom: "1rem",
  },
  placeholderSubtext: {
    fontSize: "1rem",
    opacity: 0.7,
  },
};

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const handleDownloadCV = () => {
    // Replace with your actual CV file path
    const cvUrl = "/path/to/your/cv.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Won_Lee_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="experience" style={styles.section}>
      {/* Animated background */}
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

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-10px) rotate(1deg); }
        }
        *::selection { background: white; color: black; }

        /* Remove focus outline globally for this component */
        * {
          outline: none !important;
        }

        *:focus {
          outline: none !important;
        }

        .experience-item:hover {
          background: rgba(255,255,255,0.08) !important;
          transform: translateX(5px) !important;
        }

        .experience-item:focus {
          outline: none !important;
        }

        .tech-tag:hover {
          background: rgba(255,255,255,0.15) !important;
          transform: translateY(-2px) !important;
        }

        .download-button:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 15px 40px rgba(59,130,246,0.4) !important;
        }

        .download-button:focus {
          outline: none !important;
        }

        @media (max-width: 1024px) {
          .main-content {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .sidebar {
            position: static !important;
          }
          .experience-list {
            flex-direction: row !important;
            overflow-x: auto !important;
            gap: 1rem !important;
            padding-bottom: 1rem !important;
          }
          .experience-item {
            min-width: 250px !important;
          }
        }

        @media (max-width: 768px) {
          .content-header {
            text-align: center !important;
          }
          .content-title {
            font-size: 1.5rem !important;
            flex-direction: column !important;
            gap: 0.5rem !important;
          }
          .content-meta {
            flex-direction: column !important;
            gap: 1rem !important;
          }
          .tech-grid {
            justify-content: center !important;
          }
        }
      `}</style>

      <div style={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "4rem" }}
        >
          <h2 style={styles.headerText}>Professional Experience</h2>
          <p style={styles.subtitle}>
            My journey through the tech industry • Click on any company to explore my role
          </p>
        </motion.div>

        <div className="main-content" style={styles.mainContent}>
          {/* Left Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            style={styles.sidebar}
          >
            <div style={styles.sidebarHeader}>
              <h3 style={styles.sidebarTitle}>Timeline</h3>
              <div style={styles.sidebarLine} />
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="experience-list"
              style={styles.experienceList}
            >
              {experiences.map((exp) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="experience-item"
                  style={{
                    ...styles.experienceItem,
                    ...(selectedExperience?.id === exp.id ? styles.experienceItemActive : {})
                  }}
                  onClick={() => setSelectedExperience(exp)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Company indicator line */}
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

                  <div style={styles.companyName}>
                    {exp.company.toUpperCase()}
                    <FiChevronRight
                      size={16}
                      style={{
                        transition: "transform 0.3s ease",
                        transform: selectedExperience?.id === exp.id ? "rotate(90deg)" : "rotate(0deg)"
                      }}
                    />
                  </div>
                  <div style={styles.jobTitle}>{exp.title}</div>
                  <div style={styles.period}>{exp.period}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content Area */}
          <div style={styles.contentArea}>
            <AnimatePresence mode="wait">
              {selectedExperience ? (
                <motion.div
                  key={selectedExperience.id}
                  variants={contentVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  style={styles.contentCard}
                >
                  {/* Accent line */}
                  <div style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: `linear-gradient(90deg, ${selectedExperience.accent})`,
                    borderRadius: "1.5rem 1.5rem 0 0",
                  }} />

                  <div style={styles.contentHeader}>
                    <h3 style={styles.contentTitle}>
                      {selectedExperience.title}
                      <span style={{
                        fontSize: "1rem",
                        fontWeight: 500,
                        background: "rgba(255,255,255,0.1)",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "1rem",
                        color: "rgba(255,255,255,0.8)",
                      }}>
                        {selectedExperience.type}
                      </span>
                    </h3>

                    <h4 style={{
                      ...styles.contentCompany,
                      color: selectedExperience.companyColor || "#3b82f6"
                    }}>
                      @ {selectedExperience.company}
                    </h4>

                    <div style={styles.contentMeta}>
                      <div style={styles.contentMetaItem}>
                        <FiCalendar size={16} />
                        <span>{selectedExperience.period}</span>
                      </div>
                      <div style={styles.contentMetaItem}>
                        <FiMapPin size={16} />
                        <span>{selectedExperience.location}</span>
                      </div>
                    </div>

                    <p style={styles.contentDescription}>
                      {selectedExperience.description}
                    </p>
                  </div>

                  <ul style={styles.detailsList}>
                    {selectedExperience.details.map((detail, idx) => (
                      <li key={idx} style={styles.detailItem}>
                        <div style={styles.detailBullet} />
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div style={styles.techGrid}>
                    {selectedExperience.technologies.map((tech, idx) => (
                      <span key={idx} className="tech-tag" style={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{...styles.contentCard, ...styles.placeholder}}
                >
                  <div style={styles.placeholderText}>
                    Select a company to view details
                  </div>
                  <div style={styles.placeholderSubtext}>
                    Click on any company from the list to explore my experience
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.button
          className="download-button"
          style={styles.downloadButton}
          onClick={handleDownloadCV}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <FiDownload size={20} />
          Download my CV
        </motion.button>
      </div>
    </div>
  );
}
