import React from "react";
import "./MovieCard.css";

export default function MovieCard({ img, title }) {
  return (
    <div className="movie-card">
      <img src={img} alt={title} className="movie-img" />
      <h4 className="movie-title">{title}</h4>
    </div>
  );
}