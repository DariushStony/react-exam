import * as actions from "./actionTypes";

export const cardRemove = description => ({
    type: actions.CARD_REMOVED,
    payload: {
        description
    }
});