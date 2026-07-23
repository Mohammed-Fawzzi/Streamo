import { useQuery } from "react-query";
import { api } from "@/api/axiosInstance";

// Fetch API For Now Playing
export function nowPlaying() {
  return api.get("/movie/now_playing?language=en-US&page=1");
}

// Fetch API For Top Rated
export function topRated() {
  return api.get("/movie/top_rated?language=en-US&page=1");
}

// Fetch API For Upcoming
export function allUpcoming() {
  return api.get("/movie/upcoming?language=en-US&page=1");
}

// Fetch API For Trending
export function allTrending() {
  return api.get("/trending/tv/day?language=en-US");
}

// Re-Use Function With Any Products
export function useLists(key, fetchFunction) {
  return useQuery(key, fetchFunction, {
    select: (data) => data.data.results,
    staleTime: 900000,
    cacheTime: 3600000,
    refetchOnWindowFocus: false,
    refetchOnMount: true,
  });
}
