import axios from 'axios'
import * as Types from '../types'


const API_KEY= '8ebad5e2d6710b44f1c810fac1339e41';
const BASE_URL= 'https://api.themoviedb.org/3';


export const getMovieOriginals = () => async dispatch => {
    try {
        const result = await axios.get (
            `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`);
        dispatch({type: Types.GET_ORIGINALS, payload: result.data.results}); 
    } catch (error) {
        console.log(' erro:', error) }}
//trending 
        export const getMovieTrending = () => async dispatch => {
            try {
                const result = await axios.get (
                    `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-us`);
                dispatch({type: Types.GET_TRENDINGMOVIES, payload: result.data.results}); 
            } catch (error) {
                console.log(' erro Trending:', error) }}
//top rated
export const getMovieToprated = () => async dispatch => {
    try {
        const result = await axios.get (
            `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-us`);
        dispatch({type: Types.GET_TOPRATED, payload: result.data.results}); 
    } catch (error) {
        console.log(' erro TopRated:', error) }}        

//action
export const getMovieAction = () => async dispatch => {
    try {
        const result = await axios.get (
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`);
        dispatch({type: Types.GET_ACTION, payload: result.data.results}); 
    } catch (error) {
        console.log(' erro Action:', error) }}       
//comedy
export const getMovieComedy = () => async dispatch => {
    try {
        const result = await axios.get (
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=35`);
        dispatch({type: Types.GET_COMEDY, payload: result.data.results}); 
    } catch (error) {
        console.log(' erro Comedy:', error) }}    
//horror
export const getMovieHorror = () => async dispatch => {
    try {
        const result = await axios.get (
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`);
        dispatch({type: Types.GET_HORROR, payload: result.data.results}); 
    } catch (error) {
        console.log(' erro Horror:', error) }}   
//romantic
export const getMovieRomantic = () => async dispatch => {
    try {
        const result = await axios.get (
            `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`);
        dispatch({type: Types.GET_ROMANTIC, payload: result.data.results}); 
    } catch (error) {
        console.log(' erro Romantic:', error) }}
    // doc
    export const getMovieDocument = () => async dispatch => {
        try {
            const result = await axios.get (
                `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`);
            dispatch({type: Types.GET_DOCUMENT, payload: result.data.results}); 
        } catch (error) {
            console.log(' erro Document:', error) }}  
            export const setMovieDetail = (movie)  => dispatch => {
                dispatch({type: Types.SET_MOVIE_DETAIL, payload: movie})
            }