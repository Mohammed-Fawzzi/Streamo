import React from "react";
import Loading from "../Loading/Loading";
import { topRated, useLists } from "../../UseLists";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const TopRated = () => {
  let { data, isLoading, isError, error } = useLists("TopRated", topRated);

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="fw-bold my-5 py-5 text-white">Error: {error.message}</div>
    );

  return (
    <div className="container pb-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="py-3 border-bottom h3">Top Rated :</h1>
          <Swiper
            slidesPerView={5}
            spaceBetween={40}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false, 
            }}
            modules={[Autoplay]}
            className="popular-swiper p-4"
          >
            {data.map((movie) => (
              <SwiperSlide key={movie.id} className="rounded-5">
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt={movie.title}
                  className="slider-image rounded-5"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TopRated;
