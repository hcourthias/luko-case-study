import { RootState, setupStore } from '@store/store'
import { ReactElement } from 'react'
import { Provider } from 'react-redux'

export const DefaultWrapper = ({
  children,
  initialState,
}: {
  children: ReactElement
  initialState: RootState
}) => <Provider store={setupStore(initialState)}>{children}</Provider>
