<script>
import axios from 'axios';

export default {
  data() {
    return {
      movieList: [],
      apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=064f1cb5f8d503beb67e132ca8eb71da"
    }
  },
  components:{
  },
  methods:{
    getMovie(){
      axios.get(this.apiUrl)
      .then((result)=>{
        console.log(result)
      })
      .catch(function(error){
        console.log(error)
      });
    }
  },
  created(){
    this.getMovie()
  }
}
</script>

<template>
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2">
  <button class="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
</div>
</template>

<style lang="scss" scoped>
@use 'bootstrap/scss/bootstrap.scss' as *;
</style>