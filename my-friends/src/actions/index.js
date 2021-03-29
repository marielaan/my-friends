export const ADD_FRIENDS = 'ADD_FRIENDS';
export const DEACTIVATE_FRIENDS = 'DEACTIVATE_FRIENDS';
export const DELETE_FRIENDS = 'DELETE_FRIENDS';
export const BLOCK_FRIENDS = 'BLOCK_FRIENDS';

//let id = 1;

/*
{
    name
    email
    phone
}
*/

//esto recibe un objeto

export const addfriends = (amigo) => {
    return {
        type: ADD_FRIENDS,
        payload: {
            name: amigo.name,
            phone: amigo.phone,
            email: amigo.email,
            status: 'Active'
        }
    }
}

export const deactivateFriends = (id) => {
    return {
        type: DEACTIVATE_FRIENDS,
        payload: id
    }
}

export const deleteFriends = (id) => {
    return {
        type: DELETE_FRIENDS,
        payload: id
    }
}

export const blockFriends = (id) => {
    return {
        type: BLOCK_FRIENDS,
        payload: id
    }
}
