import React, { useEffect } from 'react'
import MovieRow from './MovieRow'
import { useDispatch, useSelector } from 'react-redux'
import * as ACTIONS from '../store/action';

function Contents(props) {

    const dispatch = useDispatch(); 
    const { Original,
      Trending,
      Toprated,
      Action,
      Comedy,
      Horror,
      Romantic,
      Document,} = useSelector(state => state. infoMovies);
    useEffect(() => {
      dispatch(ACTIONS.getMovieOriginals());
      dispatch(ACTIONS.getMovieTrending());
      dispatch(ACTIONS.getMovieComedy());
      dispatch(ACTIONS.getMovieDocument());
      dispatch(ACTIONS.getMovieHorror());
      dispatch(ACTIONS.getMovieRomantic());
      
      dispatch(ACTIONS.getMovieAction());

    }, [dispatch])
  return (
    <div>
        <MovieRow movies={Original} title="Originnal Movies" isPoster ={true} />
        <MovieRow movies={Trending} title="Trending Movies" />
        
        <MovieRow movies={Horror} title="Horror Movies" />
        <MovieRow movies={Romantic} title="Romance Movies" />
        <MovieRow movies={Action} title="Action Movies" />
        <MovieRow movies={Comedy} title="Comedy Movies" />
        <MovieRow movies={Document} title="Romance Movies" />
    
    </div>
  )
}

export default Contents