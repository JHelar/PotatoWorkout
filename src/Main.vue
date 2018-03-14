<template>
    <main>
      <transition name="main" mode="out-in">
        <h2 v-if="!isSignedIn">You need to be logged in order to see your workouts.</h2>
        <workout-set v-else :set="todaysWorkoutSet">
          Todays workout is
        </workout-set>
      </transition>
    </main>
</template>
<script>
import { action_names } from './vuex/actions';
import workoutset from './components/workoutSetComponent';

const { HEADING } = action_names;

export default {
  name: 'main',
  data(){
      return {
      }
  },
  computed: {
    isSignedIn(){
      return this.$store.getters.isSignedIn;
    },
    todaysWorkoutSet(){
      return this.$store.getters.getTodaysWorkout;
    }
  },
  methods: {
  },
  components: {
    'workout-set': workoutset
  }
}
</script>

<style lang="scss" scoped>
  .main-enter-active, .main-leave-active {
    transition: opacity .5s;
  }
  .main-enter, .main-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

