class Api::CurrenciesController < ApplicationController
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
        @currency = current_user.find(id: params[:id])

        @currency.update_attributes(curr_params)

        if @currency.save
            render :show
        else
            render json: @currency.errors.full_messages, status: 422
        end
    end

    def destroy
        @currency = current_user.currencies.find(id: params[:id])

        @currency.destroy

        render :show
    end

    private

    def curr_params
        params.require(:currency).permit(:type, :balance, :ord)
    end
    
end
