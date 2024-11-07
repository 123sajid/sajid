/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import idb from 'idb';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './android/app/src/Components/Home';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import Collection from './android/app/src/Components/Collection';
import Promotion from './android/app/src/Components/Promotion';
import Favourite from './android/app/src/Components/Favourite';
import ClinicPlus from './android/app/src/Components/ClinicPlus';
import Sunsilk from './android/app/src/Components/Sunsilk';
import Dove from './android/app/src/Components/Dove';
import Himalaya from './android/app/src/Components/Himalaya';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Voice from './android/app/src/Components/Voice';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Tabb = createMaterialTopTabNavigator();

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer backgroundColor={"#191921"} style={{backgroundColor:'#191921'}}>
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: '#424453',
            // borderTopWidth: 1,

            height: 90,
          },
        }}
        // tabBarPosition="top"
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon
                name="home"
                size={24}
                color={color} // Use the dynamic color provided by tabBarIcon
                style={{marginBottom: -3}}
              />
            ),
            tabBarStyle: {
              backgroundColor: '#424453', // Set the background color of the tab
              height: 70,
              borderRadius: 50,
              marginBottom: 10,
              // Set the border color
            },
            tabBarLabelStyle: {
              fontSize: 12, // Adjust the font size of the tab label
              fontWeight: 'bold', // Example: Set the font weight to bold
            },
            tabBarActiveTintColor: 'white', // Set the active tab icon color
            tabBarInactiveTintColor: 'gray',
            // Set the inactive tab icon color
          }}
        />
        <Tab.Screen
          name="Collection"
          component={Collection}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon1
                name="glass-martini-alt"
                size={20}
                color={color} // Use the dynamic color provided by tabBarIcon
                style={{marginBottom: -3}} // Example: Add a negative marginBottom
              />
            ),
            tabBarStyle: {

              backgroundColor: '#424453', // Set the background color of the tab
              height: 70,
              borderRadius: 50,
              marginBottom: 30, // Set the border color
            },
            tabBarLabelStyle: {
              fontSize: 12, // Adjust the font size of the tab label
              fontWeight: 'bold', // Example: Set the font weight to bold
            },
            tabBarActiveTintColor: 'white', // Set the active tab icon color
            tabBarInactiveTintColor: 'gray', // Set the inactive tab icon color
          }}
        />
        <Tab.Screen
          name="Promotion"
          component={Promotion}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon
                name="chat"
                size={24}
                color={color} // Use the dynamic color provided by tabBarIcon
                style={{marginBottom: -3}} // Example: Add a negative marginBottom
              />
            ),
            tabBarStyle: {
              backgroundColor: '#424453', // Set the background color of the tab
              // Add a border on top of the tab

              height: 70, // Set the border color
            },
            tabBarLabelStyle: {
              fontSize: 12, // Adjust the font size of the tab label
              fontWeight: 'bold', // Example: Set the font weight to bold
            },
            tabBarActiveTintColor: 'white', // Set the active tab icon color
            tabBarInactiveTintColor: 'gray', // Set the inactive tab icon color
          }}
        />

        <Tab.Screen
          name="Favourite"
          component={Favourite}
          options={{
            headerShown: false,
            tabBarIcon: ({color}) => (
              <Icon
                name="heart-outlined"
                size={24}
                color={color} // Use the dynamic color provided by tabBarIcon
                style={{marginBottom: -3}} // Example: Add a negative marginBottom
              />
            ),
            tabBarStyle: {
              backgroundColor: '#424453', // Set the background color of the tab

              height: 70, // Set the border color
            },
            tabBarLabelStyle: {
              fontSize: 12, // Adjust the font size of the tab label
              fontWeight: 'bold', // Example: Set the font weight to bold
            },
            tabBarActiveTintColor: 'white', // Set the active tab icon color
            tabBarInactiveTintColor: 'gray', // Set the inactive tab icon color
          }}
        />
      </Tab.Navigator>
      <View style={{backgroundColor:}}>

      </View>
      {/* <Stack.Screen name="ClinicPlus" component={ClinicPlus} />
      <Stack.Screen name="Sunsilk" component={Sunsilk} />
      <Stack.Screen name="Dove" component={Dove} />
      <Stack.Screen name="Himalaya" component={Himalaya} /> */}
    </NavigationContainer>
  );
};

// const hmmm = () => {
//   return(
// <Tabb.Navigator>
// <Tabb.Screen name="ClinicPlus" component={ClinicPlus} />
//       <Tabb.Screen name="Sunsilk" component={Sunsilk} />
//       <Tabb.Screen name="Dove" component={Dove} />
//       <Tabb.Screen name="Himalaya" component={Himalaya} />
//     </Tabb.Navigator>
//   );

// };

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
