import { fireEvent, render } from '@testing-library/react-native'
import { colors } from '@theme/colors'
import Button from './Button'

describe('Button', () => {
  it('should renderCorrectly', () => {
    const mockOnPress = jest.fn()
    const { getByTestId } = render(<Button onPress={mockOnPress} title={'test'} />)

    const button = getByTestId('Button')
    const buttonTitle = getByTestId('Button_Title')

    fireEvent.press(button)

    expect(mockOnPress).toHaveBeenCalled()
    expect(buttonTitle).toHaveTextContent('test')
    expect(buttonTitle).toHaveStyle({ color: colors.mainBlue })
  })
  it('disabled', () => {
    const mockOnPress = jest.fn()
    const { getByTestId } = render(<Button onPress={mockOnPress} title={'test'} disabled />)

    const button = getByTestId('Button')
    const buttonTitle = getByTestId('Button_Title')

    fireEvent.press(button)

    expect(mockOnPress).not.toHaveBeenCalled()
    expect(buttonTitle).toHaveStyle({ color: colors.gray[300] })
  })
})
