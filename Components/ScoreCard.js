import React, { Component } from 'react'
import styles from '../css/ScoreCard'
import {
    Text,
    View,
    TextInput,
    ScrollView,
    AsyncStorage,
    StatusBar
} from 'react-native'
import navigationOptions from '../config/navigationOptions'
import Header from './Header'
import Row from './Row'
import Actions from './Actions'

// import StatusBar from 'react-navigation'

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
            columns: [
                // ''
                12,
                11,
                10,
                9,
                8,
                7,
                6,
                5,
                4,
                3,
                2,
                1,
                0
            ]
        }
        this.state.players.forEach(e => {
            for (let i = 0; i < this.state.columns; i++) {
                e.points.push('')
            }
        })
    }
    
    static navigationOptions = navigationOptions
  
    loadPreviousGame = async () => {
        let game = await AsyncStorage.getItem('activeGame')
        game = JSON.parse(game)
        if (!game) {
            game = { players: [{ name: '', points: 0, total: 0 }], columns: [''] }
        }
        this.setState({ ...game })
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
        AsyncStorage.setItem('activeGame', JSON.stringify(this.state))
    }

    columns = (playerIdx) => {
        const col = []
        for (let i = 0; i < this.state.columns.length + 1; i++) {
            if (i === 0) {
                col.push(<TextInput key={ i }
                                    keyboardType = 'numeric'
                                    textAlign={ 'center' }
                                    style={ [styles.points, styles.firstColumn, styles.yellowText] }
                                    onChangeText={ (point) => this.total(playerIdx, i, point) }
                                    value={ this.state.players[playerIdx].points[i] }></TextInput>)
            } else if (i === this.state.columns.length) {
                col.push(
                    <View key={ i } textAlign={ 'center' } style={ [styles.points, styles.lastColumn] }>
                        <Text style={ styles.yellowText }>
                            { this.state.players[playerIdx].total }
                        </Text>
                    </View>)
            } else {
                col.push(<TextInput key={ i }
                                    keyboardType = 'numeric'
                                    textAlign={ 'center' }
                                    style={ [styles.points, styles.yellowText] }
                                    onChangeText={ (point) => this.total(playerIdx, i, point) }
                                    value={ this.state.players[playerIdx].points[i] }></TextInput>)
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
        this.setStorage()
    }
    
    addColumn = () => {
        const columns = this.state.columns
        columns.push('')
        this.setState({ columns })
    }
    
    clearStateAndStorage = () => {
        AsyncStorage.clear()
        this.setState({ players: [{ name: '', points: 0, total: 0 }], columns: [''] })
        console.log(this.state);
        this.setStorage()
    }
    
    updateColumn = (i, column) => {
        const columns = this.state.columns
        columns[i] = column
        this.setState({ columns })
        this.setStorage()
    }
    
    style = (i, width) => {
        if (i === 0) {
            return [styles.row, styles.firstRow, { minWidth: width, maxWidth: width }]
        }
        else if (i === this.state.players.length - 1) {
            return [styles.row, styles.lastRow, { minWidth: width, maxWidth: width }]
        }
        else {
            return [styles.row, { minWidth: width, maxWidth: width }]
        }
    }

    render() {
        const nameWidth = 75
        const pointWidth = 50
        const rowWidth = nameWidth + pointWidth * this.state.columns.length + pointWidth
        const maxHeight =  (this.state.players.length + 1) * 30

        return (
            <View style={ styles.container }>
                <StatusBar barStyle='light-content' translucent={false} />
                <View style={{ height: maxHeight }}>
                    <ScrollView 
                        horizontal={ true } >
                        <View style={ styles.cardContainer }>
                            <Header columns={ this.state.columns } 
                                    rowWidth={ rowWidth } 
                                    updateColumn={ this.updateColumn }/>
                            
                            {
                                this.state.players.map((e, i) => (
                                    <Row key={ i } 
                                         i={ i }
                                         updateColumn={ this.updateColumn } 
                                         total={ this.total }
                                         updatePlayer={ this.updatePlayer }
                                         player={ this.state.players[i] }
                                         style={ this.style(i, rowWidth) }
                                         columns={ this.state.columns }/>
                                ))
                            }
                        </View>
                    </ScrollView>
                </View>
                <Actions setState={ this.setState }
                         clearStateAndStorage={ this.clearStateAndStorage }
                         loadPreviousGame={ this.loadPreviousGame }
                         addColumn={ this.addColumn }
                         addPlayer={ this.addPlayer }/>
            </View>
        )
    }
}
