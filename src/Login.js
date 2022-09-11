import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { Component } from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = ({ navigation }) => {
    return (
        <SafeAreaView>
            <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="alphanumeric"
            
            />
            <TextInput
                style={styles.input}                
                placeholder="Password"
                keyboardType="alphanumeric"
            />

            </View>
            
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=> navigation.navigate('Home')}
                >
                <Text style={{color:'white'}}>Login</Text>
                </TouchableOpacity>
        </SafeAreaView>
        
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#55affa',
    },
    input:{
        
            height: 40,
            margin: 12,
            borderBottomWidth: 1,
            padding: 10,
          
    },
    button: {
        alignItems: "center",
        backgroundColor: "#1c87e5",
        padding: 10,
        margin: 30,
        borderRadius: 20,
      
        
      },
    form:{
        margin: 30,
        paddingTop: windowHeight/6

    }

    

    

        
    
});



export default Login;