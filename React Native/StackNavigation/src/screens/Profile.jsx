import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const Profile = ({ navigation, route }) => {
  const id = route?.params?.id;
  const name = route?.params?.name;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Data</Text>
      <Text style={styles.idTxt}>User ID: {id}</Text>
      <Text style={styles.nameTxt}>User Name:{name}</Text>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Search')}
      >
        <Text style={styles.btnText}>Go to Search</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20
  },
  btn: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5
  },
  btnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  idTxt: {
    color: 'green',
    fontSize: 20,
    marginBottom: 10
  },
  nameTxt: {
    color: 'orange',
    fontSize: 20,
    marginBottom: 20
  }
});
