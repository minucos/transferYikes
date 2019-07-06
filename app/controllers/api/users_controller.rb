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
        @user = User.find(params[:id])
    end

    private
    def user_params
        params.require(:user).permit(:email, :fname, :lname, :password)
    end
    
end
