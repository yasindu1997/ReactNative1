import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

const Chat = ({navigation}) => {
  return (
    <View>
    <Text>Chat</Text>

    <Button icon="camera" mode="contained" onPress={() => navigation.navigate('Login')}>

      Chat
    </Button>
  </View>
  )
}

export default Chat