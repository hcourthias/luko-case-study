import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import { valuablesSlice } from './features/valuablesSlice'

const reducers = combineReducers({
  valuables: valuablesSlice.reducer,
})

export type RootState = ReturnType<typeof reducers>

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
    preloadedState,
  })
}
