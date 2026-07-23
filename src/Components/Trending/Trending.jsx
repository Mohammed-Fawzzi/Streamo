import React, { useState, useCallback } from "react";
import { allTrending, useLists } from "@/hooks/useLists";
import { getTrendingVideos } from "@/hooks/useVideos";
import Loading from "@/components/common/ui/Loading";
import Error from "@/components/common/ui/Error";
import { IMAGE_BASE_URL } from "@/api/axiosInstance";
import { toast } from "react-toastify";

const Trending = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { data, isLoading, isError, error } = useLists("Trending", allTrending);

  const handleWatchNow = useCallback(async (itemId) => {
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
  }, []);

  const handleCloseVideo = useCallback(() => {
    setSelectedVideo(null);
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <Error message={error.message} />;

  return (
    <div className="container">
      <h3 className="py-3 border-bottom">Trending :</h3>
      <div className="row g-4 py-3">
        {data.map((item) => (
          <div key={item.id} className="col-md-3 position-relative movie-card">
            <img
              src={`${IMAGE_BASE_URL}${item.poster_path}`}
              alt={item.title}
              className="img-fluid pb-2 w-100"
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
        ))}
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

export default Trending;
