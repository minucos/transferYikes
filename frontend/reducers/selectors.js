export const userWallet = (state, userId) => {
    return state.entities.wallets[userId];
} 

export const userCurrencies = (state, walletId) => {
    return Object.values(state.entities.currencies).filter( curr => curr.wallet_id == walletId)
};
