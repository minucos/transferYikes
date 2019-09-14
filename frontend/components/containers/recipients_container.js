import { connect } from 'react-redux';
import { fetchRecipients } from '../../actions/user_actions';
import Recipients from './recipients';

const mapSTP = (state) => {

    return({
        recipients: Object.values(state.entities.users)
    })
}

const mapDTP = (dispatch) => ({
    fetchRecipients: () => dispatch(fetchRecipients())
});

export default connect(mapSTP,mapDTP)(Recipients);


