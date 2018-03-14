<template>
  <div>
      <h3>{{ name }}</h3>
      <div>
          <h4>{{ sets.length }} reps</h4>
          <span v-for="set in sets" :key="id + set.id">{{set.reps}}</span>
      </div>
  </div>
</template>

<script>
export default {
  props: ['workout'],
  data(){
      return {
          ...this.workout
      }
  }
}
</script>

