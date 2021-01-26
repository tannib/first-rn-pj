import React, { useState, useMemo, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import MainTabScreen from './screens/MainTabScreen'
import DrawerContent from './screens/DrawerContent'
import RootStackScreen from './screens/RootStackScreen'
import { View, ActivityIndicator } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import * as actionTypes from './store/actions/actionTypes'

const Drawer = createDrawerNavigator()

const App = () => {
  const isLoading = useSelector((state) => state.isLoading)
  const userName = useSelector((state) => state.userName)
  const userToken = useSelector((state) => state.userToken)

  const dispatch = useDispatch()

  // useEffect(() => {
  //   setTimeout(() => {
  //     dispatch({
  //       type: actionTypes.RETRIEVE_TOKEN,
  //       payload: { token: 'nk' },
  //     })
  //   }, 2000)
  // }, [])

  // if (isLoading) {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <ActivityIndicator size='large' />
  //     </View>
  //   )
  // }

  return (
    <NavigationContainer>
      {userToken == null ? (
        <RootStackScreen />
      ) : (
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
        >
          <Drawer.Screen name='HomeDrawer' component={MainTabScreen} />
        </Drawer.Navigator>
      )}
    </NavigationContainer>
  )
}

export default App
