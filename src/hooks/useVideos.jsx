import { api } from "@/api/axiosInstance";

// Fetch API For Movie Videos
export function getMovieVideos(movieId) {
  return api.get(`/movie/${movieId}/videos?language=en-US`);
}

// Fetch API For Series Videos
export function getSeriesVideos(seriesId) {
  return api.get(`/tv/${seriesId}/videos?language=en-US`);
}

// Fetch API For TV Show Videos
export function getTvVideos(tvId) {
  return api.get(`/tv/${tvId}/videos?language=en-US`);
}

// Fetch API For Trending Videos
export function getTrendingVideos(itemId) {
  return api.get(`/movie/${itemId}/videos?language=en-US`);
}
