import { isAndroid } from '@helpers/platform'
import { ActionSheetIOS, Alert as RNAlert } from 'react-native'

interface Alert {
  title: string
  description?: string
  actions: {
    text: string
    onPress: () => void
    destructive?: boolean
  }[]
}

const useAlert = () => {
  const showAlert = ({ title, description, actions }: Alert) => {
    if (isAndroid()) {
      return RNAlert.alert(title, description, actions, {
        cancelable: true,
      })
    }

    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [...actions.map((a) => a.text), 'Cancel'],
        cancelButtonIndex: actions.length,
        title: title,
        message: description,
        userInterfaceStyle: 'light',
        destructiveButtonIndex: actions.findIndex((a) => a.destructive),
      },
      (buttonIndex) => {
        if (buttonIndex === actions.length) {
          return
        }

        actions[buttonIndex].onPress()
      },
    )
  }

  return {
    showAlert,
  }
}

export default useAlert
