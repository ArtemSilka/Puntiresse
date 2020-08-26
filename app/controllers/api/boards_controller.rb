class Api::BoardsController < ApplicationController
    def index
        @boards = Board.all
    end
    
    def show
        @board = Board.find(params[:id])
    end

    def create
        @board = Board.new(board_params)

        if @board.save
            render "api/boards/show"
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def edit
        @board = Board.find(params[:id])
        
        unless @board.user_id == current_user.id
            render "api/boards/show"
        else
            render :edit
        end
    end

    def update
        @board = Board.find(params[:id])
        if (@board.user_id === current_user.id && @board.update(board_params))
            render 'api/boards/show'
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    def destroy
        board = current_user.boards.find(params[:id])
        board.destroy
        # render "api/boards/show"
    end

    private
    
    def board_params
        params.require(:board).permit(:name, :description, :secret, :user_id)
    end


end
