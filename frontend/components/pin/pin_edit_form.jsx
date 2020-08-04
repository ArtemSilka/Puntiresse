import React from 'react';
import { Redirect } from 'react-router-dom';

class EditPinForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: '',
            id: '',
            photoUrl: '',
            url: '',
            redirectToShow: false,
            redirectToIndex: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.redirectToShow = this.redirectToShow.bind(this);
    }

    componentDidMount() {
        this.props.fetchPin(this.props.pinId)
            .then(this.setState({
                title: this.props.pin.title,
                description: this.props.pin.description,
                id: this.props.pin.id,
                photoUrl: this.props.pin.photoUrl,
                url: this.props.pin.url,
            }))

    }

    componentDidUpdate(prevProps) {
    
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updatePin(this.state)
            .then(this.setState({ redirectToShow: true }));
    }

    handleDelete(e) {
        this.props.deletePin(this.props.pin.id)
            .then(this.setState({ redirectToIndex: true }));
    }

    redirectToShow(e) {
        e.preventDefault();
        this.setState({ redirectToShow: true });
    }

    render() {
        if (!this.props.pin) return null;

        if (this.state.redirectToShow) {
            return (
                <Redirect to={`/pins/${this.props.pin.id}`} />
            )
        }

        if (this.state.redirectToIndex) {
            return (
                <Redirect to='/home' />
            )
        }

        return (
            <div className="modal-box-container hek">
                <div className="modal-box1 oF">
                    <div className="box">

                        <div className="">
                            <h3>Edit this Pin</h3>
                        </div>


                        <form onSubmit={this.handleSubmit} className="edit-pin-form">
                            <div className="box-body">
                                <div className="">
                                    <div className="hix">
                                        <div>Title</div>
                                        <div className="form1">
                                            <input type="text" className="einp wyq oF" value={this.state.title || ''} placeholder="Title" onChange={this.update('title')} />
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="hix">
                                        <div>Description</div>
                                        <textarea className="einp wyq oF hhe" value={this.state.description || ''} placeholder="Description" onChange={this.update('description')} />
                                    </div>
                                </div>
                                <div className="">
                                    <img src={this.props.pin.photoUrl} alt={this.state.title} className="box-image" />
                                </div>
                            </div>
                            
                            <div className="box-footer">
                                <div className="Gd kN em IL rI LS">
                                    <button className="Ia LS US ad EY Zc Z3 hA- a_A zz na po eD rI" onClick={this.handleDelete}>
                                        <div className="ES oF Je tR t7 mW">
                                            <span className="grey">Delete</span>
                                        </div>
                                    </button>
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

export default EditPinForm;