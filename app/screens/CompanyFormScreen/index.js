import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { View, Text, TouchableOpacity, Image, Keyboard, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Formik } from 'formik'
import { compose } from 'recompose'
import * as Yup from 'yup'
import LinearGradient from 'react-native-linear-gradient'
import makeInput, {
  handleTextInput,
  withNextInputAutoFocusForm,
  withNextInputAutoFocusInput,
} from "react-native-formik"
import { Input, Button } from 'react-native-elements'
import PhoneInput from 'react-native-phone-input'
import styles from './styles'
import globalStyles from '../../utils/globalStyles'
import images from '../../utils/images'
import { companyContact } from '../../actions/userInfo'


const InputField = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(Input);

const PhoneInputField = compose(
  makeInput,
  withNextInputAutoFocusInput
)(PhoneInput);

const Form = withNextInputAutoFocusForm(View);

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("This is not an email"),
  phonenumber: Yup.string()
    .required("Phonenumber is required"),
  username: Yup.string()
    .required('Company Name is required'),
  message: Yup.string()
    .required('Message is required')
})

const CompanyFormScreen = () => {

  const COMPANY_CONTACT_PROCESS = useSelector(state => state.userInfo.COMPANY_CONTACT)
  const dispatch = useDispatch()

  goBack = () => {
    dispatch(NavigationActions.back())
  }

  onSubmit = (values) => {
    console.log(values)
      var body = {
        email: values.email,
        phone_number: values.phonenumber,
        company_name: values.username,
        message: values.message
    }
    dispatch(companyContact(body))
  }

  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={Keyboard.dismiss} activeOpacity={1}>
      <KeyboardAvoidingView behavior='height' style={styles.keyboardView} >
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#00A2FB', '#687def']} style={{ flex: 1 }}>
            <View style={styles.header}>
              <TouchableOpacity onPress={goBack}>
                <Image style={styles.whiteLeftArrow} source={images.white_left_arrow} />
              </TouchableOpacity>
              <Text style={styles.headerText}>Company Form</Text>
            </View>
          </LinearGradient>
        </View>
        <View style={styles.companyForm}>
          <Formik
            initialValues={{
              email: '',
              phonenumber: '123456789',
              country: 'us',
              username: '',
              message: ''
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
                  <ScrollView>
                    <InputField
                      label="Contact Address"
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
                    <Text style={styles.phoneLabel}>Phone Number</Text>
                    <PhoneInputField
                      style={styles.phoneInput}
                      textStyle={styles.inputStyle}
                      name='phonenumber'
                      value={values.phonenumber}
                      onChangePhoneNumber={number => setFieldValue('phonenumber', number)}
                      onSelectCountry={country => setFieldValue('country', country)}
                     />
                    <InputField
                      label="Company Name"
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
                      label="Your Message"
                      name="message"
                      autoCapitalize="none"
                      value={values.message}
                      onChangeText={text => setFieldValue("message", text)}
                      onBlur={() => setFieldTouched("message")}
                      errorMessage={touched.message && errors.message ? errors.message : undefined}
                      containerStyle={styles.containerStyle}
                      labelStyle={styles.labelStyle}
                      inputStyle={styles.inputStyle}
                    />
                  </ScrollView>
                  <View>
                    <Button 
                      onPress={handleSubmit}
                      title='Send Message' 
                      buttonStyle={globalStyles.blueBtn} 
                      titleStyle={globalStyles.blueBtnText}
                      loading={COMPANY_CONTACT_PROCESS}
                    />
                  </View>
                </Form>
              )
            }}
          </Formik>
        </View>
      </View>
      </KeyboardAvoidingView>
    </TouchableOpacity>

  )
}

export default CompanyFormScreen