import { StyleSheet } from 'react-native'
import { scaleHeight } from '../../../utils/styles/mixins'

const styles = StyleSheet.create({
  twitterIconContainer: {
    width: scaleHeight(40),
    height: scaleHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E2F0FC',
    borderRadius: scaleHeight(6)
  },
  twitterIcon: {
    width: scaleHeight(20),
    height: scaleHeight(20)
  }
})

export default styles