import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./TrendingSection.css";

export default function TrendingSection() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    
    const fetchMovies = async () => {
      try {
        const response = await axios.get("http://localhost:3000/movies");
        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    };

    fetchMovies();
  }, []); // runs once when component loads

  if (loading) {
    return (
      <section className="trending-section">
        <h2 className="trending-title">Trending Now</h2>
        <p style={{ color: "white" }}>Loading movies...</p>
      </section>
    );
  }

  return (
    <section className="trending-section">
      <h2 className="trending-title">Trending Now</h2>
      <div className="movie-row">
        {movies.map((movie) => (
          <MovieCard key={movie.id} img={movie.img} title={movie.title} />
        ))}
      </div>
      <hr className="Line"/>
    </section>
  );
}
