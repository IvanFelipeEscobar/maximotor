
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Box, useColorModeValue } from '@chakra-ui/react'
// import { GlobalStateProvider } from './UserContext'

function App() {

  return (
    <Box
    bg={useColorModeValue('rgb(41, 63, 137)', 'rgb(71,90,127)')}
    >
    {/* <GlobalStateProvider> */}
     <Navbar/>
     <Outlet />
     <Footer />
      {/* </GlobalStateProvider> */}
    </Box>
  )
}

export default App
