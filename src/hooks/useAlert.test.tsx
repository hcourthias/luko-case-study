import { act, renderHook } from '@testing-library/react-native'
import { ActionSheetIOS, Alert } from 'react-native'
import useAlert from './useAlert'
import * as platform from '@helpers/platform'

jest.spyOn(Alert, 'alert')
jest.spyOn(ActionSheetIOS, 'showActionSheetWithOptions')

jest.mock('react-native', () => {
  const RN = jest.requireActual('react-native')

  return Object.setPrototypeOf(
    {
      ActionSheetIOS: {
        ...RN.ActionSheetIOS,
        showActionSheetWithOptions: jest.fn(),
      },
    },
    RN,
  )
})

const MOCK_ALERT = {
  title: 'Add a photo',
  description: 'Choose a photo from your library or take a new one',
  actions: [
    {
      text: 'Take a photo',
      onPress: jest.fn(),
      destructive: true,
    },
    {
      text: 'Choose in the library',
      onPress: jest.fn(),
    },
  ],
}

describe('useAlert', () => {
  it('should use ActionSheetIOS on ios', () => {
    jest.spyOn(platform, 'isAndroid').mockImplementationOnce(() => false)
    const { result } = renderHook(() => useAlert())
    act(() => result.current.showAlert(MOCK_ALERT))
    expect(ActionSheetIOS.showActionSheetWithOptions).toHaveBeenCalled()
  })

  it('should use Alert on android', () => {
    jest.spyOn(platform, 'isAndroid').mockImplementationOnce(() => true)
    const { result } = renderHook(() => useAlert())
    act(() => result.current.showAlert(MOCK_ALERT))
    expect(Alert.alert).toHaveBeenCalled()
  })
})
