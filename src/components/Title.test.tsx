import { fireEvent, render } from '@testing-library/react-native'
import { Title } from './Title'

describe('Title', () => {
  it('should renderCorrectly', () => {
    const mockOnPress = jest.fn()
    const { getByTestId } = render(<Title onButtonPress={mockOnPress}>test</Title>)

    const button = getByTestId('AddButton')
    const titleText = getByTestId('Title_Text')

    fireEvent.press(button)

    expect(mockOnPress).toHaveBeenCalled()
    expect(titleText).toHaveTextContent('test')
  })
  it('without button', () => {
    const { queryByTestId } = render(<Title>test</Title>)

    const button = queryByTestId('AddButton')

    expect(button).toBeFalsy()
  })
})
