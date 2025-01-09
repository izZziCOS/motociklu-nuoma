import React, { useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import "./SplitContentSwitcher.css"

const contentData = [
  {
    imageSrc: `${process.env.PUBLIC_URL}/motorcycle-kawasaki.jpg`,
    text: `<strong>Variklis:</strong>  998 cm³ keturių cilindrų.<br>
           <strong>Elektronika:</strong>  IMU.<br>
           <strong>Pakaba:</strong>  KYB teleskopinė pakaba.<br>
           <strong>Transmisija:</strong>  6 greičių mechaninė pavarų dėžė su šlapia sankaba.<br>
           <strong>Pavarų perjungiklis:</strong>  Greita pavarų perjungimo sistema.<br>
           <strong>Top greitis:</strong>  280km/h.
           <br><br>
           <strong>Kaina 1d. -</strong>  130€<br>`,
  },
  {
    imageSrc: `${process.env.PUBLIC_URL}/motorcycle-kawasaki2.jpg`,
    text: `<strong>Variklis:</strong>  998 cm³ keturių cilindrų.<br>
           <strong>Elektronika:</strong>  IMU.<br>
           <strong>Pakaba:</strong>  Showa Balance Free Front Forks.<br>
           <strong>Transmisija:</strong>  6 greičių mechaninė pavarų dėžė su šlapia sankaba.<br>
           <strong>Pavarų perjungiklis:</strong>  Greita pavarų perjungimo sistema.<br>
           <strong>Top greitis:</strong>  290km/h.
           <br><br>
           <strong>Kaina 1d. -</strong>  140€<br>`,
  },
  {
    imageSrc: `${process.env.PUBLIC_URL}/motorcycle-honda.jpg`,
    text: `<strong>Variklis:</strong>  998 cm³ keturių cilindrų.<br>
           <strong>Elektronika:</strong>  IMU.<br>
           <strong>Pakaba:</strong>  Öhlins  Series 3 elektroninė pakaba.<br>
           <strong>Transmisija:</strong>  6 greičių mechaninė pavarų dėžė su šlapia sankaba.<br>
           <strong>Pavarų perjungiklis:</strong>  Greita pavarų perjungimo sistema.<br>
           <strong>Top greitis:</strong>  310km/h.
           <br><br>
           <strong>Kaina 1d. -</strong>  150€<br>`,
  },
]

function SplitContentSwitcher() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length)
  }

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + contentData.length) % contentData.length,
    )
  }

  return (
    <Box className="split-container">
      <Box className="split-image">
        <IconButton className="nav-button left" onClick={handlePrevious}>
          <ArrowBackIosIcon />
        </IconButton>
        <img
          src={contentData[currentIndex].imageSrc}
          alt="Content"
          className="content-image"
        />
      </Box>
      <Box className="split-text">
        <Typography
          variant="body1"
          className="content-text"
          dangerouslySetInnerHTML={{ __html: contentData[currentIndex].text }}
        />
        <IconButton className="nav-button right" onClick={handleNext}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export default SplitContentSwitcher
