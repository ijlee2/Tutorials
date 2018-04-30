import Component from '@ember/component';
import { connect } from 'ember-redux';
import fetch from 'fetch';
import { getReviews, getSelectedId } from '../reducers/restaurants';

const stateToComputed = (state) => {
    return {
        reviews: getReviews(state),
        selectedId: getSelectedId(state)
    };
};

// Must use function!
const dispatchToActions = function(dispatch) {
    return {
        rate: rating => {
            const selectedId = this.get('selectedId');
            const params = {
                method: 'POST',
                body: JSON.stringify({ rating })
            };

            return fetch(`/api/restaurants/${selectedId}`, params)
                .then(fetched => fetched.json())
                .then(response => dispatch({
                    type: 'RESTAURANTS:RATE',
                    response: response.restaurants
                }));
        }
    };
};

export default connect(stateToComputed, dispatchToActions)(Component);