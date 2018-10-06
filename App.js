import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator, createSwitchNavigator} from 'react-navigation';
import {Login,Home,Details,MyBooks,SendMessage,Messages}from './screens/index'


const Tabs = createBottomTabNavigator({  
  home:Home,
  details:Details,  
  collection:MyBooks,
  messages:Messages,
  
},
//{
//navigationOptions: ({ navigation }) => ({
  //    tabBarIcon: ({ focused, tintColor }) => {
    //    const { routeName } = navigation.state;
      //  let iconName;
        //if (routeName === 'Home') {
   //       iconName = `ios-information-circle${focused ? '' : '-outline'}`;
     //   } else if (routeName === 'Settings') {
       //   iconName = `ios-options${focused ? '' : '-outline'}`;
        //}

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
      //  return <Ionicons name={iconName} size={25} color={tintColor} />;
     // },
    //})
   // },  
);



const MainStack = createSwitchNavigator({
  intro: Login,
  main: Tabs


})
export default class App extends React.Component {  
  render() {
        
    return  <MainStack/>;
      
    
  }
}