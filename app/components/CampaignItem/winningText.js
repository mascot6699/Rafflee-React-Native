import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { scaleWidth } from '../../utils/styles/mixins'
const WinningText = () => {
  return (
    <View style={styles.winningTextContainer}>
      <Text style={styles.winningText}>Headset</Text>
    </View>
  )
}

export default WinningText