import * as walletAPIUtils from '../utils/wallet_API_utils';

export const RECEIVE_WALLET = "RECEIVE_WALLET";
export const RECEIVE_WALLET_ERRORS = "RECEIVE_WALLET_ERRORS";

const receiveWallet = (wallet) => ({
    type: RECEIVE_WALLET,
    wallet: wallet
})

const receiveErrors = (errors) => ({
    type: RECEIVE_WALLET_ERRORS,
    errors: errors
})

export const updateWallet = (wallet) => dispatch => {
    return walletAPIUtils.updateWallet(wallet)
        .then( 
            wallet => dispatch(receiveWallet(wallet)),
            errors => dispatch(receiveErrors(errors.responseJSON))
        )
}