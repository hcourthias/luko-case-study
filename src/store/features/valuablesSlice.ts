import { Valuable } from '@models/Valuable'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@store/store'

const TOTAL_VALUE_LIMIT = 40_000 // 40k euros

type ValuablesState = {
  valuables: Valuable[]
}

const initialState: ValuablesState = { valuables: [] }

export const valuablesSlice = createSlice({
  name: 'valuables',
  initialState,
  reducers: {
    addValuable: (state, action: PayloadAction<Omit<Valuable, 'id'>>) => {
      const id = state.valuables.length > 0 ? Math.max(...state.valuables.map((v) => v.id)) + 1 : 0
      state.valuables.push({ id, ...action.payload })
    },
    removeValuable: (state, action: PayloadAction<Valuable>) => {
      const valuable = action.payload
      state.valuables = state.valuables.filter((v) => v.id !== valuable.id)
    },
  },
})

export const { addValuable, removeValuable } = valuablesSlice.actions

export const selectValuables = (state: RootState) => state.valuables.valuables
export const selectTotalValue = (state: RootState) =>
  state.valuables.valuables.reduce((acc, curr) => acc + curr.purchasePrice, 0)

export default valuablesSlice.reducer
