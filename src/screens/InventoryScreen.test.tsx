import { MOCKED_VALUABLE } from '@store/features/valuablesSlice.test'
import { render } from '@testing-library/react-native'
import { DefaultWrapper } from '@utils/tests/DefaultWrapper'
import InventoryScreen from './InventoryScreen'

describe('InventoryScreen', () => {
  it('renders correctly', () => {
    const { queryByTestId } = render(<InventoryScreen />, {
      wrapper: ({ children }) => (
        <DefaultWrapper
          initialState={{
            valuables: { valuables: [MOCKED_VALUABLE, { ...MOCKED_VALUABLE, id: 1 }] },
          }}
        >
          {children}
        </DefaultWrapper>
      ),
    })
    expect(queryByTestId('ValuableCard_0')).toBeTruthy()
    expect(queryByTestId('ValuableCard_1')).toBeTruthy()
    expect(queryByTestId('ValuableCard_2')).toBeFalsy()
  })
})
