import React from 'react';
import { Link } from 'react-router-dom';
import PinIndexItem from '../pin/pin_index_item'
import create from '../create_button';


class BoardShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.board;
        this.removeLoader = this.removeLoader.bind(this);
    }

    componentDidMount() {
        this.props.fetchBoard(this.props.boardId)
            .then(() => this.props.fetchUser(this.props.userId));
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userId !== this.props.userId) {
            this.props.fetchUser(this.props.match.params.userId)
        }
        if (Object.values(prevProps.board).length !== Object.values(this.props.board).length) {
            this.props.fetchBoard(this.props.match.params.boardId)
        }
    }

    removeLoader() {
        setTimeout(function () {
            $('#loader').removeClass('inside-container');
        }, 500);
        setTimeout(function () {
            $('#spinner').removeClass('lds-grid');
        }, 501);
    }

    render() {

        const { user, board, boardId } = this.props;

        if (!user) return <div></div>;

        const boardPins = Object.values(board)[0].pins.map((pin, idx) => {
            return <PinIndexItem key={idx} pin={pin} />
        })
        return (

            <div>
                {create()}
                <div className='profile'>
                    <div className="user-container _O1 m8 fa">
                        <div className='name oF'>{this.props.board[boardId].name}</div>
                        <div className='oF'>{this.props.board[boardId].description}</div>
                    </div>
                    <div className='profile-links jcfs'>
                        <div className=''>
                            <div className='pencil' onClick={() => this.props.openModal('edit-board')}>
                                <img src="https://cdn4.iconfinder.com/data/icons/core-ui-outlined/32/outlined_edit-512.png" width="20px" />
                            </div>
                        </div>
                    </div>
                    <div className='profile-container yQa'>
                        <div id="loader" className="inside-container">
                            <div id="spinner" className="lds-grid">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        {boardPins}
                        {this.removeLoader()}
                    </div>
                </div>
            </div>
        )
    }
}

export default BoardShow;