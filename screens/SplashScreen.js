import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native'

import * as Animatable from 'react-native-animatable'
import { LinearGradient } from 'expo-linear-gradient'
import MaterialIcons from 'react-native-vector-icons'

const SplashScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Animatable.Image
        animation='bounceIn'
        source={require('../assets/logo_2.png')}
        style={styles.logo}
        resizeMode='stretch'
      />
    </View>
    <Animatable.View style={styles.footer} animation='fadeInUpBig'>
      <Text style={styles.title}>Apple Education</Text>
      <Text style={styles.text}>Non perderti neanche un evento</Text>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <LinearGradient colors={['#000', '#05375A']} style={styles.signIn}>
            <Text style={styles.textSign}>Entra</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </Animatable.View>
  </View>
)

export default SplashScreen

const { height } = Dimensions.get('screen')
const height_logo = height * 0.28

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375A',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 25,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
  },
})
