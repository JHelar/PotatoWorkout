<template>
    <main class="grid-x grid-padding-x align-top">
        <h1 class="small-12 cell">Your workouts!</h1>
        <workout-set v-for="set in workoutSets" :key="set.id" :set="set"></workout-set>
        <workout-set-form></workout-set-form>
    </main>
</template>
<script>
import workoutSetComponent from '../components/workoutSetComponent';
import workoutSetFormComponent from '../components/workoutSetFormComponent';

export default {
  components: {
      'workout-set': workoutSetComponent,
      'workout-set-form': workoutSetFormComponent
  },
  computed: {
      workoutSets(){
          return this.$store.getters.workoutSets;
      }
  }
}
</script>

