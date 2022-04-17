import { useState } from 'react'
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { globalStyles } from '../styles/global'
import Card from '../shared/Card'
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './ReviewForm'

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [reviews, setReviews] = useState([
    { title: 'Minecraft', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Rocket League', rating: 4, body: 'lorem ipsum', key: '2' },
    {
      title: 'Red Dead Redemption 2',
      rating: 5,
      body: 'lorem ipsum',
      key: '3',
    },
    { title: 'Dark Souls 2', rating: 3, body: 'lorem ipsum', key: '4' },
    { title: 'Super Mario Galaxy', rating: 5, body: 'lorem ipsum', key: '5' },
    { title: 'The Witcher 3', rating: 5, body: 'lorem ipsum', key: '6' },
  ])

  function addToList(value) {
    setReviews((prevReview) => {
      return [
        ...prevReview,
        {
          ...value,
          rating: Number(value.rating),
          key: (prevReview.length + 1).toString(),
        },
      ]
    })
    setModalOpen(false)
  }

  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modalContent}>
            <MaterialIcons
              name='close'
              style={styles.modalClose}
              size={24}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addToList={addToList} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <MaterialIcons
        name='add'
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ReviewDetails', item)}
          >
            <Card>
              <Text style={globalStyles.title}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
})
