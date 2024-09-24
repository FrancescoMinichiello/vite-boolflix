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
      <div class="movie d-flex flex-wrap justify-content-center gap-3">
        <MovieItem v-for="movie in movieList" :key="movie.id" :movie="movie" />
      </div>
    </div>
</template>

<style lang="scss" scoped>
@use 'bootstrap/scss/bootstrap.scss' as *;
.movie{
  background-color: grey;
}
</style>