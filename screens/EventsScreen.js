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
import Events from '../events'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationContainer } from '@react-navigation/native'

const EventsScreen = ({ navigation }) => {
  return (
    <View style={{ backgroundColor: '#fff' }}>
      <View
        style={{
          width: '95%',
          height: 40,
          backgroundColor: '#fff',
          marginVertical: 15,
          marginHorizontal: 10,
          padding: 10,
          marginTop: 20,
          borderRadius: 5,
          flexDirection: 'row',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.5,
          shadowRadius: 2,
          elevation: 5,
        }}
      >
        <Icon name='magnify' color='#000' size={25} />
        <TextInput
          placeholder='Ricerca per eventi, località e aziende'
          placeholderTextColor='#000'
          autoCapitalize='none'
          onChangeText={() => console.log('hello')}
          style={{ color: '#fff', marginLeft: 10 }}
        />
      </View>
      <FlatList
        data={Events}
        style={{ marginBottom: 80 }}
        renderItem={(data) => {
          console.log(data.item)
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('EventDetails', data.item)}
            >
              <View
                style={{
                  backgroundColor: '#fff',
                  marginVertical: 5,
                  marginHorizontal: 10,
                  padding: 10,
                  flexDirection: 'row',
                  borderRadius: 10,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.5,
                  shadowRadius: 2,
                  elevation: 5,
                }}
              >
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                    marginRight: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      marginBottom: 5,
                      color: '#000',
                    }}
                  >
                    {data.item.title}
                  </Text>
                  <Image
                    source={{ uri: data.item.img }}
                    resizeMode='contain'
                    style={{
                      width: 80,
                      height: 80,
                      borderWidth: 2,
                      borderColor: '#1f65ff',
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 2,
                    marginLeft: 10,
                    justifyContent: 'space-evenly',
                  }}
                >
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* <Icon name='domain' size={25} style={{ color: 'black' }} /> */}
                    <Text
                      style={{
                        color: '#000',
                        marginLeft: 5,
                        fontWeight: 'bold',
                      }}
                    >
                      {data.item.planner}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* <Icon name='calendar' size={25} style={{ color: 'black' }} /> */}
                    <Text
                      style={{ color: '#000', marginLeft: 5, fontSize: 13 }}
                    >
                      {data.item.start_date}, {data.item.location}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    {/* <Icon name='text' size={25} style={{ color: 'white' }} /> */}
                    <Text style={{ color: '#000', marginLeft: 5 }}>
                      {data.item.description}
                    </Text>
                  </View>
                  {/* <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon
                    name='map-marker'
                    size={25}
                    style={{ color: 'white' }}
                  />
                  <Text style={{ color: 'black', marginLeft: 5 }}>
                    {data.item.location}
                  </Text> 
                </View> */}
                </View>
              </View>
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

export default EventsScreen
