import { Colors, Typography } from '../../utils/styles'
import { StyleSheet, Platform } from 'react-native'
import { scaleHeight, scaleWidth } from '../../utils/styles/mixins'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.GRAY_BG
  },
  headerContainer: {
    height: scaleHeight(100)
  },
  header: {
    flexDirection: 'row',
    marginTop: Platform.OS === 'ios' ? scaleHeight(60) : scaleHeight(37), 
    marginLeft: scaleHeight(45), 
    marginRight: scaleHeight(25)
  },
  headerText: {
    flex: 1,
    fontSize: Typography.FONT_SIZE_20,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.WHITE,
    textAlign: 'center'
  },
  menudotsImg: {
    height: scaleHeight(20),
    resizeMode: 'contain'
  },
  profileImgContainer: {
    height: scaleHeight(160),
    backgroundColor: Colors.WHITE
  }
})

export default styles