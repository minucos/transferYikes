import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const ActivityBar = (props) => {
    
    return(
        <div className="activity-bar-container">
            <Link to="/activity/send">Send money</Link>
            <div className="activity-search-container">
                <input 
                    className="activity-search" 
                    placeholder="Search..."
                />
                <FontAwesomeIcon className="search-icon" icon={faSearch} />
            </div>
        </div>
    )
};

export default ActivityBar;
