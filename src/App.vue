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
  <header>
    <AppHeader/>
</header>
  <MovieList/>
</template>

<style lang="scss" scoped>
@use 'bootstrap/scss/bootstrap.scss' as *;
header{
  background-color: black;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: space-between;
}
</style>
