import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class PinShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toIndex: false
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
                copiedPinId: this.props.pin.id,
                board_id: 28
            }
        }

        if (this.state.toIndex) {
            return (
                <Redirect to="/home" />
            )
        }

        return (
            <div className="" >
                <Link to='/home'>
                    <div className="">
                        <i className="">HOME</i>
                    </div>
                </Link>
                <Link to={`/pins/${this.props.pin.id}/edit`}>
                    <div className="" 
                    // onClick={() => this.props.openModal(this.props.pin.id)}
                    >
                        <i className="">EDIT</i>
                    </div>
                </Link>
                <div className="">
                    <div className="">
                        <div className="">
                            <img src={this.props.pin.photoUrl} alt={this.props.pin.title} className=""/>
                            <div className="">
                                <div className="">
                                    <div>
                                        <Link to={`/pins/${this.props.pin.id}/edit`}>
                                            <div className="">
                                                <i className=""></i>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="">
                                        <div className="">Select</div>
                                        <button onClick={this.handleSave} className="">Save</button>
                                    </div>
                                </div>
                                <div className="">
                                    <a className="">
                                        {this.props.pin.url || 'Url'}
                                    </a>
                                    <h4 className="">
                                        {this.props.pin.title}
                                    </h4>
                                    <p className="">
                                        {this.props.pin.description || 'Description'}
                                    </p>
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