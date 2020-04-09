import { Colors, Typography } from '../../../utils/styles'
import { StyleSheet, Platform, Dimensions } from 'react-native'
import { scaleHeight, scaleWidth } from '../../../utils/styles/mixins'

const styles = StyleSheet.create({
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