import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import ChangeRoomModal from '../components/ChangeRoomModal';
import ChildItem from '../components/ChildItem';

import * as roomActions from '../store/actions/rooms';

// save the selected child Id to change room.
let changeRoomChildId;

const RoomScreen = props => {
    const [changeRoomModalVisible, setChangeRoomModalVisible] = useState(false);

    const dispatch = useDispatch();

    const teacher = props.navigation.getParam('teacher');
    const roomId = props.navigation.getParam('roomId');
    const rooms = useSelector(state => state.center.rooms);
    const roomData = rooms.find(roomItem => roomItem.id === roomId);

    const changeRoomAction = (selectedRoomId) => {
        const child = roomData.children.find(child => child.id === changeRoomChildId);
        dispatch(roomActions.changeRoom(child, roomId, selectedRoomId));
    };

    const renderChildItem = itemData => {
        return (
            <ChildItem
                fullName={itemData.item.fullName}
                checkedIn={itemData.item.checkedIn}
                avatarSource={itemData.item.avatarSource}
                onCheck={() => {
                    dispatch(roomActions.checkChild(itemData.item.id, roomData.id, !itemData.item.checkedIn))
                }}
                onChangeRoom={() => {
                    setChangeRoomModalVisible(true);
                    changeRoomChildId = itemData.item.id;
                }}
                />
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList
                style={{width: '100%'}}
                data={roomData.children}
                renderItem={renderChildItem}
                numColumns={1}/>
            <ChangeRoomModal
                data={rooms.filter(room => teacher.isAccessAllowed(room.id))}
                isVisible={changeRoomModalVisible}
                onClose={() => console.log('ChangeRoomModal closed')}
                onCancel={() => setChangeRoomModalVisible(false)}
                onSubmit={(selectedRoom) => {
                    changeRoomAction(selectedRoom.id);
                    setChangeRoomModalVisible(false);
                }}
            />
        </View>
    );
};

RoomScreen.navigationOptions = navigationData => {
    const roomName = navigationData.navigation.getParam('roomName');

    return {
        headerTitle: roomName,
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default RoomScreen;