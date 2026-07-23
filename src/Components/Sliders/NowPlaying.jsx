import React from "react";
import MovieSlider from "@/components/Sliders/MovieSlider";
import { nowPlaying } from "@/hooks/useLists";

const NowPlaying = () => (
  <MovieSlider
    title="Now Playing :"
    queryKey="NowPlayingMovies"
    fetchFn={nowPlaying}
    delay={2000}
  />
);

export default NowPlaying;
