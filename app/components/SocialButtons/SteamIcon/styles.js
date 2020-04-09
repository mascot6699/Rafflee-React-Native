import { StyleSheet } from 'react-native'
import { scaleHeight } from '../../../utils/styles/mixins'

const styles = StyleSheet.create({
  steamIconContainer: {
    width: scaleHeight(40),
    height: scaleHeight(40),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8cbfff',
    borderRadius: scaleHeight(6)
  },
  steamIcon: {
    width: scaleHeight(20),
    height: scaleHeight(20)
  }
})

export default styles