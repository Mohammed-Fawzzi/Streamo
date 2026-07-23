import React, { useRef, useCallback } from "react";
import Loading from "@/components/common/ui/Loading";
import Error from "@/components/common/ui/Error";
import { useLists } from "@/hooks/useLists";
import { IMAGE_BASE_URL } from "@/api/axiosInstance";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const MovieSlider = ({ title, queryKey, fetchFn, delay = 2500 }) => {
  const swiperRef = useRef(null);
  const { data, isLoading, isError, error } = useLists(queryKey, fetchFn);

  const handlePrev = useCallback(() => {
    swiperRef.current?.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    swiperRef.current?.slideNext();
  }, []);

  if (isLoading) return <Loading />;
  if (isError) return <Error message={error.message} />;

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-md-12">
          <div className="slider-header border-bottom py-3">
            <h1 className="h3 mb-0">{title}</h1>
            <div className="slider-nav">
              <button
                type="button"
                className="slider-nav-btn"
                onClick={handlePrev}
                aria-label="Previous"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button
                type="button"
                className="slider-nav-btn"
                onClick={handleNext}
                aria-label="Next"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>
          </div>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={5}
            spaceBetween={40}
            autoplay={{
              delay,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="popular-swiper p-4"
          >
            {data.map((movie) => (
              <SwiperSlide key={movie.id} className="rounded-4 position-relative">
                <img
                  src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                  alt={movie.title}
                  className="slider-image rounded-4"
                  loading="lazy"
                  decoding="async"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MovieSlider;
