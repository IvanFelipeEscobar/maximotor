
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Hero from './pages/Hero'
import Services from './pages/Services'

function App() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
  };

  return (
    <>
     <Navbar/>
     <Hero />
     <About />
     <Contact />
     <Services settings={settings}/>
    </>
  )
}

export default App
