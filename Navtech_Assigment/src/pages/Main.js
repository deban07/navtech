import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Main = (props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={styles.t1}>Shoe Cart</Text>

      <Button title="Admin" onPress={()=>props.navigation.navigate('Test')} />
      <Button title="User" onPress={()=>props.navigation.navigate('User')} />
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  t1: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
