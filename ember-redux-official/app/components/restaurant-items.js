import Component from '@ember/component';
import { connect } from 'ember-redux';
import { getRestaurants } from '../reducers/restaurants';

const stateToComputed = (state) => {
    return {
        restaurants: getRestaurants(state)
    };
};

export default connect(stateToComputed)(Component);