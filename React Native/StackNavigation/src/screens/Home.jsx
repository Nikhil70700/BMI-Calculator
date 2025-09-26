import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <TouchableOpacity 
        style={styles.btn} 
        onPress={() => navigation.navigate('Profile',{id:1,name:'Nikhil Pandey'})}
      >
        <Text style={styles.btnText}>Go to Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    height:'100%',
    width:'100%',
    justifyContent:'center',
    alignItems:'center'
  },
  title:{ 
    fontSize:30,
    fontWeight:'bold',
    marginBottom:20
  },
  btn:{
    padding:10,
    backgroundColor:'red',
    borderRadius:5
  },
  btnText:{
    color:'white',
    fontSize:16,
    fontWeight:'bold'
  }
});
