import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// Image imports
import certerusImg from "../assets/certerusapp.png";
import inmotrevImg from "../assets/inmotrev.png";
import lucesImg from "../assets/luces.png";
import nearbyImg from "../assets/nearby.png";
import flowmeImg from "../assets/flowme.png";
import aztecPlumbingLPImg from "../assets/aztecplumbingLP.png";
import aztecPlumbingImg from "../assets/aztecplumbing.png";
import hotelfiestaImg from "../assets/hotelfiesta.png";
import plaforamaImg from "../assets/plaforama.png";
import securlifeImg from "../assets/securlife.png";
import casarooftopImg from "../assets/casarooftop.png";
import portfolioImg from "../assets/portfolio.png";
import mentorImg from "../assets/mentor.png";
import weatherlyImg from "../assets/weatherly.png";
import streakifyImg from "../assets/streakify.png";
import portfolio2Img from "../assets/portfolio2.png";
import certerusLPImg from "../assets/certerusLPImg.png";
import daytonalibertyImg from "../assets/daytonaliberty.png";
import xponentmarketingImg from "../assets/xponentmarketing.png";
import { FiExternalLink } from "react-icons/fi";

const containerVariants = { visible: { transition: { staggerChildren: 0.05 } }, hidden: {} };
const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const projects = [
  {
    title: "📱 Official Certerus App",
    desc: "Cross-platform mobile app for managing domains and websites securely with a clean, intuitive interface for iOS and Android.",
    img: certerusImg,
    tags: ["React Native", "Expo Go", "RESTful APIs"],
    accent: "from-red-500 to-green-500",
    url: "https://github.com/wonseobi/Certerus-App",
    featured: true,
    category: "app",
  },
    {
  title: "📈 Daytona Liberty",
  desc: "Crypto hedge fund website built under DDS Marketing, focused on showcasing systematic trading strategies with a corporate focused design.",
  img: daytonalibertyImg,
  tags: ["Figma", "React", "Cursor AI"],
  accent: "from-blue-500 to-indigo-400",
//   url: "https://daytonaliberty.com", // or your live URL
  category: "website",
},
  {
    title: "🎨 Freelanced Design Portfolio",
    desc: "Portfolio showcasing concept art, illustrations, and UX/UI projects, highlighting creativity and professional design skills.",
    img: portfolio2Img,
    tags: ["UX/UI", "Prototype", "Figma"],
    accent: "from-purple-500 to-pink-400",
    url: "https://www.figma.com/proto/lpfSykBVYm94IOaC9Anird/Alfonso-Emanuel-Portfolio-Website?page-id=0%3A1&node-id=2002-2&p=f&viewport=2238%2C74%2C0.4&t=ojVCmnlmo1VRVAkT-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2002%3A2",
    category: "website",
  },
{
  title: "⚡ Xponent Marketing",
  desc: "Conversion rate–focused website developed under DDS Marketing, emphasizing performance, lead generation, and modern responsive UI.",
  img: xponentmarketingImg,
  tags: ["Next.js", "React", "UI/UX"],
  accent: "from-orange-500 to-red-400",
//   url: "https://xponentmarketing.com", // or your live URL
  category: "website",
},
  {
    title: "🚀 Certerus Landing Page",
    desc: "Modern landing page prototype designed in Figma with clean layouts and intuitive user experience for a professional brand.",
    img: certerusLPImg,
    tags: ["Figma", "Web Design", "UX/UI"],
    accent: "from-blue-500 to-cyan-400",
    url: "https://www.certerus.com/aula-empresarial/",
    category: "website",
  },
  {
    title: "📚 Mentor e-Learning",
    desc: "Platform for skill development and talent management with a modern, easy-to-use interface for learners and enterprises.",
    img: mentorImg,
    tags: ["JavaScript", "Tailwind CSS", "HTML/CSS"],
    accent: "from-blue-500 to-indigo-400",
    url: "https://mentorelearning.com/sitio/",
    category: "website",
  },
  {
    title: "🌦️ Weatherly App",
    desc: "Cross-platform app providing real-time weather forecasts with a clean interface and OpenWeather API integration.",
    img: weatherlyImg,
    tags: ["React Native", "Expo Go", "RESTful APIs"],
    accent: "from-sky-400 to-blue-600",
    url: "https://github.com/wonseobi/Weatherly",
    featured: true,
    category: "app",
  },
  {
    title: "🏠 Inmotrev Real Estate",
    desc: "Modern real estate website with property listings, smooth navigation, and interactive features for an engaging experience.",
    img: inmotrevImg,
    tags: ["JavaScript", "PHP", "Wordpress"],
    accent: "from-blue-500 to-cyan-400",
    url: "https://inmotrev.com/",
    featured: true,
    category: "website",
  },
  {
    title: "🎄 Luces y Novedades",
    desc: "Website showcasing holiday decorations with appealing visuals and smooth, festive interactions.",
    img: lucesImg,
    tags: ["JavaScript", "Bootstrap", "HTML/CSS"],
    accent: "from-blue-500 to-purple-500",
    url: "https://lucesynovedades.com.mx/",
    category: "website",
  },
  {
    title: "🌐 My Portfolio Website",
    desc: "Custom portfolio site displaying projects with responsive design, smooth animations, and clean UX.",
    img: portfolioImg,
    tags: ["React", "Vite", "Tailwind CSS"],
    accent: "from-red-500 to-pink-400",
    url: "https://wonseobi.github.io/my-website/",
    category: "website",
  },
  {
    title: "🛠️ Aztec Plumbing",
    desc: "Website showcasing plumbing tools and services with detailed pages, responsive layout, and easy navigation.",
    img: aztecPlumbingImg,
    tags: ["JavaScript", "WordPress", "PHP"],
    accent: "from-blue-600 to-teal-400",
    url: "https://aztec-plumbing.com",
    category: "website",
  },
  {
    title: "📍 Nearby",
    desc: "Web app for discovering local events and cultural experiences with intuitive navigation.",
    img: nearbyImg,
    tags: ["PHP", "JavaScript", "Laravel"],
    accent: "from-pink-500 to-red-500",
    url: "https://nortips4trips.com/",
    category: "website",
  },
  {
    title: "🧭 Flowme",
    desc: "Platform for managing teams, projects, and tasks to improve collaboration and productivity.",
    img: flowmeImg,
    tags: ["JavaScript", "MySQL", "RESTful APIs"],
    accent: "from-sky-500 to-indigo-500",
    url: "https://flowme.work/",
    category: "website",
  },
  {
    title: "🔥 Streakify App",
    desc: "Habit tracking app with streaks, reminders, and progress tracking for consistent personal growth.",
    img: streakifyImg,
    tags: ["React Native", "Expo", "AsyncStorage"],
    accent: "from-orange-400 to-pink-600",
    url: "https://github.com/wonseobi/Streakify",
    featured: true,
    category: "app",
  },
  {
    title: "🔧 Aztec Plumbing LP",
    desc: "Landing page highlighting plumbing services and quality tools with a clean and clear design.",
    img: aztecPlumbingLPImg,
    tags: ["Wordpress", "Figma", "JavaScript"],
    accent: "from-blue-600 to-teal-400",
    url: "https://aztec-plumbing.com/conocenos/",
    category: "website",
  },
  {
    title: "🏨 Hotel Fiesta Versalles",
    desc: "Hotel website with easy booking, accessible layout, and visually appealing interface.",
    img: hotelfiestaImg,
    tags: ["React", "HTML/CSS", "MySQL"],
    accent: "from-yellow-500 to-red-500",
    url: "https://hotelfiestaversalles.com.mx/",
    category: "website",
  },
  {
    title: "🏗️ Plaforama",
    desc: "E-commerce site for construction materials with user login, shopping cart, and integrated support.",
    img: plaforamaImg,
    tags: ["PHP", "MySQL", "Laravel"],
    accent: "from-orange-500 to-yellow-500",
    url: "https://plaforama.com/?srsltid=AfmBOooC5H8zcimxaXrnJxjw9N0uybTlokXlef8O12NncHhAysq3dp8z?srsltid=AfmBOooC5H8zcimxaXrnJxjw9N0uybTlokXlef8O12NncHhAysq3dp8z",
    category: "website",
  },
  {
    title: "🛡️ Securlife",
    desc: "Website for personal protection services featuring trained staff and security solutions with a professional presentation.",
    img: securlifeImg,
    tags: ["JavaScript", "MySQL", "Figma"],
    accent: "from-gray-700 to-red-600",
    url: "https://securlife.com.mx/",
    category: "website",
  },
  {
    title: "🌅 Casa Rooftop Geovana",
    desc: "Reservation site for a rooftop house with scenic views, smooth interface, and an inviting user experience.",
    img: casarooftopImg,
    tags: ["Wordpress", "JavaScript", "HTML/CSS"],
    accent: "from-amber-500 to-rose-400",
    url: "https://casarooftopgeovana.com/",
    category: "website",
  },
];


