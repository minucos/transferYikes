import { connect } from 'react-redux';
import ActivitiesIndex from './activities_index';

const mapSTP = (state) => {
    const userId = state.session.id;

    return ({
        // activities: userActivies(state, userId)
    })
};

const mspDTP = (dispatch) => ({

});

export default connect(mapSTP,mspDTP)(ActivitiesIndex);