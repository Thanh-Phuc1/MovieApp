import React from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setMovieDetail } from '../store/action';


  // const showModal = false;
function MoviesDetail(props) {
  const {movie, showModal} = props;
  const dispatch = useDispatch();
  const handleCloseModal = () => {
    dispatch(setMovieDetail(null))
  }
  return (
    <DetailModal>
      <div 
      className={`backdrop ${showModal ? 'showBack' : 'hideBack'}`} 
      onClick={handleCloseModal}
      ></div>
      <div className={`modal ${showModal ? 'showMo' : 'hideMo'}`}
      style={
     movie ?   {backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path || movie.poster_path}
    
    )`, backgroundSize: 'cover'
  }: {}
}
      
      >
    <div className="container">
      <div className="moviesInfo">
        <h1 className="movieTitle">{movie && (movie.title || movie.name)}</h1>
        <p className="statical">
          <span className="rating">Rating: {movie && movie.vote_average * 10}</span>
          <span className="popularity">Popular: {movie && movie.popularity}</span>
        </p>
        <p className="dayrele">Release Date: 12/02/2021
        </p>
        <p className="runtime">Runtime: {movie && (movie.runtime || movie.episode_run_time)}</p>
        <p className="overview">{movie && movie.overview}</p>
      </div>
    </div>
      </div>
    </DetailModal>
  )
}

export default MoviesDetail;

  // const fakeIn = keyframes`
  // 0% : { background : rgba(0,0,0,0)}
  // 100% : { background : rgba(0,0,0,0.6)}
  
  // `;


const DetailModal = styled.div`
 .backdrop {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   z-index: 200;
   background-color: rgba(0,0,0,0.6);
 }
 .showBack{
  display: block;
 }
 .hideBack{
  display: none;
 }

 .modal{
   position: fixed;
   width: 100%;
   top: 25%;
   left: 0;
   z-index: 300;
   height: 60%;
   margin: 0 auto;
   color: white;
   box-shadow: 0 15px 40px rgba(23,24,24), 0.2;
   transition: all 0.3s ease;
   @media screen and (max-width: 1184px) {
     height: 70%;
   }
   @media screen and (max-width: 600px) {
     height: 80%;
   }
   .container{
     position: relative;
     width: 70%;
     height: 100%;
     background: linear-gradient(90deg, rgba(0,0,0,0.92) 60%, transparent);
     @media screen and (max-width: 1184px) {
     width: 88%;
     background: linear-gradient(90deg, rgba(0,0,0,0.95) 40%,rgba(0,0,0,0.733), transparent);
    }
   @media screen and (max-width: 980px) {
     width: 100%;
     background: linear-gradient(90deg, rgba(0,0,0,0.95) 50%, transparent);
    }
    @media screen and (max-width: 600px) {
    
     background: linear-gradient(90deg, rgba(0,0,0,0.88) 60%, transparent);
   }
   .moviesInfo{
     width: 65%;
     height: 100%;
     padding-left: 25px;
     color: white;
     font-size: 20px;
     padding-top: 30px;
     @media screen and (max-width: 600px) {
      font-size: 16px;
      width: 80%;
    }
    .movieTitle{
      margin-top: 30px;

    }
    .statical{
      margin-top: 20px;
      display: flex;
    .rating{
      color: green;

    }
    .popularity{
      color: yellow;
      margin-left: 12px;
    }
    }
    .dayrele, .runtime{
      margin-top: 12px;

    }
    .overview{
      margin-top: 20px;
      color: white;
      line-height: 1.4;
      font-size: 18px;
      @media screen and (max-width: 600px) {
      font-size: 14px;
      }
    }

   
  
  
  }
  }
}
  .shoMo{
    top: 25%;
    opacity: 1;
    left: 0;
    visibility: visible;
    transition: 0.3 ease-in-out;
  }
 .hideMo{
   top: 0;
   opacity: 0;
   visibility: hidden;
   transition: 0.3 ease-in-out;

 }
`;