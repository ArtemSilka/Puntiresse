import * as PinApiUtil from '../util/pin_api_util';

export const RECEIVE_ALL_PINS = 'RECEIVE_ALL_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';
export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS';

const receiveAllPins = pins => ({
    type: RECEIVE_ALL_PINS,
    pins
})

const receivePin = pin => ({
    type: RECEIVE_PIN,
    pin
})

const removePin = pinId => ({
    type: REMOVE_PIN,
    pinId
})

const receivePinErrors = errors => ({
    type: RECEIVE_PIN_ERRORS,
    errors
})

export const fetchAllPins = () => dispatch => (
    PinApiUtil.fetchAllPins().then(
        pins => dispatch(receiveAllPins(pins)),
        error => dispatch(receivePinErrors(error.responseJSON))
    )
);

export const fetchPin = pinId => dispatch => (
    PinApiUtil.fetchPin(pinId).then(
        pin => dispatch(receivePin(pin)),
        error => dispatch(receivePinErrors(error.responseJSON))
    )
);

export const createPin = pin => dispatch => (
    PinApiUtil.createPin(pin).then(
        pin => dispatch(receivePin(pin)),
        error => dispatch(receivePinErrors(error.responseJSON))
    )
);


export const updatePin = pin => dispatch => (
    PinApiUtil.updatePin(pin).then(
        pin => dispatch(receivePin(pin)),
        error => dispatch(receivePinErrors(error.responseJSON))
    )
);

export const deletePin = pinId => dispatch => (
    PinApiUtil.deletePin(pinId).then(
        () => dispatch(removePin())
    )
);

export const savePin = pin => dispatch => (
    PinApiUtil.savePin(pin).then(
        pin => dispatch(receivePin(pin)),
        error => dispatch(receivePinErrors(error.responseJSON))
    )
);