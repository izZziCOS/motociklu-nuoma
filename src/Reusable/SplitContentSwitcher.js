import React, { useState } from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import "./SplitContentSwitcher.css"

function SplitContentSwitcher({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const current = items[currentIndex]

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length,
    )
  }

  return (
    <Box className="split-container">
      <IconButton
        className="nav-button"
        onClick={handlePrevious}
        aria-label="Ankstesnis motociklas"
      >
        <ArrowBackIosNewIcon />
      </IconButton>

      <Box className="split-content">
        <Box className="split-image">
          <img
            src={current.imageSrc}
            alt={`${current.name} motociklas`}
            className="content-image"
          />
        </Box>
        <Box className="split-text">
          <Typography variant="h5" component="h3" className="content-title">
            {current.name}
          </Typography>
          <dl className="content-specs">
            {current.specs.map(([label, value]) => (
              <div key={label}>
                <dt>{label}:</dt> <dd>{value}</dd>
              </div>
            ))}
          </dl>
          <Typography className="content-price">
            Kaina 1 d. – <strong>{current.pricePerDay} €</strong>
          </Typography>
          <Typography className="content-counter">
            {currentIndex + 1} / {items.length}
          </Typography>
        </Box>
      </Box>

      <IconButton
        className="nav-button"
        onClick={handleNext}
        aria-label="Kitas motociklas"
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  )
}

export default SplitContentSwitcher
