import axios from "axios";

const apiKey = '0e0361a1e4feb360695e2fc32793d846';
const url = 'https://api.themoviedb.org/3';
const nowPlayingUrl = `${url}/movie/now_playing`;
const topRatedUrl = `${url}/movie/top_rated`;
const movieUrl = `${url}/movie`;
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;
const personUrl = `${url}/trending/person/week`;

export const fetchMovies = async () => {
    try {
        const { data } = await axios.get(nowPlayingUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })

        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((ele) => ({
            id: ele['id'],
            backPoster: posterUrl + ele['backdrop_path'],
            popularity: ele['popularith'],
            title: ele['title'],
            poster: posterUrl + ele['poster_path'],
            overview: ele['overview'],
            rating: ele['vote_average'],
        }))

        return modifiedData;
    } catch (error) { }
}
export const fetchGenre = () => {

}
export const fetchMovieByGenre = () => {

}
export const fetchPersons = () => {

}
export const fetchTopRatedMovies = () => {

}
export const fetchMovieDetail = () => {

}
export const fetchMovieVideos = () => {

}

export const fetchCasts = () => {

}
export const fetchSimilarMovies = () => {

}