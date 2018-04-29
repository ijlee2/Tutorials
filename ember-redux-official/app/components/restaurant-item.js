import Component from '@ember/component';
import { connect } from 'ember-redux';
import { getReviews } from '../reducers/restaurants';

const stateToComputed = (state) => {
    return {
        reviews: getReviews(state)
    };
};

export default connect(stateToComputed)(Component);