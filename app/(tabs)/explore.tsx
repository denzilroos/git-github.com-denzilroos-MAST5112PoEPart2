import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, Image, Platform, Button, View, Pressable} from 'react-native';
import { Tabs } from 'expo-router';
import { useRouter } from 'expo-router';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { BottomTabBar, BottomTabNavigationProp } from '@react-navigation/bottom-tabs'
import React from 'react';
import {SafeAreaView, TextInput} from 'react-native';
import { startMapper } from 'react-native-reanimated';
import { useId, useState } from 'react';
import Select, { Props } from 'react-select';
import {Picker} from '@react-native-picker/picker';
import { Navigator, useNavigation } from 'expo-router';
import { NavigationRouteContext } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '.';



let setStarterTrue = '#ff0d00'
let setMainTrue = '#808080'
let setDessertTrue = '#808080'
let courseOption = 'Course option'

export default function TabTwoScreen({}) {

  const router = useRouter();


const [starterOption,setStarterOption] = useState(true) 
const [mainOption,setMainOption] = useState(true) 
const [dessertOption,setDessertOption] = useState(true) 
const [dishName, setDishName] = useState<string>('Dish name')
const [desciptName, setDescriptName] = useState('Dish description')
const [priceName, setPriceName] = useState('Price')
//const [courseOption, setCourseOption] = useState('course option')


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
});




