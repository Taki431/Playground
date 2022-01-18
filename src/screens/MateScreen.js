import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const MateScreen = ( {navigation} ) => {

    return (
      <View style={styles.mainView}>
        <Text style = {styles.textstyle}>Mate Screen</Text>
      </View>
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    //display: "flex",
    //flexDirection: "row-reverse",
    //flexWrap: "wrap",
    //alignContent: "space-between",
    alignItems: "center",
    justifyContent: "center",
  },

  textstyle: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 16,
  },

  touchableView :{
    marginBottom: 30,
    width :150,
    height : 50,
    //display: "flex",
    //flexWrap: "wrap",
    //alignContent: "space-between",    
    alignItems : 'center',
    backgroundColor : 'orange',
    borderWidth : 5,
    borderRadius: 10
  },

  touchableText :{
    textAlign : 'center',
    paddingTop : 5,
    fontSize : 20, 
    fontWeight : 'bold',
    color : 'white'
  }
});

export default MateScreen;