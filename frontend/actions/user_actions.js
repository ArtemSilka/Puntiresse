import * as UsersApiUtil from '../util/user_api_util';

export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';

export const receiveUserErrors = errors => ({
    type: RECEIVE_USER_ERRORS,
    errors
})

const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users
})

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const updateUser = user => dispatch => (
    UsersApiUtil.updateUser(user).then(
        user => dispatch(receiveUser(user)),
        err => dispatch(receiveUserErrors(err.responseJSON))
    )
);

export const fetchAllUsers = () => dispatch => (
    UsersApiUtil.fetchAllUsers().then(
        users => dispatch(receiveAllUsers(users))
    )
);

export const fetchUser = userId => dispatch => (
    UsersApiUtil.fetchUser(userId).then(
        user => dispatch(receiveUser(user))
    )
);