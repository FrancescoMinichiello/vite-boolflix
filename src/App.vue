<script>
import MovieList from './components/MovieList.vue';
import AppHeader from './components/AppHeader.vue';
import {store} from './store.js'
export default {
  data() {
    return {
      store,
    }
  },
  components:{
    AppHeader,
    MovieList
  },
}
</script>

<template>
  <AppHeader/>
  <MovieList/>
</template>

<style lang="scss" scoped>
@use 'bootstrap/scss/bootstrap.scss' as *;
</style>
