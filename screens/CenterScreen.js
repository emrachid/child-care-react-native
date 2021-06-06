import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RoomGridTile from '../components/RoomGridTile';
import Colors from '../constants/Colors';
import { fetchRooms } from '../store/actions/rooms';

const CenterScreen = props => {
    const rooms = useSelector(state => state.center.rooms);
    const dispatch = useDispatch();
    const teacher = props.navigation.getParam('teacher');

    // load data from server
    useEffect(() => {
        dispatch(fetchRooms());
    }, []);

    const renderGridItem = (itemData) => {
        return <RoomGridTile
            title={itemData.item.name}
            color={Colors.secondColor}
            onSelect={ () => {
                console.log(teacher);
                if (teacher.isAccessAllowed(itemData.item.id)) {
                    props.navigation.navigate('Room', { roomId: itemData.item.id, roomName: itemData.item.name, teacher })
                } else {
                    alert('Permission denied: You cannot access this room');
                }
            } }
        />
    };

    return (
        <FlatList data={rooms} renderItem={renderGridItem} numColumns={2} />
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default CenterScreen;