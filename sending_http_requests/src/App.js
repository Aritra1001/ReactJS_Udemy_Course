import React, { useEffect, useCallback } from "react";
import MoviesList from "./Components/MoviesList";
import AddMovie from "./Components/AddMovies";
import { useState } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
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
      const response = await fetch(
        "https://react-http-9f1bd-default-rtdb.firebaseio.com/movies.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log("get data", data);

      let moviesArray = [];
      for (let key in data){
        moviesArray.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate
        })
      }

      // const transformedMovies = data.results.map((item) => {
      //   return {
      //     id: item.episode_id,
      //     title: item.title,
      //     releaseDate: item.release_date,
      //     openingText: item.opening_crawl,
      //   };
      // });
      setMovies(moviesArray);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    console.log(movie);
    const response = await fetch("https://react-http-9f1bd-default-rtdb.firebaseio.com/movies.json", {
      method: "POST",
      body: JSON.stringify(movie),
      headers:{
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    console.log("post data",data);
  }

  let content = <p>No movies found.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
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
