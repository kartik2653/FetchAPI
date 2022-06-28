/* eslint-disable prettier/prettier */
import React,{useState,} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  FlatList,
} from 'react-native';

const ItemView = ({item})=>{
    return (
        <View style={styles.Item}>
            <Text style={styles.SearchedItem}>{item}</Text>
        </View>
    );
};

const MainScreen = ({changeIt,items,setItems}) => {
  
  const [text, setText] = useState("");
  const fetchItems = () => {
   changeIt(true);
    fetch('https://random-word-api.herokuapp.com/word?number=1')
      .then(response => response.json())
      .then(data => {
        setItems([data[0], ...items]);
        console.log(items);
      })
      .catch(error => console.error(error))
      .finally(() => {changeIt(false);console.log(items);});
  };
  return (
    <View>
    <View style={styles.Header}>

      <TextInput placeholder="Search" style={styles.SearchBar} onChangeText={(val)=>setText(val)} value={text} />
      <View style={styles.LogoContainer}>
      <Pressable onPress={() => fetchItems()}>
        <Image
          style={styles.Logo}
          source={require('../AdditionLogo/logo.png')}
        />
      </Pressable>
      </View>

    </View>
    <View>
      <FlatList
      data={items.filter((item)=>item.indexOf(text.toLocaleLowerCase())>=0)}
      renderItem={ItemView}
      keyExtractor={(item)=>1}
      />
    </View>
    </View>
  );
};
const styles = StyleSheet.create({
  Header: {
    borderRadius: 1,
    borderWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 15,
    alignItems: 'center',
  },
  Logo: {
    width: 35,
    height: 35,
  },
  SearchBar:{
    width: '80%',
    borderRightWidth:1,
    fontFamily: 'monospace',
    color: 'black',
    fontSize: 19,
  },
  LogoContainer: {
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    width:'20%',
  },
  Item:{
    margin: 15,
    borderBottomWidth:1,
 },
 SearchedItem:{
    color: 'black',
    fontSize:27,
    fontFamily:'monospace',
 },
});
export default MainScreen;
