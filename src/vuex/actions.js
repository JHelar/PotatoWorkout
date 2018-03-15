import firebase from 'firebase';

import { mutation_names } from './mutations';

export const action_names = {
    HEADING: 'heading',
    SIGN_IN: 'signIn',
    SIGN_OUT: 'signOut',
    INIT_APP: 'initApp',
    ADD_WORKOUT_SET: 'addWorkoutSet'
}

export default {
    addWorkoutSet({ commit }, workoutSet){
        workoutSet['datelong'] = Date.now();
        commit(mutation_names.ADD_WORKOUT_SET, workoutSet)
    },
    signIn({ commit }){
        const user = firebase.auth().currentUser;
        if(!user){
            commit(mutation_names.IS_SIGNING_IN, true);
            const provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithRedirect(provider);
        }else{
            commit(mutation_names.USER, user)
            commit(mutation_names.IS_SIGNED_IN, true);
        }
    },
    signOut({ commit }){
        firebase.auth().signOut()
            .then(() => {
                commit(mutation_names.IS_SIGNED_IN, false);
            })
            .catch(err => console.error(err));
    },
    initApp({ commit }){
        commit(mutation_names.IS_SIGNING_IN, true);
        firebase.auth().getRedirectResult().then(result => {
            commit(mutation_names.IS_SIGNING_IN, false);
            commit(mutation_names.IS_SIGNED_IN, true);
            commit(mutation_names.USER, result);

        }).catch(err => console.error(err));
        firebase.auth().onAuthStateChanged(user => {
            commit(mutation_names.USER, user);
            commit(mutation_names.IS_SIGNED_IN, user ? true : false);
            commit(mutation_names.IS_SIGNING_IN, false);
        })
    }
};