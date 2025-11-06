import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// Lazy loaded project card component
const LazyProjectCard = ({ project, index, onClick, viewMode, styles }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Unobserve after loading to prevent re-renders
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "200px", // Start loading 200px before card enters viewport
        threshold: 0.01,
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  // Render placeholder for offscreen cards
  if (!isVisible) {
    return (
      <li
        ref={cardRef}
        style={{
          ...styles.card,
          minHeight: "400px",
          background: "rgba(255,255,255,0.05)",
          ...(viewMode === "grid" && {
            minWidth: "auto",
            maxWidth: "100%",
          }),
        }}
      />
    );
  }

  // Render full card when visible
  return (
    <motion.li
      ref={cardRef}
      variants={itemVariants}
      className="project-card"
      layout={viewMode === "grid"}
      style={{
        ...styles.card,
        ...(viewMode === "grid" && {
          minWidth: "auto",
          maxWidth: "100%",
        }),
      }}
    >
      <div
        style={{
          height: "4px",
          background: `linear-gradient(90deg, ${project.accent})`,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 2,
        }}
      />
      <div
        style={{ position: "relative", cursor: "pointer" }}
        onClick={(e) => {
          e.stopPropagation();
          onClick(project);
        }}
      >
        <img
          src={project.img}
          alt={project.title}
          loading="lazy"
          decoding="async"
          draggable={false}
          style={{
            width: "100%",
            height: 200,
            objectFit: "cover",
            borderRadius: "1.5rem 1.5rem 0 0",
            pointerEvents: "none",
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
            pointerEvents: "none",
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
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "0.5rem" }}>
            <h3
              style={{
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#fff",
                margin: 0,
                flex: 1,
              }}
            >
              {project.title}
            </h3>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
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
          {project.company && (
            <div style={{
              fontSize: "0.85rem",
              color: "rgba(255,255,255,0.6)",
              fontWeight: 500,
              fontStyle: "italic",
            }}>
              @ {project.company}
            </div>
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
          {project.desc}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.5rem",
            marginTop: "0rem",
          }}
        >
          {project.tags.map((t, idx) => (
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
          background: `linear-gradient(135deg, ${project.accent
            .replace("from-", "rgba(")
            .replace("to-", "rgba(")
            .replace("-500", ", 0.1)")})`,
          pointerEvents: "none",
          borderRadius: "1.5rem",
        }}
      />
    </motion.li>
  );
};

// Image imports
import certerusImg from "../assets/certerusapp.webp";
import inmotrevImg from "../assets/inmotrev.webp";
import lucesImg from "../assets/luces.webp";
import nearbyImg from "../assets/nearby.webp";
import flowmeImg from "../assets/flowme.webp";
import aztecPlumbingLPImg from "../assets/aztecplumbingLP.webp";
import aztecPlumbingImg from "../assets/aztecplumbing.webp";
import hotelfiestaImg from "../assets/hotelfiesta.webp";
import plaforamaImg from "../assets/plaforama.webp";
import securlifeImg from "../assets/securlife.webp";
import casarooftopImg from "../assets/casarooftop.webp";
import portfolioImg from "../assets/portfolio.webp";
import mentorImg from "../assets/mentor.webp";
import weatherlyImg from "../assets/weatherly.webp";
import streakifyImg from "../assets/streakify.webp";
import portfolio2Img from "../assets/portfolio2.webp";
import certerusLPImg from "../assets/certerusLPImg.webp";
import daytonalibertyImg from "../assets/daytonaliberty.webp";
import xponentmarketingImg from "../assets/xponentmarketing.webp";
import aoxImg from "../assets/aox.webp";
import elkgroveImg from "../assets/elkgrove.webp";
import botoxImg from "../assets/botox.webp";
import semaImg from "../assets/sema.webp";
import { FiExternalLink, FiGrid, FiList, FiX } from "react-icons/fi";

const containerVariants = { visible: { transition: { staggerChildren: 0.03 } }, hidden: {} };
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const projects = [
    {
	  title: "📈 Daytona Liberty",
	  desc: "Crypto hedge fund website built under DDS Marketing, focused on showcasing systematic trading strategies with a corporate focused design.",
	  img: daytonalibertyImg,
	  tags: ["Figma", "React", "Cursor AI"],
	  accent: "from-blue-500 to-indigo-400",
	  url: "https://daytonaliberty.com/",
	  category: "website",
	  company: "DDS Marketing",
	},
    {
    title: "🦷 AOX Billing Solutions",
    desc: "Responsive & modern landing page built for a specialized dental/coding billing service. Includes Formspree integration, optimized structure for conversions.",
    img: aoxImg,
    tags: ["JavaScript", "CSS", "Formspree API"],
    accent: "from-blue-500 to-cyan-400",
    url: "https://aoxbillingsolutions.mydentalconsult.com/",
    category: "website",
    company: "DDS Marketing",
},
  {
    title: "🌦️ Weatherly App",
    desc: "Cross-platform app providing real-time weather forecasts with a clean interface and OpenWeather API integration.",
    img: weatherlyImg,
    tags: ["React Native", "Expo Go", "RESTful APIs"],
    accent: "from-sky-400 to-blue-600",
    url: "https://github.com/wonseobi/Weatherly",
    category: "app",
    company: "Personal",
  },
{
    title: "🏙️ Elk Grove Village Dental",
    desc: "Modern and SEO-ready website migration for a dental practice. Refined UI with local SEO optimization and fast-loading structure on cPanel hosting.",
    img: elkgroveImg,
    tags: ["Figma", "SEO", "CPanel"],
    accent: "from-emerald-500 to-lime-400",
    url: "https://shorturl.at/W1gcb",
    category: "website",
    company: "DDS Marketing",
},
{
    title: "💉 Floss Delray Botox",
    desc: "Landing page crafted for a cosmetic Botox service. Designed for high engagement with minimal, elegant UI and responsive grid layout.",
    img: botoxImg,
    tags: ["JavaScript", "CSS", "UI Design"],
    accent: "from-pink-500 to-rose-400",
    url: "https://flossdelray.mydentalconsult.com/botox/",
    category: "website",
    company: "DDS Marketing",
},
{
    title: "🎨 Freelanced Design Portfolio",
    desc: "Portfolio showcasing concept art, illustrations, and UX/UI projects, highlighting creativity and professional design skills.",
    img: portfolio2Img,
    tags: ["UX/UI", "Prototype", "Figma"],
    accent: "from-purple-500 to-pink-400",
    url: "https://www.figma.com/proto/lpfSykBVYm94IOaC9Anird/Alfonso-Emanuel-Portfolio-Website?page-id=0%3A1&node-id=2002-2&p=f&viewport=2238%2C74%2C0.4&t=ojVCmnlmo1VRVAkT-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=2002%3A2",
    category: "website",
    company: "Freelance",
},
{
    title: "💊 Floss Delray Semaglutide",
    desc: "Clean and professional landing page for weight-loss treatment services. Includes custom layout, meta setup, and favicon integration for branding consistency.",
    img: semaImg,
    tags: ["HTML", "CSS", "UI/UX"],
    accent: "from-indigo-500 to-sky-400",
    url: "https://flossdelray.mydentalconsult.com/semaglutide/",
    category: "website",
    company: "DDS Marketing",
},
  {
    title: "📚 Mentor e-Learning",
    desc: "Platform for skill development and talent management with a modern, easy-to-use interface for learners and enterprises.",
    img: mentorImg,
    tags: ["JavaScript", "Tailwind CSS", "HTML/CSS"],
    accent: "from-blue-500 to-indigo-400",
    url: "https://mentorelearning.com/sitio/",
    category: "website",
    company: "Certerus",
  },
  {
    title: "📱 Official Certerus App",
    desc: "Cross-platform mobile app for managing domains and websites securely with a clean, intuitive interface for iOS and Android.",
    img: certerusImg,
    tags: ["React Native", "Expo Go", "RESTful APIs"],
    accent: "from-red-500 to-green-500",
    url: "https://github.com/wonseobi/Certerus-App",
    category: "app",
    company: "Certerus",
  },

{
  title: "⚡ Xponent Marketing",
  desc: "Conversion rate–focused website developed under DDS Marketing, emphasizing performance, lead generation, and modern responsive UI.",
  img: xponentmarketingImg,
  tags: ["Next.js", "React", "UI/UX"],
  accent: "from-orange-500 to-red-400",
//   url: "https://xponentmarketing.com", // or your live URL
  category: "website",
  company: "DDS Marketing",
},
  {
    title: "🚀 Certerus Landing Page",
    desc: "Modern landing page prototype designed in Figma with clean layouts and intuitive user experience for a professional brand.",
    img: certerusLPImg,
    tags: ["Figma", "Web Design", "UX/UI"],
    accent: "from-blue-500 to-cyan-400",
    url: "https://www.certerus.com/aula-empresarial/",
    category: "website",
    company: "Certerus",
  },
  {
    title: "🏠 Inmotrev Real Estate",
    desc: "Modern real estate website with property listings, smooth navigation, and interactive features for an engaging experience.",
    img: inmotrevImg,
    tags: ["JavaScript", "PHP", "Wordpress"],
    accent: "from-blue-500 to-cyan-400",
    url: "https://inmotrev.com/",
    category: "website",
    company: "Certerus",
  },
  {
    title: "🎄 Luces y Novedades",
    desc: "Website showcasing holiday decorations with appealing visuals and smooth, festive interactions.",
    img: lucesImg,
    tags: ["JavaScript", "Bootstrap", "HTML/CSS"],
    accent: "from-blue-500 to-purple-500",
    url: "https://lucesynovedades.com.mx/",
    category: "website",
    company: "Certerus",
  },
  {
    title: "🌐 My Portfolio Website",
    desc: "Custom portfolio site displaying projects with responsive design, smooth animations, and clean UX.",
    img: portfolioImg,
    tags: ["React", "Vite", "Tailwind CSS"],
    accent: "from-red-500 to-pink-400",
    url: "https://wonseobi.github.io/my-website/",
    category: "website",
    company: "Personal",
  },
  {
    title: "🛠️ Aztec Plumbing",
    desc: "Website showcasing plumbing tools and services with detailed pages, responsive layout, and easy navigation.",
    img: aztecPlumbingImg,
    tags: ["JavaScript", "WordPress", "PHP"],
    accent: "from-blue-600 to-teal-400",
    url: "https://aztec-plumbing.com",
    category: "website",
    company: "Certerus",
  },
  {
    title: "📍 Nearby",
    desc: "Web app for discovering local events and cultural experiences with intuitive navigation.",
    img: nearbyImg,
    tags: ["PHP", "JavaScript", "Laravel"],
    accent: "from-pink-500 to-red-500",
    url: "https://nortips4trips.com/",
    category: "website",
    company: "Certerus",
  },
  {
    title: "🧭 Flowme",
    desc: "Platform for managing teams, projects, and tasks to improve collaboration and productivity.",
    img: flowmeImg,
    tags: ["JavaScript", "MySQL", "RESTful APIs"],
    accent: "from-sky-500 to-indigo-500",
    url: "https://flowme.work/",
    category: "website",
    company: "Certerus",
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
    company: "Personal",
  },
  {
    title: "🔧 Aztec Plumbing LP",
    desc: "Landing page highlighting plumbing services and quality tools with a clean and clear design.",
    img: aztecPlumbingLPImg,
    tags: ["Wordpress", "Figma", "JavaScript"],
    accent: "from-blue-600 to-teal-400",
    url: "https://aztec-plumbing.com/conocenos/",
    category: "website",
    company: "Certerus",
  },
  {
    title: "🏨 Hotel Fiesta Versalles",
    desc: "Hotel website with easy booking, accessible layout, and visually appealing interface.",
    img: hotelfiestaImg,
    tags: ["React", "HTML/CSS", "MySQL"],
    accent: "from-yellow-500 to-red-500",
    url: "https://hotelfiestaversalles.com.mx/",
    category: "website",
    company: "Certerus",
  },
  {
    title: "🏗️ Plaforama",
    desc: "E-commerce site for construction materials with user login, shopping cart, and integrated support.",
    img: plaforamaImg,
    tags: ["PHP", "MySQL", "Laravel"],
    accent: "from-orange-500 to-yellow-500",
    url: "https://plaforama.com/?srsltid=AfmBOooC5H8zcimxaXrnJxjw9N0uybTlokXlef8O12NncHhAysq3dp8z?srsltid=AfmBOooC5H8zcimxaXrnJxjw9N0uybTlokXlef8O12NncHhAysq3dp8z",
    category: "website",
    company: "Certerus",
  },
  {
    title: "🛡️ Securlife",
    desc: "Website for personal protection services featuring trained staff and security solutions with a professional presentation.",
    img: securlifeImg,
    tags: ["JavaScript", "MySQL", "Figma"],
    accent: "from-gray-700 to-red-600",
    url: "https://securlife.com.mx/",
    category: "website",
    company: "Certerus",
  },
  {
    title: "🌅 Casa Rooftop Geovana",
    desc: "Reservation site for a rooftop house with scenic views, smooth interface, and an inviting user experience.",
    img: casarooftopImg,
    tags: ["Wordpress", "JavaScript", "HTML/CSS"],
    accent: "from-amber-500 to-rose-400",
    url: "https://casarooftopgeovana.com/",
    category: "website",
    company: "Certerus",
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
    background: "rgba(255,255,255,0.1)",
    borderRadius: "1.5rem",
    minWidth: "340px",
    maxWidth: "340px",
    width: "100%",
    boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    position: "relative",
    transition: "transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease",
  },
  tag: {
    background: "rgba(255,255,255,0.08)",
    color: "rgba(255,255,255,0.95)",
    padding: "0.35rem 0.85rem",
    borderRadius: "1rem",
    fontSize: "0.75rem",
    fontWeight: 600,
    border: "1px solid rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    transition: "all 0.3s ease",
  },
  filterButton: {
    padding: "0.75rem 1.5rem",
    borderRadius: "2rem",
    border: "1px solid rgba(255,255,255,0.15)",
    background: "rgba(255,255,255,0.1)",
    color: "rgba(255,255,255,0.8)",
    fontSize: "0.9rem",
    fontWeight: 600,
    cursor: "pointer",
    transition: "transform 0.2s ease, background-color 0.2s ease",
    boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
  },
  activeFilterButton: {
    background: "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(139,92,246,0.25))",
    color: "#fff",
    border: "1px solid rgba(96,165,250,0.4)",
    boxShadow: "0 4px 20px rgba(59,130,246,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
  },
};

export default function Projects() {
  const [dragProgress, setDragProgress] = useState(0);
  const [dragLimits, setDragLimits] = useState({ left: 0, right: 0 });
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("row"); // "row" or "grid"
  const [selectedProject, setSelectedProject] = useState(null);
  const containerRef = useRef(null);
  const listRef = useRef(null);
  const modalRef = useRef(null);

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
    if (viewMode !== "row") return;

    function updateDragLimits() {
      if (containerRef.current && listRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const listWidth = listRef.current.scrollWidth;
        const left = Math.min(0, containerWidth - listWidth);
        setDragLimits({ left, right: 0 });
      }
    }
    updateDragLimits();
    const handleResize = () => {
      requestAnimationFrame(updateDragLimits);
    };
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, [filteredProjects, viewMode]);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && selectedProject) {
        setSelectedProject(null);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [selectedProject]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedProject]);

  return (
    <div id="projects" style={styles.section}>
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

        .project-card {
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s ease !important;
        }

        .project-card:hover {
          transform: translateY(-8px) scale(1.01) !important;
          box-shadow: 0 12px 48px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1), 0 0 35px rgba(255,255,255,0.25), 0 0 70px rgba(255,255,255,0.12) !important;
        }

        .project-grid {
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)) !important;
          gap: 3rem !important;
        }

        /* Modal positioning and styling */
        .project-modal {
          position: fixed !important;
          top: 50% !important;
          left: 50% !important;
          transform: translate(-50%, -50%) !important;
          margin: 0 !important;
        }

        /* Modal scrollbar styling */
        @media (max-width: 768px) {
          .project-modal {
            width: 95% !important;
            max-height: 95vh !important;
            top: 50% !important;
            left: 50% !important;
            transform: translate(-50%, -50%) !important;
          }
          .project-modal h2 {
            font-size: 1.5rem !important;
          }
          .project-modal .modal-content {
            padding: 1.5rem !important;
          }
          .project-modal .modal-image {
            height: 250px !important;
          }
          .project-modal .modal-header {
            flex-direction: column !important;
          }
          .project-modal .modal-close-btn {
            top: 1rem !important;
            right: 1rem !important;
          }
        }

        /* Custom scrollbar for modal */
        .project-modal::-webkit-scrollbar {
          width: 8px;
        }

        .project-modal::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 4px;
        }

        .project-modal::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }

        .project-modal::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }

        /* Media query to reduce left padding on mobile/tablet */
        @media (max-width: 1400px) {
          .project-grid {
            max-width: 1400px !important;
            padding: 0 3rem !important;
          }
        }

        @media (max-width: 1200px) {
          .project-grid {
            grid-template-columns: repeat(3, 1fr) !important;
            gap: 2.5rem !important;
            padding: 0 2.5rem !important;
          }
        }

        @media (max-width: 768px) {
          .project-list {
            padding-left: 0.10em !important;
            padding-right: 0.1em !important;
            gap: 1rem !important;
          }
          .project-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            padding: 0 1.5rem !important;
            gap: 2rem !important;
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

        @media (max-width: 480px) {
          .project-grid {
            grid-template-columns: 1fr !important;
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
              fontSize: "2.5rem",
              fontWeight: 800,
              background: "linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #cbd5e1 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "0.5rem",
              letterSpacing: "-0.03em",
              textShadow: "0 0 40px rgba(255,255,255,0.1)",
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

          {/* Filter Buttons and View Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              marginBottom: "2rem",
            }}
          >
            {/* Category Filters */}
            <div className="filter-buttons" style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
            {filterOptions.map((option) => (
              <motion.button
                key={option.key}
                className="filter-button"
                onClick={() => setActiveFilter(option.key)}
                whileHover={{
                  scale: 1.05,
                  boxShadow: activeFilter === option.key
                    ? "0 4px 20px rgba(59,130,246,0.2), 0 0 25px rgba(255,255,255,0.15)"
                    : "0 4px 20px rgba(0,0,0,0.2), 0 0 20px rgba(255,255,255,0.1)"
                }}
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
            </div>

            {/* View Mode Toggle */}
            <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
              <motion.button
                onClick={() => setViewMode("row")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  ...styles.filterButton,
                  ...(viewMode === "row" ? styles.activeFilterButton : {}),
                  padding: "0.75rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                title="Row View"
              >
                <FiList size={18} />
                Row
              </motion.button>
              <motion.button
                onClick={() => setViewMode("grid")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  ...styles.filterButton,
                  ...(viewMode === "grid" ? styles.activeFilterButton : {}),
                  padding: "0.75rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
                title="Grid View"
              >
                <FiGrid size={18} />
                Grid
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ overflow: "visible", width: "100%", padding: "1rem 0 2rem" }}
          ref={containerRef}
        >
          <motion.ul
            className={`project-list ${viewMode === "grid" ? "project-grid" : ""}`}
            ref={listRef}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            key={`${activeFilter}-${viewMode}`}
            viewport={{ once: true, amount: 0.1, margin: "0px 0px -100px 0px" }}
            style={{
              display: viewMode === "grid" ? "grid" : "flex",
              gridTemplateColumns: viewMode === "grid" ? "repeat(4, 1fr)" : "none",
              gap: viewMode === "grid" ? "3rem" : "2rem",
              listStyle: "none",
              padding: viewMode === "grid" ? "0 4rem" : "0 2rem",
              margin: 0,
              contain: "layout style",
              ...(viewMode === "grid" && {
                maxWidth: "1700px",
                margin: "0 auto",
              }),
            }}
            drag={viewMode === "row" ? "x" : false}
            dragConstraints={viewMode === "row" ? dragLimits : undefined}
            dragElastic={viewMode === "row" ? 0.1 : undefined}
            dragMomentum={viewMode === "row" ? false : undefined}
            whileTap={viewMode === "row" ? { cursor: "grabbing" } : undefined}
            onDrag={viewMode === "row" ? (e, info) =>
              setDragProgress(Math.min(Math.abs(info.offset.x) / 1000, 1))
            : undefined}
          >
            {viewMode === "row" && <div style={{ minWidth: "1rem" }} />}
            {filteredProjects.map((p, i) => (
              <LazyProjectCard
                key={`${p.title}-${activeFilter}-${i}`}
                project={p}
                index={i}
                onClick={setSelectedProject}
                viewMode={viewMode}
                styles={styles}
              />
            ))}
            {viewMode === "row" && <div style={{ minWidth: "1rem" }} />}
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
              ? "Drag to explore, Click a project image to view details"
              : `Showing ${filteredProjects.length} ${activeFilter === "app" ? "apps" : "websites"} • Drag to explore, Click a project image to view details`
            }
          </span>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProject(null)}
              style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0, 0, 0, 0.8)",
                zIndex: 9998,
                backdropFilter: "blur(4px)",
                WebkitBackdropFilter: "blur(4px)",
              }}
            />

            {/* Modal Content */}
            <motion.div
              ref={modalRef}
              className="project-modal"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "fixed",
                top: "50%",
                left: "50%",
                width: "90%",
                maxWidth: "900px",
                maxHeight: "90vh",
                overflowY: "auto",
                background: "rgba(0, 0, 0, 0.75)",
                borderRadius: "2rem",
                boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.1)",
                zIndex: 9999,
                display: "flex",
                flexDirection: "column",
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Accent line */}
              <div
                style={{
                  height: "4px",
                  background: `linear-gradient(90deg, ${selectedProject.accent})`,
                  borderRadius: "2rem 2rem 0 0",
                  flexShrink: 0,
                }}
              />

              {/* Close button */}
              <button
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                style={{
                  position: "absolute",
                  top: "1.5rem",
                  right: "1.5rem",
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "50%",
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#fff",
                  zIndex: 10,
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.2)";
                  e.currentTarget.style.transform = "rotate(90deg)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                  e.currentTarget.style.transform = "rotate(0deg)";
                }}
                aria-label="Close modal"
              >
                <FiX size={20} />
              </button>

              {/* Image */}
              <div style={{ position: "relative", width: "100%", flexShrink: 0 }}>
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="modal-image"
                  style={{
                    width: "100%",
                    height: "400px",
                    objectFit: "cover",
                    borderRadius: "2rem 2rem 0 0",
                    display: "block",
                  }}
                  loading="eager"
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: "100px",
                    background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                  }}
                />
              </div>

              {/* Content */}
              <div
                className="modal-content"
                style={{
                  padding: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                {/* Title and Company */}
                <div>
                  <div className="modal-header" style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem", marginBottom: "0.5rem" }}>
                    <h2
                      style={{
                        fontSize: "2rem",
                        fontWeight: 800,
                        color: "#fff",
                        margin: 0,
                        flex: 1,
                        lineHeight: "1.2",
                      }}
                    >
                      {selectedProject.title}
                    </h2>
                    {selectedProject.url && (
                      <a
                        href={selectedProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                          color: "#93c5fd",
                          fontSize: "0.9rem",
                          fontWeight: 600,
                          padding: "0.5rem 1rem",
                          background: "rgba(255,255,255,0.1)",
                          borderRadius: "0.75rem",
                          border: "1px solid rgba(255,255,255,0.2)",
                          transition: "all 0.2s ease",
                          flexShrink: 0,
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        <span>Visit Project</span>
                        <FiExternalLink size={16} />
                      </a>
                    )}
                  </div>
                  {selectedProject.company && (
                    <div style={{
                      fontSize: "1rem",
                      color: "rgba(255,255,255,0.7)",
                      fontWeight: 500,
                      fontStyle: "italic",
                      marginTop: "0.25rem",
                    }}>
                      @ {selectedProject.company}
                    </div>
                  )}
                </div>

                {/* Description */}
                <p
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    fontSize: "1.1rem",
                    lineHeight: "1.7",
                    margin: 0,
                  }}
                >
                  {selectedProject.desc}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "0.75rem",
                    paddingTop: "0.5rem",
                  }}
                >
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      style={{
                        background: "rgba(255,255,255,0.1)",
                        color: "rgba(255,255,255,0.95)",
                        padding: "0.5rem 1rem",
                        borderRadius: "1rem",
                        fontSize: "0.85rem",
                        fontWeight: 600,
                        border: "1px solid rgba(255,255,255,0.15)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
