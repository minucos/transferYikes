class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        
        if @user.save
            wallet = Wallet.new(title: "my wallet")
            wallet.user_id = @user.id
            wallet.save
            login!(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
        @user = User.includes(:wallet, :currencies).find(params[:id])

        render :show
    end

    def receive
        @user = User.find(params[:id])

        @user.receive_money(params[:amount].to_f, params[:currencyType])

        render :show
    end

    def transfer
        @user = User.find(params[:id])
        @receiving_user = User.find(params[:receiver_id])
        amount = params[:amount].to_f
        currency_type = params[:currencyType]

        @user.send_money(amount, currency_type, @receiving_user)

        render json: @user.errors.full_messages
    end

    private
    def user_params
        params.require(:user).permit(:email, :fname, :lname, :password)
    end

    def currency_params
        
    end
    
end
