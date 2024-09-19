import React from "react";
import Loading from "../Loading/Loading";
import { nowPlaying, useLists } from "../../UseLists";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const NowPlaying = () => {
  let { data, isLoading, isError, error } = useLists(
    "NowPlayingMovies",
    nowPlaying
  );

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="fw-bold my-5 py-5 text-white">Error: {error.message}</div>
    );

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-md-12">
          <h1 className="py-3 border-bottom h3">Now Playing :</h1>
          <Swiper
            slidesPerView={5}
            spaceBetween={40}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="popular-swiper p-4"
          >
            {data.map((movie) => (
              <SwiperSlide
                key={movie.id}
                className="rounded-5 position-relative"
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  className="slider-image rounded-5"
                />
                <div className="overlay position-absolute top-0 left-0 w-100 h-100 d-flex flex-column justify-content-end"></div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default NowPlaying;
