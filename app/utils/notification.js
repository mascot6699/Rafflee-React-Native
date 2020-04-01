import Toast from 'react-native-root-toast'
import { scaleHeight } from './styles/mixins'

export const openNotification = (type, message) => {
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: scaleHeight(50),
    opacity: 1,
    animation: true,
    hideOnPress: true,
    backgroundColor: 'white',
    textColor: type === 'success' ? 'green' : 'red'
  })
}