import React from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import CardMedia from "@mui/material/CardMedia"
import "./ImageTextGrid.css"

const ImageTextGrid = ({ items }) => {
  return (
    <Box className="image-text-grid-container">
      <Grid container spacing={2} justifyContent="center">
        {items.map((item) => (
          <Grid item xs={12} sm={4} key={item.text}>
            <Box className="image-text-grid-item">
              <Box className="image-box">
                <CardMedia
                  component="img"
                  image={item.imageSrc}
                  alt=""
                  loading="lazy"
                  className="image"
                />
              </Box>
              <Typography variant="body1" color="textPrimary">
                {item.text}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ImageTextGrid
