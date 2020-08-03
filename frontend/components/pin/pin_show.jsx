import React from 'react';
import { withRouter, Link, Redirect } from 'react-router-dom';

class PinShow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToIndex: false
        }

        this.redirectToIndex = this.redirectToIndex.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.currentPin;

    }
    componentDidMount() {

        this.props.fetchPin(this.props.match.params.pinId);
    }

    redirectToIndex() {
        this.setState({ redirectToIndex: true })
    }

    handleSave(e) {
        e.preventDefault();
        this.props.savePin(this.currentPin)
            .then(this.redirectToIndex())
    }

    render() {
        if (!this.props.pin) return null;

        this.currentPin = {
            pin: {
                title: this.props.pin.title,
                link: this.props.pin.url,
                description: this.props.pin.description,
                copiedPinId: this.props.pin.id,
                board_id: 1
            }
        }

        if (this.state.redirectToIndex) {
            return (
                <Redirect to="/" />
            )
        }

        return (
            <div className="" >
                <Link to='/'>
                    <div className="">
                        <i className=""></i>
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