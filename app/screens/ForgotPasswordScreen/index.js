import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { View, Text, TouchableOpacity, TouchableWithoutFeedback, Image, Keyboard, KeyboardAvoidingView, Platform } from 'react-native'
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
import { resetPasswordRequest } from '../../actions/userInfo'


const InputField = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(Input);

const Form = withNextInputAutoFocusForm(View);

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("This is not an email"),
})

const ForgotPasswordScreen = () => {

  const RESET_PASSWORD_REQUEST_PROCESS = useSelector(state => state.userInfo.RESET_PASSWORD_REQUEST)
  const dispatch = useDispatch()

  goBack = () => {
    dispatch(NavigationActions.back())
  }

  onSubmit = (values) => {
    dispatch(resetPasswordRequest({ email: values.email }))
  }

  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={Keyboard.dismiss} activeOpacity={1}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#00A2FB', '#687def']} style={{ flex: 1 }}>
            <View>
              <Text style={styles.headerText}>Forgot Password</Text>
              <TouchableWithoutFeedback onPress={goBack} style={{ position: 'absolute' }}>
                <Image style={styles.whiteLeftArrow} source={images.white_left_arrow} />
              </TouchableWithoutFeedback>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.loginForm}>
          <Formik
            initialValues={{
              email: '',
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
                  </View>
                  <View>
                    <Button 
                      onPress={handleSubmit}
                      title='Send Request' 
                      buttonStyle={globalStyles.blueBtn} 
                      titleStyle={globalStyles.blueBtnText}
                      loading={RESET_PASSWORD_REQUEST_PROCESS}
                    />
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

export default ForgotPasswordScreen