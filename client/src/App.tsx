
import './App.css'
import Footer from './components/Footer'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Signup from './components/Signup'
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
     <hr/>
     <Login/>
     <Signup/>
     <Footer />
     
    </>
  )
}

export default App
