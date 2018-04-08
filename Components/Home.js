import React, { Component } from 'react'
import styles from '../css/Home'
import {
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
          points: 0
        },
        {
          name: 'Ali',
          points: 0
        },
        {
          name: 'Emmy',
          points: 0
        },
        {
          name: 'Wade',
          points: 0
        }
      ],
      columns: 4
    }
  }

  columns = () => {
    const col = []
    for (let i = 0; i < this.state.columns; i++) {
      col.push(<TextInput key={i}
                          textAlign={'center'}
                          style={
                            i === 0 ? [styles.points, styles.firstColumn] :
                            i === this.state.colums + 1 ? [styles.points, styles.lastColumn] :
                            styles.points
                          }>val</TextInput>)
    }
    return <View style={styles.pointContainer}>{ col }</View>
  }

  columnsTop = () => {
    const col = []
    for (let i = 0; i < this.state.columns; i++) {
      col.push(<TextInput key={i}
                          textAlign={'center'}
                          style={
                            i === 0 ? [styles.points, styles.firstColumn] :
                            styles.points
                          }>val</TextInput>)
    }
    return <View style={styles.pointContainer}>{ col }</View>
  }

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
                    this.columns()
                  }
                </View>
              )
            })
          }
      </View>
    )
  }
}
