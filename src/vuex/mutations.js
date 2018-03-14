export const mutation_names = {
    IS_LOADING: 'isLoading',
    HEADING: 'heading',
    USER: 'user',
    IS_SIGNED_IN: 'isSignedIn',
    IS_SIGNING_IN: 'isSigningIn'
}

export default {
    isLoading(state, loading){
        state.isLoading = loading;
    },
    user(state, user){
        state.user = user;
    },
    isSignedIn(state, isSignedIn){
        state.isSignedIn = isSignedIn;
    },
    isSigningIn(state, isSigningIn){
        state.isSigningIn = isSigningIn;
    }
}