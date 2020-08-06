import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class CreatePinForm extends React.Component {
    constructor(props) {
        super(props);
        // debugger
        this.state = {
            user_id: props.currentUser.id,
            board_id: '',
            title: '',
            description: '',
            url: '',
            photoFile: null,
            photoUrl: null,
            errors: this.props.errors,
            toShow: false,
            toIndex: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData();
debugger
        formData.append('pin[board_id]', this.state.board_id);
        formData.append('pin[user_id]', this.state.user_id);
        
        formData.append('pin[title]', this.state.title);
        formData.append('pin[description]', this.state.description);
        formData.append('pin[url]', this.state.url);
        formData.append('pin[errors]', this.state.errors);
        if (this.state.photoFile) {
            formData.append('pin[photo]', this.state.photoFile);
        }
        this.props.createPin(formData)
            .then(
                response => {

                    this.setState({ toShow: true, toIndex: response.pin.id }),
                        (err) => {
                            this.setState({ errors: this.renderErrors() })
                        }
                }
            );
    }

    handleFile(e) {
        e.preventDefault();
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result })
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value })
    }

    renderErrors() {
        // debugger
        const allErrors = this.props.errors.map((error, i) => (
            <li key={i}>{error}</li>
        ));
        return (
            <ul>{allErrors}</ul>
        )
    }

    render() {
        const imagePreview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;

        if (this.state.toShow) {

            return (
                <Redirect to={`/pins/${this.state.toIndex}`} />
            )
        }

        const display = !imagePreview ? 'display-none' : '';

        return (

            <div className="modal-box-container hek">
                {this.renderErrors()}
                <div className="modal-box1 oF">

                    <div className="box">
                        <form onSubmit={this.handleSubmit} className="">
                            <div className="">
                                <div className="">Select</div>
                                <input className="" type="submit" value="Save" />
                            </div>

                            <div className="">

                                <div className="">
                                    <input type="file" className="" id={display} onChange={this.handleFile} />
                                    {imagePreview}
                                </div>
                            </div>

                            <div className="">
                                <div className="">
                                    <textarea className=""
                                        placeholder="Add your title"
                                        value={this.state.title}
                                        onChange={this.update('title')} />
                                </div>

                                <div className="">
                                    <textarea className=""
                                        placeholder="Tell everyone what your Pin is about"
                                        value={this.state.description}
                                        onChange={this.update('description')}
                                    />
                                </div>
                            </div>

                            <div className="">
                            </div>

                            <div className="">
                                <div className="">
                                    <textarea className=""
                                        placeholder="Add a destination url"
                                        value={this.state.url}
                                        onChange={this.update('url')}
                                    />
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        )
    }


}

export default CreatePinForm;