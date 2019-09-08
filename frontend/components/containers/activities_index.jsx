import React from 'react';
import ActivitiesIndexItem from './activities_index_item';

class ActivitiesIndex extends React.Component {

    render() {
        const transactions = this.props.transactions.map( transaction => {
           return(
                <ActivitiesIndexItem
                    key={transaction.id}
                    transaction={transaction}
                />
           )
        });

        return(
            <div className='activities-container'>
                <h1>Activities</h1>
                <ul className='activities-list'>
                    {transactions}
                </ul>
            </div> 
        )
    }
}

export default ActivitiesIndex;