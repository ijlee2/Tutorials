import Component from '@ember/component';
import { connect } from 'ember-redux';
import _ from 'lodash';

const stateToComputed = (state) => {
    return {
        restaurant: _.get(
            state.restaurants.all,
            state.restaurants.selectedId
        )
    };
};

export default connect(stateToComputed)(Component);