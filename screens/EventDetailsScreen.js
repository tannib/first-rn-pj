import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native'

const EventDetailsScreen = ({ route, navigation }) => {
  console.log(route)
  return (
    <View>
      <Text>{route.params.title}</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUpToEvent')}
        style={[
          styles.signIn,
          { borderColor: '#009387', borderWidth: 1, marginTop: 15 },
        ]}
      >
        <Text style={[styles.textSign, { color: '#009387' }]}>Registrati</Text>
      </TouchableOpacity>
    </View>
  )
}

export default EventDetailsScreen

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
