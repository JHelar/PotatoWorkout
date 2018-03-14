<template>
    <div>
        <img :src="user.photoURL" :alt="user.displayName">
        <h1>{{ user.displayName }}</h1>
    </div>
</template>
<script>
export default {
  computed: {
      user(){
          return this.$store.getters.user;
      }
  }
}
</script>

