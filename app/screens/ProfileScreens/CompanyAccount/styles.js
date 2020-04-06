import { Colors, Typography } from '../../../utils/styles'
import { StyleSheet, Platform } from 'react-native'
import { scaleHeight, scaleWidth } from '../../../utils/styles/mixins'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: scaleHeight(180),
    backgroundColor: Colors.WHITE
  },
  profileImg: {
    width: scaleHeight(100),
    height: scaleHeight(100),
    borderRadius: scaleHeight(50),
  },
  choosePhotoImg: {
    width: scaleHeight(30),
    height: scaleHeight(30),
    marginTop: -10,
  },
  userNameText: {
    fontSize: Typography.FONT_SIZE_18,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.GRAY_DARK,
    marginTop: scaleHeight(10)
  },
  subMenuContainer: {
    marginTop: scaleHeight(20)
  },
  logOutContainer: {
    marginTop: scaleHeight(20)
  },
})

export default styles