import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { DevicePage } from '../screens/DevicePage'
import { AddDevice } from '../screens/AddDevice'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen
        name="home"
        component={Home}
      />

      <Screen
        name="addDevice"
        component={AddDevice}
      />

      <Screen
        name="device"
        component={DevicePage}
      />

    </Navigator>
  )
}

