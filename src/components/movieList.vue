<script>
import { store } from '../store.js';
import MovieItem from '../components/MovieItem.vue';

export default {
  name: 'MovieList',
  components: {
    MovieItem
  },
  computed: {
    movieList() {
      return store.movieList;
    }
  }
};
</script>

<template>
    <div>
      <div v-if="movieList.length === 0">
        <p>Mi dispiace! Nessun film corrisponde alla ricerca!</p>
      </div>
      <div v-else>
        <MovieItem v-for="movie in movieList" :key="movie.id" :movie="movie" />
      </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'bootstrap/scss/bootstrap.scss' as *;
</style>