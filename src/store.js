import { reactive } from "vue";

export const store = reactive({
    searchedMovie: "",
    movieList: [],
    apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=064f1cb5f8d503beb67e132ca8eb71da",
});