
export const updateWallet = (wallet) => ({
    method: "PATCH",
    url: `/api/wallets/${wallet.id}`,
    data: wallet
})