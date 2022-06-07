import {combineReducers} from 'redux'
import reducerMovies from './reducersMovie'

const rootReducer = combineReducers ({
    infoMovies: reducerMovies
})
export default rootReducer;