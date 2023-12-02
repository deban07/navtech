import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const User = (props) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text>User</Text>
      <View>

        <Button title='Next page --->' onPress={()=>props.navigation.navigate('ShoePage')}/>

      </View>
    </View>

  );
};

export default User;

const styles = StyleSheet.create({});
