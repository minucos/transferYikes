import { OPEN_MODAL, CLOSE_MODAL } from '../actions/modal_actions';

const ModalReducer = (oldState = false, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case OPEN_MODAL:
            return true;
            
        case CLOSE_MODAL:
            return false;

        default:
            return oldState;
    }
};

export default ModalReducer;