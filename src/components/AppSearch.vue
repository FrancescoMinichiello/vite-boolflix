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
    getMovies(movie=''){
      let url = store.apiUrl;
      if(movie){
        url= `https://api.themoviedb.org/3/search/movie?api_key=064f1cb5f8d503beb67e132ca8eb71da&query=${movie}`
      }
      axios.get(url)
      .then((result)=>{
        console.log(result)
      })
      .catch(function(error){
        console.log(error)
      });
    }
  },
  created(){
    this.getMovies()
  }
}
</script>

<template>
<div class="input-group mb-3">
  <input v-model="store.searchedMovie" type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
</div>
</template>

<style lang="scss" scoped>
@use 'bootstrap/scss/bootstrap.scss' as *;
</style>