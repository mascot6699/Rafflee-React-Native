import { Colors, Typography } from '../../utils/styles'
import { StyleSheet, Platform, Dimensions } from 'react-native'
import { scaleHeight, scaleWidth } from '../../utils/styles/mixins'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_BG
  },
  campaignImg: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width,
    resizeMode: 'stretch'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Platform.OS === 'ios' ? scaleHeight(60) : scaleHeight(37), 
    marginLeft: scaleHeight(25), 
    marginRight: scaleHeight(25),
  },
  whiteLeftArrow: {
    width: scaleHeight(10),
    height: scaleHeight(20)
  },
  starContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scaleHeight(28),
    height: scaleHeight(28),
    backgroundColor: '#7778ED',
    borderRadius: scaleHeight(4)
  },
  starImg: {
    width: scaleHeight(18),
    height: scaleHeight(18),
    resizeMode: 'stretch'
  },
  otherInfoContainer: {
    flexDirection: 'row',
    height: scaleHeight(100),
    backgroundColor: Colors.WHITE,
    borderBottomWidth: scaleHeight(1),
    borderBottomColor: Colors.GRAY_BORDER
  },
  otherInfoItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: Colors.GRAY_BORDER,
    borderRightWidth: scaleHeight(1),
  },
  clockImg: {
    width: scaleHeight(20),
    height: scaleHeight(20)
  },
  profileImg: {
    width: scaleHeight(20),
    height: scaleHeight(20)
  },
  dashboardImg: {
    width: scaleHeight(13),
    height: scaleHeight(20)
  },
  otherInfoText: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.GRAY_DARK,
    marginTop: scaleHeight(4)
  },
  campaignInfoContainer: {
    backgroundColor: Colors.WHITE,
    padding: scaleHeight(20),
    marginTop: scaleHeight(25)
  },
  campaignNameText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.GRAY_DARK,
  },
  descriptionText: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.GRAY_LIGHT,
    marginTop: scaleHeight(20)
  },
  videoContainer: {
    width: '100%',
    height: scaleHeight(200),
    marginTop: scaleHeight(20),
    borderRadius: scaleHeight(6)
  },
  giveAwayTitleText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.GRAY_DARK,
    marginTop: scaleHeight(20)
  },
  winningText: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.GRAY_DARK,
    marginTop: scaleHeight(10)
  },
  actionsContainer: {
    backgroundColor: Colors.WHITE,
    padding: scaleHeight(20),
    marginTop: scaleHeight(25)
  }
})

export default styles