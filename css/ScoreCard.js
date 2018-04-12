import { StyleSheet } from 'react-native'
import colors from './colors'

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    padding: 10
  },
  name: {
    backgroundColor: colors.lightGray,
    minWidth: 75,
    maxWidth: 75,
    textAlign: 'left',
    paddingLeft: 5,
    paddingVertical: 5,
    alignSelf: 'center',
    height: '100%',
    borderRightWidth: 1,
    borderColor: colors.black,
    // marginRight: 50
  },
  row: {
    borderColor: colors.black,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems:'flex-start',
    maxHeight: 30,
    minHeight: 30,
  },
  firstRow: {
    borderWidth: 1,
  },
  points: {
    borderLeftWidth: 1,
    paddingVertical: 6,
    borderColor: colors.black,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 50,
    maxWidth: 50
  },
  pointContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  info: {
    backgroundColor: colors.lightGray,
    borderBottomWidth: 0,
    borderTopWidth: 1,
  },
  lastColumn: {
    backgroundColor: colors.gray,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightWidth: 1
  },
  firstColumn: {
    borderRightWidth: 0,
    borderLeftWidth: 0,
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    marginTop: 20,
    flexDirection: 'row'
  },
  addPlayer: {
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    minWidth: 150,
    maxWidth: 150,
    maxHeight: 45,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addColumn: {
    borderColor: colors.black,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    minWidth: 150,
    maxWidth: 150,
    maxHeight: 45,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerButtons: {

  },
  scrollView: {
    // minWidth: '100%'
    backgroundColor: colors.white,
  },
  columnHeader: {
    backgroundColor: colors.lightGray
  }
})
