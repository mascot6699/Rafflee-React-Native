import { Colors, Typography } from '../../../utils/styles'
import { StyleSheet } from 'react-native'
import { scaleHeight, scaleWidth } from '../../../utils/styles/mixins'

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: '100%',
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
  text: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_18,
    color: Colors.WHITE
  }
})

export default styles