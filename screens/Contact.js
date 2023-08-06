import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

export default function Contact({ navigation }) {



  return (
    <View>
      <Text>Contact</Text>

      <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Chat')}>

        Press me
      </Button>
    </View>
  )
}