import React, { Component } from 'react'
import styles from '../css/ScoreCard'
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    AsyncStorage,
    Alert
} from 'react-native'

type Props = {};
export default class ScoreCard extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            players: [
                // {
                //     name: 'Tas',
                //     points: [],
                //     total: 0,
                // },
                // {
                //     name: 'Ali',
                //     points: [],
                //     total: 0,
                // },
                // {
                //     name: 'Emmy',
                //     points: [],
                //     total: 0,
                // },
                // {
                //     name: 'Wade',
                //     points: [],
                //     total: 0,
                // }
                {
                    name: '',
                    points: [],
                    total: 0,
                }
            ],
            // columns: 4,
            columns: 1,
        }
        this.state.players.forEach(e => {
            for (let i = 0; i < this.state.columns; i++) {
                e.points.push('')
            }
        })
    }
  
    loadPreviousGame = async () => {
        let players = await AsyncStorage.getItem('activeGame')
        players = JSON.parse(players)
        this.setState({ players })
    }

    total = async (playerIdx, i, point) => {
        const players = this.state.players
        if (!point.length && players[playerIdx].points[i]) {
            players[playerIdx].points[i] = ''
        } else if (typeof Number(point) === 'number' && !isNaN(Number(point))) {
            players[playerIdx].points[i] = point
        }
        players[playerIdx].total = players[playerIdx].points.reduce((a, b) => {
            a = Number(a)
            b = Number(b)
            if (isNaN(a) && isNaN(b)) return 0 + 0
            if (isNaN(b)) return a + 0
            if (isNaN(a)) return 0 + b
            return a + b
        }, 0)
        this.setState({ players })
        this.setStorage()
    }
    
    setStorage = () => {
        AsyncStorage.setItem('activeGame', JSON.stringify(this.state.players))
    }

    columns = (playerIdx) => {
        const col = []
        for (let i = 0; i < this.state.columns + 1; i++) {
            if (i === 0) {
                col.push(<TextInput key={ i }
                                    keyboardType = 'numeric'
                                    textAlign={ 'center' }
                                    style={ [styles.points, styles.firstColumn] }
                                    onChangeText={ (point) => this.total(playerIdx, i, point) }
                                    value={ this.state.players[playerIdx].points[i] }></TextInput>)
            } else if (i === this.state.columns) {
                col.push(
                    <View key={ i } textAlign={ 'center' } style={ [styles.points, styles.lastColumn] }>
                        <Text>
                            { this.state.players[playerIdx].total }
                        </Text>
                    </View>)
            } else {
                col.push(<TextInput key={ i }
                                    keyboardType = 'numeric'
                                    textAlign={ 'center' }
                                    style={ styles.points }
                                    onChangeText={ (point) => this.total(playerIdx, i, point) }
                                    value={ this.state.players[playerIdx].points[i] }></TextInput>)
            }
        }
        return <View style={ styles.pointContainer }>{ col }</View>
    }

    columnsTop = () => {
        const col = []
        for (let i = 0; i < this.state.columns + 1; i++) {
            if (i === 0) {
                col.push(<TextInput key={ i }
                                    textAlign={ 'center' }
                                    style={ [styles.points, styles.firstColumn] }></TextInput>)
            } else if (i === this.state.columns) {
                col.push(
                    <View key={ i } textAlign={ 'center' } style={ [styles.points, styles.lastColumn] }>
                        <Text>Total</Text>
                    </View>
                )
            } else {
                col.push(<TextInput key={ i }
                                    textAlign={ 'center' }
                                    style={ [styles.points, styles.columnHeader] }></TextInput>)
            }
        }
        return <View style={ styles.pointContainer }>{ col }</View>
    }

    addPlayer = () => {
        const players = this.state.players
        const newPlayer = {
            name:'',
            points: [],
            total: 0
        }
        for (let i = 0; i < this.state.columns; i++) {
            newPlayer.points.push('')
        }
        players.push(newPlayer)
        this.setState({ players })
    }

    updatePlayer = (player, i) => {
        const players = this.state.players
        players[i].name = player
        this.setState({ players })
    }
    
    addColumn = () => {
        let columns = this.state.columns
        columns++
        this.setState({ columns })
    }
    
    reset = () => {
        Alert.alert(
            'Reset Score Card',
            'Are you sure you want to reset the score card?',
            [
                { text: 'OK', onPress: () => this.clearStateAndStorage() },
                { text: 'Cancel' },
            ],
        )
    }
    
    clearStateAndStorage = () => {
        this.setState({ players: [{ name: '', points: 0, total: 0 }], columns: 4 })
        this.setStorage()
    }

    render() {
        const nameWidth = 75
        const pointWidth = 50
        const rowWidth = nameWidth + pointWidth * this.state.columns + pointWidth
        const maxHeight =  (this.state.players.length + 1) * 30

        return (
            <View style={ styles.container }>
                <View style={{ height: maxHeight }}>
                    <ScrollView contentContainerStyle={ styles.cardContainer } horizontal={ true } >
                        <View style={ [styles.row, styles.info, { minWidth: rowWidth, maxWidth: rowWidth }] }>
                            <TextInput style={ styles.name } editable={ false } selectTextOnFocus={ false }></TextInput>
                            { this.columnsTop() }
                        </View>
                        
                        {
                            this.state.players.map((e, i) => {
                                let style
                                if (i === 0) {
                                    style = [styles.row, styles.firstRow, { minWidth: rowWidth, maxWidth: rowWidth }]
                                }
                                else if (i === this.state.players.lentgh - 1) {
                                    style = [styles.row, styles.lastRow, { minWidth: rowWidth, maxWidth: rowWidth }]
                                }
                                else {
                                    style = [styles.row, { minWidth: rowWidth, maxWidth: rowWidth }]
                                }
                                return (
                                    <View key={ i } style={ style }>
                                        <TextInput style={ styles.name } onChangeText={ (player) => this.updatePlayer(player, i) }>
                                            { this.state.players[i].name }
                                        </TextInput>
                                        { this.columns(i) }
                                    </View>
                                )
                            })
                        }
                    </ScrollView>
                </View>
                
                <View style={ styles.centerButtons }>
                    <View style={ styles.buttonContainer }>
                        <TouchableOpacity onPress={ this.addPlayer } style={ styles.button }>
                            <Text>Add a Player</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ this.addColumn } style={ styles.button }>
                            <Text>Add a Column</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={ styles.buttonContainer }>
                        <TouchableOpacity onPress={ this.loadPreviousGame } style={ styles.button }>
                            <Text>Load Last Game</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={ this.reset } style={ styles.button }>
                            <Text>Reset</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
