export default {
    isLoading(state){
        return state.isLoading;
    },
    user(state){
        return state.user;
    },
    isSignedIn(state){
        return state.isSignedIn;
    },
    isSigningIn(state){
        return state.isSigningIn;
    },
    todaysWorkout(state){
        return state.workoutSets[0];
    },
    workoutSets(state) {
        return state.workoutSets;
    }
}