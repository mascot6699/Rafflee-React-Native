import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { View, Text, TouchableOpacity, Image, Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Platform } from 'react-native'
import PhoneInput from 'react-native-phone-input'
import CountryPicker from 'react-native-country-picker-modal'
import { getCode } from 'country-list'
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
import { updateCompanyProfile, getCompanyProfile } from '../../../../actions/userInfo'
import styles from './styles'
import { scaleHeight } from '../../../../utils/styles/mixins'
import globalStyles from '../../../../utils/globalStyles'
import images from '../../../../utils/images'
import { dial2code, code2dial } from '../../../../utils/CountryPhone'

const InputField = compose(
  withNextInputAutoFocusInput
)(Input);

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
  company_name: Yup.string()
    .required('CompanyName is required')
})

const CompanyAccountScreen = (props) => {
  const { navigation, route } = props
  const { avatar } = route.params

  const companyProfile = useSelector(state => state.userInfo.companyProfile)
  const token = useSelector(state => state.userInfo.token)
  const UPDATE_COMPANY_PROFILE_PROCESS = useSelector(state => state.userInfo.UPDATE_COMPANY_PROFILE)
  const GET_COMPANY_PROFILE_PROCESS = useSelector(state => state.userInfo.GET_COMPANY_PROFILE)
  const dispatch = useDispatch()

  const [countryName, setCountryName] = useState(companyProfile.country)

  useEffect(() => {
    dispatch(getCompanyProfile(token))
  }, [])

  goBack = () => {
    navigation.goBack()
  }

  onSubmit = (values) => {
    console.log(avatar)
    let imgName = ''
    if (avatar && !avatar.fileName) {
      let getFilename = avatar.uri.split('/')
      imgName = getFilename[getFilename.length - 1]
    }

    var formdata = new FormData()
    formdata.append("logo", avatar ? {
      name: imgName,
      type: avatar.type,
      uri: Platform.OS === "android" ? avatar.uri : avatar.uri.replace("file://", "")
    } : null)

    formdata.append("phone_number", values.phonenumber)
    formdata.append("prefix_number", code2dial(values.phone_country_code))
    formdata.append("country", countryName)
    formdata.append("address", values.address)
    formdata.append("city", values.city)
    formdata.append("region", values.region)

    dispatch(updateCompanyProfile(formdata, token))
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
          {GET_COMPANY_PROFILE_PROCESS
            ?
            <Spinner size={100} />
            :
            <View style={styles.accountForm}>
              <Formik
                initialValues={{
                  email: companyProfile.email,
                  region: companyProfile.region,
                  city: companyProfile.city,
                  address: companyProfile.address,
                  region: companyProfile.region,
                  company_name: companyProfile.company_name,
                  phonenumber: (companyProfile.national_number || '').toString(),
                  phone_country_code: companyProfile.country_code ? dial2code(companyProfile.country_code) : 'us',
                  country_code: companyProfile.country ? getCode(companyProfile.country) : ''
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
                          label="Company Name"
                          name="company_name"
                          autoCapitalize="none"
                          value={values.company_name}
                          onChangeText={text => setFieldValue("company_name", text)}
                          onBlur={() => setFieldTouched("company_name")}
                          errorMessage={touched.company_name && errors.company_name ? errors.company_name : undefined}
                          containerStyle={styles.containerStyle}
                          labelStyle={styles.labelStyle}
                          inputStyle={styles.inputStyle}
                        />

                        <InputField
                          label="Admin Email"
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

                        <Text style={styles.genderLabel}>Contact Number</Text>
                        <PhoneInputField
                          style={styles.phoneInput}
                          textStyle={styles.inputStyle}
                          name='phonenumber'
                          value={values.phonenumber}
                          onChangePhoneNumber={number => setFieldValue('phonenumber', number)}
                          initialCountry={values.phone_country_code}
                          onSelectCountry={country => setFieldValue('phone_country_code', country)}
                        />

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
                            loading={UPDATE_COMPANY_PROFILE_PROCESS}
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

export default CompanyAccountScreen