import React from "react";
import MovieSlider from "@/components/Sliders/MovieSlider";
import { topRated } from "@/hooks/useLists";

const TopRated = () => (
  <MovieSlider
    title="Top Rated :"
    queryKey="TopRated"
    fetchFn={topRated}
    delay={4000}
  />
);

export default TopRated;
