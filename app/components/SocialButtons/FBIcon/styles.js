import { Colors, Typography } from '../../../utils/styles'
import { StyleSheet } from 'react-native'
import { scaleHeight } from '../../../utils/styles/mixins'

const styles = StyleSheet.create({
  fbIconContainer: {
    width: scaleHeight(40),
    height: scaleHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2A3E6A',
    borderRadius: scaleHeight(6)
  },
  iconText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.WHITE,
    fontSize: scaleHeight(20)
  }
})

export default styles