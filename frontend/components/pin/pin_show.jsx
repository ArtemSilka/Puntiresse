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
                            <div className="pencil-show">
                                    <Link to={`/pins/${this.props.pin.id}/edit`}>
                                        <img src="https://cdn4.iconfinder.com/data/icons/core-ui-outlined/32/outlined_edit-512.png"/>
                                    </Link>
                                {/* fix savePin - select board_id */}
                                {/* <div className="">
                                    <div className="select">Select</div>
                                    <button onClick={this.handleSave} className="">Save</button>
                                </div> */}
                            </div>
                            <div className="ml10">
                                    <h4 className="hA- Am mW oF">
                                        {this.props.pin.title}
                                    </h4>
                                    <p className="hA- muu oF">
                                        {this.props.pin.description || ''}
                                    </p>
                                <div>
                                    <Link to={`/users/${this.props.pin.photo.record.user_id}/pins`}>
                                        <img className="" src={"https://s.pinimg.com/images/user/default_280.png"} width="25px"/>
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