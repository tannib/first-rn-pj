import React, { useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  TextInput,
  StatusBar,
  ScrollView,
} from 'react-native'

import DateTimePicker from '@react-native-community/datetimepicker'
import * as Animatable from 'react-native-animatable'
import { LinearGradient } from 'expo-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/MaterialIcons'

const SignUpScreen = ({ navigation }) => {
  const [data, setData] = useState({
    name: '',
    lastName: '',
    date: new Date(),
    city: '',
    street: '',
    cap: '',
    checkMail: false,
    secureTextEntry: true,
    toggleCheckData: false,
    toggleCheckProfiling: false,
  })

  const updateName = (val) => {
    setData({
      ...data,
      name: val,
    })
  }

  const updateLastName = (val) => {
    setData({
      ...data,
      lastName: val,
    })
  }

  const updateCity = (val) => {
    setData({
      ...data,
      city: val,
    })
  }

  const updateStreet = (val) => {
    setData({
      ...data,
      street: val,
    })
  }

  const updateCap = (val) => {
    setData({
      ...data,
      cap: val,
    })
  }

  const dateChange = (e, selectedDate) => {
    const currentDate = selectedDate || data.date
    setData({
      ...data,
      date: currentDate,
    })
  }

  // const checkMail = (val) => {
  //   if (val.length !== 0) {
  //     setData({
  //       ...data,
  //       mail: val,
  //       checkMail: true,
  //     })
  //   } else {
  //     setData({
  //       ...data,
  //       mail: '',
  //       checkMail: false,
  //     })
  //   }
  // }

  // const handlePasswordChange = (val) => {
  //   setData({
  //     ...data,
  //     password: val,
  //   })
  // }

  // const handleConfirmPasswordChange = (val) => {
  //   setData({
  //     ...data,
  //     confirmPassword: val,
  //   })
  // }

  // const updateSecureTextEntry = () => {
  //   setData({
  //     ...data,
  //     secureTextEntry: !data.secureTextEntry,
  //   })
  // }

  const updateCheckData = () => {
    setData({
      ...data,
      toggleCheckData: !data.toggleCheckData,
    })
  }

  const updateCheckProfiling = () => {
    setData({
      ...data,
      toggleCheckProfiling: !data.toggleCheckProfiling,
    })
  }

  const submitRegister = () => {
    if (!data.name.trim()) {
      alert('È necessario inserire il nome')
      return
    }
    if (!data.lastName.trim()) {
      alert('È necessario inserire il cognome')
      return
    }
    if (!data.city.trim()) {
      alert('È necessario inserire la città')
      return
    }

    return navigation.navigate('ConfirmScreen')
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#009387' barStyle='light-content' />
      <View style={styles.header}>
        <Text style={styles.text_header}>Registrati</Text>
      </View>
      <Animatable.View animation='fadeInUpBig' style={styles.footer}>
        <ScrollView>
          <Text style={styles.text_footer}>Nome</Text>
          <View style={styles.action}>
            <FontAwesome name='user-o' color='#05375a' size={20} />
            <TextInput
              placeholder='Inserisci il tuo nome'
              style={styles.textInput}
              onChangeText={(val) => updateName(val)}
            />
          </View>

          {/* {data.emptyName ? (
            <Animatable.View animation='fadeInLeft' duration={500}>
              <Text style={styles.errorMsg}>
                È necessario inserire il nome.
              </Text>
            </Animatable.View>
          ) : null} */}

          <Text style={[styles.text_footer, { marginTop: 25 }]}>Cognome</Text>
          <View style={styles.action}>
            <FontAwesome name='user-o' color='#05375a' size={20} />
            <TextInput
              placeholder='Inserisci il tuo cognome'
              style={styles.textInput}
              onChangeText={(val) => updateLastName(val)}
            />
          </View>

          {/* {data.emptyLastName ? (
            <Animatable.View animation='fadeInLeft' duration={500}>
              <Text style={styles.errorMsg}>
                È necessario inserire il cognome.
              </Text>
            </Animatable.View>
          ) : null} */}

          <Text style={[styles.text_footer, { marginTop: 25 }]}>
            Data di Nascita
          </Text>
          <DateTimePicker
            style={[styles.action, { width: '80%' }]}
            value={data.date}
            mode='date'
            placeholder='Inserisci la tua data di nascita'
            format='YYYY-MM-DD'
            onChange={dateChange}
          />
          <Text style={[styles.text_footer, { marginTop: 25 }]}>Città</Text>
          <View style={styles.action}>
            <FontAwesome name='user-o' color='#05375a' size={20} />
            <TextInput
              placeholder='Inserisci la tua città'
              style={styles.textInput}
              onChangeText={(val) => updateCity(val)}
            />
          </View>
          <Text style={[styles.text_footer, { marginTop: 25 }]}>Indirizzo</Text>
          <View style={styles.action}>
            <FontAwesome name='user-o' color='#05375a' size={20} />
            <TextInput
              placeholder='Inserisci il tuo indirizzo'
              style={styles.textInput}
              onChangeText={(val) => updateStreet(val)}
            />
          </View>
          <Text style={[styles.text_footer, { marginTop: 25 }]}>CAP</Text>
          <View style={styles.action}>
            <FontAwesome name='user-o' color='#05375a' size={20} />
            <TextInput
              placeholder='Inserisci il tuo CAP'
              style={styles.textInput}
              onChangeText={(val) => updateCap(val)}
            />
          </View>
          {/* <Text style={[styles.text_footer, { marginTop: 25 }]}>Mail</Text>
          <View style={styles.action}>
            <FontAwesome name='user-o' color='#05375a' size={20} />
            <TextInput
              placeholder='Inserisci la tua mail'
              style={styles.textInput}
              autoCapitalize='none'
              onChangeText={(val) => checkMail(val)}
            />
            {data.checkMail ? (
              <Feather name='check-circle' color='green' size={20} />
            ) : null}
          </View> */}
          {/* <Text style={[styles.text_footer, { marginTop: 25 }]}>Password</Text>
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
          </View> */}
          {/* <Text style={[styles.text_footer, { marginTop: 25 }]}>
            Conferma la tua password
          </Text>
          <View style={styles.action}>
            <TouchableOpacity onPress={updateSecureTextEntry}>
              <Feather name='lock' color='grey' size={20} />
            </TouchableOpacity>
            <TextInput
              placeholder='Conferma la tua password'
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize='none'
              onChangeText={(val) => handleConfirmPasswordChange(val)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name='eye-off' color='grey' size={20} />
              ) : (
                <Feather name='eye' color='grey' size={20} />
              )}
            </TouchableOpacity>
          </View> */}

          <View
            style={{
              flexDirection: 'row',
              marginTop: 20,
              paddingBottom: 5,
            }}
          >
            <TouchableOpacity onPress={updateCheckData} style={styles.checkBox}>
              {data.toggleCheckData ? <Icon size={20} name='check' /> : null}
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 10,
                paddingTop: 3,
              }}
            >
              Consenso Trattamento Dati
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 10,
              paddingBottom: 5,
            }}
          >
            <TouchableOpacity
              onPress={updateCheckProfiling}
              style={styles.checkBox}
            >
              {data.toggleCheckProfiling ? (
                <Icon size={20} name='check' />
              ) : null}
            </TouchableOpacity>
            <Text
              style={{
                marginLeft: 10,
                paddingTop: 3,
              }}
            >
              Consenso Profilazione
            </Text>
          </View>

          <View style={styles.button}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}
            >
              <TouchableOpacity onPress={submitRegister}>
                <Text style={[styles.textSign, { color: '#fff' }]}>
                  Registrati
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 20,
  },
  footer: {
    flex: 10,
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
    marginTop: 20,
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
  checkBox: {
    borderWidth: 2,
    borderColor: '#000',
    width: 25,
    height: 25,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
    marginTop: 5,
  },
})
