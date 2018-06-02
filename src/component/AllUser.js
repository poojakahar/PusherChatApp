import React, {Component} from 'react';
import { View ,Text, Alert, TextInput , TouchableOpacity } from 'react-native';
import axios from 'axios';

export default class Login extends Component
{
    constructor(props) {
        super(props);
        this.state={
            users:[],
            sender:this.props.navigation.state.params.id,
        }
    }

    componentDidMount() {
        axios.get("http://localhost:4000/users/"+this.props.navigation.state.params.id)
            .then((response)=>{
                this.setState({users: response.data})
            })
            .catch((err)=>{
                alert("Error in Login" + err)
            })
    }

    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                {
                    this.state.users.map((value,key)=>{
                        return(
                            <TouchableOpacity key={key} onPress={()=> this.props.navigation.navigate("Chat",{id: this.state.sender,receiver: value._id})}>
                                <Text>{value.username}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
        )
    }
}