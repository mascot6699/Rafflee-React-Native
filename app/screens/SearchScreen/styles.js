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
    justifyContent:'space-between',
    marginTop: Platform.OS === 'ios' ? scaleHeight(60) : scaleHeight(37), 
    marginLeft: scaleHeight(25), 
    marginRight: scaleHeight(25)
  },
  searchImg: {
    width: scaleHeight(20),
    height: scaleHeight(20),
    marginTop: Platform.OS === 'ios' ? scaleHeight(3) : scaleHeight(8), 
    resizeMode: 'stretch'
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
  searchInput: {
    marginLeft: scaleWidth(20),
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_20,
    color: Colors.WHITE,
  },
  xCircle: {
    width: scaleHeight(20),
    height: scaleHeight(20),
    marginTop: Platform.OS === 'ios' ? scaleHeight(3) : scaleHeight(8), 
    resizeMode: 'stretch'
  },
  cancelText: {
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    fontSize: Typography.FONT_SIZE_18,
    marginTop: Platform.OS === 'ios' ? scaleHeight(2) : scaleHeight(5), 
    marginLeft: scaleWidth(20),
    color: Colors.WHITE,
  }
})

export default styles