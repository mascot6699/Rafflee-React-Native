import { Colors, Typography } from './styles'
import { StyleSheet } from 'react-native'
import { scaleHeight, scaleWidth } from './styles/mixins'

const styles = StyleSheet.create({
  blueBtn: {
    width: '100%',
    height: scaleHeight(50),
    backgroundColor: Colors.BLUE_LIGHT,
    justifyContent: 'center',
    borderRadius: scaleHeight(6),
    shadowColor: Colors.BLUE,
    shadowOffset: {
      width: 0,
      height: scaleHeight(15),
    },
    shadowOpacity: 0.18,
    shadowRadius: 6.30,
  },
  blueBtnText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.WHITE
  },
  whiteBtn: {
    width: '100%',
    height: scaleHeight(80),
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
  },
  whiteBtnText: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.GRAY_DARK
  }
})

export default styles