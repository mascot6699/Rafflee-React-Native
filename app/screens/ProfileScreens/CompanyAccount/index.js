import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { View, Image, TouchableOpacity, Text } from 'react-native'
import { Button } from 'react-native-elements'
import ImagePicker from 'react-native-image-picker'
import images from '../../../utils/images'
import Spinner from '../../../components/Spinner'
import SubmenuItem from '../SubmenuItem'
import { getCompanyProfile, logOut } from '../../../actions/userInfo'
import styles from './styles'
import globalStyles from '../../../utils/globalStyles'

const CompanyAccountDashboard = (props) => {
  const navigation = useNavigation()
  const token = useSelector(state => state.userInfo.token)
  const companyProfile = useSelector(state => state.userInfo.companyProfile)
  const GET_COMPANY_PROFILE_PROCESS = useSelector(state => state.userInfo.GET_COMPANY_PROFILE)
  const LOG_OUT_PROCESS = useSelector(state => state.userInfo.LOG_OUT)
  const dispatch = useDispatch()

  const [avatar, setAvatar] = useState(null)

  useEffect(() => {
    dispatch(getCompanyProfile(token))
  }, [])

  handleChoosePhoto = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    }
    ImagePicker.launchImageLibrary(options, response => {
      if (response.uri)
        setAvatar(response)
    })
  }

  onLogOut = () => {
    dispatch(logOut(token))
    navigation.navigate('MainScreen')
  }

  if (GET_COMPANY_PROFILE_PROCESS)
    return <Spinner size={100} />

  return (
    <View style={styles.container}>
      <View style={styles.profileImgContainer}>
        <Image 
          source={(avatar || companyProfile.logo) ? {uri: avatar ? avatar.uri : companyProfile.logo} : images.default_profile_img} 
          style={styles.profileImg} 
        />
        <TouchableOpacity onPress={handleChoosePhoto}>
          <Image source={images.choose_photo_icon} style={styles.choosePhotoImg} />
        </TouchableOpacity>
        <Text style={styles.userNameText}>{companyProfile.company_name}</Text>
      </View>
      <View style={styles.subMenuContainer}>
        <SubmenuItem name='Account' avatar={avatar} />
        <SubmenuItem name='Social Network' />
        <SubmenuItem name='Help' />
      </View>
      <View style={styles.logOutContainer}>
        <Button 
          onPress={onLogOut}
          activeOpacity={0.8}
          title='Logout' 
          buttonStyle={globalStyles.whiteBtn} 
          titleStyle={globalStyles.whiteBtnText}
          loading={LOG_OUT_PROCESS}
        />
      </View>
      
      
    </View>
  )
}

export default CompanyAccountDashboard