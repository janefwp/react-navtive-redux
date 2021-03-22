import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, View } from 'react-native'
import WelcomeScreen from '../screens/ViewImageScreen'
import BookScreen from '../screens/BookScreen'
import CartScreen from '../screens/CartScreen'
import ShoppingCartIcon from '../components/ShoppingCartIcon'

export default function AppNavigator() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name='Books' 
            component={BookScreen}
            options={{headerRight: props =><ShoppingCartIcon {...props}/>}} />
          <Stack.Screen name='Cart' component={CartScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
