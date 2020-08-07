import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';
import create from '../create_button';

class PinShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toIndex: false,
            userID: props.user.id
        }

        this.toIndex = this.toIndex.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.currentPin;

    }
    componentDidMount() {

        this.props.fetchPin(this.props.match.params.pinId);
    }

    toIndex() {
        this.setState({ toIndex: true })
    }

    handleSelect(e) {

        e.preventDefault();
        let selected = document.getElementsByClassName("select")[0];
        let board = e.currentTarget;
        selected.innerText = board.innerText;

    }

    handleSave(e) {
        e.preventDefault();
        this.props.savePin(this.currentPin)
            .then(this.toIndex())
    }

    render() {
        if (!this.props.pin) return null;
        this.currentPin = {
            pin: {
                title: this.props.pin.title,
                url: this.props.pin.url,
                description: this.props.pin.description,
                // copiedPinId: this.props.pin.id,
                // change after boards
                board_id: 28
            }
        }

        if (this.state.toIndex) {
            return (
                <Redirect to="/home" />
            )
        }
        // const boardTitles = currentUser.boards.map((board, idx) => {
        //     return <div className="" onClick={this.handleSelect} key={this.props.boards[0].id}>{this.props.boards[0].title}</div>;
        // })
        return (
            <div className="_O1 fa po ephb hui" >
                {create()}
                <div className="oF fv hhu">
                    
                    <div className="_O1 m8 No LS XG sLG sax mmm ">
                        <img src={this.props.pin.photoUrl} alt={this.props.pin.title} className="" />
                    </div>

                    <div className="po LS rU nnn">
                        <div className="">
                            <div className="">
                                <div>
                                    <Link to={`/pins/${this.props.pin.id}/edit`}>
                                        <div className="zI7 rI LS">
                                            <div className="d zI7 rI LS fou">
                                                <div className="d rU No zI7 rI LS">
                                                    <div className="d rU No zI7 rI LS tw1">
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
                                    </Link>
                                </div>
                                {/* fix savePin - select board_id */}
                                {/* <div className="">
                                    <div className="select">Select</div>
                                    <button onClick={this.handleSave} className="">Save</button>
                                </div> */}
                            </div>
                            <div className="">
                                <div className="">
                                    <h4 className="hA- Am mW oF">
                                        {this.props.pin.title}
                                    </h4>
                                    <p className="hA- muu oF">
                                        {this.props.pin.description || 'Description'}
                                    </p>
                                </div>
                                <div>
                                    <Link to={`/users/${this.props.userId}/pins`}>
                                        <div className="zI7 rI LS">
                                            <div className="d zI7 rI LS fou">
                                                <div className="d rU No zI7 rI LS">
                                                    <div className="d rU No  zI7 rI LS tw1">
                                                        <div className="d XG qJc zI7 rI LS tw2">
                                                            <div className="">
                                                                <div className="Pj7 sLG XG d m1e">
                                                                    <div className="XG zI7 rI LS tw3">
                                                                        <img className="hCL eD po MIw" src={"https://s.pinimg.com/images/user/default_280.png"} />
                                                                    </div>
                                                                    <div className="KPc MIw ojN Rym p6V QLY"></div>
                                                                </div>
                                                                <div className="muu oF">
                                                                    {this.props.user["email"].split('@')[0]}
                                                                </div> 
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(PinShow);