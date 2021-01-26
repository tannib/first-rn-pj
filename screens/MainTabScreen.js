import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/Ionicons'
import IconMCI from 'react-native-vector-icons/MaterialCommunityIcons'
import HomeScreen from './HomeScreen'
import EventsScreen from './EventsScreen'
import NewsScreen from './NewsScreen'
import ProfileScreen from './ProfileScreen'
import EventDetailsScreen from './EventDetailsScreen'
import SignUpToEventScreen from './SignUpToEventScreen'
import ConfirmEventScreen from './ConfirmEventScreen'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'

const Tab = createMaterialBottomTabNavigator()

const HomeStack = createStackNavigator()
const EventsStack = createStackNavigator()
const NewsStack = createStackNavigator()

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <HomeStack.Screen
      name='About'
      component={HomeScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name='ios-menu'
            size={25}
            backgroundColor='#f4511e'
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </HomeStack.Navigator>
)

const EventsStackScreen = ({ navigation }) => (
  <EventsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#1f65ff',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <EventsStack.Screen
      name='Events'
      component={EventsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name='ios-menu'
            size={25}
            backgroundColor='#1f65ff'
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
    <EventsStack.Screen name='EventDetails' component={EventDetailsScreen} />
    <EventsStack.Screen name='SignUpToEvent' component={SignUpToEventScreen} />
    <EventsStack.Screen name='ConfirmEvent' component={ConfirmEventScreen} />
  </EventsStack.Navigator>
)
const NewsStackScreen = ({ navigation }) => (
  <NewsStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#d02860',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <NewsStack.Screen
      name='News'
      component={NewsScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name='ios-menu'
            size={25}
            backgroundColor='#d02860'
            onPress={() => navigation.openDrawer()}
          ></Icon.Button>
        ),
      }}
    />
  </NewsStack.Navigator>
)

const mainTabScreen = () => {
  return (
    <Tab.Navigator initialRouteName='Events'>
      <Tab.Screen
        name='Events'
        component={EventsStackScreen}
        options={{
          tabBarLabel: 'Events',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name='ios-notifications' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='News'
        component={NewsStackScreen}
        options={{
          tabBarLabel: 'News',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name='ios-aperture' color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name='Home'
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'About',
          tabBarColor: '#f4511e',
          tabBarIcon: ({ color }) => (
            <IconMCI name='information-outline' color={color} size={26} />
          ),
        }}
      />

      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#695fad',
          tabBarIcon: ({ color }) => (
            <Icon name='ios-person' color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default mainTabScreen
