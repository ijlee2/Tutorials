import fetch from 'fetch';
import { route } from 'ember-redux';

const model = dispatch => {
    return fetch('/api/restaurants')
        .then(fetched => fetched.json())
        .then(response => dispatch({
            type: 'RESTAURANTS:TRANSFORM_LIST',
            response: response.restaurants
        }));
};

export default route({ model })();