import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  LogBox,
} from 'react-native'
import Events from '../events'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { NavigationContainer } from '@react-navigation/native'

const EventsScreen = ({ navigation }) => {
  const [search, setSearch] = useState('')

  const filterList = (list) => {
    return list.filter((listItem) => {
      return listItem.title.toLowerCase().includes(search.toLowerCase())
    })
  }

  const listFiltered = filterList(Events)

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
          onChangeText={(search) => setSearch(search)}
          style={{ color: '#000', marginLeft: 10 }}
        />
      </View>
      <FlatList
        data={listFiltered}
        style={{ marginBottom: 80 }}
        renderItem={(data) => {
          // console.log('DATA - LIST', data.item)

          let color

          if (data.item.category === 'edu') {
            color = 'orange'
          } else if (data.item.category === 'tech') {
            color = 'blue'
          }

          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('EventDetails', data.item)}
            >
              <View
                style={{
                  backgroundColor: '#fff',
                  marginVertical: 5,
                  marginHorizontal: 10,
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
                    borderRightWidth: 30,
                    borderColor: color,
                    borderBottomLeftRadius: 10,
                    borderTopLeftRadius: 10,
                  }}
                >
                  <Image
                    source={data.item.img}
                    resizeMode='contain'
                    style={{
                      width: 80,
                      height: 80,
                      borderWidth: 2,
                      borderColor: 'lightgrey',
                    }}
                  />
                </View>
                <View
                  style={{
                    flex: 2.5,
                    marginLeft: 10,
                    justifyContent: 'space-evenly',
                    alignItems: 'flex-start',
                    paddingVertical: 10,
                  }}
                >
                  <Text
                    style={{
                      color: '#de6043',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}
                  >
                    {data.item.date} | {data.item.start_time} -{' '}
                    {data.item.end_time}
                  </Text>

                  {/* <Icon name='domain' size={25} style={{ color: 'black' }} /> */}

                  {/* <Icon name='calendar' size={25} style={{ color: 'black' }} /> */}

                  <Text
                    style={{
                      fontSize: 25,
                      color: '#000',
                      fontWeight: 'bold',
                    }}
                  >
                    {data.item.title}
                  </Text>
                  <Text style={{ color: '#000', fontSize: 13 }}>
                    {data.item.city}, {data.item.address}
                  </Text>

                  {/* <Icon name='text' size={25} style={{ color: 'white' }} /> */}
                  {/* <Text style={{ color: '#000', marginLeft: 5 }}>
                      {data.item.description}
                    </Text> */}
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
