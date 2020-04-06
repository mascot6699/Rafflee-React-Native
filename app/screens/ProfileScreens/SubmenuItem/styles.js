import { Colors, Typography } from '../../../utils/styles'
import { StyleSheet, Platform } from 'react-native'
import { scaleHeight, scaleWidth } from '../../../utils/styles/mixins'

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    paddingLeft: scaleHeight(25),
    paddingRight: scaleHeight(25),
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: scaleHeight(25),
    paddingBottom: scaleHeight(25),
    borderBottomColor: Colors.GRAY_BORDER,
    borderBottomWidth: 1
  },
  categoryText: {
    fontSize: Typography.FONT_SIZE_18,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.GRAY_DARK
  },
  blackRightArrow: {
    width: scaleHeight(15),
    height: scaleHeight(15),
    resizeMode: 'stretch'
  }
})

export default styles