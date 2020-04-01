import Toast from 'react-native-simple-toast'

export const openNotification = (type, message) => {
  Toast.showWithGravity(message, 2, Toast.TOP)
}