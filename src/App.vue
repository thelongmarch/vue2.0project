<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App', 
  methods:{
    init() {
      debugger
      this.$axios("/abc/def", {a:1111}).then(res => {
            if (res.status === 'success') {
            } else {
              this.$toast(res.data.errMsg)
            }
      })
    }
  },
  mounted(){
    this.init()
  },
  
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
