import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import { View, Text, TouchableOpacity, Image, Keyboard } from 'react-native'
import { Formik } from 'formik'
import { compose } from 'recompose'
import * as Yup from 'yup'
import LinearGradient from 'react-native-linear-gradient'
import {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput
} from "react-native-formik"
import { Input, Button, CheckBox } from 'react-native-elements'
import styles from './styles'
import globalStyles from '../../utils/globalStyles'
import images from '../../utils/images'
import { logIn } from '../../actions/userInfo'


const InputField = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(Input);

const Form = withNextInputAutoFocusForm(View);

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("This is not an email"),
  password: Yup.string()
    .required('Password is required')
    .min(2, "Please input correct password")
})

const LoginScreen = (props) => {
  const { navigation } = props
  const isFocused = useIsFocused()
  const LOG_IN_PROCESS = useSelector(state => state.userInfo.LOG_IN)
  const LOG_IN_SUCCESS = useSelector(state => state.userInfo.LOG_IN_SUCCESS)
  const token = useSelector(state => state.userInfo.token)
  const dispatch = useDispatch()

  useEffect(() => {
    if (LOG_IN_SUCCESS) {
      dispatch({ type: 'INIT_STATE', state: 'LOG_IN_SUCCESS', data: false })
      navigation.navigate('ProfileSummaryScreen')
    }
  }, [LOG_IN_SUCCESS])

  goBack = () => {
    navigation.goBack()
  }

  onSubmit = (values) => {
    var body = {
      username: values.email,
      password: values.password,
      device_id: 'iPhone',
      ip: '89.187.161.220'
    }
    dispatch(logIn(body, values.check))
  }

  goToForgotPassword = () => {
    navigation.navigate('ForgotPasswordScreen')
  }

  goToSignIn = () => {
    navigation.navigate('SigninScreen')
  }

  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={Keyboard.dismiss} activeOpacity={1}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#00A2FB', '#687def']} style={{ flex: 1 }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={goBack}>
                <Image style={styles.whiteLeftArrow} source={images.white_left_arrow} />
              </TouchableOpacity>
              <Text style={styles.headerText}>Login</Text>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.loginForm}>
          <Formik
            initialValues={{
              email: '',
              password: '',
              check: false
            }}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({
              values,
              handleSubmit,
              setFieldValue,
              touched,
              errors,
              setFieldTouched,
            }) => {
              return (
                <Form style={styles.formContainer}>
                  <View>
                    <InputField
                      label="Email"
                      name="email"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      value={values.email}
                      onChangeText={text => setFieldValue("email", text)}
                      onBlur={() => setFieldTouched("email")}
                      errorMessage={touched.email && errors.email ? errors.email : undefined}
                      containerStyle={styles.containerStyle}
                      labelStyle={styles.labelStyle}
                      inputStyle={styles.inputStyle}
                    />
                    <InputField
                      label="Password"
                      name="password"
                      secureTextEntry
                      autoCapitalize="none"
                      value={values.password}
                      onChangeText={value => setFieldValue("password", value)}
                      onBlur={() => setFieldTouched("password")}
                      errorMessage={touched.password && errors.password ? errors.password : undefined}
                      containerStyle={styles.containerStyle}
                      labelStyle={styles.labelStyle}
                      inputStyle={styles.inputStyle}
                    />
                    <View style={styles.forgotContainer}>
                      <CheckBox
                        containerStyle={styles.checkBoxContainer}
                        textStyle={styles.checkBoxText}
                        checkedIcon='check-box'
                        iconType='material'
                        uncheckedIcon='check-box-outline-blank'
                        title='Remember Me'
                        checked={values.check}
                        onPress={() => setFieldValue('check', !values.check)}
                      />
                      <Text onPress={goToForgotPassword} style={styles.forgotText}>Forgot password?</Text>
                    </View>
                  </View>
                  <View>
                    <Button
                      onPress={handleSubmit}
                      title='Login'
                      buttonStyle={globalStyles.blueBtn}
                      titleStyle={globalStyles.blueBtnText}
                      loading={LOG_IN_PROCESS}
                    />
                    <Text style={styles.dontText}>
                      Don't have an account?
                      <Text style={styles.signInText} onPress={goToSignIn}>  Sign In</Text>
                    </Text>
                  </View>
                </Form>
              )
            }}
          </Formik>
        </View>
      </View>
    </TouchableOpacity>

  )
}

export default LoginScreen