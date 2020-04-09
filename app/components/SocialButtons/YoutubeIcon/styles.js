import { StyleSheet } from 'react-native'
import { scaleHeight } from '../../../utils/styles/mixins'

const styles = StyleSheet.create({
  youtubeIconContainer: {
    width: scaleHeight(40),
    height: scaleHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFDDDD',
    borderRadius: scaleHeight(6)
  },
  youtubeIcon: {
    width: scaleHeight(20),
    height: scaleHeight(20)
  }
})

export default styles