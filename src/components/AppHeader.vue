<script>
import AppSearch from '../components/AppSearch.vue';
import {store} from '../store.js';
export default {
  data() {
    return {
      store,
    }
  },
  components:{
    AppSearch
  }
}
</script>

<template>
  <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="">
  <AppSearch/>
</template>

<style lang="scss" scoped>
@use 'bootstrap/scss/bootstrap.scss' as *;
img{
  height: 40px;
}
</style>