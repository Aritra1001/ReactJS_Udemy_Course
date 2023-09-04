import React from "react";
import MoviesList from "./Components/MoviesList";
import { useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

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
    setError(null);
    try {
      const response = await fetch("https://swapi.dev/api/films");

      if(!response.ok){
        throw new Error("Something went wrong!");
      }

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
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  let content = <p>No movies found.</p>

  if(movies.length > 0){
    content = <MoviesList movies={movies} />;
  }

  if(error){
    content = <p>{error}</p>
  }

  if(isLoading){
    content = <p>Loading...</p>
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>

      <section>
        {/* {isLoading && <p>Loading...</p>}
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && !error && <p>No movies found.</p>}
        {!isLoading && error && <p>{error}</p>} */}
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
