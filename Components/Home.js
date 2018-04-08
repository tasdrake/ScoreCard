import React, { Component } from 'react'
import styles from '../css/Home'
import {
    Text,
    View,
    TextInput
} from 'react-native'

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      players: [
        {
          name: 'Tas',
          points: []
        },
        {
          name: 'Ali',
          points: []
        },
        {
          name: 'Emmy',
          points: []
        },
        {
          name: 'Wade',
          points: []
        }
      ],
      columns: 4
    }
  }

  total = (playerIdx, i) => {

  }

  columns = (playerIdx) => {
    const col = []
    for (let i = 0; i < this.state.columns + 1; i++) {
      // console.log(i === this.state.columns)
      if (i === 0) {
        col.push(<TextInput key={i}
                            textAlign={'center'}
                            style={[styles.points, styles.firstColumn]}
                            onChange={ this.total(playerIdx, i) }></TextInput>)
      } else if (i === this.state.columns) {
        col.push(
          <View key={i} textAlign={'center'} style={[styles.points, styles.lastColumn]}>
            <Text>
              {
                this.state.players[playerIdx].points.reduce((a, b) => {
                  if (isNaN(b)) return a + 0
                  return a + b
                }, 0)
              }
            </Text>
          </View>)
      } else {
        col.push(<TextInput key={i}
                            textAlign={'center'}
                            style={styles.points}
                            onChange={ this.total(playerIdx, i) }></TextInput>)
      }
    }
    return <View style={styles.pointContainer}>{ col }</View>
  }

  // columnsTop = () => {
  //   const col = []
  //   for (let i = 0; i < this.state.columns; i++) {
  //     col.push(<TextInput key={i}
  //                         textAlign={'center'}
  //                         style={
  //                           i === 0 ? [styles.points, styles.firstColumn] :
  //                           styles.points
  //                         }>val</TextInput>)
  //   }
  //   return <View style={styles.pointContainer}>{ col }</View>
  // }

  render() {
    const nameWidth = 75
    const pointWidth = 50
    const rowWidth = nameWidth + pointWidth * (this.state.columns - 1)
    return (
        <View style={styles.container}>
          {/* <View style={[styles.row, styles.info]}>
            <Text style={styles.name}>Name</Text>
            {
              this.columnsTop()// this.state.columns.map((e, i) => <Text key={i}></Text>)
            }
          </View> */}
          {
            this.state.players.map((e, i) => {
              return (
                <View key={i}
                      style={
                        i === 0 ? [styles.row, styles.firstRow, { width: rowWidth }] :
                        i === this.state.players.length - 1 ? [styles.row, styles.lastRow, { width: rowWidth }] :
                        [styles.row, { width: rowWidth }]
                      }>
                  <TextInput style={styles.name}>{this.state.players[i].name}</TextInput>
                  {
                    this.columns(i)
                  }
                </View>
              )
            })
          }
      </View>
    )
  }
}
