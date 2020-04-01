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
  searchImg: {
    width: scaleHeight(20),
    height: scaleHeight(20),
    resizeMode: 'stretch'
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: scaleHeight(76),
    paddingLeft: scaleWidth(25),
    paddingRight: scaleWidth(25),
    backgroundColor: Colors.WHITE
  },
  tabText: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.GRAY_LIGHT
  },
  blueTabText: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.BLUE
  },
  scrollView: {
    marginLeft: scaleWidth(25),
    marginRight: scaleWidth(25),
  },
  itemContainer: {
    paddingTop: scaleHeight(20),
    paddingBottom: scaleHeight(20),
    borderBottomColor: '#d0d0d280',
    borderBottomWidth: 1
  },
})

export default styles