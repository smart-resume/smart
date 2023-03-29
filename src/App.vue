<template>
  <div>

    <Header></Header>    
    <router-view></router-view>

</div>
</template>

<script>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
// import HelloWorld from './components/HelloWorld.vue';
import Login from './components/Login.vue' 
export default {
  name: 'App',
  components: {
    // HelloWorld,
    // Login,
    Header,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
