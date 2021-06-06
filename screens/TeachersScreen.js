import React from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import TeacherItem from '../components/TeacherItem';
import { TEACHERS } from '../data/dummy-data';

const TeachersScreen = props => {

    const renderTeacherItem = itemData => {
        return (
            <TeacherItem
                fullName={itemData.item.fullName}
                avatarSource={itemData.item.avatarSource}
                onSelect={ () => props.navigation.navigate('Center', { teacher: itemData.item }) }
            />
        );
    };

    return (
        <View style={styles.screen}>
            <FlatList
                style={{width: '100%'}}
                data={TEACHERS}
                renderItem={renderTeacherItem}
                numColumns={1}/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default TeachersScreen;