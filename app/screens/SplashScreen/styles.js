import { Colors } from '../../utils/styles'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  splashImg: {
    width: 144,
    height: 158,
    resizeMode: 'stretch'
  }
})

export default styles