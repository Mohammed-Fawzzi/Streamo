import { useQuery } from "react-query";
import { api } from "@/api/axiosInstance";

// Fetch API For Movies
export function allMovies() {
  return api.get(
    "/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  );
}

// Fetch API For Series
export function allSeries() {
  return api.get("/tv/top_rated?language=en-US&page=1");
}

// Fetch API For Tv
export function allTv() {
  return api.get("/trending/tv/day?language=en-US");
}

// Fetch API For Artists
export function allArtists() {
  return api.get("/trending/person/day?language=en-US");
}

// Re-Use Function With Any Products
export function useMovies(key, fetchFunction) {
  return useQuery(key, fetchFunction, {
    select: (data) => data.data.results,
    staleTime: 900000,
    cacheTime: 3600000,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
}
