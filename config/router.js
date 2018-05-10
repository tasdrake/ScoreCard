import { StackNavigator } from 'react-navigation'
import ScoreCard from '../Components/ScoreCard'

export const Root = StackNavigator({
    ScoreCard: {
        screen: ScoreCard
    }
})
