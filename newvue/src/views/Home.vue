<template>
  <div class="home">
        <home-header></home-header>
				<home-down></home-down>
  </div>
</template>

<script>
// @ is an alias to /src

import HomeNav from "../components/home-header.vue"
import HomeDown from "../components/home-down.vue"
export default {
  name: 'home',
  components: {
         "home-header":HomeNav ,
				 "home-down":HomeDown
  }	
}
</script>

<style>

</style>
