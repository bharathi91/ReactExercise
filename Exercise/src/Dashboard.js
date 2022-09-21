// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import 'react-native-gesture-handler';

import * as React from 'react';
import {View, Button, Text, TouchableOpacity, Image} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Items from './pages/Items';
import DetailsScreen from './pages/DetailsScreen';
import SavedMemes from './pages/SavedMemes';



// Import Custom Sidebar

const Stack = createStackNavigator();

const Dashboard = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator initialRouteName="Memes">
         <Stack.Screen name="Memes" component={Items}  options={({navigation}) => ({
           headerShown: true,headerTintColor: 'white', headerStyle: {
                backgroundColor: '#52EE63'
           },headerRight: () => <Button title="Saved" onPress={() => navigation.navigate('SavedMemes')} />
         })}/>
          <Stack.Screen name="Details" component={DetailsScreen}  options={{headerShown: true, headerTintColor: 'white', headerStyle: {
               backgroundColor: '#52EE63'
         }}}/>
          <Stack.Screen name="SavedMemes" component={SavedMemes} options={{headerShown: true, headerTintColor: 'white', headerStyle: {
               backgroundColor: '#52EE63'
         }}}/>

       </Stack.Navigator>
   </NavigationContainer>
  );
}

export default Dashboard;
