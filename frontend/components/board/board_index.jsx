import React from 'react';
import { Link } from 'react-router-dom';
import BoardIndexItem from './board_index_item';
import create from '../create_button';


class ProfileBoardIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.allBoards;
        this.removeLoader = this.removeLoader.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllBoards();
        this.props.fetchUser(this.props.userId);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.userId !== this.props.userId) {
            this.props.fetchUser(this.props.match.params.userId)
        }

        if (Object.values(prevProps.allBoards).length !== Object.values(this.props.allBoards).length) {
            this.props.fetchAllBoards();
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
        const { user, allBoards } = this.props;

        if (!user) return <div></div>;
        if (!allBoards) return <div></div>;

        let userBoardsArray = Object.values(allBoards).filter(board => {
            return board.user_id === user.id
        })

        const userBoards = userBoardsArray.map((board, idx) => {
            return <BoardIndexItem key={idx} board={board} />
        })

        const profilePhoto = (user.photo) ? (
            <img className="hCL eD po MIw Xa" src={user.photo} />
        ) : (
                <img className="hCL eD po MIw Xa" src={"https://s.pinimg.com/images/user/default_280.png"} />
        );


        return (

            <div>
                {create()}

                <div className='profile'>

                    <div className="d rU No m8 zI7 rI LS six">
                        <div className="d rU No m8 zI7 rI LS tw8">
                            <div className="d qJc zI7 rI LS tw8">
                                <div className="Pj7 sLG XG d m1e">
                                    <div className="XG zI7 rI LS tw8">
                                        {profilePhoto}
                                    </div>
                                    <div className="KPc MIw ojN Rym p6V QLY"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="user-container _O1 m8">
                        <span className="name oF">{user["email"].split('@')[0]}</span>
                    </div>
                    <div className='profile-links'>
                        <div className='pencil'>
                            <Link to={`/settings`}>
                                <img src="https://cdn4.iconfinder.com/data/icons/core-ui-outlined/32/outlined_edit-512.png" width="22px" />
                            </Link>
                        </div>
                        <div className='profile-links'>
                            <Link to={`/users/${user.id}/boards`}>
                                <div className="Eh fv rI LS pya a_A">
                                    <div className="EY rI fv Xa po na sld">
                                        <div className="Eh rU No m8 rI LS che">
                                            <div className="ES oF Je t7 mW ">
                                                Boards
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/users/${user.id}/pins`}>
                                <div className="Eh fv rI LS pya a_A">
                                    <div className="EY rI fv Xa po na">
                                        <div className="Eh rU No m8 rI LS che">
                                            <div className="ES oF Je t7 mW ">
                                                Pins
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='pencil An' onClick={() => this.props.openModal('create-board')}>
                            <img src="https://cdn2.iconfinder.com/data/icons/50-material-design-round-corner-style/44/Add-512.png" width="30px" />
                        </div>
                    </div>

                    <div className='profile yQa'>
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
                        {userBoards}
                        {this.removeLoader()}
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileBoardIndex;