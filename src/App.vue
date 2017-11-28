<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <ul id="nav">
      <router-link to="/" tag="li" exact>
        <a>Hello</a>
      </router-link>
      <router-link to="/list/77" tag="li" exact>
        <a>List</a>
      </router-link>
      <router-link to="/detail/89" tag="li" exact>
        <a>detail</a>
      </router-link>
    </ul>
    <transition :name="transitionName">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      transitionName: ''
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style>
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*color: #2c3e50;*/
  margin-top: 60px;
}
body {
    background: url('./assets/bg.png') no-repeat center top;
    background-size: auto;
}
a {
    color: #ddd;
    text-decoration: none;
}
.router-link-active {
  font-weight: 700;
  color: #fff;
  background: #0df;
}
#nav{
  display: flex;
}
#nav li {
  padding: 5px 8px;
  border-radius: 4px;
}
</style>
