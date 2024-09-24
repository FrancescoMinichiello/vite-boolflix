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
      } else {
        return  'https://t4.ftcdn.net/jpg/03/48/81/77/360_F_348817789_25OWzJSmz8pbFOc8HRhxEeMpdYBPeu7X.jpg'
      }
    },
    rating() {
      const vote = this.movie.vote_average;
      if(vote){
        return(vote/2).toFixed(1)
      } else {
        return 'Voto non disponibile'
      }
  }
}
};
</script>

<template>
    <div class="card-movie">
      <img class="img-fluid" :src="posterImage" :alt="movie.original_title" />
      <h2>{{ movie.title }}</h2>
      <h3>Titolo originale: {{ movie.original_title }}</h3>
      <p>Lingua originale: {{ movie.original_language }}</p>
      <p>Voto: {{ rating }}</p>
    </div>
</template>

<style lang="scss" scoped>
@use 'bootstrap/scss/bootstrap.scss' as *;
.card-movie{
  width: 400px;
  text-align: center;
  border: 5px solid rgb(163, 163, 163);
  border-radius: 10px;
}
</style>