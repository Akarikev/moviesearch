import { useState, useEffect } from "react";

import "./App.css";

import MovieCard from "./Movies/MovieCard";

//http://www.omdbapi.com/?i=tt3896198&apikey=51912e0e
// var rA = Math.floor(Math.random() * a.length)
// var rB = Math.floor(Math.random() * b.length)
// var rC = a[rA] + b[rB]
const API_URL = "http://omdbapi.com?apikey=51912e0e";

// export const movie1 = {
//   Title: "The Shawshank Redemption: Cast Interviews",
//   Year: "2004",
//   imdbID: "tt5443390",
//   Type: "movie",
//   Poster: "N/A",
// };

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovie("Supernatural");
  }, []);

  return (
    <div className="App">
      <h1>moviesearch.io 🎬🍿</h1>

      <div className="search">
        <input
          className="searchBox"
          type="text"
          placeholder="Supernatural"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button onClick={() => searchMovie(searchTerm)}>searh 👀</button>
      </div>
      <br />
      {movies?.length > 0 ? (
        <div>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="box">
          No Movies found: This might be due to your search term being wrong or
          movie isn't available yet!
        </div>
      )}
    </div>
  );
}

export default App;
