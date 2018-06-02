import React, {Component} from 'react';
import { View ,Text, Alert, TextInput , TouchableOpacity } from 'react-native';
import axios from 'axios';

export default class Login extends Component
{
    constructor(props) {
        super(props);
        this.state={
            username:'pooja',
            password:'pooja123'
        }
    }

    onLogin() {
        axios.post("http://localhost:4000/users/login",{username: this.state.username,password: this.state.password})
            .then((response)=>{
                this.props.navigation.navigate("AllUser",{id: response.data._id})
            })
            .catch((err)=>{
                alert("Error in Login" + err)
            })
    }

    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text> Username: </Text>
                <TextInput
                    value={this.state.username}
                    onChangeText={(username)=>this.setState({username})}
                    placeholder={"Enter username"}
                />
                <Text> Password: </Text>
                <TextInput
                    value={this.state.password}
                    onChangeText={(password)=>this.setState({password})}
                    placeholder={"Enter password"}
                />
                <TouchableOpacity onPress={()=>this.onLogin()}>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}