import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Button } from 'react-native-elements'
import { useSelector, useDispatch } from 'react-redux'
import LinearGradient from 'react-native-linear-gradient'
import CodeInput from 'react-native-confirmation-code-input'
import Footer from '../../../../components/Footer'
import Spinner from '../../../../components/Spinner'
import { verifyPhoneNumber, resendSms } from '../../../../actions/userInfo'
import images from '../../../../utils/images'
import globalStyles from '../../../../utils/globalStyles'
import { Colors } from '../../../../utils/styles'
import styles from './styles'

const CodeVerificationScreen = ({route}) => {
  const { phoneNumber } = route.params
  const token = useSelector(state => state.userInfo.token)
  const VERIFY_PHONE_NUMBER_PROCESS = useSelector(state => state.userInfo.VERIFY_PHONE_NUMBER)
  const RESEND_SMS_PROCESS = useSelector(state => state.userInfo.RESEND_SMS)
  const dispatch = useDispatch()

  const verifyCode = (code) => {
    var body = {
      number: phoneNumber,
      code: code
    }
    dispatch(verifyPhoneNumber(body, token))
  }

  const resendSMS = () => {
    var body = {
      number: phoneNumber
    }
    dispatch(resendSms(body, token))
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#00A2FB', '#687def']} style={{flex: 1}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={goBack}>
              <Image style={styles.whiteLeftArrow} source={images.white_left_arrow} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Code Verification</Text>
          </View>
        </LinearGradient>
      </View>
      <View style={styles.mainContainer}>
        <CodeInput
          codeLength={6}
          keyboardType='numeric'
          autoFocus={true}
          className={'border-b'}
          space={5}
          size={40}
          inputPosition='left'
          activeColor={Colors.GRAY_DARK}
          inactiveColor={Colors.GRAY_LIGHT}
          codeInputStyle={styles.codeInput}
          containerStyle={styles.codeContainer}
          onFulfill={(code) => verifyCode(code)}
        />
        <View style={styles.resendContainer}>
          <Button 
            onPress={resendSMS}
            activeOpacity={0.8}
            title='Resend' 
            buttonStyle={globalStyles.blueBtn} 
            titleStyle={globalStyles.blueBtnText}
            loading={RESEND_SMS_PROCESS}
          />
        </View>
        {VERIFY_PHONE_NUMBER_PROCESS && <Spinner size={50} />}
      </View>
      <Footer tab='profile' />
    </View>
  )
}

export default CodeVerificationScreen