
import { StyleSheet, Text, Image, Platform, Button, View, Pressable} from 'react-native';
import { useRouter } from 'expo-router';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React from 'react';
import {SafeAreaView, TextInput,FlatList} from 'react-native';
import { useId, useState } from 'react';

let setStarterTrue = '#ff0d00'
let setMainTrue = '#808080'
let setDessertTrue = '#808080'
let courseOption = 'Course option'


export default function TabTwoScreen({}) {

const router = useRouter();

const [starterOption,setStarterOption] = useState(true) 
const [mainOption,setMainOption] = useState(true) 
const [dessertOption,setDessertOption] = useState(true) 
const [dishName, setDishName] = useState('Dish name')
const [desciptName, setDescriptName] = useState('Dish description')
const [priceName, setPriceName] = useState('Price')
const inputValue: string[] = [' ',dishName,' ',desciptName,' ',priceName,' ',courseOption]; // For item input

  const [listName, setListName] = useState(''); // For new list name input
  const [selectedList, setSelectedList] = useState<string | null>(null); // Current list
  const [lists, setLists] = useState<Record<string, string[]>>({}); // All lists

 // Add a new list
 const addList = () => {
  var itemList = inputValue.toString();
  if (listName.trim() !== '' && !lists[listName]) {
    setLists((prev) => ({ ...prev, [listName+itemList]: []}));
    setSelectedList(listName); // Select the newly created list
    setListName(''); // Clear input
  }
};





  return (


       <ParallaxScrollView
      headerBackgroundColor={{ light: '#ffffff', dark: '#353636' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Create Menu</ThemedText>
      </ThemedView>
      <ThemedText>Dish name :</ThemedText>
      <TextInput style={styles.input} onChangeText={newText => setDishName(newText)}></TextInput>

      <ThemedText>Description :</ThemedText>
      <TextInput style={styles.input} onChangeText={newText2 => setDescriptName(newText2)}></TextInput>

      <Button onPress={() => {
          setMainOption(false);
          setDessertOption(false);
          setStarterOption(true);
          
          return setStarterTrue= '#ff0d00', setMainTrue = '#808080', setDessertTrue = '#808080', courseOption = 'Starter'
          
        }} title = 'Starters' color={setStarterTrue}></Button>

      <Button onPress={() => {
          setMainOption(true);
          setDessertOption(false);
          setStarterOption(false);
           return setStarterTrue= '#808080', setMainTrue = '#ff0d00', setDessertTrue = '#808080', courseOption = 'Main'
          
        }} title = 'Main' color={setMainTrue}></Button>
      <Button onPress={() => {
          setMainOption(false);
          setDessertOption(true);
          setStarterOption(false);
          return setStarterTrue= '#808080', setMainTrue = '#808080', setDessertTrue = '#ff0d00', courseOption = 'Dessert'
          
        }} title = 'Dessert' color={setDessertTrue}></Button>


      <ThemedText>Price :</ThemedText>
      <TextInput style={styles.input} onChangeText={newText3 => setPriceName(newText3)}></TextInput>

      <Button title='Create menu item' onPress={() =>  
        router.push({ pathname: '/', params: { message: dishName,message2:desciptName, message3:priceName, message4:courseOption }})
      }
  ></Button>


      {/* Add a new list */}
      <TextInput style={styles.input}
        placeholder="Enter list name"
        value={listName}
        onChangeText={setListName}
      />
      <Button title="Create New List" onPress={addList} />

      {/* Select and show the current list */}
      {selectedList && (
        <View>
          <ThemedText>Current List: {selectedList}</ThemedText>
          {/*<TextInput
            style={styles.input}
            placeholder="Add item to this list"
            value={inputValue}
            onChangeText={setInputValue}
          />
          <Button title="Add Item" onPress={addItemToList} />*/}

          <FlatList 
            data={lists[selectedList]}
            keyExtractor={(item, index) => `${selectedList}-${index}`}
            renderItem={({ item }) => (
              <ThemedText>{item}</ThemedText>
            )}
          />
        </View>
      )}

      <View>
        {/* List all available lists */}
        <ThemedText>Available Lists:</ThemedText>
      {Object.keys(lists).map((list) => (
        <Button
          key={list}
          title={`View ${list}`}
          onPress={() => setSelectedList(list)}
        />
      ))}
    </View>
  


    </ParallaxScrollView>
    
  )
  
}


const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#808080' 
  },
  buttonOption: {
    backgroundColor: '#808080'
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  listItem: {
    color: '#ffffff',
    padding: 10,
    fontSize: 16,
    marginVertical: 2,
  },
});




