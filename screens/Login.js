import { View, Text,StyleSheet} from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper';
import { Drawer } from 'react-native-paper';
import { FAB } from 'react-native-paper';
import { Button } from 'react-native-paper';


export default function App({navigation}) {

 const[email,setEmail] = useState('')

  return (
    <View>
  
  <TextInput
      label="Email"
      value={email}
      onChangeText={(data) =>{setEmail(data)}}
      
    />

    <Button icon="camera" mode="contained" onPress={() => console.log(email)}>
    Press me
  </Button>

  
  <Button icon="camera" mode="contained" onPress={() =>navigation.navigate('DrawerNav')}>
   Login Page
  </Button>

    </View>
  )
}

