import React from 'react';
import { Link } from 'react-router-dom';
import PinIndexItem from '../pin/pin_index_item';
import create from '../create_button';



class Profile extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        
        this.props.fetchUser(this.props.userId)
    }

    componentDidUpdate(prevProps) {
        
        if (prevProps.userId !== this.props.userId) {
            this.props.fetchUser(this.props.match.params.userId)
        }
    }

    render() {

        const { user } = this.props;
        if (!user) return <div></div>;
        const userPins = user.pins.map((pin, idx) => {
            return <PinIndexItem key={idx} pin={Object.values(pin)[0]} />
        })

        const profilePhoto = (user.photo) ? (
            <img className="hCL eD po MIw Xa" src={user.photo} />
        ) : (
            <img className="hCL eD po MIw Xa" src={"https://s.pinimg.com/images/user/default_280.png"} />
        );
// debugger
        return (

            <div>
                {create()}

                <div className='profile'>

                    <div className="d rU No m8 zI7 rI LS six">
                        <div className="d rU No m8 zI7 rI LS tw8">
                            <div className="d XG qJc zI7 rI LS tw8">
                                <div className="Pj7 sLG XG d m1e">
                                    <div className="XG zI7 rI LS tw8">
                                            {profilePhoto}
                                    </div>
                                    <div className="KPc MIw ojN Rym p6V QLY"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="user-container _O1 m8">
                        <span className="name oF">{user["email"].split('@')[0]}</span>
                    </div>
                    <div className='profile-links'>
                        <div className=''>
                            <Link to={`/settings`}>
                                <div className="zI7 rI LS">
                                    <div className="d zI7 rI LS fou">
                                        <div className="d rU No m8 zI7 rI LS six a_A">
                                            <div className="d rU No m8 zI7 rI LS tw1">
                                                <div className="d XG qJc zI7 rI LS tw2">
                                                    <div className="Pj7 sLG XG d m1e">
                                                        <div className="XG zI7 rI LS tw3">
                                                            <img className="hCL eD po MIw" src={"https://png.pngtree.com/png-vector/20190827/ourlarge/pngtree-pencil-icon-png-image_1713465.jpg"} />
                                                        </div>
                                                        <div className="KPc MIw ojN Rym p6V QLY"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div className='profile-links'>
                            <Link to={`/users/${user.id}/boards`}>
                                <div className="Eh fv rI LS pya a_A">
                                    <div className="EY rI fv Xa po na">
                                        <div className="Eh rU No m8 rI LS che">
                                            <div className="ES oF Je t7 mW ">
                                                Boards
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/users/${user.id}/pins`}>
                            <div className="Eh fv rI LS pya a_A">
                                <div className="EY rI fv Xa po na sld">
                                    <div className="Eh rU No m8 rI LS che">
                                        <div className="ES oF Je t7 mW ">
                                            Pins
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>

                    <div className='profile-container yQa'>
                        {userPins}
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;