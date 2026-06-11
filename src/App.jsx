// 📄 Isko apni App.jsx me paste karein

import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './sections/Footer'

// 1. Saare sections ko import kijiye
import Hero from './sections/Hero'
import Marquee from './sections/Marquee'
import Services from './sections/Services'
import About from './sections/About'
import Process from './sections/Process'
import Contact from './sections/Contact'
import Careers from './sections/Careers'

// 2. Ek Home component banayein jisme sirf Home-page ka content dikhega
function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Process />
      <Contact />
    </>
  )
}

export default function App() {
  return (
    <>
      {/* Navbar aur Footer har page par common rahenge */}
      <Navbar />
      
      <Routes>
        {/* Jab user website kholega (/) toh use upar wala Home component dikhega */}
        <Route path="/" element={<Home />} />
        
        {/* Jab user links par click karega toh alag se sirf wahi component khulega */}
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/process" element={<Process />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      
      <Footer />
    </>
  )
}
