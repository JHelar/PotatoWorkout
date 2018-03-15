<template>
  <section class="auto cell">
        <header>
            <h2><slot>{{set.name}}</slot></h2>
        </header>
        <transition-group tag="main">
            <workout v-for="workout in set.workouts" :workout="workout" :key="workout.id"></workout>
        </transition-group>
        <footer>

        </footer>
  </section>
</template>

<script>
import workout from './workoutComponent';
export default {
  props: ['set'],
  components: {
      'workout': workout
  }
}
</script>
