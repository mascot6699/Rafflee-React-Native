import React from 'react'
import { Text } from 'react-native'
import { Button } from 'native-base'
import styles from './styles'
const BlueButton= (props) => {
  const { text } = props
  return (
    <Button style={styles.btn}>
      <Text style={styles.text}>{text}</Text>
    </Button>
  )
}

export default BlueButton