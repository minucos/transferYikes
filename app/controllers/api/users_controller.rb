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

    private
    def user_params
        params.require(:user).permit(:email, :fname, :lname, :password)
    end

    def currency_params
        
    end
    
end
