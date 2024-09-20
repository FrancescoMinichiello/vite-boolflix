<script>
import MovieItem from './MovieItem.vue';
import axios from 'axios';
import {store} from "../store.js"

export default {
data() {
    return {
        store,
    }
},
components:{
MovieItem
},

methods:{
        getMovie(){
        axios.get(store.apiUrl)
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
    <h1>
        {{ store.apiUrl }}
    </h1>
    <MovieItem/>
</template>

<style lang="scss" scoped>
@use 'bootstrap/scss/bootstrap.scss' as *;
</style>