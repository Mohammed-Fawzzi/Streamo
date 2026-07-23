import React, { useState, useCallback } from "react";
import Loading from "@/components/common/ui/Loading";
import Error from "@/components/common/ui/Error";
import SearchBar from "@/components/common/ui/SearchBar";
import { allMovies, useMovies } from "@/hooks/useMovies";
import { getMovieVideos } from "@/hooks/useVideos";
import { useSearch } from "@/hooks/useSearch";
import { IMAGE_BASE_URL } from "@/api/axiosInstance";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const Movies = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { data, isLoading, isError, error } = useMovies("Movies", allMovies);
  const { searchTerm, handleSearch, filteredData } = useSearch(
    data,
    "original_title"
  );

  const handleWatchNow = useCallback(async (movieId) => {
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
  }, []);

  const handleCloseVideo = useCallback(() => {
    setSelectedVideo(null);
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <Error message={error.message} />;

  return (
    <div className="text-white my-5 py-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movies</title>
      </Helmet>

      <SearchBar
        title="All Movies"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <div className="container">
        <div className="row g-4">
          {filteredData.length > 0 ? (
            filteredData.map((movie) => (
              <div
                key={movie.id}
                className="col-md-3 position-relative movie-card"
              >
                <img
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="img-fluid pb-2"
                  loading="lazy"
                  decoding="async"
                />
                <div className="movie-info">
                  <p className="movie-title text-center fw-bold">
                    {movie.original_title}
                  </p>
                  <p>⭐ {movie.vote_average} / 10</p>
                  <p>🗳️ {movie.vote_count} Votes</p>
                  <button
                    className="btn btn-danger rounded-3"
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

      {selectedVideo && (
        <div className="video-modal">
          <button
            type="button"
            className="video-modal-close"
            onClick={handleCloseVideo}
            aria-label="Close trailer"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${selectedVideo.key}`}
            title={selectedVideo.name}
            allowFullScreen
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Movies;
