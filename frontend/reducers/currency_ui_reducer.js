import { SELECT_CURRENCY, CLEAR_SELECTION } from '../actions/ui_actions';

const CurrencyUIReducer = (oldState = false, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case SELECT_CURRENCY:
      return action.currency;
    
    case CLEAR_SELECTION:
      return false;

    default:
      return oldState;
  }
};

export default CurrencyUIReducer;