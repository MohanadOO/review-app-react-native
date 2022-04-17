import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import HomeStack from './HomeStack'
import AboutStack from './AboutStack'

const Drawer = createDrawerNavigator()

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='HomeStack'>
        <Drawer.Group>
          <Drawer.Screen
            name='HomeStack'
            component={HomeStack}
            options={{ title: 'Home' }}
          />
          <Drawer.Screen
            name='About'
            component={AboutStack}
            options={{ title: 'About' }}
          />
        </Drawer.Group>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
