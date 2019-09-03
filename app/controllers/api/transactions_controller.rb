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
        @transactions = Transactions.where('sender_id = ? OR receiver_id = ?', current_user.id)

        render json: @transactions
    end

    private
    def trans_params
        params.require(:transaction).permit(
            :name, 
            :description, 
            :amount, 
            :from_currency, 
            :to_currency, 
            :receiver_id
        )
    end

end
