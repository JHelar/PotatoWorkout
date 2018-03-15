export default {
    isLoading: false,
    isSignedIn: false,
    isSigningIn: false,
    workoutSets: [
        {
            id: 'workoutSet0',
            datelong: Date.now(),
            name: 'Leg Day',
            workouts: [
                {
                    id: 'workout0',
                    name: 'Barbell Full Squat',
                    sets: [
                        { reps: 3, id: 0 },
                        { reps: 3, id: 1 },
                        { reps: 2, id: 2 },
                        { reps: 2, id: 3 },
                        { reps: 1, id: 4 }
                    ]
                },
                {
                    id: 'workout1',
                    name: 'Leg Press',
                    sets: [
                        { reps: 3, id: 0 },
                        { reps: 3, id: 1 },
                        { reps: 2, id: 2 },
                        { reps: 2, id: 3 },
                        { reps: 1, id: 4 }
                    ]
                },
                {
                    id: 'workout2',
                    name: 'Seated Leg Curl',
                    sets: [
                        { reps: 3, id: 0 },
                        { reps: 3, id: 1 },
                        { reps: 2, id: 2 },
                        { reps: 2, id: 3 },
                        { reps: 1, id: 4 }
                    ]
                },
                {
                    id: 'workout3',
                    name: 'Leg Extensions',
                    sets: [
                        { reps: 3, id: 0 },
                        { reps: 3, id: 1 },
                        { reps: 2, id: 2 },
                        { reps: 2, id: 3 },
                        { reps: 1, id: 4 }
                    ]
                },
                {
                    id: 'workout4',
                    name: 'Standing Calf Raises',
                    sets: [
                        { reps: 3, id: 0 },
                        { reps: 3, id: 1 },
                        { reps: 2, id: 2 },
                        { reps: 2, id: 3 },
                        { reps: 1, id: 4 }
                    ]
                }
            ]
        }
    ],
    user: {}
}