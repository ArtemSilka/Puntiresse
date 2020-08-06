import React from 'react';
import { withRouter } from 'react-router-dom'


class BoardCreateForm extends React.Component {
    constructor(props) {
        super(props)
        // debugger
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
            <div className="edit-pin-container">
                <div className="edit-form-box">
                    <header className='edit-pin-header'>
                        <h1>Create board</h1>
                    </header>
                    <form className='edit-pin-form'>
                        <div className='edit-pin-info'>
                            <div className="edit-pin-info-section">
                                <label>Name</label>
                                <textarea className='edit-pin-info-title' type="text" value={this.state.name} placeholder="Like Places to Go or Recipes to Make" onChange={this.update('name')} />
                            </div>
                        </div>
                    </form>
                    <footer className="edit-pin-footer">
                        <div className='edit-pin-footer-buttons'>
                            <div></div>
                            <div>
                                <button onClick={this.props.closeModal} className='edit-pin-cancel'>Cancel</button>
                                <button onClick={this.handleSubmit} className='edit-pin-save'>Create</button>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        )
    }
}

export default withRouter(BoardCreateForm);