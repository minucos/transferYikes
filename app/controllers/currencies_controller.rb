class CurrenciesController < ApplicationController
    def create
        @currency = Currency.new(curr_params)
        @currency.wallet_id = current_user.wallet.id

        if @currency.save
            render :show
        else
            render json: @currency.errors.full_messages, status: 422
        end
    end

    def show
        @currency = current_user.currencies.find(id: params[:id])
    end

    def update

    end

    def destroy

    end

    private

    def curr_params
        params.require(:currency).permit(:type, :balance, :ord)
    end
end
