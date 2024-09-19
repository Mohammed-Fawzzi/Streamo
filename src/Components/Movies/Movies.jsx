import React, { useState } from "react";
import Loading from "../Loading/Loading";
import { allMovies, useMovies } from "../../UseMovies";
import { getMovieVideos } from "../../UseVideos";

import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const Movies = () => {
  // State For Display Videos
  const [selectedVideo, setSelectedVideo] = useState(null);

  // State for search
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch API data
  let { data, isLoading, isError, error } = useMovies("Movies", allMovies);

  // Handle Watch Trailer
  const handleWatchNow = async (movieId) => {
    try {
      const response = await getMovieVideos(movieId);
      const trailer = response.data.results.find(
        (video) => video.type === "Trailer"
      );
      if (trailer) {
        setSelectedVideo(trailer);
      } else {
        toast.warn(`No trailer available.`, {
          autoClose: 2000,
        });
      }
    } catch (err) {
      toast.warn(`No trailer available.`, {
        autoClose: 2000,
      });
    }
  };

  // Loading handling
  if (isLoading) return <Loading />;

  // Error handling
  if (isError)
    return (
      <div className="fw-bold my-5 py-5 text-white">Error: {error.message}</div>
    );

  // Filter movies based on search term
  const filteredMovies = data.filter((movie) =>
    movie.original_title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-white my-5 py-4">
      {/* Helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movies</title>
      </Helmet>

      {/* Search bar */}
      <div className="container d-flex justify-content-between align-items-center my-2">
        <h3>All Movies</h3>
        <input
          type="text"
          className="form-control search-input rounded-0 border-0 mb-2"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Content */}
      <div className="container">
        <div className="row g-4">
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <div
                key={movie.id}
                className="col-md-3 position-relative movie-card"
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  className="img-fluid pb-2"
                  loading="lazy"
                />
                <div className="movie-info">
                  <p className="movie-title text-center fw-bold">
                    {movie.original_title}
                  </p>
                  <p>⭐ {movie.vote_average} / 10</p>
                  <p>🗳️ {movie.vote_count} Votes</p>
                  <button
                    className="btn btn-danger rounded-0"
                    onClick={() => handleWatchNow(movie.id)}
                  >
                    <i className="fa-solid fa-video"></i> Watch Trailer
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No movies found for "{searchTerm}".</p>
          )}
        </div>
      </div>

      {/* Video modal */}
      {selectedVideo && (
        <div className="video-modal">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${selectedVideo.key}`}
            title={selectedVideo.name}
            allowFullScreen
          ></iframe>
          <button
            className="btn btn-outline-danger rounded-0"
            onClick={() => setSelectedVideo(null)}
          >
            X
          </button>
        </div>
      )}
    </div>
  );
};

export default Movies;
