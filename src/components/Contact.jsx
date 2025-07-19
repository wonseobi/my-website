import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiExternalLink } from "react-icons/fi";

const containerVariants = {
  visible: { transition: { staggerChildren: 0.1 } },
  hidden: {}
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const contactItems = [
  {
    icon: FiMail,
    label: "Email",
    value: "wonseob2207@gmail.com",
    href: "mailto:wonseob2207@gmail.com",
    accent: "from-blue-500 to-purple-500",
    description: "Send me a message"
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yourname",
    href: "https://www.linkedin.com/feed/",
    accent: "from-blue-600 to-blue-400",
    description: "Connect with me"
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: "github.com/wonseobi",
    href: "https://github.com/wonseobi",
    accent: "from-gray-700 to-gray-500",
    description: "My projects and"
  }
];

const styles = {
  section: {
    padding: "4rem 0",
    margin: 0,
    position: "relative",
    isolation: "isolate",
  },
  headerText: {
    fontSize: "3rem",
    fontWeight: 800,
    background: "linear-gradient(135deg, #fff, #e2e8f0)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "1rem",
    letterSpacing: "-0.02em"
  },
  contactCard: {
    background: "rgba(255,255,255,0.08)",
    borderRadius: "1.5rem",
    padding: "2rem",
    boxShadow: "0 10px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)",
    backdropFilter: "blur(10px)",
    position: "relative",
    cursor: "pointer",
    border: "1px solid rgba(255,255,255,0.1)"
  },
  footerNote: {
    color: "rgba(255,255,255,0.5)",
    fontSize: "0.9rem",
    textAlign: "center",
    padding: "2rem 0 1rem",
    borderTop: "1px solid rgba(255,255,255,0.1)",
    marginTop: "3rem"
  }
};

export default function Contact() {
  return (
    <footer id="contact" style={styles.section}>
      {/* Subtle section overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "radial-gradient(circle at 20% 50%, rgba(59,130,246,0.05), transparent), radial-gradient(circle at 80% 20%, rgba(236,72,153,0.05), transparent)",
        opacity: 0.6,
        animation: "float 6s ease-in-out infinite"
      }} />

      {/* Content container */}
      <div style={{
        position: "relative",
        zIndex: 1,
        padding: 0,
        maxWidth: "1200px",
        margin: "0 auto"
      }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3rem", paddingTop: "3rem" }}>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={styles.headerText}
          >
            Let's Connect
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "1.1rem",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: "1.6"
            }}
          >

            Ready to collaborate or just want to say hello? I'd love to hear from you!
          </motion.p>
        </div>

        {/* Contact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            marginBottom: "2rem",
            padding: "0 2rem",
            maxWidth: "1200px",
            margin: "0 auto"
          }}
        >
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.href.startsWith('mailto:') ? '_self' : '_blank'}
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{
                y: -10,
                scale: 1.02,
                transition: { duration: 0.15 }
              }}
              style={{
                ...styles.contactCard,
                textDecoration: "none",
                color: "inherit",
                width: "340px", // Fixed width for consistent sizing
                flex: "0 0 auto" // Prevent stretching
              }}
            >
              {/* Accent line */}
              <div style={{
                height: "4px",
                background: `linear-gradient(90deg, ${item.accent})`,
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 2,
                borderRadius: "1.5rem 1.5rem 0 0"
              }} />

              {/* Content */}
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                <div style={{
                  padding: "0.75rem",
                  borderRadius: "1rem",
                  background: `linear-gradient(135deg, ${item.accent.replace('from-', 'rgba(').replace('to-', 'rgba(').replace('-500', ', 0.2)').replace('-600', ', 0.2)').replace('-700', ', 0.2)').replace('-400', ', 0.2)')})`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <item.icon size={24} color="#fff" />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "#fff",
                    margin: 0,
                    marginBottom: "0.25rem"
                  }}>
                    {item.label}
                  </h3>
                  <p style={{
                    color: "rgba(255,255,255,0.7)",
                    fontSize: "0.9rem",
                    margin: 0
                  }}>
                    {item.description}
                  </p>
                </div>
                <FiExternalLink
                  size={18}
                  color="rgba(255,255,255,0.5)"
                  style={{ transition: "transform 0.15s ease" }}
                />
              </div>

              <div style={{
                color: "rgba(255,255,255,0.9)",
                fontSize: "0.95rem",
                fontWeight: 500,
                fontFamily: "monospace",
                background: "rgba(255,255,255,0.05)",
                padding: "0.75rem 1rem",
                borderRadius: "0.75rem",
                border: "1px solid rgba(255,255,255,0.1)"
              }}>
                {item.value}
              </div>

              {/* Hover overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `linear-gradient(135deg, ${item.accent.replace('from-', 'rgba(').replace('to-', 'rgba(').replace('-500', ', 0.05)').replace('-600', ', 0.05)').replace('-700', ', 0.05)').replace('-400', ', 0.05)')})`,
                  pointerEvents: "none",
                  borderRadius: "1.5rem"
                }}
              />
            </motion.a>
          ))}
        </motion.div>

        {/* Footer note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={styles.footerNote}
        >
          <p style={{ margin: 0 }}>
            © 2025 Built and Developed by Won Lee
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
