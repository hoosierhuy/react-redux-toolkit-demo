// Libraries
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

// App Level
import { RootState } from './store'
import { UserState } from '../types'

type initialStateType = {
  userList: UserState[]
}

const userList: UserState[] = [
  {
    id: '1', // I'm casting this id to a single char because the unit test can't work with uuidv4
    username: 'Huy',
    favoriteColor: 'red',
  },
  {
    id: uuidv4(),
    username: 'Raphael',
    favoriteColor: 'green',
  },
]

const initialState: initialStateType = {
  userList,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<UserState>) => {
      state.userList.push(action.payload)
    },

    deleteUser: (state, action: PayloadAction<{ id: string }>) => {
      state.userList = state.userList.filter(
        (user) => user.id !== action.payload.id
      )
    },
  },
})

export const { addNewUser, deleteUser } = userSlice.actions

export const selectUserList = (state: RootState) => state.user.userList

export default userSlice.reducer
