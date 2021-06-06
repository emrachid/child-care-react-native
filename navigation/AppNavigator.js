import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Colors from '../constants/Colors';

import CenterScreen from '../screens/CenterScreen'
import RoomScreen from '../screens/RoomScreen';
import TeachersScreen from '../screens/TeachersScreen';

const AppNavigator = createStackNavigator({
    Teachers: {
        screen: TeachersScreen,
        navigationOptions: {
            headerTitle: 'Teachers'
        },
    },
    Center: {
        screen: CenterScreen,
        navigationOptions: {
            headerTitle: 'Rooms'
        },
    },
    Room: RoomScreen,
},
{
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : '', // get the default color for iOS
        },
        headerTitleStyle: {
            fontFamily: 'open-sans-bold',
        },
        headerBackTitleStyle: {
            fontFamily: 'open-sans',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    },
},
);

export default createAppContainer(AppNavigator);