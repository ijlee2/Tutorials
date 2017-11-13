// Action creator: Increment the number of likes
export function increment(index) {
    // Return an action, which is simply an object
    return {
        "type": "INCREMENT_LIKES",
        index
    };
}

// Action creator: Add comment
export function addComment(postId, author, comment) {
    return {
        "type": "ADD_COMMENT",
        postId,
        author,
        comment
    };
}

// Action creator: Remove comment
export function removeComment(postId, index) {
    return {
        "type": "REMOVE_COMMENT",
        postId,
        index
    };
}