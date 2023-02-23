import { ValuableCard } from '@components/ValuableCard'
import { Valuable } from '@models/Valuable'
import { fireEvent, render } from '@testing-library/react-native'

const MOCKED_VALUABLE: Valuable = {
  id: 1,
  name: 'Valuable 1',
  description: 'Description 1',
  purchasePrice: 100,
  photo: '',
}

describe('ValuableCard', () => {
  it('should render correctly', () => {
    const { getByTestId } = render(<ValuableCard valuable={MOCKED_VALUABLE} />)

    const title = getByTestId(`ValuableCard_${MOCKED_VALUABLE.id}`)
    const price = getByTestId(`ValuableCard_${MOCKED_VALUABLE.id}_Price`)
    const image = getByTestId(`ValuableCard_${MOCKED_VALUABLE.id}_Image`)

    expect(title).toHaveTextContent(MOCKED_VALUABLE.name)
    expect(price).toHaveTextContent(`€${MOCKED_VALUABLE.purchasePrice}`)
    expect(image).toHaveProp('source', { uri: MOCKED_VALUABLE.photo })
  })
  it('should call mockOnPress when pressing card', () => {
    const mockOnPress = jest.fn()

    const { getByTestId } = render(
      <ValuableCard valuable={MOCKED_VALUABLE} onPress={mockOnPress} />,
    )

    const valuableCard = getByTestId(`ValuableCard_${MOCKED_VALUABLE.id}`)

    fireEvent.press(valuableCard)

    expect(mockOnPress).toHaveBeenCalled()
  })
})
