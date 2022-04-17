import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import Navigator from './routes/Drawer'

export default function App() {
  let [fontsLoaded] = useFonts({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return <Navigator />
}
