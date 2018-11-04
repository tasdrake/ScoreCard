import React, { Component } from 'react'
import styles from '../css/ScoreCard'
import {
    Text,
    View,
    TouchableOpacity,
    Alert,
} from 'react-native'

type Props = {};
export default class Actions extends Component<Props> {    
    reset = () => {
        Alert.alert(
            'Reset Score Card',
            'Are you sure you want to reset the score card?',
            [
                { text: 'OK', onPress: () => this.props.clearStateAndStorage() },
                { text: 'Cancel' },
            ],
        )
    }
    
    render() {
        return (
            <View style={ styles.centerButtons }>
                <View style={ styles.buttonContainer }>
                    <TouchableOpacity onPress={ this.props.addPlayer } style={ styles.button }>
                        <Text style={ styles.buttonText }>Add a Player</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ this.props.addColumn } style={ styles.button }>
                        <Text style={ styles.buttonText }>Add a Column</Text>
                    </TouchableOpacity>
                </View>
                <View style={ styles.buttonContainer }>
                    <TouchableOpacity onPress={ this.props.loadPreviousGame } style={ styles.button }>
                        <Text style={ styles.buttonText }>Load Last Game</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={ this.reset } style={ styles.button }>
                        <Text style={ styles.buttonText }>Reset</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
