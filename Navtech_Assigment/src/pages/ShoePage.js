// AnotherComponent.js
import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';

const ShoePage = ({shoes}) => (
  <View
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
    }}>
    <Text>Number of Shoes: {shoes.length}</Text>
  </View>
);

const mapStateToProps = state => ({
  shoes: state.shoes,
});

export default connect(mapStateToProps)(ShoePage);
