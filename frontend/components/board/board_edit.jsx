import React from 'react';
import { withRouter } from 'react-router-dom'


class BoardEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.board;

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value, errors: [] })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateBoard(this.state)
            .then(this.props.closeModal());
    }

    deleteAllBoardPins() {
        this.props.board.pins.forEach(pin => {
            this.props.deletePin(pin.id)
        })
    }

    handleDelete(e) {
        this.deleteAllBoardPins();
        this.props.deleteBoard(this.state.id)
            .then(() => {
                this.props.history.push(`/users/${currentUser.id}/boards`);
                this.props.closeModal();
            })
    }

    render() {

        return (
            <div className="modal-box-container">

                <div className="modal-box1 oF">
                    <div className="box">
                        <div className='name oF'>
                            <h1>Edit your board</h1>
                        </div>
                        <form className="form1">
                            <div className="oF fv df">
                                <div className="w1">
                                    <div className="pl pt">
                                        <label className="eb">Name</label>
                                        <input className="einp wyq oF kN"
                                            placeholder={this.state.name}
                                            value={this.state.name}
                                            onChange={this.update('name')} />
                                        <label className="eb">Description</label>
                                        <textarea
                                            className="einp wyq oF w1 w2"
                                            row="5"
                                            placeholder={this.state.description}
                                            value={this.state.description}
                                            onChange={this.update('description')}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="_O1 Ia ptr ml">
                                <div className="df">
                                    <button onClick={this.handleDelete} className="Ia LS US ad EY Zc Z3 hA- a_A zz na po eD rI">
                                        <div className="ES oF Je tR t7 mW">
                                            <span className="grey oF">Delete</span>
                                        </div>
                                    </button>
                                </div>
                                <div className="df">
                                    <button onClick={this.props.closeModal} className="Ia LS US ad EY Zc Z3 hA- a_A zz na po eD rI">
                                        <div className="ES oF Je tR t7 mW">
                                            <span className="grey oF">Cancel</span>
                                        </div>
                                    </button>
                                    <button onClick={this.handleSubmit} className="Ia LS US ad EY Zc Z3 hA- si lg na po eD rI wa">
                                        <div className="ES oF Je tR t7 mW">
                                            <span className="oF">Save</span>
                                        </div>
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

export default withRouter(BoardEdit);
