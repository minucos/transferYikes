import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import ChartModal from './chart_modal';

const mapSTP = (state) => {

    return ({
        modal: state.ui.modal,
    })
}
const mapDTP = (dispatch) => ({
    closeModal: () => dispatch(closeModal()),
});

export default connect(mapSTP,mapDTP)(ChartModal);
