import React from "react";
import { Link, NavLink } from "react-router-dom";


class EditProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.currentState();

        this.currentState = this.currentState.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleDone = this.handleDone.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    currentState() {
        const user = this.props.currentUser;
        const initialState = Object.assign({}, {
            id: user.id,
            email: user.email,
            photo: user.photo,
            photoPreview: null
        });

        return initialState
    }

    handleCancel(e) {
        const s = this.currentState();
        e.preventDefault();
        this.setState(this.currentState);
        this.props.history.push(`/users/${s.id}/pins`)
    }

    handleDone(e) {
        e.preventDefault();
        const s = this.currentState();
        const details = Object.assign({}, this.state);
        delete details["id"];
        delete details["photoPreview"];
        if (!this.state.photoPreview) {
            delete details["photo"];
        }

        const formData = new FormData();
        for (let key in details) {
            formData.append(`user[${key}]`, details[key])
        }
        this.props.updateUser(formData, this.state.id).then(
            () => location.reload(false)
        )
        this.props.history.push(`/users/${s.id}/pins`)
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ photo: file, photoPreview: fileReader.result });
        };

        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    changeInput(field) {
        return (
            e => this.setState({ [field]: e.currentTarget.value })
        );
    }

    render() {
        const profilePhoto = (this.state.photo) ? (
            <img src={this.state.photo} className="h" />
        ) : (
            <img src={"https://s.pinimg.com/images/user/default_280.png"} />
        );
        const displayPhoto = (this.state.photoPreview) ? (
            <img src={this.state.photoPreview} className="h" />
        ) : (
            profilePhoto
        );

        let currentState = Object.assign({}, this.state);
        const disabled = (JSON.stringify(currentState) === JSON.stringify(this.currentState())) ? "disabled" : "";
        return (
            <div id="settings">
                <div id="settings-container">
                    <div id="edit-form-width">
                        <div id="form-container">
                            <div id="form-box">
                                <form id="edit-form">
                                    <div className="ephb">
                                        <div className="ephf">
                                            <div className="eptc">
                                                <div className="ept">
                                                    <h4 className="eptl oF">Edit Profile</h4>
                                                    <div className="epts"></div>
                                                    <div className="eps oF">
                                                        People on Puntiresse will get to know you with the info below
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="epbc">
                                                <div className="epb">
                                                    <div className="Gd kN em IL rI LS">
                                                            <button 
                                                                className={`Ia LS US ad EY Zc Z3 hA- a_A zz na po eD rI ${disabled}`} 
                                                                onClick={this.handleCancel}>
                                                                    <div className="ES oF Je tR t7 mW">
                                                                    <span id={`${disabled}`} className="grey">Cancel</span>
                                                                    </div>
                                                            </button>
                                                    </div>
                                                    <div className="Gd kN em IL rI LS">
                                                        <button 
                                                            className={`Ia LS US ad EY Zc Z3 hA- si lg na po eD rI ${disabled}`} 
                                                            onClick={this.handleDone}>
                                                                <div className="ES oF Je tR t7 mW">Done</div>
                                                        </button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="epsc">
                                        <div className="eps oF">Photo</div>
                                    </div>
                                    <div className="eppc">
                                        <div className="epps">
                                            <div className="eppb">
                                                <div className="efc">
                                                    <div className="epf">
                                                        {displayPhoto}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <input
                                                type="file"
                                                onChange={this.handleFile}
                                                className="dn"
                                                id="change-button"
                                            />
                                            <div className="Gd kN em IL rI LS">
                                                <button
                                                    className="Ia LS US ad EY Zc Z3 hA- a_A zz na po eD rI"
                                                    onClick={() => document.getElementById("change-button").click()}>
                                                    <div className="ES oF Je tR t7 mW">
                                                        <span className="grey oF">Change</span>
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <div className="eec">
                                            <div>
                                                <div className="lcr">
                                                    <label className="oF">Email</label>
                                                </div>
                                                <div className="form1">
                                                    <input
                                                        className="einp wyq oF"
                                                        type="text"
                                                        value={this.state.email}
                                                        onChange={this.changeInput("email")}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

export default EditProfile;