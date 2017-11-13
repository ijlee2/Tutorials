import React from "react";
import Photo from "./Photo";
import Comments from "./Comments";

const Single = React.createClass({
    render() {
        // Get the post id
        const {postId} = this.props.params;

        // Get the index of the post
        const i = this.props.posts.findIndex(post => post.code === postId);

        // Get the post
        const post = this.props.posts[i];

        // Get the comments
        const postComments = this.props.comments[postId] || [];

        return (
            <div className="single-photo">
                <Photo i={i} post={post} {...this.props} />
                <Comments postComments={postComments} {...this.props} />
            </div>
        );
    }
});

export default Single;