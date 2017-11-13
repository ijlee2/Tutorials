import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";
import { Link } from "react-router";

const Photo = React.createClass({
    render() {
        const {post, i, comments} = this.props;

        return (
            <figure className="grid-figure">
                <div className="grid-photo-wrap">
                    <Link to={`/view/${post.code}`}>
                        <img src={post.display_src} alt={post.caption} className="grid-photo" />
                    </Link>

                    {/* Show heart animation */}
                    <CSSTransitionGroup transitionName="like" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
                        <span key={post.likes} className="likes-heart">{post.likes}</span>
                    </CSSTransitionGroup>
                </div>

                <figcaption>
                    <p>{post.caption}</p>

                    <div className="control-buttons">
                        {/* Like button */}
                        <button className="likes" onClick={this.props.increment.bind(null, i)}>&hearts; {post.likes}</button>

                        {/* Add comment button */}
                        <Link className="button" to={`/view/${post.code}`}>
                            <span className="comment-count">
                                <span className="speech-bubble"></span>
                                {/* Display the number of comments */}
                                {comments[post.code] ? comments[post.code].length : 0}
                            </span>
                        </Link>
                    </div>
                </figcaption>
            </figure>
        );
    }
});

export default Photo;