// A reducer takes in 2 things:
// 1. a copy of the current state
// 2. the action (information about what happened)
function posts(state = [], action) {
    // Redux uses functional programming, where we do not mutate our state but keep functions pure.
    // Incorrect solution: state[action.i].likes++;

    switch (action.type) {
        case "INCREMENT_LIKES":
            const i = action.index;

            // Return the updated state
            return [
                ...state.slice(0, i),  // everything before the one that we are updating

                {
                    ...state[i],       // make sure to create a copy to keep our function pure
                    "likes": state[i].likes + 1
                },
                
                ...state.slice(i + 1)  // everything after the one that we are updating
            ];

        // Always return a default state, since all reducers are called upon an action
        default:
            return state;

    }

    return state;
}

export default posts;