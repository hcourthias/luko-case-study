import { MOCKED_VALUABLE } from '@store/features/valuablesSlice.test'
import { setupStore } from '@store/store'
import { render } from '@testing-library/react-native'
import { Provider } from 'react-redux'
import InventoryScreen from './InventoryScreen'

const mockNavigation = {
  navigate: jest.fn(),
  setOptions: jest.fn(),
}

describe('InventoryScreen', () => {
  it('renders correctly', () => {
    const { queryByTestId } = render(<InventoryScreen />, {
      wrapper: ({ children }) => (
        <Provider
          store={setupStore({
            valuables: { valuables: [MOCKED_VALUABLE, { ...MOCKED_VALUABLE, id: 1 }] },
          })}
        >
          {children}
        </Provider>
      ),
    })
    expect(queryByTestId('ValuableCard_0')).toBeTruthy()
    expect(queryByTestId('ValuableCard_1')).toBeTruthy()
    expect(queryByTestId('ValuableCard_2')).toBeFalsy()
  })
})
