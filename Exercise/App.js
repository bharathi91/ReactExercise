// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */
//
// import React from 'react';
// import type {Node} from 'react';
// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
// //import {createStackNavigator} from '@react-navigation/stack';
//
// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import AnimatedSplash from "react-native-animated-splash-screen";
// import Items from './src/pages/Items';
//
// const AppNavigator = createStackNavigator(
//   {
//     Memes: {
//       screen: Items,
//       navigationOptions: {
//         header: null,
//       },
//     },
//   },
//   {
//     initialRouteName: "home",
//   }
// )
//
// const Container = createAppContainer(AppNavigator)
//
// class App extends React.Component {
//   state = {
//     isLoaded: false,
//   }
//
//   async componentDidMount() {
//     await loadAsync()
//     this.setState({ isLoaded: true })
//   }
//
//   render() {
//     return (
//       <AnimatedSplash
//         translucent={true}
//         isLoaded={this.state.isLoaded}
//         logoImage={require("./src/icons/cart.png")}
//         backgroundColor={"#262626"}
//         logoHeight={150}
//         logoWidth={150}
//       >
//         <Items />
//       </AnimatedSplash>
//     )
//   }
// }
//
// export default App
