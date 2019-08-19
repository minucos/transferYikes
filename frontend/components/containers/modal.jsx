import React from 'react';
import CurrencyChartContainer from './currency_chart_container';

class Modal extends React.Component {

    render() {

        if (!this.props.modal) {
            return null;
        }
        
        return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="modal">
                    <CurrencyChartContainer />    
                </div>
            </div>
        );
    }
};

export default Modal;