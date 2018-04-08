import React, { Component } from 'react'
import styles from '../css/ScoreCard'
import {
    Text,
    View,
    TextInput
} from 'react-native'

type Props = {};
export default class ScoreCard extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      players: [
        {
          name: 'Tas',
          points: [],
          total: 0,
        },
        {
          name: 'Ali',
          points: [],
          total: 0,
        },
        {
          name: 'Emmy',
          points: [],
          total: 0,
        },
        {
          name: 'Wade',
          points: [],
          total: 0,
        }
      ],
      columns: 4
    }
    this.state.players.forEach(e => {
      for (let i = 0; i < this.state.columns; i++) {
        e.points.push('')
      }
    })
  }

  total = (playerIdx, i, point) => {
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
  }

  columns = (playerIdx) => {
    const col = []
    for (let i = 0; i < this.state.columns + 1; i++) {
      if (i === 0) {
        col.push(<TextInput key={i}
                            keyboardType = 'numeric'
                            textAlign={'center'}
                            style={[styles.points, styles.firstColumn]}
                            onChangeText={ (point) => this.total(playerIdx, i, point) }
                            value={ this.state.players[playerIdx].points[i]}></TextInput>)
      } else if (i === this.state.columns) {
        col.push(
          <View key={i} textAlign={'center'} style={[styles.points, styles.lastColumn]}>
            <Text>
              { this.state.players[playerIdx].total }
            </Text>
          </View>)
      } else {
        col.push(<TextInput key={i}
                            keyboardType = 'numeric'
                            textAlign={'center'}
                            style={styles.points}
                            onChangeText={ (point) => this.total(playerIdx, i, point) }
                            value={ this.state.players[playerIdx].points[i]}></TextInput>)
      }
    }
    return <View style={styles.pointContainer}>{ col }</View>
  }

  columnsTop = () => {
    const col = []
    for (let i = 0; i < this.state.columns + 1; i++) {
      if (i === this.state.columns) {
        col.push(
          <View key={i} textAlign={'center'} style={[styles.points, styles.lastColumn]}>
            <Text>Total</Text>
          </View>
        )
      } else {
        col.push(<TextInput key={i}
                            keyboardType = 'numeric'
                            textAlign={'center'}
                            style={styles.points}>col</TextInput>)
      }
    }
    return <View style={styles.pointContainer}>{ col }</View>
  }

  render() {
    const nameWidth = 75
    const pointWidth = 100
    const rowWidth = nameWidth + pointWidth * (this.state.columns - 1)
    return (
        <View style={styles.container}>
          <View style={[styles.row, styles.info, { width: rowWidth }]}>
            {/* set width to styles.name.width - 1 */}
            <Text style={[styles.name, {width: 74}]}></Text>
            {
              this.columnsTop()
            }
          </View>
          {
            this.state.players.map((e, i) => {
              let style
              if (i === 0) {
                style = [styles.row, styles.firstRow, { width: rowWidth }]
              }
              else if (i === this.state.players.lentgh - 1) {
                style = [styles.row, styles.lastRow, { width: rowWidth }]
              }
              else {
                style = [styles.row, { width: rowWidth }]
              }
              return (
                <View key={i} style={style}>
                  <TextInput style={styles.name}>{this.state.players[i].name}</TextInput>
                  { this.columns(i)}
                </View>
              )
            })
          }
      </View>
    )
  }
}
