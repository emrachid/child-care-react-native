class Teacher {
    constructor(id, fullName, roomIds, canAccessAllRooms, avatarSource) {
        this.id = id,
        this.fullName = fullName,
        this.roomIds = roomIds,
        this.canAccessAllRooms = canAccessAllRooms,
        this.avatarSource = avatarSource
    }

    isAccessAllowed(roomId) {
        if (this.canAccessAllRooms) {
            return true;
        }

        return this.roomIds.includes(roomId.toString());
    }
}

export default Teacher;