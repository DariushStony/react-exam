import * as actions from "./actionTypes";

export const cardRemove = id => ({
    type: actions.CARD_REMOVED,
    payload: {
        id
    }
});