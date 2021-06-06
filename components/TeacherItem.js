import React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';

const TeacherItem = props => {
    return (
        <TouchableOpacity onPress={props.onSelect}>
            <Card>
                <Card.Title style={styles.title} >{props.fullName}</Card.Title>
                <Card.Divider/>
                <Card.Image style={styles.image} source={props.avatarSource} />
            </Card>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontFamily: 'open-sans-bold',
    },
    image: {
        resizeMode: 'contain',
    },
});

export default TeacherItem;