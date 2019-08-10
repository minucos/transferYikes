export const fetchUser = (userId) => (
    $.ajax ({
        method: "GET",
        url: `/api/users/${userId}`
    })
)

export const receiveCurrency = (userId, currencyType, amount) => {

    return $.ajax ({
        method: "POST",
        url: `/api/users/${userId}/receive`,
        data: {
            currencyType: currencyType,
            amount: amount
        }   
    })

}
