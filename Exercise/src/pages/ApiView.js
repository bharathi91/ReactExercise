import React, { Component } from 'react'
import { View, Text, Button, FlatList, ActivityIndicator } from 'react-native';
import styles from './ApiStyles';
const ApiView = (props) => {
    const { goForFetch, goForAxios, fromFetch, fromAxios, axiosData, renderItem, FlatListItemSeparator,RenderHeader, dataSource, filteredDataSource, loading } = props
    return (
        <View style={styles.parentContainer}>


            <FlatList
                data={filteredDataSource}
                ItemSeparatorComponent={FlatListItemSeparator}
                ListHeaderComponent={RenderHeader}
                renderItem={item => renderItem(item)}
                keyExtractor={item => item.id}
            />
            {loading &&
                <View style={styles.loader}>
                    <ActivityIndicator size="large" color="#0c9" />
                    <Text style={{fontSize:16,color:'red'}}>Loading Data...</Text>
                </View>
            }
        </View>
    )

}
export default ApiView;
/*
<View style={{ margin: 5 }}>
    <Button
        title={'Click using Fetch'}
        onPress={goForFetch}
        color='green'
    />
</View>
<View style={{ margin: 5 }}>
    <Button
        title={'Click using axios'}
        onPress={goForAxios}
        color='green'
    />
</View>
*/
