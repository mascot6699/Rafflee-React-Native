import { Colors, Typography, Mixins } from '../../utils/styles'
import { StyleSheet } from 'react-native'
import { scaleHeight, scaleWidth } from '../../utils/styles/mixins'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    paddingLeft: scaleWidth(20),
    paddingRight: scaleWidth(20),
    paddingTop: scaleHeight(15),
    paddingBottom: scaleHeight(15),
    backgroundColor: Colors.WHITE,
    borderRadius: scaleHeight(10),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.05,
    shadowRadius: 5.30,
    elevation: 13,
  },
  campaignImg: {
    width: scaleWidth(50),
    height: scaleWidth(50),
    resizeMode: 'stretch',
    borderRadius: scaleWidth(6),
  },
  campaignDescription: {
    flex: 1,
    paddingLeft: scaleWidth(20),
  },
  titleText: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_16
  },
  descriptionText: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.GRAY_LIGHT,
    marginTop: scaleHeight(7)
  },
  winningList: {
    flexDirection: 'row', 
    marginTop: scaleHeight(8), 
    flexWrap: 'wrap'
  },
  winningTextContainer: {
    padding: scaleWidth(5),
    borderRadius: scaleWidth(3),
    backgroundColor: Colors.GRAY_MEDIUM,
    marginRight: scaleWidth(7), 
    marginTop: scaleWidth(7)
  },
  winningText: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_12
  },
  starContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scaleHeight(25),
    height: scaleHeight(25),
    backgroundColor: '#7778ED',
    borderRadius: scaleHeight(4)
  },
  starImg: {
    width: scaleHeight(15),
    height: scaleHeight(15),
    resizeMode: 'stretch'
  }
})

export default styles