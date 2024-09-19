import React, { useState } from "react";
import { allArtists, useMovies } from "../../UseMovies";
import Loading from "../Loading/Loading";
import placeHolder from "../../assets/placeholder.jpg";
import { Helmet } from "react-helmet";

const Artists = () => {
  // State for search
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch API data
  let { data, isLoading, isError, error } = useMovies("Artists", allArtists);

  // Loading handling
  if (isLoading) return <Loading />;

  // Error handling
  if (isError)
    return (
      <div className="fw-bold my-5 py-5 text-white">Error: {error.message}</div>
    );

  // Filter series based on search term by Name
  const filteredArtists = data.filter((artist) =>
    artist.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="text-white my-5 py-4">
      {/* Helmet for SEO */}
      <Helmet>
        <meta charSet="utf-8" />
        <title>Artists</title>
      </Helmet>

      {/* Content header with search box */}
      <div className="container d-flex justify-content-between align-items-center my-2">
        <h3>Popular Artists</h3>
        <input
          type="text"
          className="form-control search-input rounded-0 border-0 mb-2"
          placeholder="Search for an artist..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Content */}
      <div className="container">
        <div className="row g-4">
          {filteredArtists.length > 0 ? (
            filteredArtists.map((artist) => (
              <div
                key={artist.id}
                className="col-md-3 position-relative movie-card"
              >
                <img
                  src={
                    artist.profile_path
                      ? `https://image.tmdb.org/t/p/original${artist.profile_path}`
                      : placeHolder
                  }
                  alt={artist.name}
                  className="img-fluid"
                  loading="lazy"
                />
                <div className="movie-info p-4">
                  <p className="movie-name text-center fw-bold">
                    {artist.name}
                  </p>
                  <div>
                    <span className="fw-bold text-warning pb-2">
                      Known for:
                    </span>
                    {artist.known_for.length > 0 ? (
                      <div>
                        <p className="pt-2">
                          <span className="fw-bold text-danger">Title:</span>{" "}
                          {artist.known_for[0].title}
                        </p>
                        <p>
                          <span className="fw-bold text-danger">
                            Description:
                          </span>{" "}
                          {artist.known_for[0].overview
                            .split(" ")
                            .slice(0, 15)
                            .join(" ")}
                        </p>
                        <p>
                          <span className="fw-bold text-danger">
                            Popularity:
                          </span>{" "}
                          {artist.known_for[0].popularity.toFixed(2)}
                        </p>
                      </div>
                    ) : (
                      "No information available"
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No artists found for "{searchTerm}".</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Artists;
