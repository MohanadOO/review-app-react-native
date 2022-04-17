import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import About from '../screens/About'

const Stack = createStackNavigator()

export default function Navigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='About'
        component={About}
        options={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'coral',
            height: 30,
          },
        }}
      />
    </Stack.Navigator>
  )
}
