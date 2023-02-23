import { Valuable } from '@models/Valuable'
import { addValuable, removeValuable } from '@store/features/valuablesSlice'
import { valuablesSlice } from './valuablesSlice'

export const MOCKED_VALUABLE: Valuable = {
  id: 0,
  name: 'Valuable 1',
  description: 'Description 1',
  purchasePrice: 100,
  photo: '',
}

describe('valuablesSlice', () => {
  it('should handle initial state', () => {
    expect(valuablesSlice.reducer(undefined, { type: 'unknown' })).toEqual({ valuables: [] })
  })

  it('should handle a valuable being added to an empty list', () => {
    const previousState: { valuables: Valuable[] } = { valuables: [] }

    expect(valuablesSlice.reducer(previousState, addValuable(MOCKED_VALUABLE))).toEqual({
      valuables: [MOCKED_VALUABLE],
    })
  })

  it('should handle a valuable being added to an non empty list', () => {
    const previousState: { valuables: Valuable[] } = { valuables: [MOCKED_VALUABLE] }

    expect(valuablesSlice.reducer(previousState, addValuable(MOCKED_VALUABLE))).toEqual({
      valuables: [MOCKED_VALUABLE, { ...MOCKED_VALUABLE, id: 1 }],
    })
  })

  it('should handle a valuable being removed', () => {
    const previousState: { valuables: Valuable[] } = { valuables: [MOCKED_VALUABLE] }

    expect(valuablesSlice.reducer(previousState, removeValuable(MOCKED_VALUABLE))).toEqual({
      valuables: [],
    })
  })

  it('total valuables value should not exceed 40_000', () => {
    const previousState: { valuables: Valuable[] } = { valuables: [MOCKED_VALUABLE] }

    expect(
      valuablesSlice.reducer(
        previousState,
        addValuable({ ...MOCKED_VALUABLE, purchasePrice: 40000 }),
      ),
    ).toEqual({
      valuables: [MOCKED_VALUABLE],
    })
  })
})
