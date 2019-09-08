import React from 'react';
import ActivitiesIndexItem from './activities_index_item';
import ActivityBar from './activities_bar';

class ActivitiesIndex extends React.Component {

    componentDidMount() {
        this.props.fetchAllTransactions();
    }

    render() {
        let { currentUser, users } = this.props;

        if (users === undefined || currentUser === undefined) return null;

        const transactions = this.props.transactions.map( transaction => {
           return(
                <ActivitiesIndexItem
                    key={transaction.id}
                    t={transaction}
                    currentUser={currentUser}
                    users={users}
                />
           )
        });

        return(
            <div className='activity-container'>
                <ActivityBar />
                <div className='activity-detail'>
                    <h1>History</h1>
                    <ul className='activity-list'>
                        {transactions}
                    </ul>
                </div>
            </div> 
        )
    }
}

export default ActivitiesIndex;