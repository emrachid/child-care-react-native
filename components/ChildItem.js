import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Card } from 'react-native-elements'
import Colors from '../constants/Colors';

const ChildItem = props => {  
    return (
        <Card>
            <Card.Title style={styles.title} >{props.fullName}</Card.Title>
            <Card.Divider/>
            <Card.Image style={styles.image} source={props.avatarSource} />
            <View style={styles.actions}>
                <View style={styles.actionButton}>
                    <Button
                        color={Colors.primaryColor}
                        title={props.checkedIn === true ? 'check-out' : 'check-in'}
                        onPress={props.onCheck} />
                </View>
                <View style={styles.actionButton}>
                    <Button
                        color={Colors.primaryColor}
                        title='change room'
                        onPress={props.onChangeRoom} />
                </View>
            </View>
        </Card>
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
    actions: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    actionButton: {
        width: 130,
    },
});

export default ChildItem;