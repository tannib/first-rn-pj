import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import News from '../news'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const NewsScreen = () => {
  console.log(News)
  return (
    <View>
      <FlatList
        data={News}
        renderItem={(data) => {
          return (
            <View
              style={{
                backgroundColor: 'transparent',
                marginBottom: 5,
                padding: 10,
                borderBottomWidth: 2,
                borderColor: '#d02860',
              }}
            >
              <View>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    marginBottom: 5,
                  }}
                >
                  {data.item.title}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: 'transparent',
                }}
              >
                <Image
                  source={data.item.img}
                  style={{
                    width: 80,
                    height: 80,
                    borderWidth: 2,
                    borderColor: '#d02860',
                    flex: 1,
                  }}
                />
                <View
                  style={{
                    marginHorizontal: 10,
                    backgroundColor: 'transparent',
                    flex: 2,
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      marginTop: -5,
                      marginBottom: 5,
                    }}
                  >
                    <Icon
                      name='calendar'
                      size={20}
                      style={{ color: 'black' }}
                    />
                    <Text
                      style={{ color: 'black', marginLeft: 5, fontSize: 12 }}
                    >
                      {data.item.date}
                    </Text>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ color: 'black', marginLeft: 5 }}>
                      {data.item.description}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          )
        }}
      />
    </View>
  )
}

export default NewsScreen
