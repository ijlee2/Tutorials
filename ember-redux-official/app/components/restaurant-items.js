import Component from '@ember/component';
import { connect } from 'ember-redux';

const stateToComputed = (state) => {
    return {
        restaurants: state.restaurants.all
    };
};

export default connect(stateToComputed)(Component);