import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const DatingScreen = ( {navigation} ) => {

    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
        <TouchableOpacity
            style = {[styles.upper_box, styles.mypic]}
            onPress={() =>{
              navigation.navigate("Dating_to_MyProfile")
            }}>
            <View style> 
              <Text style = {styles.textstyle}>My Profile Pic</Text>
            </View>
          </TouchableOpacity>   
          <TouchableOpacity
            style = {[styles.upper_box, styles.bonus]}
            onPress={() =>{
              navigation.navigate("Dating_to_Purchase")
            }}>
            <View>
              <Text style = {styles.textstyle}>Ddakji for Purchase </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity
            style = {[styles.mid_box, styles.pbox]}
            onPress={() =>{
              navigation.navigate("Dating_to_Profiles")
            }}>
            <View>
               <Text style = {styles.textstyle}>1st Introduced Profile</Text>
            </View>
          </TouchableOpacity> 
          <TouchableOpacity
            style = {[styles.mid_box, styles.pbox]}
            onPress={() =>{
              navigation.navigate("Dating_to_Profiles")
            }}>
            <View>
               <Text style = {styles.textstyle}>2nd Introduced Profile</Text>
            </View>
          </TouchableOpacity> 
          <TouchableOpacity
            style = {[styles.mid_box, styles.pbox]}
            onPress={() =>{
              navigation.navigate("Dating_to_Profiles")
            }}>
            <View>
               <Text style = {styles.textstyle}>3rd Introduced Profile</Text>
            </View>
          </TouchableOpacity> 
          <TouchableOpacity
            style = {[styles.mid_box, styles.pbox]}
            onPress={() =>{
              navigation.navigate("Dating_to_Profiles")
            }}>
            <View>
               <Text style = {styles.textstyle}>4th Introduced Profile</Text>
            </View>
          </TouchableOpacity>            
        </View>
        <View style={styles.container3}>
        <TouchableOpacity
            style = {[styles.box, styles.more]}
            onPress={() =>{
              navigation.navigate("Dating_to_More")
            }}>
            <View>
                <Text style = {styles.textstyle}>Introduce me more!</Text>
            </View>
          </TouchableOpacity>
        </View>        
      </View>
    );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  container: {
    flex: .2,
    flexDirection: 'row',
    //borderBottomWidth: 1,
    //borderBottomColor: '#000',
    justifyContent: 'space-between', 
    padding: 10
  },
  container2: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between', //replace with flex-end or center
    padding:10,
    //alignItems: 'flex-start' //replace with flex-end or center
  },  
  container3: {
    flex: .2,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center' //replace with flex-end or center
  },
  upper_box: {
    flex: 1,
    height: 60,
    backgroundColor: 'red',
    margin:10
  },  
  mid_box: {
    flex: 1,
    height: 60,
    margin:5
  },    
  box: {
    flex: 1,
    height: 100,
    margin:10
  },
  bottom_box: {
    flex: 1,
    margin:10
  },
  mypic :{
    backgroundColor: '#2196F3',
    flex : 0.2
  },
  more: {
    backgroundColor: 'yellow',
    flex : 1,
    height : 30
  },  
  bonus: {
    backgroundColor: '#8BC34A'
  },

  bonus: {
    backgroundColor: '#e3aa1a',
    flex : 0.2
  },
  pbox: {
    backgroundColor: 'purple',
    flex : 0.3
  },
  two: {
    flex: 1.5,
  },

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
    width :100,
    height : 50,
    //display: "flex",
    //flexWrap: "wrap",
    //alignContent: "space-between",    
    alignItems : 'center',
    backgroundColor : 'orange',
    borderWidth : 1,
    borderRadius: 10
  },

  textstyle: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 16,
  },

  touchableText :{
    textAlign : 'center',
    paddingTop : 5,
    fontSize : 20, 
    fontWeight : 'bold',
    color : 'white'
  }
});

export default DatingScreen;