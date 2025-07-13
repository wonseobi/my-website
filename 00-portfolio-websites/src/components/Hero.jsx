import { motion } from "framer-motion";

const ease = [0.6, -0.05, 0.01, 0.99]; // smooth easing

export default function Hero() {
  return (
    <motion.section
      className="hero"
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease }}
    >
      <h2>Hello, I’m <strong>Won Lee</strong></h2>
      <p>I build clean, fast, and creative web experiences using React.</p>
    </motion.section>
  );
}
