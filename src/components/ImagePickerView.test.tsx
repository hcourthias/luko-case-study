import { fireEvent, render } from '@testing-library/react-native'
import { ActionSheetIOS, Alert } from 'react-native'
import { ImagePickerView } from './ImagePickerView'

const mockOnImageAvailable = jest.fn()
const mockOnDelete = jest.fn()

jest.mock('react-native/Libraries/Utilities/Platform', () => ({
  OS: 'android', // or 'ios'
  select: () => null,
}))

jest.spyOn(Alert, 'alert')
jest.spyOn(ActionSheetIOS, 'showActionSheetWithOptions')

describe('ImagePickerView', () => {
  it('render imageUri is null', () => {
    const { queryByTestId } = render(
      <ImagePickerView onImageAvailable={mockOnImageAvailable} onDelete={mockOnDelete} />,
    )

    const emptyView = queryByTestId('ImagePickerView_Empty')

    expect(queryByTestId('ImagePickerView')).toBeFalsy()
    expect(emptyView).toBeTruthy()

    fireEvent.press(emptyView)
    expect(Alert.alert).toHaveBeenCalled()
  })

  it('render imageUri is not null', () => {
    const { queryByTestId } = render(
      <ImagePickerView
        onImageAvailable={mockOnImageAvailable}
        onDelete={mockOnDelete}
        imageUri={'test'}
      />,
    )

    const view = queryByTestId('ImagePickerView')

    expect(view).toBeTruthy()
    expect(queryByTestId('ImagePickerView_Empty')).toBeFalsy()
    fireEvent.press(view)
    expect(mockOnDelete).toHaveBeenCalled()
  })
})
