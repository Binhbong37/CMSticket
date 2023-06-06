import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { getProfileFromLS } from '../utils/auth'
// import User from '~/types/user.type'

interface Type {
  isAuthenticated: boolean
  profile: any | null
}

const initialState: Type = {
  isAuthenticated: Boolean(getProfileFromLS()),
  profile: getProfileFromLS()
}

const authenticateSlice = createSlice({
  initialState,
  name: 'authenticate',
  reducers: {
    setIsAuthenticated: (state, actions: PayloadAction<boolean>) => {
      console.log('IsAuth', actions)
      state.isAuthenticated = actions.payload
    },
    setProfile: (state, actions: PayloadAction<any | null>) => {
      console.log('Profile', actions)

      state.profile = actions.payload
    }
  }
})

const { actions, reducer } = authenticateSlice
export const { setIsAuthenticated, setProfile } = actions
export default reducer
