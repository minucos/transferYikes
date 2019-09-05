class Api::TransactionsController < ApplicationController

    def create
        @transaction = Transaction.new(trans_params)
        @transaction.sender_id = current_user.id

        if @transaction.save
            render json: @transaction
        else
            render json: @transaction.errors.full_messages
        end
    end

    def show
        @transaction = current_user.transactions.find(:id)

        render json: @transaction
    end

    def index
        @transactions = current_user.transactions

        render json: @transactions
    end

    private
    def trans_params
        params.require(:transaction).permit(
            :name, 
            :description, 
            :sent_amount, 
            :from_currency, 
            :to_currency, 
            :exchange_rate,
            :receiver_id
        )
    end

end
