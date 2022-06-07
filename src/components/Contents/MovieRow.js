import styled from "styled-components";
import { MdOutlineArrowLeft, MdOutlineArrowRight } from "react-icons/md";
import { UseView } from "../../hooks";
import { useDispatch } from "react-redux";
import { setMovieDetail } from "../store/action";

function MovieRow(props) {
  const { movies, title, isPoster } = props;
  const [windownWidth] = UseView();
  const dispatch = useDispatch();
  const handleSetMovie = (movie) => {
    dispatch(setMovieDetail(movie));
  };
  return (
    <MoviesRow>
      <h1 className="head">{title}</h1>
      <Slider
        style={
          movies && movies.length > 0
            ? {
                gridTemplateColumns: `repeat(${movies.length},
                            ${
                              windownWidth > 1000
                                ? "360px"
                                : windownWidth > 990
                                ? "290px"
                                : windownWidth > 760
                                ? "240px"
                                : "200px"
                            })`,
              }
            : {}
        }
      >
        {movies &&
          movies.length > 0 &&
          movies.map((movie, index) => {
            if (movie.poster_path && movie.backdrop_path !== null) {
              let imageUrl = isPoster
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`;
              return (
                <div
                  key={index}
                  className="movieItems"
                  onClick={() => handleSetMovie(movie)}
                >
                  <img src={imageUrl} alt="Not Images" />
                  <div className="movieName">{movie.title || movie.name}</div>
                </div>
              );
            }
          })}
      </Slider>
      <div className={`btn-Left ${isPoster && "isPoster"}`}>
        <MdOutlineArrowLeft />
      </div>
      <div className={`btn-Right ${isPoster && "isPoster"}`}>
        <MdOutlineArrowRight />
      </div>
    </MoviesRow>
  );
}
export default MovieRow;
const MoviesRow = styled.div`
  background-color: #003366;
  color: var(--color-white);
  position: relative;
  padding: 20px 20px 0;
  width: 100%;
  height: 100%;

  .head {
    font-size: 20px;
    user-select: none;
    color: white;
  }
  .btn-Left {
    color: white;
    position: absolute;
    top: 50%;
    left: 30px;
    transform-origin: center;
    cursor: pointer;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.5);
    height: 50px;
    width: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);
    &:hover {
      background-color: rgba(0, 0, 0, 0.9);
    }
    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }
    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
    }
    .isPoster {
      height: 100px;
      width: max-content;
    }
  }
  .btn-Right {
    color: white;
    position: absolute;
    top: 50%;
    right: 30px;
    transform-origin: center;
    cursor: pointer;
    z-index: 20;
    background-color: rgba(0, 0, 0, 0.5);
    height: 50px;
    width: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);
    &:hover {
      background-color: rgba(0, 0, 0, 0.9);
    }
    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }
    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
    }
    .isPoster {
      height: 100px;
      width: max-content;
    }
  }
`;
const Slider = styled.div`
  display: grid;
  gap: 10px;
  transition: all 0.3s linear;
  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding-top: 26px;
  padding-bottom: 26px;
  scroll-behavior: smooth;
  &:hover .movieItems {
    opacity: 0.5;
  }
  .movieItems {
    transform: scale(1);
    max-width: 350px;
    margin-left: 28px;
    max-height: 480px;
    width: 100%;
    height: 100%;
    transition: all 0.3s linear;
    user-select: none;
    overflow: hidden;
    border-radius: 5px;
    transform: center left;
    position: relative;

    &:hover {
      transform: scale(1.1);
      z-index: 10;
      opacity: 1;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .movieName {
      color: white;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 4px;
      text-align: center;
      font-size: 20px;
      background-color: rgba(0, 0, 0, 0.65);
    }
  }
`;
