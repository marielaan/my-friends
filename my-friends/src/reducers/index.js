import { ADD_FRIENDS, DEACTIVATE_FRIENDS, DELETE_FRIENDS, BLOCK_FRIENDS } from '../actions/index';

const initialState = [];

const rootReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_FRIENDS:
            return [...state, action.payload];


        case DEACTIVATE_FRIENDS:
            let id = action.payload
            return state.map(s => {
                if (s.id === id) {
                    s.status = 'inactive'
                }
                return s;
            });

        case BLOCK_FRIENDS:

            return state.map(s => {
                if (s.id === id) {
                    s.status = 'Blocked';
                }
                return s;
            });

        case DELETE_FRIENDS:
            
            return state.filter(s => s.id !== action.payload);





        default:
            return state;

    }
}

export default rootReducer;