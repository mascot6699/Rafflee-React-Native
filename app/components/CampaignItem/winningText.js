import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'
import { scaleWidth } from '../../utils/styles/mixins'
const WinningText = (props) => {
  const { name } = props
  return (
    <View style={styles.winningTextContainer}>
      <Text style={styles.winningText}>{name}</Text>
    </View>
  )
}

export default WinningText