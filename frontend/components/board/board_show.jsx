import React from 'react';
import { Link } from 'react-router-dom';
import PinIndexItem from '../pin/pin_index_item'
import create from '../create_button';


class BoardShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.board
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
                        <div className='name oF'>{this.props.board[boardId].description}</div>
                    </div>
                    <div className='profile-links'>
                        <div className=''>
                            {/* <Link to={`/settings`}> */}
                            {/* Change link to editBoardForm onClick modal after edit Board */}
                                <div className="zI7 rI LS">
                                    <div className="d zI7 rI LS fou">
                                        <div className="d rU No m8 zI7 rI LS six a_A">
                                            <div className="d rU No m8 zI7 rI LS tw1">
                                                <div className="d XG qJc zI7 rI LS tw2">
                                                    <div className="Pj7 sLG XG d m1e">
                                                        <div className="XG zI7 rI LS tw3">
                                                            <img className="hCL eD po MIw" src={"https://png.pngtree.com/png-vector/20190827/ourlarge/pngtree-pencil-icon-png-image_1713465.jpg"} />
                                                        </div>
                                                        <div className="KPc MIw ojN Rym p6V QLY"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            {/* </Link> */}
                        </div>
                    </div>
                    <div className='profile-container yQa'>
                        {boardPins}
                    </div>
                </div>
            </div>
        )
    }
}

export default BoardShow;