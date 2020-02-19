import { SELECT_USER, CLEAR_SELECTION } from '../actions/ui_actions';

const UserUIReducer = (oldState = false, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case SELECT_USER:
      return action.userId

    case CLEAR_SELECTION:
      return false;

    default:
      return oldState;
  }
};

export default UserUIReducer;