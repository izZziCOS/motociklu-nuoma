import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import OutlinedButton from '../Reusable/OutlinedButton'

function Header() {
    const handlePhoneCall = () => {
        window.location.href = 'tel:+37064307225'; // Initiates phone call to the specified number
      }

    return (
      <AppBar 
        position="fixed"
        sx={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // 50% transparent black
          backdropFilter: 'blur(5px)', // Apply blur effect
          zIndex: 1000, // Ensure it's on top of other content
        }}
      >
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Left side: Menu Icon, Logo, and Text */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box
                component="img"
                sx={{
                height: 100, // Logo size
                mr: 2, // Spacing between logo and text
                }}
                alt="Logo"
                src={`${process.env.PUBLIC_URL}/header-motorcycle.png`}
            />
            <Typography variant="h6" component="div">
                Žiedo motociklų nuoma Lietuvoje
            </Typography>
            </Box>
            <Box sx={{ display: 'flex', gap: 2 }}>
                <OutlinedButton text="+37064307225" onClick={handlePhoneCall} />
                <OutlinedButton text="Pateikti užklausą" onClick={handlePhoneCall} />
            </Box>
        </Toolbar>
      </AppBar>
    )
  }

export default Header
