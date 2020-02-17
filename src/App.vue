<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import 'bulma/css/bulma.css'
import Navbar from '@/components/layout/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
