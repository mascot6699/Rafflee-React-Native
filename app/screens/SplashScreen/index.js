import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { SafeAreaView } from 'react-native'
import { Thumbnail } from 'native-base'
import { NavigationActions } from "react-navigation";
import images from '../../utils/images'
import styles from './styles'

const SplashScreen = () => {

	const dispatch = useDispatch()

	useEffect(() => {
		setTimeout(() => {
			dispatch(NavigationActions.navigate({routeName: 'MainScreen'}))
		}, 2500)
		
	}, [])
	return (
		<SafeAreaView style={styles.container}>
			<Thumbnail 
				square 
				source={images.splash}
				style={styles.splashImg}
				resizeMode='stretch'
			/>
		</SafeAreaView>
	)
}

export default SplashScreen