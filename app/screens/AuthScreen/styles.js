import { Colors, Typography } from '../../utils/styles'
import { StyleSheet } from 'react-native'
import { scaleHeight, scaleWidth } from '../../utils/styles/mixins'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE
  },
  topContainer: {
    height: scaleHeight(324),
    resizeMode: 'stretch',
  },
  whiteLeftArrow: {
    marginTop: scaleHeight(60),
    marginLeft: scaleWidth(25),
    width: scaleHeight(6),
    height: scaleHeight(12)
  },
  bottomContainer: {
    marginLeft: scaleWidth(25),
    marginRight: scaleWidth(25),
    marginBottom: scaleHeight(45),
  },
  socialBtnGroup: {
    height: scaleHeight(50),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialBtnContainer: {
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.GRAY_BORDER,
    borderWidth: 1,
    borderRadius: scaleWidth(6)
  },
  fbImg: {
    width: scaleHeight(10),
    height: scaleHeight(20)
  },
  googleImg: {
    width: scaleHeight(20),
    height: scaleHeight(20)
  },
  signInBtnContainer: {
    height: scaleHeight(50),
    marginTop: scaleHeight(30)
  },
  textContainer: {
    marginTop: scaleHeight(35),
  },
  alreadyText: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.GRAY_DARK,
    textAlign: 'center'
  },
  logInText: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.BLUE,
    textAlign: 'center'
  }
})

export default styles