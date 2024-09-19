import axios from "axios";

// Fetch API For Movie Videos
export function getMovieVideos(movieId) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGQ0NjNjZDM5ZjI5YWNiNjFkYjUzNGQ5ZmEwZDYzMiIsIm5iZiI6MTcyNTk4NTQ2My41OTgxNDIsInN1YiI6IjY2ZGY0NWM3M2JiZTJjN2I0ODZkNTdhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.prt3kzj3stEzWMRp8KBPY5l2u3G_ci3V-v1aok8rlMo",
        accept: "application/json",
      },
    }
  );
}

// Fetch API For Series Videos
export function getSeriesVideos(seriesId) {
  return axios.get(
    `https://api.themoviedb.org/3/tv/${seriesId}/videos?language=en-US`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGQ0NjNjZDM5ZjI5YWNiNjFkYjUzNGQ5ZmEwZDYzMiIsIm5iZiI6MTcyNTk4NTQ2My41OTgxNDIsInN1YiI6IjY2ZGY0NWM3M2JiZTJjN2I0ODZkNTdhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.prt3kzj3stEzWMRp8KBPY5l2u3G_ci3V-v1aok8rlMo",
        accept: "application/json",
      },
    }
  );
}

// Fetch API For TV Show Videos
export function getTvVideos(tvId) {
  return axios.get(
    `https://api.themoviedb.org/3/tv/${tvId}/videos?language=en-US`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGQ0NjNjZDM5ZjI5YWNiNjFkYjUzNGQ5ZmEwZDYzMiIsIm5iZiI6MTcyNTk4NTQ2My41OTgxNDIsInN1YiI6IjY2ZGY0NWM3M2JiZTJjN2I0ODZkNTdhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.prt3kzj3stEzWMRp8KBPY5l2u3G_ci3V-v1aok8rlMo",
        accept: "application/json",
      },
    }
  );
}

// Fetch API For Trending Videos
export function getTrendingVideos(itemId) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${itemId}/videos?language=en-US`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMGQ0NjNjZDM5ZjI5YWNiNjFkYjUzNGQ5ZmEwZDYzMiIsIm5iZiI6MTcyNTk4NTQ2My41OTgxNDIsInN1YiI6IjY2ZGY0NWM3M2JiZTJjN2I0ODZkNTdhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.prt3kzj3stEzWMRp8KBPY5l2u3G_ci3V-v1aok8rlMo",
        accept: "application/json",
      },
    }
  );
}
