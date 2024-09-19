import React, { useState } from "react";
import { allTv, useMovies } from "../../UseMovies";
import { getTvVideos } from "../../UseVideos";
import Loading from "../Loading/Loading";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const Tv = () => {
  // State for search
  const [searchTerm, setSearchTerm] = useState("");
  // State for displaying videos
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fetch API data
  let { data, isLoading, isError, error } = useMovies("Tv", allTv);

  // Handle Watch Trailer
  const handleWatchNow = async (tvId) => {
    try {
      const response = await getTvVideos(tvId);
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

  // Filter TV shows based on search term
  const filteredTv = data.filter((tv) =>
    tv.original_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-white my-5 py-4">
      {/* Helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>TV Shows</title>
      </Helmet>

      {/* Content */}
      <div className="container d-flex justify-content-between align-items-center my-2">
        <h3>TV Shows</h3>
        <input
          type="text"
          className="form-control search-input rounded-0 border-0 mb-2"
          placeholder="Search for a TV Show..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Content */}
      <div className="container">
        <div className="row g-4">
          {filteredTv.length > 0 ? (
            filteredTv.map((tv) => (
              <div
                key={tv.id}
                className="col-md-3 position-relative movie-card"
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${tv.poster_path}`}
                  alt={tv.original_name}
                  className="img-fluid pb-2"
                  loading="lazy"
                />
                <div className="movie-info">
                  <p className="movie-title text-center fw-bold">
                    {tv.original_name}
                  </p>
                  <p>⭐ {tv.vote_average} / 10</p>
                  <p>🔥 Popularity: {tv.popularity}</p>
                  <p>🗳️ {tv.vote_count} Votes</p>
                  <button
                    className="btn btn-danger rounded-0"
                    onClick={() => handleWatchNow(tv.id)}
                  >
                    <i className="fa-solid fa-video"></i> Watch Trailer
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No TV shows found for "{searchTerm}".</p>
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

export default Tv;
