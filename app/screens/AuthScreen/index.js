import React from 'react'
import { useDispatch } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { View, Text, TouchableOpacity, ImageBackground, Image } from 'react-native'
import { Button } from 'native-base'
import styles from './styles'
import globalStyles from '../../utils/globalStyles'
import images from '../../utils/images'


const AuthScreen = () => {

  const dispatch = useDispatch()

  goBack = () => {
    dispatch(NavigationActions.back())
  }

  goToLogin = () => {
    dispatch(NavigationActions.navigate({routeName: 'LoginScreen'}))
  }

  goToSignIn = () => {
    dispatch(NavigationActions.navigate({routeName: 'SigninScreen'}))
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={images.auth_background} style={styles.topContainer}>
        <TouchableOpacity onPress={goBack}>
          <Image source={images.white_left_arrow} style={styles.whiteLeftArrow}/>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.bottomContainer}>
        <View style={styles.socialBtnGroup}>
          <View style={styles.socialBtnContainer}>
            <Image source={images.facebook_icon} style={styles.fbImg} />
          </View>
          <View style={styles.socialBtnContainer}>
            <Image source={images.google_icon} style={styles.googleImg} />
          </View>
        </View>
        <View style={styles.signInBtnContainer}>
          <Button style={globalStyles.blueBtn} onPress={goToSignIn}>
            <Text style={globalStyles.blueBtnText}>Sign In</Text>
          </Button>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.alreadyText}>
            Already have an account?  
            <Text style={styles.logInText} onPress={goToLogin}>  Login</Text>
          </Text>
        </View>
      </View>
    </View>
  )
}

export default AuthScreen