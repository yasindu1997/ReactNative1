import { View, Text } from 'react-native'
import React from 'react'
import Chat from './Chat';
import Contact from './Contact';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Chat" component={Chat} />
    <Drawer.Screen name="Contact" component={Contact} />
  </Drawer.Navigator>
  )
}