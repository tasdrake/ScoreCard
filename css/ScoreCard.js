import { StyleSheet } from 'react-native'
import colors from '../config/colors'
import fonts from '../config/fonts'
import { Dimensions } from "react-native"

const { height, width } = Dimensions.get('window')

module.exports = StyleSheet.create({
    container: {
        height,
        width,
        backgroundColor: colors.darkGray,
        padding: 10,
    },
    name: {
        height: '100%',
        width: 75,
        alignSelf: 'center',
        backgroundColor: colors.infoGray,
        borderColor: colors.yellow,
        color: colors.yellow,
        fontFamily: fonts.MontserratRegular,
        borderRightWidth: 1,
        paddingLeft: 5,
        paddingVertical: 5,
        textAlign: 'left',
    },
    row: {
        flex: 1,
        alignItems:'flex-start',
        flexDirection: 'row',
        maxHeight: 30,
        minHeight: 30,
        borderBottomWidth: 1,
        borderColor: colors.yellow,
        borderLeftWidth: 1,
        borderRightWidth: 1,
    },
    firstRow: {
        borderWidth: 1,
    },
    points: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: 50,
        maxWidth: 50,
        paddingVertical: 6,
        borderColor: colors.yellow,
        borderLeftWidth: 1,
    },
    pointContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    info: {
        backgroundColor: colors.infoGray,
        borderBottomWidth: 0,
        borderTopWidth: 1,
    },
    lastColumn: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.totalGray,
        borderRightWidth: 1,
    },
    firstColumn: {
        borderLeftWidth: 0,
        borderRightWidth: 0,
    },
    buttonContainer: {
        flex: 1,
        width,
        maxHeight: 50,
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginLeft: -20,
        marginTop: 20,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        borderColor: colors.yellow,
        borderRadius: 10,
        borderWidth: 1,
        maxHeight: 45,
        maxWidth: width - ((width / 1.8 )),
        minWidth: width - ((width / 1.8 )),
    },
    centerButtons: {
        flex: 1,
        width,
        alignItems: 'center',
    },
    columnHeader: {
        backgroundColor: colors.infoGray,
    },
    cardContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    buttonText: {
      fontSize: 16,
      fontFamily: fonts.MontserratRegular,
      color: colors.yellow,
    },
    yellowText: {
        color: colors.yellow,
        fontFamily: fonts.MontserratRegular,
    },
    hideCell: {
        backgroundColor: colors.darkGray,
    },
    hideBorder: {
        borderLeftColor: colors.darkGray,
        borderTopColor: colors.darkGray,
    },
    topBorder: {
        borderColor: colors.yellow,
        borderTopWidth: 1,
    },
})