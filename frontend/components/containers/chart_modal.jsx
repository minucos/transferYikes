import React, { PureComponent } from 'react';
// import {
//     LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
// } from 'recharts';

// const data = [
//     {
//         name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
//     },
//     {
//         name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
//     },
//     {
//         name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
//     },
//     {
//         name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
//     },
//     {
//         name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
//     },
//     {
//         name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
//     },
//     {
//         name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
//     },
// ];

class ChartModal extends React.Component {
    // static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

    render() {
        if (!this.props.modal) {
            return null;
        }
        
        return (
            <div className="modal-background" onClick={this.props.closeModal}>
                <div className="modal">
                    <h1>some sort of chart...</h1>
                </div>
            </div>
        );
    }
};

export default ChartModal;
