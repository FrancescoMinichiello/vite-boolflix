<script>
export default {
  name: 'MovieItem',
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  computed: {
    posterImage() {
      const posterPath = this.movie.poster_path;
      if (posterPath) {
        return 'https://image.tmdb.org/t/p/w342' + posterPath;
      }
    },
    rating() {
      const vote = this.movie.vote_average;
      if(vote){
        return(vote/2).toFixed(1)
      } else {
        'Voto non disponibile'
      }
  }
}
};
</script>

<template>
    <div>
      <img :src="posterImage" :alt="movie.original_title" />
      <h2>{{ movie.title }}</h2>
      <h3>Titolo originale: {{ movie.original_title }}</h3>
      <p>Lingua originale: {{ movie.original_language }}</p>
      <p>Voto: {{ rating }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use 'bootstrap/scss/bootstrap.scss' as *;
</style>