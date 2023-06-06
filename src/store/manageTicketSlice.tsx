import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { doc, setDoc, updateDoc } from 'firebase/firestore'
import { db } from '../firebase';
// import TicketType from '~/types/TicketType'

interface Types {
  updateItem: any | null
  checkItem: any | null
  isAddTicket: boolean
  isFilterTicket: boolean
}

const initialState: Types = {
  updateItem: null,
  checkItem: null,
  isAddTicket: false,
  isFilterTicket: false
}

export const addTicket = createAsyncThunk('ticket/addTicket', async (formAdd: any) => {
  const ref = doc(db, 'tickets', formAdd.id.toString())
  await setDoc(ref, formAdd)
})

export const updateDateTicket = createAsyncThunk(
  'ticket/updateTicket',
  async (formUpdate: { id: number; updateDate: number }) => {
    const ref = doc(db, 'tickets', formUpdate.id.toString())
    await updateDoc(ref, {
      useDate: formUpdate.updateDate
    })
  }
)

export const checkTicket = createAsyncThunk(
  'ticket/checkTicket',
  async (formUpdate: { id: number; checkStatus: string }) => {
    const ref = doc(db, 'tickets', formUpdate.id.toString())
    await updateDoc(ref, {
      checkStatus: formUpdate.checkStatus
    })
  }
)

const manageTicketSlice = createSlice({
  initialState,
  name: 'manage_ticket',
  reducers: {
    startAdd: (state) => {
      console.log('add')
      state.isAddTicket = true;
      console.log(state)
    },
    cancelAdd: (state) => {
      state.isAddTicket = false
    },
    startUpdate: (state, actions: PayloadAction<any>) => {
      state.updateItem = actions.payload
    },
    cancelUpdate: (state) => {
      state.updateItem = null
    },
    startFilter: (state) => {
      state.isFilterTicket = true
    },
    cancelFilter: (state) => {
      state.isFilterTicket = false
    },
    startCheck: (state, actions: PayloadAction<any>) => {
      state.checkItem = actions.payload
    },
    cancelCheck: (state) => {
      state.checkItem = null
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(updateDateTicket.fulfilled, () => {
        console.log('success')
      })
      .addCase(addTicket.fulfilled, () => {
        console.log('success')
      })
      .addCase(checkTicket.fulfilled, () => {
        console.log('success')
      })
  }
})

const { actions, reducer } = manageTicketSlice
export const {
  startAdd,
  cancelAdd,
  startUpdate,
  cancelUpdate,
  cancelFilter,
  startFilter,
  cancelCheck,
  startCheck
} = actions
export default reducer
