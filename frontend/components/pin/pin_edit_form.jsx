import React from 'react';
import { Redirect } from 'react-router-dom';

class PinEditForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            board_id: this.props.pin.board_id,
            board_name: '',
            id: '',
            photoUrl: '',
            url: '',
            toShow: false,
            toIndex: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.toShow = this.toShow.bind(this);
        this.selectBoard = this.selectBoard.bind(this);
        this.showMenu = this.showMenu.bind(this);
    }

    componentDidMount() {
        this.props.fetchPin(this.props.pin.id)
            .then(this.setState({
                title: this.props.pin.title,
                description: this.props.pin.description,
                id: this.props.pin.id,
                photoUrl: this.props.pin.photoUrl,
                url: this.props.pin.url,
            }))
    }

    componentWillMount() {
        this.props.fetchBoard(this.props.pin.board_id)
        this.props.fetchAllBoards(); 
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updatePin(this.state)
            .then(this.props.closeModal());
    }

    handleDelete(e) {
        this.props.deletePin(this.props.pin.id)
            .then(() => {
                this.props.history.push(`/users/${currentUser.id}/pins`);
                this.props.closeModal();
            })
    }

    toShow(e) {
        e.preventDefault();
        this.setState({ toShow: true });
    }

    showMenu() {
        document.getElementById("boards").classList.toggle("show-menu")
    }

    boardsList() {
        const { boards } = this.props;
        if (!boards) return null;
        return (
            <div className="">
                <button className="sb LS US ad EY Zc Z3 hA- na po eD rI wid1" type="button">
                    <div className="ES oF Je t7 mW" onClick={this.showMenu} id="selected-text">
                        Select board
                    </div>
                </button>
                <div id="boards" className="menu-back">
                    <ul className="select-board oF mW" id="sbe" onClick={e => e.stopPropagation()}>
                        {boards.map((board, idx) => {
                            if (board.user_id === this.props.currentUser.id) {
                                return (
                                    <li key={idx}
                                        value={board.id}
                                        className=""
                                        onClick={this.selectBoard}
                                    >{board.name}</li>
                                )
                            }
                        })}
                    </ul>
                </div>
            </div>
        )
    }

    selectBoard(e) {
        document.getElementById("selected-text").innerHTML = e.currentTarget.innerHTML;
        this.showMenu(e);
        this.update("board_id")(e);
    }

    render() {
        if (!this.props.pin) return null;
        if (this.state.toShow) {
            return (
                <Redirect to={`/pins/${this.props.pin.id}`} />
            )
        }
        if (this.state.toIndex) {
            return (
                <Redirect to='/home' />
            )
        }

        // const boardNames = this.props.boards.map((board) => board.name);

        return (
            <div className="modal-box-container hek">
                <div className="modal-box1 oF">
                    <div className="box">

                        <div className="name oF">
                            <h3>Edit this Pin</h3>

                        </div>


                        <form onSubmit={this.handleSubmit} className="">
                            <div className="box-body">
                                <div className="">
                                    {this.boardsList()}
                                    {/* <p>{boardNames[0]}</p> */}
                                    <div className="hix">
                                        <div className="ptfb">Title</div>
                                        <div className="form1" id="#edit-form-width">
                                            <input 
                                                type="text" 
                                                className="einp wyq oF" 
                                                value={this.state.title || ''} 
                                                placeholder="Title" 
                                                onChange={this.update('title')} 
                                                />
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="hix">
                                        <div className="ptfb">Description</div>
                                        <textarea 
                                            id="#edit-form-width"
                                            className="einp wyq oF hhe" 
                                            value={this.state.description || ''} 
                                            placeholder="Description" 
                                            onChange={this.update('description')} 
                                            />
                                    </div>
                                </div>
                                <div className="m020">
                                    <img src={this.props.pin.photoUrl} alt={this.state.title} className="box-image" />
                                </div>
                            </div>
                            
                            <div className="box-footer">
                                <div className="Gd kN em IL rI LS">
                                    {/* <button className="Ia LS US ad EY Zc Z3 hA- a_A zz na po eD rI" onClick={this.handleDelete}>
                                        <div className="ES oF Je tR t7 mW">
                                            <span className="grey">Delete</span>
                                        </div>
                                    </button> */}
                                </div>
                                <div className="Gd kN em IL rI LS huk">
                                    <button className="Ia LS US ad EY Zc Z3 hA- a_A zz na eD rI BE" >
                                        <div className="ES oF Je tR t7 mW">
                                            <span className="grey">Cancel</span>
                                        </div>
                                    </button>
                                    <button className="Ia LS US ad EY Zc Z3 hA- si lg na eD rI" >
                                        <div className="ES oF Je tR t7 mW">Save</div>
                                    </button>
                                </div>

                            </div>
                        </form>


                    </div>
                </div>
            </div>

        )
    }
}

export default PinEditForm;