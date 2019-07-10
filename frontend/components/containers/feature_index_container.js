import { connect } from 'react-redux';
import { receiveUIDisplay } from '../../actions/ui_actions';
import FeatureIndex from './feature_index';

const mapDispatchToProps = (dispatch) => ({
    showActivity: () => dispatch(receiveUIDisplay('Activity')),
    showWallet: () => dispatch(receiveUIDisplay('Wallet')),
    showRecipients: () => dispatch(receiveUIDisplay('Recipients')),
})

export default connect(null, mapDispatchToProps)(FeatureIndex);