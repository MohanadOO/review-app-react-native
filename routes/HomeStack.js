import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'

const Stack = createStackNavigator()

export default function Navigator() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Group
        screenOptions={{
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'coral',
            height: 30,
          },
        }}
      >
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ title: 'Games List' }}
        />
        <Stack.Screen
          name='ReviewDetails'
          component={ReviewDetails}
          options={{
            title: 'Review Details',
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  )
}
