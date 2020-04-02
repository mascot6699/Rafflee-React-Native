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
    paddingTop: scaleHeight(35),
    paddingBottom: scaleHeight(35),
    borderBottomColor: Colors.GRAY_BORDER,
    borderBottomWidth: 1
  },
  categoryText: {
    fontSize: Typography.FONT_SIZE_18,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.GRAY_DARK
  },
  blackRightArrow: {
    width: scaleHeight(10),
    height: scaleHeight(20)
  }
})

export default styles