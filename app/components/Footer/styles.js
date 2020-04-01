import { Colors, Typography, Mixins } from '../../utils/styles'
import { StyleSheet } from 'react-native'
import { scaleHeight, scaleWidth } from '../../utils/styles/mixins'

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: scaleHeight(80),
    backgroundColor: '#FEFFFE',
    paddingLeft: scaleWidth(40),
    paddingRight: scaleWidth(40)
  },
  footerImgContainer: {
    paddingTop: scaleHeight(20),
    paddingLeft: scaleWidth(10),
    paddingRight: scaleWidth(10),
  },
  activeFooterImgContainer: {
    paddingTop: scaleHeight(20),
    paddingLeft: scaleWidth(10),
    paddingRight: scaleWidth(10),
    borderTopColor: Colors.BLUE_LIGHT,
    borderTopWidth: 2
  },
  footerImg: {
    width: scaleHeight(18),
    height: scaleHeight(20),
    resizeMode: 'stretch'
  }
})

export default styles