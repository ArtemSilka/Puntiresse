import React from 'react';
import { withRouter } from 'react-router-dom'


class BoardCreateForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            user_id: props.userId,
            errors: props.errors
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value, errors: [] })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createBoard(this.state)
            .then((action) => {
                this.props.history.push(`/users/${action.board.user_id}/boards/${action.board.id}`);
                this.props.closeModal();
            })
    }

    render() {

        return (

            <div className="modal-box-container">

                <div className="modal-box1 oF">
                    <div className="box">
                        <form onSubmit={this.handleSubmit} className="form1">
                            <div className="_O1 jcfe">
                                <button className="Ia LS US ad EY Zc Z3 hA- si lg na po eD rI wa">
                                    <div className="ES oF Je tR t7 mW">
                                        <span className="oF">Save</span>
                                    </div>
                                </button>
                            </div>
                            <div className="oF fv df">
                                <div className="w1">
                                    <div className="pl pt">
                                        <input className="einp wyq oF kN"
                                            placeholder={`Like "Places to Go" or "Recipes to Make"`}
                                            value={this.state.name}
                                            onChange={this.update('name')} />
                                        <textarea
                                            className="einp wyq oF w1 w2"
                                            row="5"
                                            placeholder="What's your board about?"
                                            value={this.state.description}
                                            onChange={this.update('description')}
                                        />
                                        {/* {this.renderErrors()} */}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(BoardCreateForm);