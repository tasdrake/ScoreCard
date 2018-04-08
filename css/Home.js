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
    backgroundColor: colors.gray,
    width: 75,
    textAlign: 'left',
    paddingLeft: 5,
    paddingVertical: 5,
    alignSelf: 'center',
    height: '100%',
    borderRightWidth: 1,
    borderColor: colors.black
  },
  row: {
    borderColor: colors.black,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems:'flex-start',
    maxHeight: 30
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
    width: 20,
  },
  pointContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  info: {
    backgroundColor: colors.gray
  },
  lastColumn: {
    borderRightWidth: 0,
    width: 20,
  },
  firstColumn: {
    borderRightWidth: 0,
    borderLeftWidth: 0,
    width: 20,
  }
})
