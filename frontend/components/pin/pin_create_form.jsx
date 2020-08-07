import React from 'react';
import { Link, Redirect } from 'react-router-dom';

class CreatePinForm extends React.Component {
    constructor(props) {
        super(props);
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
        const allErrors = this.props.errors.map((error, i) => (
            <li key={i}>{error}</li>
        ));
        return (
            <div className="err1">
                <div className="err2 oF">
                    <span>{allErrors}</span>
                </div>
            </div>
        )
    }

    render() {
        const imagePreview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : (
            <div className="df">
                <img id="photo" className="w1" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698648-icon-130-cloud-upload-512.png" />
            </div>
        );

        if (this.state.toShow) {

            return (
                <Redirect to={`/pins/${this.state.toIndex}`} />
            )
        }

        const display = !imagePreview ? 'display-none' : '';

        return (

            <div className="modal-box-container hek">
                
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
                            <div className="oF fv df miw">
                                
                                <div className="pl w1">
                                    <div className="uploader w1 _O1 m8 No LS XG sLG sax mmm">
                                        <input type="file" id="filePhoto" onChange={this.handleFile} />
                                        {imagePreview}    
                                    </div>
                                </div>

                                <div className="w1">
                                    <div className="pl pt">
                                            <input className="einp wyq oF kN"
                                                placeholder="Add your title"
                                                value={this.state.title}
                                                onChange={this.update('title')} />
                                            <textarea 
                                                className="einp wyq oF w1 w2"
                                                row="5"
                                                placeholder="Tell everyone what your Pin is about"
                                                value={this.state.description}
                                                onChange={this.update('description')}
                                            />
                                        {this.renderErrors()}
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

export default CreatePinForm;