import React from "react";
import MovieSlider from "@/components/Sliders/MovieSlider";
import { allUpcoming } from "@/hooks/useLists";

const Upcoming = () => (
  <MovieSlider
    title="Upcoming :"
    queryKey="Upcoming"
    fetchFn={allUpcoming}
    delay={3000}
  />
);

export default Upcoming;
