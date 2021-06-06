import React, { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RoomGridTile from '../components/RoomGridTile';
import Colors from '../constants/Colors';
import { fetchRooms } from '../store/actions/rooms';

const CenterScreen = props => {
    const rooms = useSelector(state => state.center.rooms);
    const dispatch = useDispatch();

    // load data from server
    useEffect(() => {
        dispatch(fetchRooms());
    }, []);

    const renderGridItem = (itemData) => {
        return <RoomGridTile
            title={itemData.item.name}
            color={Colors.secondColor}
            onSelect={ () => props.navigation.navigate('Room', { roomId: itemData.item.id, roomName: itemData.item.name }) }
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