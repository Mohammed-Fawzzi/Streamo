import React from "react";
import { allArtists, useMovies } from "@/hooks/useMovies";
import Loading from "@/components/common/ui/Loading";
import Error from "@/components/common/ui/Error";
import SearchBar from "@/components/common/ui/SearchBar";
import { useSearch } from "@/hooks/useSearch";
import placeHolder from "@/assets/placeholder.jpg";
import { IMAGE_BASE_URL } from "@/api/axiosInstance";
import { Helmet } from "react-helmet";

const Artists = () => {
  const { data, isLoading, isError, error } = useMovies("Artists", allArtists);
  const { searchTerm, handleSearch, filteredData } = useSearch(data, "name");

  if (isLoading) return <Loading />;
  if (isError) return <Error message={error.message} />;

  return (
    <div className="text-white my-5 py-4">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Artists</title>
      </Helmet>

      <SearchBar
        title="Popular Artists"
        placeholder="Search for an artist..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <div className="container">
        <div className="row g-4">
          {filteredData.length > 0 ? (
            filteredData.map((artist) => (
              <div
                key={artist.id}
                className="col-md-3 position-relative movie-card"
              >
                <img
                  src={
                    artist.profile_path
                      ? `${IMAGE_BASE_URL}${artist.profile_path}`
                      : placeHolder
                  }
                  alt={artist.name}
                  className="img-fluid"
                  loading="lazy"
                  decoding="async"
                />
                <div className="movie-info">
                  <p className="artist-name">{artist.name}</p>
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
