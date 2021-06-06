import RoomGridTile from "../../components/RoomGridTile";
import { ROOMS } from "../../data/dummy-data";
import Child from "../../models/Child";
import Classroom from "../../models/Classroom";
import { CHANGE_ROOM, CHECK_CHILD, SET_ROOMS } from "../actions/rooms";

const initialState = {
    rooms: ROOMS,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHECK_CHILD: {
            // get objects by id
            const room = state.rooms.find(roomItem => roomItem.id === action.roomId);
            const child = room.children.find(childItem => childItem.id === action.childId);

            // create new objects to update state
            const newChildren = room.children.map(childItem => {
                if (childItem.id !== action.childId) {
                    return childItem;
                }
                return new Child(action.childId, child.fullName, action.isCheckedIn, child.avatarSource);
            });

            // create new objects to update state
            const newRooms = state.rooms.map(roomItem => {
                if (roomItem.id !== action.roomId) {
                    return roomItem;
                }
                return new Classroom(room.id, room.name, newChildren);
            });

            return {
                ...state,
                rooms: newRooms,
            };
        }
        case CHANGE_ROOM: {
            if (action.fromRoomId === action.toRoomId) {
                // do not change state
                return state;
            }

            // get objects by id
            const fromRoom = state.rooms.find(roomItem => roomItem.id === action.fromRoomId);
            const toRoom = state.rooms.find(roomItem => roomItem.id === action.toRoomId);

            // remove child from the current room
            const newChildren = fromRoom.children.filter(childItem => childItem.id !== action.child.id);

            // create new objects to update state
            const newRooms = state.rooms.map(roomItem => {
                if (roomItem.id === action.fromRoomId) {
                    return new Classroom(fromRoom.id, fromRoom.name, newChildren);
                }
                if (roomItem.id === action.toRoomId) {
                    return new Classroom(toRoom.id, toRoom.name, [...toRoom.children, action.child]);
                }
                return roomItem;
            });

            return {
                ...state,
                rooms: newRooms,
            };
        }
        case SET_ROOMS: {
            return {
                ...state,
                rooms: action.rooms,
            };
        }
        default: {
            return state;
        }
    }
};