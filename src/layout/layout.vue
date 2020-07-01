<template>
  <div class="app-wrapper">
    <navbar></navbar>
    <div class="main-container">
      <Container></Container>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
  import Navbar from './navbar'
  import Footer from './footer'
  import Container from './container'

  export default {
    components: {
      Navbar,
      Footer,
      Container
    }
  }
</script>
<style scoped>

</style>
