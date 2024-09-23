<script>
import axios from 'axios';
import {store} from '../store.js';

export default {
  data() {
    return {
      store,
    }
  },
  components:{
  },
  methods:{
    onSearch(){
     if(store.searchedMovie.trim() !==''){
      this.searchMovies
     }
      },
      searchMovies() {
      const apiKey = '064f1cb5f8d503beb67e132ca8eb71da';
      const url = 'https://api.themoviedb.org/3/search/movie';

      axios.get(url,{
        params:{
          api_key: apiKey,
          query: store.searchedMovie,
          language: 'it-IT'
        }
      })
      .then(response => {
          store.movieList = response.data.results;
        })
        .catch(error => {
          console.error('Errore nella chiamata API:', error);
        })
    }
  },
}
</script>

<template>
<div class="input-group mb-3">
  <input v-model="store.searchedMovie" @keyup.enter="onSearch" type="text" class="form-control" placeholder="Cerca un film..." aria-label="Recipient's username" aria-describedby="button-addon2">
  <button @click="onSearch" class="btn btn-outline-secondary" type="button" id="button-addon2">Cerca</button>
</div>
</template>

<style lang="scss" scoped>
@use 'bootstrap/scss/bootstrap.scss' as *;
</style>