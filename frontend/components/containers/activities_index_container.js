import { connect } from 'react-redux';
import ActivitiesIndex from './activities_index';

const mapSTP = (state) => {
    return ({
        transactions: Object.values(state.entities.transactions)
    })
};

const mspDTP = (dispatch) => ({

});

export default connect(mapSTP,mspDTP)(ActivitiesIndex);