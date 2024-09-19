import React, { useState } from "react";
import { allTrending, useLists } from "../../UseLists";
import { getTrendingVideos } from "../../UseVideos";
import Loading from "../Loading/Loading";
import { toast } from "react-toastify";

const Trending = () => {
  // State for displaying videos
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Fetch API data
  let { data, isLoading, isError, error } = useLists("Trending", allTrending);

  // Handle Watch Trailer
  const handleWatchNow = async (itemId) => {
    try {
      const response = await getTrendingVideos(itemId);
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

  return (
    <div className="container">
      <h3 className="py-3 border-bottom">Trending :</h3>
      <div className="row g-4 py-3">
        {data.map((item) => (
          <div key={item.id} className="col-md-3 position-relative movie-card">
            <img
              src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
              alt={item.title}
              className="img-fluid pb-2 w-100"
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
        ))}
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

export default Trending;
