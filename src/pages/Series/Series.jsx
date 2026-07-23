import React, { useState, useCallback } from "react";
import { allSeries, useMovies } from "@/hooks/useMovies";
import { getSeriesVideos } from "@/hooks/useVideos";
import Loading from "@/components/common/ui/Loading";
import Error from "@/components/common/ui/Error";
import SearchBar from "@/components/common/ui/SearchBar";
import { useSearch } from "@/hooks/useSearch";
import { IMAGE_BASE_URL } from "@/api/axiosInstance";
import { Helmet } from "react-helmet";
import { toast } from "react-toastify";

const Series = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { data, isLoading, isError, error } = useMovies("Series", allSeries);
  const { searchTerm, handleSearch, filteredData } = useSearch(
    data,
    "original_name"
  );

  const handleWatchNow = useCallback(async (seriesId) => {
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
        <title>Series</title>
      </Helmet>

      <SearchBar
        title="All Series"
        placeholder="Search for a series..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <div className="container">
        <div className="row g-4">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div
                key={item.id}
                className="col-md-3 position-relative movie-card"
              >
                <img
                  src={`${IMAGE_BASE_URL}${item.poster_path}`}
                  alt={item.original_name}
                  className="img-fluid pb-2"
                  loading="lazy"
                  decoding="async"
                />
                <div className="movie-info">
                  <p className="movie-title text-center fw-bold">
                    {item.original_name}
                  </p>
                  <p>⭐ {item.vote_average} / 10</p>
                  <p>🔥 Popularity: {item.popularity}</p>
                  <p>🗳️ {item.vote_count} Votes</p>
                  <button
                    className="btn btn-danger rounded-3"
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

export default Series;
