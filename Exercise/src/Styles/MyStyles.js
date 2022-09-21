import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const deviceHeight = Dimensions.get('screen').height
const deviceWidth = Dimensions.get('screen').width

const myStyles = StyleSheet.create(
  {
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    innerContainer: {
      marginRight: -150,
    },
    logo: {
        width: 100,
        height: 100,
       justifyContent: "center",
        alignItems: "center",
      marginRight: 0,
      },
      detailImage: {
          marginTop: 10,
          width: deviceWidth/1.2,
          height: deviceHeight/2,
 resizeMode: 'contain'
        },
        deleteImage: {
            width: 30,
            height: 30,
            resizeMode: 'contain'
          },
    image: {
      marginBottom: 20,
      width: 100,
      height: 100,
      resizeMode: 'center',
    },
    imageCornerRadius: {
        width: 100,
        height: 100,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 50,
        bottom: 20
      },
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 5,
      width: "80%",
      height: 45,
      marginBottom: 20,
    backgroundColor: "#fff",
      alignItems: "center",
    },

    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 0,
      borderRadius: 5,

    },

    forgot_button: {
      height: 30,
      marginBottom: 30,
      color: "#fff",
    },

    loginBtn: {
      width: "40%",
      borderRadius: 5,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      marginBottom: 20,
      backgroundColor: "#52EE63",
    },

    front: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: 'absolute',
    zIndex: -1,
    backgroundColor: "#000000",
    },

    bottomContainer: {
        flex: 0.7,
        justifyContent: 'flex-end',
        fontWeight: 'bold',
    },
    bottomButtonView: {
        flex: 0.5,
        marginTop: 150,
        flexDirection: 'row',
        fontWeight: 'bold',
    },
    signINButtonView: {
        flex: 0.5,
        marginTop: 150,
        flexDirection: 'row',
        fontWeight: 'bold',
    },
    itemCell: {
        flexDirection: 'row',
        fontWeight: 'bold',
        alignItems: "center",
    },
    itemCell2: {
        flexDirection: 'column',
        fontWeight: 'bold',
        alignItems: "center",
    },
    fixToText: {
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'space-around',
        bottom:20,
        left:20,
        right:20,
        backgroundColor: "clear",
        tintColor: "white",
        color:"#841584"
     },
     saveBtn: {
       width: "40%",
       borderRadius: 5,
       height: 50,
       alignItems: "center",
       justifyContent: "center",
       marginTop: 20,
       marginBottom: 20,
       backgroundColor: "#52EE63",
     },
     shareBtn: {
       width: "40%",
       borderRadius: 5,
       height: 50,
       alignItems: "center",
       justifyContent: "center",
       marginTop: 20,
       marginBottom: 20,
       backgroundColor: "#4A90E2",
     },
  }
);

export default myStyles;
