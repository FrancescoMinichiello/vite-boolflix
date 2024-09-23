<script>
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import {store} from './store.js'
export default {
  data() {
    return {
      
    }
  },
  components:{
    AppMain,
    AppHeader
  },
}
</script>

<template>
  <AppHeader/>
  <AppMain/>
</template>

<style lang="scss" scoped>
@use 'bootstrap/scss/bootstrap.scss' as *;
</style>