const styles = {
  section: {
    padding: "4rem 0",
    margin: 0,
    position: "relative",
    isolation: "isolate",
  },
  card: {
    background: "rgba(255,255,255,0.08)",
    borderRadius: "1.5rem",
    minWidth: "340px",
    maxWidth: "340px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.1)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    cursor: "grab",
    position: "relative",
    backdropFilter: "blur(10px)",
  },
  tag: {
    background: "rgba(255,255,255,0.1)",
    color: "rgba(255,255,255,0.9)",
    padding: "0.25rem 0.75rem",
    borderRadius: "1rem",
    fontSize: "0.75rem",
    fontWeight: 500,
    border: "1px solid rgba(255,255,255,0.2)",
  },
  filterButton: {
    padding: "0.75rem 1.5rem",
    borderRadius: "2rem",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.05)",
    color: "rgba(255,255,255,0.7)",
    fontSize: "0.9rem",
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
  },
  activeFilterButton: {
    background: "linear-gradient(135deg, rgba(59,130,246,0.3), rgba(147,197,253,0.3))",
    color: "#fff",
    border: "1px solid rgba(59,130,246,0.5)",
    boxShadow: "0 4px 20px rgba(59,130,246,0.2)",
  },
};

export default function Projects() {
  const [dragProgress, setDragProgress] = useState(0);
  const [dragLimits, setDragLimits] = useState({ left: 0, right: 0 });
  const [activeFilter, setActiveFilter] = useState("all");
  const containerRef = useRef(null);
  const listRef = useRef(null);

  const filteredProjects = projects.filter(project => {
    if (activeFilter === "all") return true;
    return project.category === activeFilter;
  });

  const filterOptions = [
    { key: "all", label: "All Projects", count: projects.length },
    { key: "website", label: "Websites", count: projects.filter(p => p.category === "website").length },
    { key: "app", label: "Apps", count: projects.filter(p => p.category === "app").length },
  ];

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
    window.addEventListener("resize", updateDragLimits);
    return () => window.removeEventListener("resize", updateDragLimits);
  }, [filteredProjects]);

  return (
    <div id="projects" style={styles.section}>
      {/* Subtle animated overlay gradient */}
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
      <style jsx>{`
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

        /* Media query to reduce left padding on mobile/tablet */
        @media (max-width: 768px) {
          .project-list {
            padding-left: 0.10em !important;
            padding-right: 0.1em !important;
            gap: 1rem !important;
          }
          .filter-buttons {
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.75rem !important;
          }
          .filter-button {
            padding: 0.6rem 1.2rem !important;
            font-size: 0.85rem !important;
          }
        }
      `}</style>

      <section style={{ padding: 0, position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              fontSize: "2.2rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #fff, #e2e8f0)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: "0.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            My Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "1rem",
              maxWidth: 600,
              margin: "0 auto 2rem",
              lineHeight: "1.6",
              padding: "0 1rem",
            }}
          >
            Discover my latest projects • Scroll to explore past and present works
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="filter-buttons"
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            {filterOptions.map((option) => (
              <motion.button
                key={option.key}
                className="filter-button"
                onClick={() => setActiveFilter(option.key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  ...styles.filterButton,
                  ...(activeFilter === option.key ? styles.activeFilterButton : {}),
                }}
              >
                {option.label}
                <span
                  style={{
                    marginLeft: "0.5rem",
                    fontSize: "0.8rem",
                    opacity: 0.8,
                    background: "rgba(255,255,255,0.1)",
                    padding: "0.1rem 0.4rem",
                    borderRadius: "0.5rem",
                  }}
                >
                  {option.count}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </div>

        <motion.div
          style={{ overflow: "visible", width: "100%", padding: "1rem 0 2rem" }}
          ref={containerRef}
        >
          <motion.ul
            className="project-list"
            ref={listRef}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={activeFilter} // Re-animate when filter changes
            viewport={{ once: true, amount: 0.3 }}
            style={{
              display: "flex",
              gap: "2rem",
              listStyle: "none",
              padding: "0 2rem",
              margin: 0,
            }}
            drag="x"
            dragConstraints={dragLimits}
            whileTap={{ cursor: "grabbing" }}
            onDrag={(e, info) =>
              setDragProgress(Math.min(Math.abs(info.offset.x) / 1000, 1))
            }
          >
            {/* Left space before first card */}
            <div style={{ minWidth: "1rem" }} />
            {filteredProjects.map((p, i) => (
              <motion.li
                key={`${activeFilter}-${i}`}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.01, transition: { duration: 0.15 } }}
                style={styles.card}
              >
                <div
                  style={{
                    height: "4px",
                    background: `linear-gradient(90deg, ${p.accent})`,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 2,
                  }}
                />
                <div style={{ position: "relative" }}>
                  <img
                    src={p.img}
                    alt={p.title}
                    draggable={false}
                    style={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                      borderRadius: "1.5rem 1.5rem 0 0",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: 60,
                      background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                    }}
                  />
                </div>
                <div
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                    flex: 1,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#fff",
                        margin: 0,
                      }}
                    >
                      {p.title}
                    </h3>
                    {p.url && (
                        <a
                            href={p.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                            textDecoration: "none",
                            display: "flex",
                            alignItems: "center",
                            color: "#93c5fd",
                            }}
                        >
                            <FiExternalLink
                            size={18}
                            color="#dbdbdb"
                            style={{ transition: "transform 0.15s ease" }}
                            onMouseEnter={(e) =>
                                (e.currentTarget.style.transform = "scale(1.2)")
                            }
                            onMouseLeave={(e) =>
                                (e.currentTarget.style.transform = "scale(1)")
                            }
                            />
                        </a>
                        )}
                  </div>
                  <p
                    style={{
                      color: "rgba(255,255,255,0.8)",
                      fontSize: "0.9rem",
                      lineHeight: "1.5",
                      flex: 1,
                    }}
                  >
                    {p.desc}
                  </p>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginTop: "0rem",
                    }}
                  >
                    {p.tags.map((t, idx) => (
                      <span key={idx} style={styles.tag}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(135deg, ${p.accent
                      .replace("from-", "rgba(")
                      .replace("to-", "rgba(")
                      .replace("-500", ", 0.1)")})`,
                    pointerEvents: "none",
                    borderRadius: "1.5rem",
                  }}
                />
              </motion.li>
            ))}
            {/* Right space after last card */}
            <div style={{ minWidth: "1rem" }} />
          </motion.ul>
        </motion.div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "2rem",
            gap: "0.5rem",
          }}
        >
          <span
            style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.8rem", fontWeight: 500 }}
          >
            {filteredProjects.length === projects.length
              ? "Drag to explore"
              : `Showing ${filteredProjects.length} ${activeFilter === "app" ? "apps" : "websites"} • Drag to explore`
            }
          </span>
        </div>
      </section>
    </div>
  );
}
