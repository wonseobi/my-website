import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import ScrollToTop from './components/ScrollToTop'
import Experience from './components/Experience'
import PostHero from './components/PostHero'

function App() {
  return(
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <PostHero/>
      <Experience />
      <Contact />
      <ScrollToTop/>
    </>
  )
}



export default App;
