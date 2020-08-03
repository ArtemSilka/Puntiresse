import { connect } from 'react-redux';
import { fetchAllPins, updatePin, deletePin } from '../../actions/pin_actions';
import PinIndex from './pin_index';

const msp = state => ({
    pins: Object.values(state.entities.pins)
})

const mdp = dispatch => ({
    fetchAllPins: pins => dispatch(fetchAllPins(pins)),
    updatePin: pin => dispatch(updatePin(pin)),
    deletePin: pinId => dispatch(deletePin(pinId))
})

export default connect(msp, mdp)(PinIndex);