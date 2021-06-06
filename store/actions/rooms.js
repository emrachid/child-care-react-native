import { AVATARS } from "../../data/dummy-data";
import Child from "../../models/Child";
import Classroom from "../../models/Classroom";

export const CHECK_CHILD = 'CHECK_CHILD';
export const CHANGE_ROOM = 'CHANGE_ROOM';
export const SET_ROOMS = 'SET_ROOMS';

export const fetchRooms = () => {
    return dispatch => {
        fetch(`https://children-care-center-default-rtdb.firebaseio.com/data/center/classrooms.json`).then(response => response.json()).then(responseData => {
            const rooms = responseData.map((room, roomId) => {
                if (room.hasOwnProperty('children')) {
                    const children = Object.keys(room.children).map((childId, index) => {
                        const child = room.children[childId];
                        return new Child(childId, child.fullName, child.checked_in, AVATARS[index % 11]);
                    });
                    return new Classroom(roomId, room.name, children);
                } else {
                    return new Classroom(roomId, room.name, []);
                }
            });
            // save new data in the Redux "store"
            dispatch({type: SET_ROOMS, rooms});
        }).catch(error => {
            console.log('Network error: ', error);
            alert('Network error');
        });
    };
};

export const checkChild = (childId, roomId, isCheckedIn) => {
    return dispatch => {
        fetch(`https://children-care-center-default-rtdb.firebaseio.com/data/center/classrooms/${roomId}/children/${childId}.json`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                checked_in: isCheckedIn,
            }),
        }).then(response => response.json()).then(responseData => {
            if (responseData.hasOwnProperty('checked_in')) {
                dispatch({type: CHECK_CHILD, childId, roomId, isCheckedIn: responseData.checked_in});
            } else {
                alert('Server error');
            }
        }).catch(error => {
            console.log('Network error: ', error);
            alert('Network error');
        });
    };
};

const deleteChild = (child, fromRoomId, toRoomId, dispatch) => {
    fetch(`https://children-care-center-default-rtdb.firebaseio.com/data/center/classrooms/${fromRoomId}/children/${child.id}.json`, {
        method: 'DELETE',
    }).then(response => response.json()).then(responseData => {
        dispatch({type: CHANGE_ROOM, child, fromRoomId, toRoomId});
    }).catch(error => {
        console.log('Network error: ', error);
        alert('Network error');
    });
};

export const changeRoom = (child, fromRoomId, toRoomId) => {
    return dispatch => {
        fetch(`https://children-care-center-default-rtdb.firebaseio.com/data/center/classrooms/${toRoomId}/children/${child.id}.json`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                checked_in: child.checkedIn,
                fullName: child.fullName,
            }),
        }).then(response => response.json()).then(responseData => {
            if (responseData.hasOwnProperty('checked_in') && responseData.hasOwnProperty('fullName')) {
                deleteChild(child, fromRoomId, toRoomId, dispatch);
            } else {
                alert('Server error');
            }
        }).catch(error => {
            console.log('Network error: ', error);
            alert('Network error');
        });
    };
};