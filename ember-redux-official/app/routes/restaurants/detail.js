import fetch from 'fetch';
import { route } from 'ember-redux';

const model = (dispatch, params) => {
    return fetch(`/api/restaurants/${params.id}`)
        .then(fetched => fetched.json())
        .then(response => dispatch({
            type: 'RESTAURANTS:TRANSFORM_DETAIL',
            response: response.restaurants
        }));
};

export default route({ model })();