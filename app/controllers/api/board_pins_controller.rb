class Api::BoardPinsController < ApplicationController
    def create
        @boardPin = BoardPin.new(boardPin_params)

        if @boardPin.save
            render 'api/board_pins/show'
        else
            render json: @boardPin.errors.full_messages, status: 422
        end
    end

    def index
        @boardPins = BoardPin.all
        render 'api/board_pins/index'
    end

    def destroy
        @boardPin = current_user.board_pins.find(params[:id])
      
        if @boardPin
            @boardPin.destroy
            render 'api/board_pins/show'
        else
            render json: @boardPin.errors.full_messages, status: 401
        end
    end

    private

    def boardPin_params
        params.require(:boardPin).permit(:board_id, :pin_id)
    end
end
