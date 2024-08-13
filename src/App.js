import React from 'react'
import './App.css'
import Header from './Main/Header'
import Box from '@mui/material/Box'

function App() {
  return (
    <div className="App">
      <Header/>
      <Box
        component="img"
        src={`${process.env.PUBLIC_URL}/main-display.gif`}
        alt="Animated GIF"
        sx={{
          width: '100%', // Make the GIF take up the full width of its container
          height: 'auto', // Maintain aspect ratio
          mt: '64px', // Add some margin on top
        }}
      />
    </div>
  )
}

export default App
