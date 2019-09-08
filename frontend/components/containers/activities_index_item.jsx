import React from 'react';

const ActivitiesIndexItem = (props) => {
    let { transaction } = props;

    return(
        <li className='activities-index-item'>
            <div className='item-details'>
                <div className='item-recipient'>
                    Transfer to <span>"Recipient Name"</span>
                </div>
                <div className='item-date'>
                    Completed, {transaction.created_at}
                </div>
            </div>
            <div className='item-amounts'>
                <div className='sent'>
                    {transaction.sent_amount}
                </div>
                <div className='received'>
                    {transaction.received_amount}
                </div>
            </div>
        </li>
    )
};

export default ActivitiesIndexItem;