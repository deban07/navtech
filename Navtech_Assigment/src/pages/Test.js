import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
  View,
  Button,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
} from 'react-native';
import AsynStorage from '@react-native-async-storage/async-storage';
const Test = ({addShoe}) => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');
  const [dataList, setDataList] = useState([]);

  const [finalProduct, setFinalProduct] = useState([]);

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

  const handleAddShoe = () => {
    const newShoe = {dataList};

    
    console.log(
      'shoea added',
      newShoe.dataList.forEach((shoe, index) => {
        console.log(`Shoe ${index + 1}:`);
        console.log(`Input 1: ${shoe.input1}`);
        console.log(`Input 2: ${shoe.input2}`);
        console.log('--------------------');
      }),
      
    );
    // console.log('shoea added', newShoe.dataList.input2);

    addShoe(newShoe);
    setFinalProduct(newShoe.dataList);
  };

  const dummy = item => {
    const xyz = JSON.parse(JSON.stringify(item));
    console.log('flat list +++++', xyz.item.input1);
    console.log('flat list +++++', xyz.item.input2);
    console.log('_______________');

    <View style={{height: 50, width: '80%', backgroundColor: 'yellow'}}>
      {/* <Text>Shoe price{xyz.item.input1}</Text>
      <Text>Shoe Brand{xyz.item.input1}</Text> */}
    </View>;
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop:60
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

      <Button title="Add Shoe" onPress={handleAddShoe} />

      <FlatList
        data={dataList}
        renderItem={(item)=>{

        }}
        // keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  addShoe: shoe => dispatch({type: 'ADD_SHOE', payload: shoe}),
});

export default connect(null, mapDispatchToProps)(Test);

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
