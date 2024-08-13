import React from 'react'
import './App.css'
import Header from './Main/Header'
import Box from '@mui/material/Box'
import Footer from './Main/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main-content">
        <Box
          component="img"
          src={`${process.env.PUBLIC_URL}/main-display.gif`}
          alt="Animated GIF"
          className="main-image" 
          sx={{
            width: '100%', // Make the GIF take up the full width of its container
            height: 'auto', // Maintain aspect ratio
          }}
        />
      </div>
      <Footer/>
    </div>
  )
}

export default App
