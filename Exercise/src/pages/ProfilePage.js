import { StatusBar } from "expo-status-bar";
import * as React from 'react';
import {useState, useEffect} from 'react';

import {Button, View, Text, SafeAreaView, Image, TouchableOpacity, Alert} from 'react-native';
import AppTextField from '../Components/AppTextField';
import PrimaryButton from '../Components/PrimaryButton';
import myStyles from '../Styles/MyStyles';
import Realm from 'realm';
let realm;
const ProfilePage = ({navigation}) => {

const [name, setName] = React.useState("No Name");
const [email, setEmail] = React.useState("");
const [phone, setPhone] = React.useState("");
const [password, setPassword] = React.useState("");

const [confirmPassword, setConfirmPassword] = React.useState("");
const [userData, setUserData] = React.useState("NOTUPDATED");

realm = new Realm({ path: 'UserInfo.realm' });
  useEffect(() => {
    console.log("=============>");
    console.log(userData);
      if (userData == "NOTUPDATED") {
        setUserData('UPDATED')
        updateData();
        }
    console.log("=============>");
    console.log(userData);
   }, []);
   updateData = () => {
     //getUser();
   };
   getUser = () => {
     var userDetails = realm
       .objects('User')
       .filtered("userEmail == $0","Bharathi91m@gmail.com")
       console.log(userDetails);
     if (userDetails.length > 0) {
      setName(userDetails[0].userName)
      setEmail(userDetails[0].userEmail)
      setPhone(userDetails[0].userPhone)
      setPassword(userDetails[0].userPassword)
     } else {
       alert('Something went wrong');
     }
  };
  updateUser = () => {
    realm.write(() => {
      var obj = realm
        .objects('User')
        .filtered("userId == $0", 1)
      if (obj.length > 0) {
        obj[0].userName = name;
        obj[0].userPhone = phone;
        obj[0].userEmail = email;
        obj[0].userPassword = password;
        Alert.alert(
          'Success',
          'User updated successfully.',
          [
            {
              text: 'Ok',
              onPress: () =>
                console.log("Success"),
            },
          ],
          { cancelable: false }
        );
      } else {
        alert('User Updation Failed');
      }
    });
    };
  return(
    <View style={myStyles.container}>
    <View style={myStyles.front}>
    <Image style={myStyles.front} source={require("../icons/loginBG.png")} />
    </View>

    <Image style={myStyles.imageCornerRadius} source={require("../icons/cart.png")} />
      <StatusBar style="auto" />
      <View style={myStyles.inputView}>
        <AppTextField
          style={myStyles.TextInput}
          placeHolder="Name"
          value={name}
          placeholderTextColor="#003f5c"
          secureTextEntry='false'
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={myStyles.inputView}>
        <AppTextField
          style={myStyles.TextInput}
          placeHolder="Email"
          value={email}
          placeholderTextColor="#003f5c"
          secureTextEntry='false'
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={myStyles.inputView}>
        <AppTextField
          style={myStyles.TextInput}
          placeHolder="Phone Number"
          value={phone}
          placeholderTextColor="#003f5c"
          secureTextEntry='false'
            onChangeText={(text) => setPhone(text)}
        />
      </View>
      <View style={myStyles.inputView}>
        <AppTextField
          style={myStyles.TextInput}
          placeHolder="Password"
          value={password}
          placeholderTextColor="#003f5c"
          secureTextEntry='true'
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      <View style={myStyles.inputView}>
        <AppTextField
          style={myStyles.TextInput}
          placeHolder="Confirm Password"
          value={confirmPassword}
          placeholderTextColor="#003f5c"
          secureTextEntry='true'
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>
      <PrimaryButton style={myStyles.loginBtn}
          onClick = {updateUser}
          label = "Update Profile Information"/>
    </View>
    );

  }

export default ProfilePage;
