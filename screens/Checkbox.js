import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

const CheckBox = () => {
  return (
    <View>
      <TouchableOpacity>
        <Icon size={20} name='check' />
      </TouchableOpacity>
    </View>
  )
}

export default CheckBox
