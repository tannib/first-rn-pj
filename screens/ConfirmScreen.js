import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

const ConfirmScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ti abbiamo inviato una mail di conferma</Text>
      <View style={styles.button}>
        <TouchableOpacity
          style={styles.signIn}
          onPress={() => navigation.navigate('SignInScreen')}
        >
          <LinearGradient style={styles.signIn} colors={['#08d4c4', '#01ab9d']}>
            <Text style={styles.textSign}>Vai al login</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    marginTop: 20,
    paddingHorizontal: 50,
    width: '100%',
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

export default ConfirmScreen
