import { fireEvent, render } from '@testing-library/react-native'
import AddButton from './AddButton'

describe('AddButton', () => {
  it('should call mockOnPress', () => {
    const mockOnPress = jest.fn()
    const { getByTestId } = render(<AddButton onPress={mockOnPress} />)

    const button = getByTestId('AddButton')

    fireEvent.press(button)

    expect(mockOnPress).toHaveBeenCalled()
  })
})
