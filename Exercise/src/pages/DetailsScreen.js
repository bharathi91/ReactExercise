
import React, { Component } from 'react';
import ApiView from './ApiView';
import axios from 'axios';
import styles from './ApiStyles';
import myStyles from '../Styles/MyStyles';
import { Share } from 'react-native';
import PrimaryButton from '../Components/PrimaryButton';

import {
    StyleSheet,
    View,
    SafeAreaView,
    ActivityIndicator,
    FlatList,
    Text,
    Button,
    TouchableOpacity,
    Image, TextInput,
    ListItem, Alert
} from "react-native";

import Realm from 'realm';
let realm;
class DetailsScreen extends React.Component {
  constructor(props) {
      super(props);
    realm = new Realm({ path: 'MemesInfo.realm' });
      // this.props.navigator.setButtons({
      //   rightButtons: [
      //     { title: 'Reset', id: 'resetButton' },
      //     { title: 'Submit', id: 'submitButton' }
      //   ]
      // });

  }
  componentDidMount() {
    console.log('==============================================');
      console.log(this.props.navigator);
      console.log(this.props.route.params.data.item.url);

      console.log('==============================================');
console.log("===========This.Props");
console.log(this.props);
console.log("===========This.Props");

     // this.getInfo();
     // this.state = {
     //     data: this.props.navigation.getParam('data', '')
     // };

  }
  getInfo(){
  //you can do it this way or access it directly
  //var Name =this.props.navigation.getParam('Name ', 'No Name'); //second parameter is a callback
  //var Age=this.props.navigation.getParam('Age', 20);
  //var Male=this.props.navigation.getParam('Male', false);
  }
  onShare = async () => {
      try {
        const result = await Share.share({
              title: 'caption',
              message: 'React Native | A framework for building native apps using React',
              url:this.props.route.params.data.item.url,
        });

        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        alert(error.message);
      }
    };
  saveMeme = () => {

      realm.write(() => {
        var ID =
          realm.objects('Memes').sorted('memeId', true).length > 0
            ? realm.objects('Memes').sorted('memeId', true)[0]
                .memeId + 1
            : 1;
        realm.create('Memes', {
          memeId: ID,
          id: this.props.route.params.data.item.id,
          url: this.props.route.params.data.item.url,
          details: this.props.route.params.data.item.name,
        });
        Alert.alert(
          'Success',
          'Meme saved successfully',
          [
            {
              text: 'Ok',
              onPress: () => this.props.navigation.navigate('Memes'),
            },
          ],
          { cancelable: false }
        );
      });
    };
  render() {
    const { navigation } = this.props.route;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start' }}>
        <Text style={styles.titleStyle}>{this.props.route.params.data.item.name}</Text>
        <Image style={myStyles.detailImage}
          source={{uri:this.props.route.params.data.item.url}}
        />
        {(this.props.route.params.shouldShowOptions == true) ? (<View style={myStyles.fixToText}>

        <PrimaryButton style={myStyles.saveBtn}
            onClick = {this.saveMeme}
            label = "Save Meme"/>
        <PrimaryButton style={myStyles.shareBtn}
                onClick = {this.onShare}
                label = "Share Meme"/>
        </View>) : (<Text style={styles.titleStyle}>{this.props.route.params.data.item.details}</Text>)}

      </View>
    );
  }
}
// navigation.data.item.url
/*
<Text>{this.props.navigation.state.params.data.item.name}</Text>
<Image style={myStyles.logo}
  source={{uri: this.data.item.url}}
/>
*/
export default DetailsScreen;
