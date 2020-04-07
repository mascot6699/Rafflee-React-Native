import { Colors, Typography } from '../../../utils/styles'
import { StyleSheet, Platform } from 'react-native'
import { scaleHeight, scaleWidth } from '../../../utils/styles/mixins'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE
  },
  headerContainer: {
    height: scaleHeight(100)
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? scaleHeight(60) : scaleHeight(37), 
    marginLeft: scaleHeight(25), 
    marginRight: scaleHeight(25)
  },
  headerText: {
    flex: 1,
    fontSize: Typography.FONT_SIZE_20,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.WHITE,
    textAlign: 'center'
  },
  whiteLeftArrow: {
    width: scaleHeight(10),
    height: scaleHeight(20)
  },
  menudotsImg: {
    height: scaleHeight(20),
    resizeMode: 'contain'
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.GRAY_BG
  },
})

export default styles