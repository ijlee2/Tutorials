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

        default: {
            return state || initialState;
        }
    }
});