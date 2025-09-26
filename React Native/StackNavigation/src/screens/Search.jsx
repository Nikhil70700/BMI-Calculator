import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Search = ({ navigation }) => {
  return (
    <View>
      <Text>Search</Text>
      <TouchableOpacity 
        style={styles.btn} 
        onPress={() => navigation.push('Home')}
      >
        <Text style={styles.btnText}>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignSelf: 'center'
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
