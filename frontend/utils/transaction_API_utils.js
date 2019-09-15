export const fetchTransactions = (page) => (
    $.ajax({
        method: 'GET',
        url: `api/transactions?page=${page}`
    })
);

export const fetchAllTransactions = () => (
    $.ajax({
        method: 'GET',
        url: 'api/transactions'
    })
);

export const createTransaction = (transaction) => (
    $.ajax({
        method: 'POST',
        url: 'api/transactions',
        data: { transaction }
    })
)
 
export const depositTransaction = (transaction) => (
    $.ajax({
        method: 'POST',
        url: 'api/transactions/deposit',
        data: { transaction }
    })
)
 
