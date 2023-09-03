import React from "react";

import MoviesList from "./Components/MoviesList";
import "./App.css";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMoviesHandler = async () => {
    // Handling the data using promise
    // fetch("https://swapi.dev/api/films", { method: "GET" })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log("api_data", data);
    //     const transformedMovies = data.results.map((item) => {
    //       return {
    //         id: item.episode_id,
    //         title: item.title,
    //         releaseDate: item.release_date,
    //         openingText: item.opening_crawl,
    //       };
    //     });
    //     setMovies(transformedMovies);
    //   });

    // Handling the data using async/await
    setIsLoading(true);
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();
    const transformedMovies = data.results.map((item) => {
      return {
        id: item.episode_id,
        title: item.title,
        releaseDate: item.release_date,
        openingText: item.opening_crawl,
      };
    });
    setMovies(transformedMovies);
    setIsLoading(false);
  };

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>

      <section>
        {isLoading && <p>Loading...</p>}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>No movies found.</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
