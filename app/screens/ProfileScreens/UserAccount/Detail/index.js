import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, TouchableOpacity, Image, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Platform } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import DatePicker from 'react-native-datepicker'
import PhoneInput from 'react-native-phone-input'
import CountryPicker from 'react-native-country-picker-modal'
import { getCode, getName } from 'country-list'
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
import Footer from '../../../../components/Footer'
import Spinner from '../../../../components/Spinner'
import { updateUserProfile, getUserProfile, sendSms } from '../../../../actions/userInfo'
import styles from './styles'
import { scaleHeight, scaleWidth } from '../../../../utils/styles/mixins'
import { Colors, Typography } from '../../../../utils/styles'
import globalStyles from '../../../../utils/globalStyles'
import images from '../../../../utils/images'
import { dial2code, code2dial } from '../../../../utils/CountryPhone'

const InputField = compose(
  withNextInputAutoFocusInput
)(Input);

const PickerSelect = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(RNPickerSelect);

const DateSelect = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(DatePicker);

const CountrySelect = compose(
  handleTextInput,
  withNextInputAutoFocusInput
)(CountryPicker);

const PhoneInputField = compose(
  makeInput,
  withNextInputAutoFocusInput
)(PhoneInput);


const Form = withNextInputAutoFocusForm(View);

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("This is not an email"),
  firstname: Yup.string()
    .required('FirstName is required'),
  lastname: Yup.string()
    .required('LastName is required')
})

