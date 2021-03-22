import React from 'react';
import { Text,Image, ImageBackground, StyleSheet, View, SafeAreaView, SafeAreaViewComponent } from 'react-native';

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require("../assets/background.jpeg")}>
            <View style={styles.logContainer}>
                <Image style={styles.logo} source={require("../assets/logo.jpeg")}/>
                <Text>Sell what you don't need</Text>
            </View>
                <View style={styles.login}></View>
                <View style={styles.register}></View>
        </ImageBackground>
        
    );
}
const styles = StyleSheet.create({
    background: {
        flex:1,
        // flexDirection:"row",
        alignItems: "center",
        justifyContent: "flex-end",
    },
    login: {
        width:"100%",
        height:70,
        backgroundColor:"#fc5c65",
    },
    register: {
        width:"100%",
        height:70,
        backgroundColor:"#4ecdc4",
    },
    logo:{
        width:100,
        height:100,
    },
    logContainer: {
        position: "absolute",
        top:70,
        alignItems: "center"
    }
})
export default WelcomeScreen;

