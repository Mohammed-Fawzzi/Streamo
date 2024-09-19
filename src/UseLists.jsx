import axios from "axios";
import { useQuery } from "react-query";

// Fetch API For Now Playing
export function nowPlaying() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGQ0NjNjZDM5ZjI5YWNiNjFkYjUzNGQ5ZmEwZDYzMiIsIm5iZiI6MTcyNTk4NTQ2My41OTgxNDIsInN1YiI6IjY2ZGY0NWM3M2JiZTJjN2I0ODZkNTdhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.prt3kzj3stEzWMRp8KBPY5l2u3G_ci3V-v1aok8rlMo",
        accept: "application/json",
      },
    }
  );
}

// Fetch API For Top Rated
export function topRated() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGQ0NjNjZDM5ZjI5YWNiNjFkYjUzNGQ5ZmEwZDYzMiIsIm5iZiI6MTcyNTk4NTQ2My41OTgxNDIsInN1YiI6IjY2ZGY0NWM3M2JiZTJjN2I0ODZkNTdhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.prt3kzj3stEzWMRp8KBPY5l2u3G_ci3V-v1aok8rlMo",
        accept: "application/json",
      },
    }
  );
}

// Fetch API For Upcoming
export function allUpcoming() {
  return axios.get(
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGQ0NjNjZDM5ZjI5YWNiNjFkYjUzNGQ5ZmEwZDYzMiIsIm5iZiI6MTcyNTk4NTQ2My41OTgxNDIsInN1YiI6IjY2ZGY0NWM3M2JiZTJjN2I0ODZkNTdhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.prt3kzj3stEzWMRp8KBPY5l2u3G_ci3V-v1aok8rlMo",
        accept: "application/json",
      },
    }
  );
}

// Fetch API For Trending
export function allTrending() {
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
