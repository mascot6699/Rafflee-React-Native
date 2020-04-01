import { Colors, Typography } from '../../utils/styles'
import { StyleSheet, Platform } from 'react-native'
import { scaleHeight, scaleWidth } from '../../utils/styles/mixins'

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
    marginTop: Platform.OS === 'ios' ? scaleHeight(60) : scaleHeight(37), 
    marginLeft: scaleHeight(25), 
    marginRight: scaleHeight(35)
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
  loginForm: {
    flex: 1,
    margin: scaleWidth(25),
    marginBottom: scaleWidth(50)
  },
  formContainer: {
    flex: 1, 
    justifyContent: 'space-between'
  },
  labelStyle: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.GRAY_LIGHT,
  },
  inputStyle: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.GRAY_DARK
  },
  containerStyle: {
    marginBottom: scaleHeight(20)
  },
})

export default styles