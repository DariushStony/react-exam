import * as actions from "./actionTypes";

export const cardRemove = id => ({
    type: actions.CARD_REMOVED,
    payload: {
        id
    }
});

export const cardsAdd = cards => ({
    type: actions.CARDS_ADDED,
    payload: cards
});