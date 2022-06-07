import * as Types from '../types'

 const reducerMovieInit = {
     Original: null,
     Trending: null,
     Toprated: null,
     Action: null,
     Comedy: null,
     Horror: null,
     Romantic: null,
     Document: null,
     MovieDetail: null,

 }


const reducerMovies = (state = reducerMovieInit, action) => {
   const {type, payload } = action
    switch (type) {
        case Types.GET_ORIGINALS:
            
            return{...state,Original: payload }

         case Types.GET_TRENDINGMOVIES:
            
                return{...state,Trending: payload }
               
                case Types.GET_TOPRATED:
            
                    return{...state,Toprated: payload }   

                    case Types.GET_ACTION:
            
                        return{...state,Action: payload }   

                        case Types.GET_COMEDY:
            
                            return{...state,Comedy: payload }   
    
                            case Types.GET_HORROR:
            
                                return{...state,Horror: payload }   
    
                                case Types.GET_ROMANTIC:
            
                                    return{...state,Romantic: payload }   
    
                                    case Types.GET_DOCUMENT:
            
                                        return{...state,Document: payload }   

                                        case Types.SET_MOVIE_DETAIL:
            
                                            return{...state,MovieDetail: payload }
    




        default:
            return state
    }
}
export default reducerMovies;