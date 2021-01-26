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
import { LinearGradient } from 'expo-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const EventDetailsScreen = ({ route, navigation }) => {
  console.log(route)
  return (
    <View style={{ marginHorizontal: 20 }}>
      <Text style={styles.text_header}>{route.params.title}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',

          // marginHorizontal: 15,
        }}
      >
        <Icon name='map-marker' size={35} style={{ color: '#000' }} />
        <Text style={{ color: 'black', marginLeft: 5, fontSize: 20 }}>
          {route.params.location}
        </Text>
      </View>
      <Text> {route.params.start_date}</Text>
      <Text> {route.params.description}</Text>
      <View style={styles.button}>
        <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUpToEvent')}
          >
            <Text style={[styles.textSign, { color: '#fff' }]}>Registrati</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
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
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginVertical: 20,
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
