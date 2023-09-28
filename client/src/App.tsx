
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Hero from './pages/Hero'
import Services from './pages/Services'

function App() {

  return (
    <>
     <Navbar/>
     <Hero />
      
     <Services/>
     <About />
     <Contact />
    </>
  )
}

export default App
