<template>
  <div id="app">
    <header>
      <h1>Potato Workout</h1>
      <nav>
        <div v-if="isSignedIn">
          <user></user>
          <button @click="signOut">Sign out</button>
        </div>
        <div v-else>
          <button @click="signIn" v-if="!isSigningIn">Sign in</button>
          <span v-else>Logging in...</span>
        </div>
      </nav>
    </header>
    <router-view></router-view>
    <footer></footer>
  </div>
</template>

<script>
import { action_names } from './vuex/actions';
import user  from './components/userComponent';

const { SIGN_IN, INIT_APP, SIGN_OUT } = action_names;

export default {
  name: 'app',
  created(){
    this.$store.dispatch(INIT_APP);
  },
  computed: {
    isSignedIn(){
      return this.$store.getters.isSignedIn;
    },
    isSigningIn(){
      return this.$store.getters.isSigningIn;
    }
  },
  methods: {
    signOut(){
      this.$store.dispatch(SIGN_OUT);
    },
    signIn(){
      this.$store.dispatch(SIGN_IN);
    }
  },
  components: {
    'user': user
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
