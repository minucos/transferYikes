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

        render :show
    end

    def index
        @users = User.where('lower(fname) LIKE ?', "%#{params[:search_term]}%")
            .or(User.where('lower(lname) LIKE ?', "%#{params[:search_term]}%"))
            .or(User.where('lower(email) LIKE ?', "%#{params[:search_term]}%"))

        render :index
    end

    def recipients
        @recipients = User.find(current_user.id).receivers.where.not(id: current_user.id);

        render :recipients
    end

    private
    def user_params
        params.require(:user).permit(:email, :fname, :lname, :password)
    end
    
end
