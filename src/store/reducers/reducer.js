import * as actions from "../actions/actionTypes";

const reducer = (state = [], action) => {
    switch (action.type) {
        case actions.CARD_REMOVED:
            return state.filter(card => card.id !== action.payload.id);

        default:
            return state;
    }
};

export default reducer;