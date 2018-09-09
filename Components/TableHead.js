import React, { Component } from 'react';
import styles from '../css/ScoreCard'
import {
    View,
    TextInput,
} from 'react-native'

type Props = {}
export default class TableHeader extends Component<Props> {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    columnsTop = () => {
        const col = []
        for (let i = 0; i < this.state.columns + 1; i++) {
            if (i === 0) {
                col.push(<TextInput key={ i }
                                    textAlign={ 'center' }
                                    style={ [styles.points, styles.firstColumn] }>col</TextInput>)
            } else if (i === this.state.columns) {
                col.push(
                    <View key={ i } textAlign={ 'center' } style={ [styles.points, styles.lastColumn] }>
                        <Text>Total</Text>
                    </View>
                )
            } else {
                col.push(<TextInput key={ i }
                                    textAlign={ 'center' }
                                    style={ [styles.points, styles.columnHeader] }>col</TextInput>)
            }
        }
        return <View style={ styles.pointContainer }>{ col }</View>
    }
    
    render(){
        return (
            <View style={ [styles.row, styles.info, { minWidth: this.state.rowWidth, maxWidth: this.state.rowWidth }] }>
                <TextInput style={ styles.name }></TextInput>
                {/* <ScrollView horizontal={true} style={styles.scrollView}> */}
                { this.columnsTop() }
                {/* </ScrollView> */}
            </View>
        )
    }
}