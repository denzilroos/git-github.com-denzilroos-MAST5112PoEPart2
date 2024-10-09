import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, Image, Platform, Button, View, Pressable} from 'react-native';
import SelectDropdown  from 'react-native-select-dropdown'


import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import React from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import { startMapper } from 'react-native-reanimated';
import { useId, useState } from 'react';
import Select from 'react-select';
import {Picker} from '@react-native-picker/picker';
import Dropdown from 'react-native-input-select';

let setStarterTrue = '#808080'
let setMainTrue = '#808080'
let setDessertTrue = '#808080'

export default function TabTwoScreen() {

const [starterOption,setStarterOption] = useState(true) 
const [mainOption,setMainOption] = useState(true) 
const [dessertOption,setDessertOption] = useState(true) 
  return (
       <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
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
      <TextInput style={styles.input}></TextInput>
      <ThemedText>Description :</ThemedText>
      <TextInput style={styles.input}></TextInput>

      <Button onPress={() => {
          setMainOption(false);
          setDessertOption(false);
          setStarterOption(true);
          return setStarterTrue= '#ff0d00', setMainTrue = '#808080', setDessertTrue = '#808080'
          
        }} title = 'Starters' color={setStarterTrue}></Button>

      <Button onPress={() => {
          setMainOption(true);
          setDessertOption(false);
          setStarterOption(false);
           return setStarterTrue= '#808080', setMainTrue = '#ff0d00', setDessertTrue = '#808080'
          
        }} title = 'Main' color={setMainTrue}></Button>
      <Button onPress={() => {
          setMainOption(false);
          setDessertOption(true);
          setStarterOption(false);
          return setStarterTrue= '#808080', setMainTrue = '#808080', setDessertTrue = '#ff0d00'
          
        }} title = 'Dessert' color={setDessertTrue}></Button>


      <ThemedText>Price :</ThemedText>
      <TextInput style={styles.input}></TextInput>
      <Button title='Create menu item'></Button>
  
      
    </ParallaxScrollView>
    
  );
  
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
});




