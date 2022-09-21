
import React, { Component } from 'react';
import ApiView from './ApiView';
import axios from 'axios';
import styles from './ApiStyles';
import myStyles from '../Styles/MyStyles';

import Realm from 'realm';
let realm;
import {
    StyleSheet,
    View,
    SafeAreaView,
    ActivityIndicator,
    FlatList,
    Text,
    TouchableOpacity,
    Image, TextInput,
    ListItem, Button, Alert
} from "react-native";

class SavedMemes extends Component {
    constructor(props) {
        super(props);
        realm = new Realm({ path: 'MemesInfo.realm' });
        this.state = {
            memesList: [],
            hasMemes: false
        };
       console.log("=====================final data==============");
       console.log(this.memesList);
       console.log("=====================final data==============");

    }
      componentDidMount() {
          this.fetchMemes()
        }
      fetchMemes() {
        var memesDetailsList = realm.objects('Memes');
        console.log(memesDetailsList);


          this.setState({
                  memesList: memesDetailsList
            })
            if (memesDetailsList && memesDetailsList.length > 0) {
              this.setState({
                      hasMemes: true
              })
            } else {
                      hasMemes: false
              }
        }
    FlatListSeparator = () => {
        return (
          <View
            style={{
              height: 0.3,
              width: '966%',
              backgroundColor: '#000',
              marginLeft: '0%'
            }}
          />
        );
    }
    RenderHeader = () => (
      <View
          style={{
            backgroundColor: '#fff',
            padding: 10,
            marginVertical: 10,
            borderRadius: 20
          }}
        >
      <TextInput
         autoCapitalize="none"
         autoCorrect={false}
         clearButtonMode="always"
         value={this.query}
         onChangeText={queryText => this.handleSearch(queryText)}
         placeholder="Search"
         style={{ backgroundColor: '#fff', paddingHorizontal: 20 }}
       />
    </View>
  )

    renderItem = (data) => {
        console.log("=========Table cell===============");
        console.log(data);
        console.log("===========Table cell=============");
        return (
          <TouchableOpacity style={styles.list} onPress={() =>
              this.props.navigation.navigate('Details', {
                data: data,shouldShowOptions:false,
                })
          }>
                  <View style={myStyles.itemCell}>
                  <Image style={myStyles.logo}
                      source={{uri: data.item.url}}/>
                    <View style={myStyles.itemCell}>
                          <Text style={styles.textStyle}>{data.item.details}</Text>
                          <TouchableOpacity style = {{ padding: 10, height: 30, width: 30}}
                                  onPress = {() => {
                                                 this.deleteMeme(data)
                                          }}>
                                          <Image style={myStyles.deleteImage} source={require("../icons/delete.png")} />
                                      </TouchableOpacity>
                    </View>

                  </View>

            </TouchableOpacity>
        )
    }
    deleteMeme = (item) => {

      Alert.alert(
        'Alert',
        'Do you want to delete this meme?',
        [
          {
            text: 'Ok',
            onPress: () => this.deleteMemeFromDB(item.item.id),
          },
          {
            text: 'cancel',
            onPress: () => this.props.navigation.navigate('Memes'),
          },
        ],
        { cancelable: true }
      );
      };
      deleteMemeFromDB = (itemId) => {
        realm.write(() =>
        realm.delete(
        realm.objects('Memes').filter(userObj => userObj.id == itemId),
  ),
);
        this.fetchMemes()
      };
/*
  <Text style={styles.textStyle}> {data.item.name} </Text>

*/

    render() {
      const containsMemes = this.state.hasMemes;
      return (
          <View style={{ marginTop: 10 }}>
          {(containsMemes == true) ? (<FlatList
              data={this.state.memesList}
              renderItem={this.renderItem}
              keyExtractor={(item) => item.id}/>) : (<Text
                style={{
                  fontSize: 25,
                  textAlign: 'center',
                  marginBottom: 0,
                }}>
                There is no saved memes.
              </Text>)}
          </View> );
    }
}

export default SavedMemes;
/*
https://jsonplaceholder.typicode.com/users
*/
