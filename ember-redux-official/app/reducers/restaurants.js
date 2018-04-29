import _ from 'lodash';

const initialState = {
    all: undefined
};

export default ((state, action) => {
    switch (action.type) {
        case 'RESTAURANTS:TRANSFORM_LIST': {
            const restaurants = _.keyBy(
                action.response,
                restaurant => restaurant.id
            );

            const merged = _.extend({}, state.all, restaurants);

            return Object.assign({}, state, {all: merged});
        }

        case 'RESTAURANTS:TRANSFORM_DETAIL': {
            const restaurant = {
                [action.response.id]: action.response
            };

            const merge = _.extend({}, state.all, restaurant);

            return Object.assign({}, state, {
                all: merge,
                selectedId: action.response.id
            });
        }

        default: {
            return state || initialState;
        }
    }
});