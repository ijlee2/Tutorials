// A reducer takes in 2 things:
// 1. a copy of the current state
// 2. the action (information about what happened)

// Helper function (reducer composition)
function postComments(state = [], action) {
    switch (action.type) {
        case "ADD_COMMENT":
            // Return the new state with the new comment
            return [
                ...state,

                {
                    "user": action.author,
                    "text": action.comment
                }
            ];

        case "REMOVE_COMMENT":
            // Return the new state without the comment
            return [
                // Keep everything before
                ...state.slice(0, action.index),

                // Keep everything after
                ...state.slice(action.index + 1)
            ];

        default:
            return state;

    }
}

function comments(state = [], action) {
    if (typeof action.postId !== "undefined") {
        return {
            // Take the current state
            ...state,

            // Overwrite this post with a new one
            [action.postId]: postComments(state[action.postId], action)
        }
    }

    return state;
}

export default comments;