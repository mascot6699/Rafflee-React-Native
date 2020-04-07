import { Colors, Typography } from '../../../utils/styles'
import { StyleSheet, Platform, Dimensions } from 'react-native'
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
    alignItems: 'center',
    paddingTop: scaleHeight(20),
    paddingBottom: scaleHeight(20),
    borderBottomColor: Colors.GRAY_BORDER,
    borderBottomWidth: 1
  },
  socialText: {
    fontSize: Typography.FONT_SIZE_18,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.GRAY_DARK,
    marginLeft: scaleWidth(10),
    marginTop: scaleHeight(5)
  },
  verifiedImg: {
    width: scaleHeight(25),
    height: scaleHeight(25),
    resizeMode: 'stretch'
  },
  twitchIconContainer: {
    width: scaleHeight(40),
    height: scaleHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6422FF',
    borderRadius: scaleHeight(6)
  },
  twitchIcon: {
    width: scaleHeight(20),
    height: scaleHeight(20)
  }
})

export default styles