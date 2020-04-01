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
  headerText: {
    fontSize: Typography.FONT_SIZE_20,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.WHITE,
    marginTop: Platform.OS === 'ios' ? scaleHeight(60) : scaleHeight(37),
    textAlign: "center",
  },
  whiteLeftArrow: {
    position: 'absolute',
    left: scaleWidth(25),
    top: Platform.OS === 'ios' ? scaleHeight(60) : scaleHeight(40),
    width: scaleHeight(10),
    height: scaleHeight(20)
  },
  signinForm: {
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
  areYouText: {
    marginTop: scaleHeight(30),
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.GRAY_DARK,
    textAlign: 'center'
  },
  msgUsText: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.BLUE,
    textAlign: 'center',
  }
})

export default styles