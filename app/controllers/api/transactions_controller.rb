class Api::TransactionsController < ApplicationController

    def create
        debugger
        @transaction = Transaction.new(trans_params)
        @transaction.sender_id = current_user.id

        if @transaction.save
            render :show
        else
            render json: @transaction.errors.full_messages, status: 422
        end
    end

    def show
        @transaction = current_user.transactions.find(:id)

        render json: @transaction
    end

    def index
        if params[:page]
            @transactions = current_user.transactions.page(params[:page]).per(15)
        else
            @transactions = current_user.transactions
        end
        
        @user = User.find(current_user.id)

        render :index
    end

    def deposit
        @transaction = Transaction.new(trans_params)
        @transaction.fund_deposit(current_user.id)

        if @transaction.save
            render :show
        else
            render json: @transaction.errors.full_messages
        end
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
