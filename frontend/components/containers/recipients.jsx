import React from 'react';

class Recipients extends React.Component {
    componentDidMount() {
        this.props.fetchRecipients();
    }

    render() {
        
        let recipients = this.props.recipients.map( recipient => {
            return(
                <li>{recipient.name}</li>
            )
        })
        return(
            <ul>
                {recipients}
            </ul>
        )
    }
};

export default Recipients;