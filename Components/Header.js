import React, { Component } from 'react'
import styles from '../css/ScoreCard'
import {
    Text,
    View,
    TextInput,
} from 'react-native'

type Props = {};
export default class Header extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            columns: this.props.columns
        }
    }
    
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.columns !== prevState.columns) {
            return { columns: nextProps.columns }
        }
        return null
    }
    
    columnsTop = () => {
        const col = []
        for (let i = 0; i < this.state.columns.length + 1; i++) {
            if (i === 0) {
                col.push(
                    <TextInput key={ i }
                                    textAlign={ 'center' }
                                    style={ [styles.points, styles.firstColumn, styles.yellowText, styles.topBorder] }
                                    onChangeText={ (column) => this.props.updateColumn(i, column) }>
                        { this.state.columns[i] }
                    </TextInput>
                )
            } else if (i === this.state.columns.length) {
                col.push(
                    <View key={ i } textAlign={ 'center' } style={ [styles.points, styles.lastColumn, styles.topBorder] }>
                        <Text style={ styles.yellowText }>Total</Text>
                    </View>
                )
            } else {
                col.push(
                    <TextInput key={ i }
                                    textAlign={ 'center' }
                                    style={ [styles.points, styles.columnHeader, styles.yellowText, styles.topBorder] }
                                    onChangeText={ (column) => this.props.updateColumn(i, column) }>
                        { this.state.columns[i] }
                    </TextInput>)
            }
        }
        return <View style={ styles.pointContainer }>{ col }</View>
    }

    render() {
        return (
            <View style={ [styles.row, styles.info, { minWidth: this.props.rowWidth, maxWidth: this.props.rowWidth }, styles.hideBorder] }>
                <TextInput style={ [styles.name, styles.hideCell] } editable={ false } selectTextOnFocus={ false }></TextInput>
                { this.columnsTop() }
            </View>
        )
    }
}
