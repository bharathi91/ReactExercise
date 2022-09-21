
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
    ListItem
} from "react-native";
class Items extends Component {
    constructor(props) {
        super(props);
        realm = new Realm({
          path: 'MemesInfo.realm', // Name of our app database
          schema: [
            {
              name: 'Memes',
              properties: {
                memeId: { type: 'int', default: 0 },
                id: 'string',
                url: 'string',
                details: 'string',
              },
            }
          ],
        });
        this.state = {
            loading: false,
            fromFetch: false,
            fromAxios: false,
            dataSource: [],
            filteredDataSource: [],
            axiosData: null,
            query:''
        };

    }
    handleSearch = text => {
        console.log("=========Search Query");
  console.log(text);
        console.log("=========Search Query");
        const newData = this.state.dataSource.filter(item => {
    const itemData = `${item.name.toUpperCase()}`;
    const textData = text.toUpperCase();
    return itemData.includes(textData); // this will return true if our itemData contains the textData
  });

          this.setState({
              filteredDataSource: newData,
              query: text,
          });
  };
      componentDidMount() {
          setTimeout(function() { //Start the timer
          this.goForFetch();
            }.bind(this), 0)
        }

      goForFetch = () => {
        this.setState({
            fromFetch: true,
            loading: true,

        })
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then((responseJson) => {
                console.log('getting data from fetch', responseJson)
                this.setState({
                    loading: false,
                    dataSource: responseJson.data.memes,
                    filteredDataSource:responseJson.data.memes,
                })
            })
            .catch(error => console.log(error))
    }
    goForAxios = () => {
        this.setState({
            fromFetch: false,
            loading: true,

        })
        axios.get("https://api.imgflip.com/get_memes")
            .then(response => {
                console.log('getting data from axios', response.data.data);
                this.setState({
                    loading: false,
                    axiosData: response.data
                })
            })
            .catch(error => {
                console.log(error);
            });
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
        console.log("========================");
        console.log(data);
        console.log("========================");
        return (
          <TouchableOpacity style={styles.list} onPress={() =>
                  this.props.navigation.navigate('Details', {
                  data: data,shouldShowOptions:true,})}>
                  <View style={myStyles.itemCell}>
                  <Image style={myStyles.logo}
                    source={{uri: data.item.url}}
                  />
                  <View>
                <Text style={styles.textStyle}>{data.item.name}</Text>
              </View>
                  </View>
            </TouchableOpacity>
        )
    }


/*
  <Text style={styles.textStyle}> {data.item.name} </Text>

*/

    render() {
        const { dataSource,filteredDataSource, fromFetch, fromAxios, loading, axiosData } = this.state
        return (
      <SafeAreaView>
            <ApiView
                goForFetch={this.goForFetch}
                goForAxios={this.goForAxios}
                dataSource={dataSource}
                filteredDataSource={filteredDataSource}
                loading={loading}
                fromFetch={fromFetch}
                fromAxios={fromAxios}
                axiosData={axiosData}
                FlatListItemSeparator={this.FlatListSeparator}
                RenderHeader={this.RenderHeader}
                renderItem={this.renderItem}
            />
      </SafeAreaView>
        );
    }
}

export default Items;
/*
https://jsonplaceholder.typicode.com/users
*/
