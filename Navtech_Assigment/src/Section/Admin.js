import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import AsynStorage from '@react-native-async-storage/async-storage';

const Admin = (props) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [dataList, setDataList] = useState([]);

  console.log('+++++++', dataList);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const storedDataList = await AsynStorage.getItem('dataList');
      if (storedDataList) {
        setDataList(JSON.parse(storedDataList));
      }
    } catch (error) {
      console.error('Error loading data:', error);
    }
  };

  const setData = async () => {
    try {
      const newData = {input1, input2};

      const newDataList = [...dataList, newData];

      await AsynStorage.setItem('dataList', JSON.stringify(newDataList));

      setDataList(newDataList);

      setInput1('');
      setInput2('');

      console.log('Data stored successfully!');
    } catch (error) {
      console.error('Error storing data:', error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop:20
      }}>
      <Text>Admin</Text>

      <TextInput
        style={styles.t1}
        placeholder="Enter size"
        value={input1}
        onChangeText={text => setInput1(text)}
      />
      <TextInput
        style={styles.t1}
        placeholder="Enter Brand Name"
        value={input2}
        onChangeText={text => setInput2(text)}
      />
      <Button title="Save" onPress={setData} />

      <Text>Stored Sizes:</Text>

      <FlatList
        data={dataList}
        renderItem={({item}) => (
          <Text>{`Input 1: ${item.input1}, Input 2: ${item.input2}`}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      <Button title='Next --- >' onPress={()=>props.navigation.navigate('Test')}/>
    </View>
  );
};

export default Admin;

const styles = StyleSheet.create({
  t1: {
    height: 40,
    width: '80%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 12,
    marginTop: 15,
    paddingHorizontal: 20,
  },
});
