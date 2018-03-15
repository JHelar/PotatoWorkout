<template>
  <section class="auto cell grid-x align-top">
        <input type="text" v-model="name" placeholder="Workout set name" class="auto cell">
        <button @click="addWorkout" class="button shrink cell">Add workout</button>
        <div v-for="workout in workouts" :key="workout.id" class="small-12 cell grid-x">
            <input type="text" v-model="workout.name" placeholder="Workout name" class="auto cell">
            <button @click="addSet(workout)" class="button shrink cell">Add set</button>
            <button @click="removeWorkout(workout.id)" class="button alert shrink cell">X</button>
            <div class="grid-x small-12 cell">
                <div class="shrink cell grid-x" v-for="set in workout.sets" :key="set.id">
                    <input type="number" placeholder="Reps" v-model="set.reps" class="auto cell">
                    <button @click="removeSet(workout, set.id)" class="button alert shrink cell">X</button>
                </div>
            </div>
        </div>
        <button @click="addWorkoutSet" class="button success">Add workout set</button>
  </section>
</template>
<script>
import { action_names } from '../vuex/actions';

export default {
  data(){
      return {
          name: '',
          workouts: []
      }
  },
  methods: {
      addWorkoutSet(){
          this.$store.dispatch(action_names.ADD_WORKOUT_SET, { name: this.name, workouts: this.workouts });
      },
      addWorkout(){
          this.workouts.push({
              id: this.workouts.length,
              name: '',
              sets: []
          });
      },
      removeWorkout(workoutId){
          const indx = this.workouts.findIndex(w => w.id === workoutId);
          if(indx > -1){
            this.workouts.splice(indx, 1);
          }
      },
      addSet(workout){
          workout.sets.push({
              id: workout.id + '-' + workout.sets.length,
              reps: 0
          })
      },
      removeSet(workout, setId){
          const indx = workout.sets.findIndex(s => s.id === setId);
          
          if(indx > -1){
              workout.sets.splice(indx, 1);
          }
      }
  }
}
</script>

