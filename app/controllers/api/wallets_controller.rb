class Api::WalletsController < ApplicationController
    def show
        @wallet = Wallet.find(id: params[:id])
    end

    def update
        @wallet = current_user.wallet

        @wallet.update_attributes(wallet_params)
        
        if @wallet.save
            render :show
        else
            render json: @wallet.errors.full_messages, status: 422
        end
    end

    private

    def wallet_params
        params.require(:wallet).permit(:title)
    end
end
