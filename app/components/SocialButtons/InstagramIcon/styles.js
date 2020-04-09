import { StyleSheet } from 'react-native'
import { scaleHeight } from '../../../utils/styles/mixins'

const styles = StyleSheet.create({
  instagramIconContainer: {
    width: scaleHeight(40),
    height: scaleHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#481E64',
    borderRadius: scaleHeight(6)
  },
  instagramIcon: {
    width: scaleHeight(20),
    height: scaleHeight(20)
  }
})

export default styles