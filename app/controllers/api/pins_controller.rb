class Api::PinsController < ApplicationController
    def index
        @pins = Pin.all
    end

    def show
        @pin = Pin.find(params[:id])
        render :show 
    end

    def create
        @pin = Pin.new(pin_params)
        
        if @pin.save
          render "/api/pins/show"
        else
          render json: @pin.errors.full_messages, status: 422
        end
    end

    def edit
        @pin = Pin.find(params[:id])
        unless @pin.user_id == current_user.id
            render "api/pins/show"
        else
            render :edit
        end
    end

    def update
        @pin = Pin.find(params[:id])
        # change after users
        # if (@pin.user_id == current_user.id && @pin.update(pin_params))
        if @pin.update(pin_params)
            render 'api/pins/show'
        else
            render json: @pin.errors.full_messages, status: 422
        end
    end

    def destroy
        pin = current_user.pins.find(params[:id])
        pin.destroy
    end

    private

    def pin_params
        # params.require(:pin).permit(:title, :description, :url, :user_id, :board_id, :photo, :id, :photoUrl, :toShow, :toIndex)
        params.require(:pin).permit(:title, :description, :url, :photo, :user_id, :board_id, :id)
    end
end
