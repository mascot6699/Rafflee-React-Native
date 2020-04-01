import React from 'react'
import { View } from 'react-native'
import Spinner from 'react-native-spinkit'
import styles from './styles'


const Loading = (props) => {
  const { size, marginTop } = props
  return (
    <View style={styles.spinnerContainer}>
      <Spinner style={{marginTop: marginTop}} isVisible size={size} color='#0091ff' type='Circle' />
    </View>
  )
}

export default Loading