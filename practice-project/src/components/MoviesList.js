import React, {useState, useEffect, useCallback} from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';





const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  const [myError, setMyError] = useState(null);

  const fetchMovieHandler = useCallback(async () => {
    try {
      const response = await fetch("https://react-b8154-default-rtdb.firebaseio.com/movie.json");
      if(!response.ok) {
        throw new Error('Something Went Wrong. :(');
      }
      const data = await response.json();
      const loadedMovies = [];
      for(const key in data) {
        loadedMovies.push({
          id : key,
          title : data[key].title,
          openingText : data[key].openingText,
          releaseDate : data[key].releaseDate,
        })
      }
  
      const transformedMovies = loadedMovies.map((movie) => {
        return {
          id: movie.id,
          title: movie.title,
          openingText: movie.openingText,
          releaseDate: movie.releaseDate,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setMyError(error.message);
    }
  }, [])
  
  useEffect(() => {
    fetchMovieHandler()
  },[fetchMovieHandler])

  return (
    <ul className={classes['movies-list']}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
