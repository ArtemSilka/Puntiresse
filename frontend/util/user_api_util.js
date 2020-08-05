export const fetchAllUsers = () => (
    $.ajax({
        method: 'GET',
        url: '/api/users'
    })
)

export const fetchUser = userId => (
    $.ajax({
        method: 'GET',
        url: `/api/users/${userId}`
    })
)

export const updateUser = user => {
    return $.ajax({
        url: `/api/users/${user.id}`,
        method: "PATCH",
        data: user,
        contentType: false,
        processData: false
    })
}