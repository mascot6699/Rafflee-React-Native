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
import { signUp } from '../../actions/userInfo'


const InputField = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(Input);

const Form = withNextInputAutoFocusForm(View);

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required("Username is required"),
  email: Yup.string()
    .required("Email is required")
    .email("This is not an email"),
  password1: Yup.string()
    .required('Password is required')
    .min(2, "Please input correct password"),
  password2: Yup.string()
    .required('Password is required')
    .min(2, "Please input correct password")
})

const SigninScreen = () => {

  const SIGN_UP_PROCESS = useSelector(state => state.userInfo.SIGN_UP)
  const dispatch = useDispatch()

  goBack = () => {
    dispatch(NavigationActions.back())
  }

  onSubmit = (values) => {
    var body = {
      username: values.username,
      email: values.email,
      password1: values.password1,
      password2: values.password2
    }
    dispatch(signUp(body))
  }

  goToCompanyForm = () => {
    dispatch(NavigationActions.navigate({routeName: 'CompanyFormScreen'}))
  }

  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={Keyboard.dismiss} activeOpacity={1}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#00A2FB', '#687def']} style={{ flex: 1 }}>
            <View>
              <Text style={styles.headerText}>Register</Text>
              <TouchableWithoutFeedback onPress={goBack} style={{ position: 'absolute' }}>
                <Image style={styles.whiteLeftArrow} source={images.white_left_arrow} />
              </TouchableWithoutFeedback>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.signinForm}>
          <Formik
            initialValues={{
              email: '',
              username: '',
              password1: '',
              password2: '',
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
                      label="Username"
                      name="username"
                      autoCapitalize="none"
                      value={values.username}
                      onChangeText={text => setFieldValue("username", text)}
                      onBlur={() => setFieldTouched("username")}
                      errorMessage={touched.username && errors.username ? errors.username : undefined}
                      containerStyle={styles.containerStyle}
                      labelStyle={styles.labelStyle}
                      inputStyle={styles.inputStyle}
                    />
                    <InputField
                      label="Password"
                      name="password1"
                      secureTextEntry
                      autoCapitalize="none"
                      value={values.password1}
                      onChangeText={value => setFieldValue("password1", value)}
                      onBlur={() => setFieldTouched("password1")}
                      errorMessage={touched.password1 && errors.password1 ? errors.password1 : undefined}
                      containerStyle={styles.containerStyle}
                      labelStyle={styles.labelStyle}
                      inputStyle={styles.inputStyle}
                    />
                    <InputField
                      label="Confirm Password"
                      name="password2"
                      secureTextEntry
                      autoCapitalize="none"
                      value={values.password2}
                      onChangeText={value => setFieldValue("password2", value)}
                      onBlur={() => setFieldTouched("password2")}
                      errorMessage={touched.password2 && errors.password2 ? errors.password2 : undefined}
                      containerStyle={styles.containerStyle}
                      labelStyle={styles.labelStyle}
                      inputStyle={styles.inputStyle}
                    />
                  </View>
                  <View>
                    <Button 
                      onPress={handleSubmit}
                      title='Register' 
                      buttonStyle={globalStyles.blueBtn} 
                      titleStyle={globalStyles.blueBtnText}
                      loading={SIGN_UP_PROCESS}
                    />
                    <Text style={styles.areYouText}>
                      Are you a company?  
                      <Text style={styles.msgUsText} onPress={goToCompanyForm}>  Message Us</Text>
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

export default SigninScreen