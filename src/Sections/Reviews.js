import React, { useRef } from "react"
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew"
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos"
import "./Reviews.css"

const Stars = ({ rating }) => (
  <span className="stars" role="img" aria-label={`Įvertinimas ${rating} iš 5`}>
    {[1, 2, 3, 4, 5].map((n) => (
      <svg
        key={n}
        width="18"
        height="18"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className={n <= rating ? "star star--on" : "star"}
      >
        <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z" />
      </svg>
    ))}
  </span>
)

function Reviews({ items }) {
  const trackRef = useRef(null)
  const average =
    items.reduce((sum, review) => sum + review.rating, 0) / items.length

  const scroll = (direction) => {
    const track = trackRef.current
    track?.scrollBy?.({
      left: direction * track.clientWidth * 0.9,
      behavior: "smooth",
    })
  }

  return (
    <section id="reviews" className="section reviews">
      <div className="container">
        <div className="section-header">
          <div className="reviews-heading">
            <h2 className="display-heading">Atsiliepimai</h2>
            <p className="reviews-average">
              <span className="reviews-average-value">
                {average.toLocaleString("lt-LT", { maximumFractionDigits: 1 })}
              </span>
              <Stars rating={Math.round(average)} />
              <span className="reviews-average-count">
                iš {items.length} atsiliepimų
              </span>
            </p>
          </div>
          <div className="reviews-nav">
            <button
              type="button"
              className="reviews-nav-button"
              onClick={() => scroll(-1)}
              aria-label="Ankstesni atsiliepimai"
            >
              <ArrowBackIosNewIcon fontSize="small" />
            </button>
            <button
              type="button"
              className="reviews-nav-button"
              onClick={() => scroll(1)}
              aria-label="Kiti atsiliepimai"
            >
              <ArrowForwardIosIcon fontSize="small" />
            </button>
          </div>
        </div>
      </div>
      <ul className="reviews-track" ref={trackRef} tabIndex={0}>
        {items.map((review) => (
          <li key={review.name} className="card review">
            <Stars rating={review.rating} />
            <blockquote className="review-text">„{review.text}“</blockquote>
            <footer className="review-author">
              <span className="review-name">{review.name}</span>
              <span className="review-meta">
                {review.bike} · {review.track}
              </span>
            </footer>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Reviews
