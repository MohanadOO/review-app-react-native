import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Card from '../shared/Card'
import { globalStyles } from '../styles/global'
import Star from '../assets/Star'

export default function ReviewDetails({ route }) {
  const { title, body, rating } = route.params
  let star = []
  for (let i = 0; i < rating; i++) {
    star.push(
      <View style={styles.ratingImg} key={i + 1}>
        <Star />
      </View>
    )
  }

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={styles.text}>{title}</Text>
        <Text style={styles.text}>{body}</Text>
        <View style={styles.rating}>
          <Text style={styles.text}>GameZone Rating:</Text>
          {star}
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
  },
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    marginTop: 20,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  text: {
    marginRight: 7,
  },
  ratingImg: {
    marginTop: 2,
  },
})
