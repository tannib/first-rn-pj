import React, { useState } from 'react'
import {
  View,
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Platform,
  TextInput,
  StatusBar,
  Alert,
} from 'react-native'

import * as Animatable from 'react-native-animatable'
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { useSelector, useDispatch } from 'react-redux'
import { signIn } from '../store/actions/action'
import Users from '../user'

const SignInScreen = ({ navigation }) => {
  const [data, setData] = useState({
    mail: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
  })

  const dispatch = useDispatch()

  const onSignIn = (username, password) => {
    const foundUser = Users.filter((user) => {
      return username == user.email && password == user.password
    })

    if (foundUser.length == 0) {
      Alert.alert('Login non valido', 'Mail o password sbagliate.', [
        { text: 'Riprova' },
      ])
      return
    }

    return dispatch(signIn(foundUser))
  }

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        mail: val,
        check_textInputChange: true,
      })
    } else {
      setData({
        ...data,
        mail: '',
        check_textInputChange: false,
      })
    }
  }

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    })
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    })
  }

  const checkUserAndPwd = () => {
    return navigation.navigate('SignUpScreen')
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle='light-content' />
      <View style={styles.header}>
        <Text style={styles.text_header}>Benvenuto!</Text>
      </View>
      <Animatable.View animation='fadeInUpBig' style={styles.footer}>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name='user-o' color='#05375a' size={20} />
          <TextInput
            placeholder='Inserisci la tua mail'
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Feather name='check-circle' color='green' size={20} />
          ) : null}
        </View>

        {/* {data.isValidUser ? null : (
          <Text style={styles.errorMsg}>Username incorrect</Text>
        )} */}

        <Text style={[styles.text_footer, { marginTop: 35 }]}>Password</Text>
        <View style={styles.action}>
          <TouchableOpacity onPress={updateSecureTextEntry}>
            <Feather name='lock' color='grey' size={20} />
          </TouchableOpacity>
          <TextInput
            placeholder='Inserisci la tua password'
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize='none'
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name='eye-off' color='grey' size={20} />
            ) : (
              <Feather name='eye' color='grey' size={20} />
            )}
          </TouchableOpacity>
        </View>

        {/* {data.isValidPassword ? null : (
          <Text style={styles.errorMsg}>Password incorrect</Text>
        )} */}

        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => onSignIn(data.mail, data.password)}
          >
            <LinearGradient
              style={styles.signIn}
              colors={['#08d4c4', '#01ab9d']}
            >
              <Text style={styles.textSign}>Entra</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpScreen')}
            style={[
              styles.signIn,
              { borderColor: '#009387', borderWidth: 1, marginTop: 15 },
            ]}
          >
            <Text style={[styles.textSign, { color: '#009387' }]}>
              Registrati
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
