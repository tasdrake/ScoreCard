import React, { Component } from 'react'
import styles from '../css/ScoreCard'
import {
    Text,
    View,
    TextInput,
} from 'react-native'

type Props = {};
export default class Row extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            player: this.props.player,
            columns: this.props.columns,
        }
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.player !== prevState.player && nextProps.columns !== prevState.columns) {
            return { player: nextProps.player, columns: nextProps.columns }
        } else if (nextProps.player !== prevState.player) {
            return { player: nextProps.player }
        } else if (nextProps.columns !== prevState.columns) {
            return { columns: nextProps.columns }
        }
        
        return null
    }

    columns = (playerIdx) => {
        const col = []
        for (let i = 0; i < this.state.columns.length + 1; i++) {
            if (i === 0) {
                col.push(<TextInput key={ i }
                                    keyboardType = 'numeric'
                                    textAlign={ 'center' }
                                    style={ [styles.points, styles.firstColumn, styles.yellowText] }
                                    onChangeText={ (point) => this.props.total(playerIdx, i, point) }
                                    value={ this.state.player.points[i] }></TextInput>)
            } else if (i === this.state.columns.length) {
                col.push(
                    <View key={ i } textAlign={ 'center' } style={ [styles.points, styles.lastColumn] }>
                        <Text style={ styles.yellowText }>
                            { this.state.player.total }
                        </Text>
                    </View>)
            } else {
                col.push(<TextInput key={ i }
                                    keyboardType = 'numeric'
                                    textAlign={ 'center' }
                                    style={ [styles.points, styles.yellowText] }
                                    onChangeText={ (point) => this.props.total(playerIdx, i, point) }
                                    value={ this.state.player.points[i] }></TextInput>)
            }
        }
        return <View style={ styles.pointContainer }>{ col }</View>
    }


    render() {
        const i = this.props.i
        return (
            <View style={ this.props.style }>
                <TextInput style={ styles.name } onChangeText={ (player) => this.props.updatePlayer(player, i) }>
                    { this.state.player.name }
                </TextInput>
                { this.columns(i) }
            </View>

        )
    }
}
