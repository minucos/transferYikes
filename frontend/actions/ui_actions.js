export const RECEIVE_UI_DISPLAY = "RECEIVE_UI_DISPLAY";
export const SELECT_CURRENCY = "SELECT_CURRENCY";
export const SELECT_USER = "SELECT_USER";
export const CLEAR_SELECTION = "CLEAR_SELECTION";

export const receiveUIDisplay = (view) => ({
    type: RECEIVE_UI_DISPLAY,
    view: view, 
});

export const selectUser = (userId) => ({
    type: SELECT_USER,
    userId
})

export const selectCurrency = (currency) => ({
    type: SELECT_CURRENCY,
    currency
})

export const clearSelections = () => ({
    type: CLEAR_SELECTION
})