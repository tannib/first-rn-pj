import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useSelector, useDispatch } from 'react-redux'
import { signOut } from '../store/actions/action'

const DrawerContent = (props) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  const dispatch = useDispatch()

  const onSignOut = () => dispatch(signOut())

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: 'row', marginTop: 15 }}>
              <Icon name='account-circle' size={50} />
              <View style={{ marginLeft: 15 }}>
                <Title style={styles.title}>Username</Title>
              </View>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name='calendar' color={color} size={size} />
            )}
            label='Events'
            onPress={() => {
              props.navigation.navigate('Events')
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon
                name='newspaper-variant-outline'
                color={color}
                size={size}
              />
            )}
            label='News'
            onPress={() => {
              props.navigation.navigate('News')
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name='information-outline' color={color} size={size} />
            )}
            label='About'
            onPress={() => {
              props.navigation.navigate('Home')
            }}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon name='account-circle' color={color} size={size} />
            )}
            label='Profile'
            onPress={() => {
              props.navigation.navigate('Profile')
            }}
          />
        </Drawer.Section>
        <Drawer.Section title='Preferences'>
          <TouchableRipple
            onPress={() => {
              toggleTheme()
            }}
          >
            <View style={styles.preference}>
              <Text>Dark Theme</Text>
              <View pointerEvents='none'>
                <Switch value={isDarkTheme} />
              </View>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name='exit-to-app' color={color} size={size} />
          )}
          label='Sign Out'
          onPress={onSignOut}
        />
      </Drawer.Section>
    </View>
  )
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    marginRight: 3,
    fontWeight: 'bold',
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
})

export default DrawerContent
