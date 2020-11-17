class Api::UsersController < ApplicationController

    def create
        @user = User.new(user_params)
        
        if @user.save
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
        @users = User.search(params[:search_term], current_user.id)

        render :index
    end

    def recipients
        @recipients = User.find(current_user.id)
            .receivers.where.not(id: current_user.id).uniq;

        render :recipients
    end

    private
    def user_params
        params.require(:user).permit(:email, :name, :password)
    end
    
end
