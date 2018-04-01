import { StackNavigator } from 'react-navigation'
import Home from '../Components/Home'

export const Root = StackNavigator({
  Home: {
    screen: Home
  }
})
