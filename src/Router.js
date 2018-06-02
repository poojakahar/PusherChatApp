import React, {Component} from 'react';
import { View ,Text, Alert, TextInput , TouchableOpacity } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Login from "./component/Login";
import Chat from "./component/Chat";
import AllUser from "./component/AllUser";

export default Router=StackNavigator({
    Login: {screen: Login},
    Chat: {screen: Chat},
    AllUser: {screen: AllUser}
});