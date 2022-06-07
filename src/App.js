// import Contents from "./components/Contents/MovieRow";
import { useSelector } from "react-redux";
import Contents from "./components/Contents/Contents";
import Intro from "./components/Intro/Intro";
import MoviesDetail from "./components/MoviesDetail/MoviesDetail";
import NarBar from "./components/NavBar";



function App() {
   const { MovieDetail } = useSelector(state => state.infoMovies)
  return (
   <>
   <NarBar/>
   <Intro/>
   <Contents />
   <MoviesDetail movie={MovieDetail}  showModal={MovieDetail ? true : false}/>
   </>
  );
}

export default App;
