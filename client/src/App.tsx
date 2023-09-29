
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Hero from './pages/Hero'
import Services from './pages/Services'

function App() {

  return (
    <>
     <Navbar/>
     <Hero />
     <Services/>
     <About />
     <Footer />
    </>
  )
}

export default App