const UserAccountScreen = (props) => {
  const { navigation, route } = props
  const { avatar } = route.params

  const userProfile = useSelector(state => state.userInfo.userProfile)
  const token = useSelector(state => state.userInfo.token)
  const UPDATE_USER_PROFILE_PROCESS = useSelector(state => state.userInfo.UPDATE_USER_PROFILE)
  const GET_USER_PROFILE_PROCESS = useSelector(state => state.userInfo.GET_USER_PROFILE)
  const SEND_SMS_PROCESS = useSelector(state => state.userInfo.SEND_SMS)
  const SEND_SMS_SUCCESS = useSelector(state => state.userInfo.SEND_SMS_SUCCESS)

  const dispatch = useDispatch()

  const [countryName, setCountryName] = useState(userProfile.country)
  const [phoneNumber, setPhoneNumber] = useState(userProfile.national_number)
  const [phoneCountry, setPhoneCountry] = useState(userProfile.country_code)

  useEffect(() => {
    dispatch(getUserProfile(token))
  }, [])
  
  useEffect(() => {
    if (SEND_SMS_SUCCESS) {
      navigation.navigate('CodeVerificationScreen', {phoneNumber: `+${(phoneCountry || '1')}${(phoneNumber || '')}`})
      dispatch({type: 'INIT_STATE', state: 'SEND_SMS_SUCCESS', data: false})

    }
  }, [SEND_SMS_SUCCESS])

  goBack = () => {
    navigation.goBack()
  }

  onSubmit = (values) => {
    let imgName = ''
    if (avatar && !avatar.fileName) {
      let getFilename = avatar.uri.split('/')
      imgName = getFilename[getFilename.length - 1]
    }

    var formdata = new FormData()
    formdata.append("profile_picture", avatar ? {
      name: imgName,
      type: avatar.type,
      uri: Platform.OS === "android" ? avatar.uri : avatar.uri.replace("file://", "")
    } : null)

    formdata.append("phone_number", values.phonenumber)
    formdata.append("prefix_number", code2dial(values.phone_country_code))
    formdata.append("country", countryName)
    formdata.append("birth_date", values.birthdate)
    formdata.append("first_name", values.firstname)
    formdata.append("last_name", values.lastname)
    formdata.append("address", values.address)
    formdata.append("city", values.city)
    formdata.append("region", values.region)
    formdata.append("gender", values.gender)

    dispatch(updateUserProfile(formdata, token))
  }
  const sendSMS = () => {
    var body = {
        number: `+${(phoneCountry || '1')}${(phoneNumber || '')}`
    }
    dispatch(sendSms(body, token))
    // navigation.navigate('CodeVerificationScreen', {phoneNumber: `+${(phoneCountry || '1')}${(phoneNumber || '')}`})
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
                <Text style={styles.headerText}>Account</Text>
              </View>
            </LinearGradient>
          </View>
          {GET_USER_PROFILE_PROCESS
            ?
            <Spinner size={100} />
            :
            <View style={styles.accountForm}>
              <Formik
                initialValues={{
                  email: userProfile.email,
                  firstname: userProfile.firstname,
                  lastname: userProfile.lastname,
                  gender: userProfile.gender,
                  birthdate: userProfile.birth_date,
                  address: userProfile.address,
                  city: userProfile.city,
                  region: userProfile.region,
                  phonenumber: (userProfile.national_number || '').toString(),
                  phone_country_code: userProfile.country_code ? dial2code(userProfile.country_code) : 'us',
                  country_code: userProfile.country ? getCode(userProfile.country) : ''
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
                          label="First Name"
                          name="firstname"
                          autoCapitalize="none"
                          value={values.firstname}
                          onChangeText={text => setFieldValue("firstname", text)}
                          onBlur={() => setFieldTouched("firstname")}
                          errorMessage={touched.firstname && errors.firstname ? errors.firstname : undefined}
                          containerStyle={styles.containerStyle}
                          labelStyle={styles.labelStyle}
                          inputStyle={styles.inputStyle}
                        />

                        <InputField
                          label="Last Name"
                          name="lastname"
                          autoCapitalize="none"
                          value={values.lastname}
                          onChangeText={text => setFieldValue("lastname", text)}
                          onBlur={() => setFieldTouched("lastname")}
                          errorMessage={touched.lastname && errors.lastname ? errors.lastname : undefined}
                          containerStyle={styles.containerStyle}
                          labelStyle={styles.labelStyle}
                          inputStyle={styles.inputStyle}
                        />

                        <Text style={styles.genderLabel}>Gender</Text>
                        <PickerSelect
                          name="gender"
                          value={values.gender}
                          onValueChange={value => setFieldValue("gender", value)}
                          items={[
                            { label: 'Male', value: 'male' },
                            { label: 'Female', value: 'female' },
                          ]}
                          style={{ ...pickerSelectStyles }}
                          useNativeAndroidPickerStyle={false}
                        />

                        <Text style={styles.genderLabel}>Phone Number</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                          <PhoneInputField
                            style={styles.phoneInput}
                            textStyle={styles.inputStyle}
                            name='phonenumber'
                            value={values.phonenumber}
                            onChangePhoneNumber={number => {
                              setFieldValue('phonenumber', number)
                              setPhoneNumber(number)
                            }}
                            initialCountry={values.phone_country_code}
                            onSelectCountry={country => {
                              setFieldValue('phone_country_code', country)
                              setPhoneCountry(code2dial(country))
                            }}
                          />
                          {userProfile.phone_number_verification
                            ?
                            <Image source={images.verified_icon} style={styles.verifiedImg} />
                            :
                            <Button
                              onPress={sendSMS}
                              title='Verify'
                              buttonStyle={styles.blueBtn}
                              titleStyle={styles.blueBtnText}
                              loading={SEND_SMS_PROCESS}
                            />
                          }
                        </View>

                        <Text style={styles.genderLabel}>Country</Text>
                        <View style={{ flexDirection: 'row', marginBottom: scaleHeight(15) }}>
                          <CountrySelect
                            containerButtonStyle={styles.countryInput}
                            name='country_code'
                            countryCode={values.country_code}
                            onSelect={value => {
                              setFieldValue('country_code', value.cca2)
                              setCountryName(value.name)
                            }}
                            withAlphaFilter
                          />
                          <Text style={styles.inputStyle}>{countryName}</Text>
                        </View>


                        <Text style={styles.genderLabel}>Birthdate</Text>
                        <DateSelect
                          name='birthdate'
                          date={values.birthdate}
                          mode='date'
                          placeholder="Select Birth Date"
                          onDateChange={date => setFieldValue('birthdate', date)}
                          format='YYYY-MM-DD'
                          confirmBtnText='Done'
                          cancelBtnText='cancel'
                          showIcon={true}
                          style={styles.birthDate}
                        />

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
                          label="Address"
                          name="address"
                          autoCapitalize="none"
                          value={values.address}
                          onChangeText={text => setFieldValue("address", text)}
                          onBlur={() => setFieldTouched("address")}
                          containerStyle={styles.containerStyle}
                          labelStyle={styles.labelStyle}
                          inputStyle={styles.inputStyle}
                        />

                        <InputField
                          label="City"
                          name="city"
                          autoCapitalize="none"
                          value={values.city}
                          onChangeText={text => setFieldValue("city", text)}
                          onBlur={() => setFieldTouched("city")}
                          containerStyle={styles.containerStyle}
                          labelStyle={styles.labelStyle}
                          inputStyle={styles.inputStyle}
                        />

                        <InputField
                          label="Zip Code"
                          name="region"
                          autoCapitalize="none"
                          value={values.region}
                          onChangeText={text => setFieldValue("region", text)}
                          onBlur={() => setFieldTouched("region")}
                          containerStyle={styles.containerStyle}
                          labelStyle={styles.labelStyle}
                          inputStyle={styles.inputStyle}
                        />
                        <View>
                          <Button
                            onPress={handleSubmit}
                            title='Update'
                            buttonStyle={globalStyles.blueBtn}
                            titleStyle={globalStyles.blueBtnText}
                            loading={UPDATE_USER_PROFILE_PROCESS}
                          />
                        </View>
                      </ScrollView>
                    </Form>
                  )
                }}
              </Formik>
            </View>
          }

          <Footer tab='profile' />
        </View>
      </KeyboardAvoidingView>
    </TouchableOpacity>

  )
}

export default UserAccountScreen

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    marginLeft: scaleWidth(9),
    marginRight: scaleWidth(9),
    marginBottom: scaleHeight(20),
    paddingBottom: scaleHeight(10),
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAY_LIGHT,
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.GRAY_DARK
  },
  inputAndroid: {
    marginLeft: scaleWidth(9),
    marginRight: scaleWidth(9),
    marginBottom: scaleHeight(20),
    paddingBottom: scaleHeight(10),
    borderBottomWidth: 1,
    borderBottomColor: Colors.GRAY_LIGHT,
    fontSize: Typography.FONT_SIZE_16,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.GRAY_DARK
  },
});