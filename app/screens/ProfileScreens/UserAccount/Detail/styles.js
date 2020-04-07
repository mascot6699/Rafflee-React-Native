import { Colors, Typography } from '../../../../utils/styles'
import { StyleSheet, Platform, Dimensions } from 'react-native'
import { scaleHeight, scaleWidth, padding } from '../../../../utils/styles/mixins'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    width: Dimensions.get('window').width
  },
  keyboardView: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white'
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
  accountForm: {
    flex: 1,
    margin: scaleWidth(25),
    marginBottom: 0,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'space-between'
  },
  labelStyle: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.GRAY_LIGHT,
    fontWeight: 'normal'
  },
  inputStyle: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.GRAY_DARK
  },
  containerStyle: {
    marginBottom: scaleHeight(20)
  },
  genderLabel: {
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.GRAY_LIGHT,
    marginLeft: scaleWidth(9),
    marginRight: scaleWidth(9),
    marginBottom: scaleHeight(20),
  },
  birthDate: {
    width: '100%',
    paddingLeft: scaleWidth(9),
    marginBottom: scaleHeight(20),
  },
  phoneInput: {
    width: '70%',
    marginLeft: scaleWidth(9),
    marginBottom: scaleHeight(20),
    paddingBottom: scaleHeight(10),
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAY_LIGHT
  },
  verifiedImg: {
    width: scaleHeight(25),
    height: scaleHeight(25),
    marginRight: scaleWidth(9),
    resizeMode: 'stretch'
  },
  blueBtn: {
    width: scaleWidth(55),
    height: scaleHeight(35),
    marginRight: scaleWidth(9),
    backgroundColor: Colors.BLUE_LIGHT,
    justifyContent: 'center',
    borderRadius: scaleHeight(4),
    shadowColor: Colors.BLUE,
    shadowOffset: {
      width: 0,
      height: scaleHeight(10),
    },
    shadowOpacity: 0.18,
    shadowRadius: 6.30,

  },
  blueBtnText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.WHITE,
  },
  countryInput: {
    flex: 1,
    marginTop: -scaleHeight(7), 
    marginLeft: scaleWidth(9)
  },
  updateBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: scaleHeight(40),
  }
})

export default styles