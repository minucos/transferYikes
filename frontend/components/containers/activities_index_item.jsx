import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight, faLongArrowAltLeft, faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

const ActivitiesIndexItem = (props) => {
    let { t, currentUser, users } = props;
    let date = new Date(t.created_at);
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    date = `${date.getDate()} ${months[date.getMonth() - 1]} ${date.getFullYear()}`;

    if (currentUser.id === t.sender_id && currentUser.id === t.receiver_id) {

        return(
            <li className='activity-index-item'>
                <div className='item-detail-container'>
                    <FontAwesomeIcon 
                        className='activity-icon'
                        icon={faExchangeAlt} 
                    />
                    <div className='item-details'>
                        <div className='item-recipient'>
                            Currency Conversion from <span>{t.from_currency} to {t.to_currency}</span>
                        </div>
                        <div className='item-date'>
                            Completed, {date}
                        </div>
                    </div>
                </div>
                <div className='item-amounts'>
                    <div className='top'>
                        {t.received_amount.toFixed(2)} {t.to_currency}
                    </div>
                    <div className='bottom'>
                        {t.sent_amount.toFixed(2)} {t.from_currency}
                    </div>
                </div>
            </li>
        )
    } else if (currentUser.id === t.sender_id) {
        let receiver = `${users[t.receiver_id].fname} ${users[t.receiver_id].lname}`;

        return (
            <li className='activity-index-item'>
                <div className='item-detail-container'>
                    <FontAwesomeIcon
                        className='activity-icon'
                        icon={faLongArrowAltRight}
                    />
                    <div className='item-details'>
                        <div className='item-recipient'>
                            Transfer to <span>{receiver}</span>
                        </div>
                        <div className='item-date'>
                            Completed, {date}
                        </div>
                    </div>
                </div>
                <div className='item-amounts'>
                    <div className='top'>
                        {t.sent_amount.toFixed(2)} {t.from_currency}
                    </div>
                    <div className='bottom'>
                        {t.received_amount.toFixed(2)} {t.to_currency}
                    </div>
                </div>
            </li>
        )
    } else {

        let sender = `${users[t.sender_id].fname} ${users[t.sender_id].lname}`;
        
        return (
            <li className='activity-index-item'>
                <div className='item-detail-container'>
                    <FontAwesomeIcon
                        className='activity-icon'
                        icon={faLongArrowAltLeft}
                    />
                    <div className='item-details'>
                        <div className='item-recipient'>
                            Deposit from <span>{sender}</span>
                        </div>
                        <div className='item-date'>
                            Completed, {date}
                        </div>
                    </div>
                </div>
                <div className='item-amounts'>
                    <div className='top'>
                        {t.received_amount.toFixed(2)} {t.to_currency}
                    </div>
                    <div className='bottom'>
                        {t.sent_amount.toFixed(2)} {t.from_currency}
                    </div>
                </div>
            </li>
        )
    }
};

export default ActivitiesIndexItem;