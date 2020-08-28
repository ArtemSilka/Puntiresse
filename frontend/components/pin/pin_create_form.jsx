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
            toIndex: null,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.selectBoard = this.selectBoard.bind(this);
        this.showMenu = this.showMenu.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllBoards();
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
            .then(response => {
                    this.setState({ toShow: true, toIndex: response.pin.id }),
                        (err) => {this.setState({ errors: this.renderErrors() })}
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

    showMenu() {
        document.getElementById("boards").classList.toggle("show-menu")
    }

    boardsList() {

        const { boards } = this.props;
        if (!boards) return null;
        return (
            <div className="">
                <button className="sb LS US ad EY Zc Z3 hA- na po eD rI wid noBr1" type="button">
                <div className="ES oF Je t7 mW" onClick={this.showMenu} id="selected-text">
                    Select board
                </div>
                </button>
                <div id="boards" className="menu-back">
                    <ul className="select-board oF mW" onClick={e => e.stopPropagation()}>
                        {boards.map((board, idx) => {
                            if (board.user_id === this.props.currentUser.id) {
                            return (
                                <li key={idx}
                                    value={board.id}
                                    className=""
                                    onClick={this.selectBoard}
                                >{board.name}</li>
                            )}
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
        const imagePreview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : (
            <div className="df">
                <img id="photo" className="w1" src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698648-icon-130-cloud-upload-512.png" />
            </div>
        );

        if (this.state.toShow) {
            return (
                <Redirect to={`/pins/${this.state.toIndex}`} />
                )}

        return (

            <div className="modal-box-container hek">
                
                <div className="modal-box1 oF">
                    <div className="box">
                        <form onSubmit={this.handleSubmit} className="form1">
                            <div className="_O1 jcfe">
                                {this.boardsList()}
                                <button className="LS US ad EY Zc Z3 hA- si lg na po eD rI wa noBr">
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
                                                // row="5"
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