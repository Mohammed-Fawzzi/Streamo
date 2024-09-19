import axios from "axios";
import { useQuery } from "react-query";

// Fetch API For Movies
export function allMovies() {
  return axios.get(
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGQ0NjNjZDM5ZjI5YWNiNjFkYjUzNGQ5ZmEwZDYzMiIsIm5iZiI6MTcyNTk4NTQ2My41OTgxNDIsInN1YiI6IjY2ZGY0NWM3M2JiZTJjN2I0ODZkNTdhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.prt3kzj3stEzWMRp8KBPY5l2u3G_ci3V-v1aok8rlMo",
        accept: "application/json",
      },
    }
  );
}

// Fetch API For Series
export function allSeries() {
  return axios.get(
    "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGQ0NjNjZDM5ZjI5YWNiNjFkYjUzNGQ5ZmEwZDYzMiIsIm5iZiI6MTcyNTk4NTQ2My41OTgxNDIsInN1YiI6IjY2ZGY0NWM3M2JiZTJjN2I0ODZkNTdhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.prt3kzj3stEzWMRp8KBPY5l2u3G_ci3V-v1aok8rlMo",
        accept: "application/json",
      },
    }
  );
}

// Fetch API For Tv
export function allTv() {
  return axios.get(
    "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGQ0NjNjZDM5ZjI5YWNiNjFkYjUzNGQ5ZmEwZDYzMiIsIm5iZiI6MTcyNTk4NTQ2My41OTgxNDIsInN1YiI6IjY2ZGY0NWM3M2JiZTJjN2I0ODZkNTdhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.prt3kzj3stEzWMRp8KBPY5l2u3G_ci3V-v1aok8rlMo",
        accept: "application/json",
      },
    }
  );
}

// Fetch API For Artists
export function allArtists() {
  return axios.get(
    "https://api.themoviedb.org/3/trending/person/day?language=en-US",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGQ0NjNjZDM5ZjI5YWNiNjFkYjUzNGQ5ZmEwZDYzMiIsIm5iZiI6MTcyNTk4NTQ2My41OTgxNDIsInN1YiI6IjY2ZGY0NWM3M2JiZTJjN2I0ODZkNTdhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.prt3kzj3stEzWMRp8KBPY5l2u3G_ci3V-v1aok8rlMo",
        accept: "application/json",
      },
    }
  );
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
