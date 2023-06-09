import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import manageTicketReducer from './manageTicketSlice'
import packageReducer from './packageSlice'

const store = configureStore({
  reducer: {
    manage: manageTicketReducer,
    package: packageReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
