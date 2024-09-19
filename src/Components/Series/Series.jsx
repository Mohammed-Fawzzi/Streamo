import React, { useState } from "react";
import { allSeries, useMovies } from "../../UseMovies";
import { getSeriesVideos } from "../../UseVideos";
import Loading from "../Loading/Loading";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const Series = () => {
  // State for search
  const [searchTerm, setSearchTerm] = useState("");

  // State For Display Videos
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fetch API data
  let { data, isLoading, isError, error } = useMovies("Series", allSeries);

  const handleWatchNow = async (seriesId) => {
    try {
      const response = await getSeriesVideos(seriesId);
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

  // Filter series based on search term by Name
  const filteredSeries = data.filter((item) =>
    item.original_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-white my-5 py-4">
      {/* Helmet */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Series</title>
      </Helmet>

      {/* Content */}
      <div className="container d-flex justify-content-between align-items-center my-2">
        <h3>All Series</h3>
        <input
          type="text"
          className="form-control search-input rounded-0 border-0 mb-2"
          placeholder="Search for a series..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Content */}
      <div className="container">
        <div className="row g-4">
          {filteredSeries.length > 0 ? (
            filteredSeries.map((item) => (
              <div
                key={item.id}
                className="col-md-3 position-relative movie-card"
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                  alt={item.original_name}
                  className="img-fluid pb-2"
                  loading="lazy"
                />
                <div className="movie-info">
                  <p className="movie-title text-center fw-bold">
                    {item.original_name}
                  </p>
                  <p>⭐ {item.vote_average} / 10</p>
                  <p>🔥 Popularity: {item.popularity}</p>
                  <p>🗳️ {item.vote_count} Votes</p>
                  <button
                    className="btn btn-danger rounded-0"
                    onClick={() => handleWatchNow(item.id)}
                  >
                    <i className="fa-solid fa-video"></i> Watch Trailer
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No series found for "{searchTerm}".</p>
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

export default Series;
