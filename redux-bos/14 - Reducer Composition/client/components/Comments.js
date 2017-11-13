import React from "react";

const Comments = React.createClass({
    renderComment(comment, i) {
        return (
            <div className="comment" key={i}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}

                    <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.params.postId, i)}>&times;</button>
                </p>
            </div>
        );
    },

    handleSubmit(event) {
        // Prevent the page from reloading
        event.preventDefault();

        const {postId} = this.props.params;
        const author   = this.refs.author.value;
        const comment  = this.refs.comment.value;

        // Dispatch an action
        this.props.addComment(postId, author, comment);

        // Clear the fields
        this.refs.commentForm.reset();

    },

    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}

                {/* ref allows React to get values from DOM */}
                <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
                    <input type="text" ref="author" placeholder="author" />
                    <input type="text" ref="comment" placeholder="comment" />

                    {/* Allow the user to hit Enter to submit their comment */}
                    <input type="submit" hidden />
                </form>
            </div>
        );
    }
});

export default Comments;