export const userWallet = (state, userId) => {
    return state.entities.wallets[userId];
} 

export const userCurrencies = (state, walletId) => {
    return Object.values(state.entities.currencies).filter( curr => curr.wallet_id == walletId)
};

export const userRates = ({ rates, base }) => {
    if ( base === undefined) {
        return [];
    }

    rates[base] = 1;

    return rates;
}

export const chartData = (state) => {
    let labels = Object.keys(state.entities.rates.historical.rates).sort()
    let from = state.entities.rates.base;
    let to = toCurrency(state);

    let data = {
        labels: convertLabels(labels),
        datasets: [{
            color: 'rgb(1,186,252)',
            borderColor: 'rgb(1,186,252)',
            data: labels.map(el => Object.values(state.entities.rates.historical.rates[el])[0])
        }]
    };
    
    return data;
}   

export const chartOptions = (data, state) => {
    let options = {
        type: 'line',
        backgroundColor: 'rgb(255,255,255)',
        data: data,
        options: {
            responsive: true,
            legend: {
                display: false
            },
            tooltips: {
                mode: 'x-axis'
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        display: true,
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                    },
                    ticks: { 
                        display: false,
                    }
                }]
            }
        }
    };

    return options;
}

const convertLabels = (labels) => {
    const months = {
        "01": "Jan", "02": "Feb", "03": "Mar", "04": "Apr", "05": "May", "06": "Jun", "07": "Jul", "08": "Aug", "09": "Sept", "10": "Oct", "11": "Nov", "12": "Dec"
    };

    return labels.map( label => {
        let date = label.split("-").reverse();
        
        return date[0] + " " + months[date[1]];
    })
};

export const toCurrency = (state) => {
    return Object.keys(
        state.entities.rates.historical.rates[Object.keys(
            state.entities.rates.historical.rates
            )[0]]
        )[0]

}

export const calculateBalances = (state) => {
    let id = state.session.id;
    let transactions = Object.values(state.entities.transactions);

    let balances = {
        USD: 0,
        AUD: 0,
        GBP: 0,
        EUR: 0,
        CAD: 0,
        CNY: 0,
        JPY: 0

    };

    transactions.forEach( t => {
        if (t.receiver_id === id) {
            balances[t.to_currency] += t.received_amount;
        } else {
            balances[t.from_currency] -= t.sent_amount;
        }
    })

    return balances;
}