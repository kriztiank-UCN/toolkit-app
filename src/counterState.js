import {createSlice} from 'from @redux/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  // Get
  initialState: {
    value: 0
  },
  // Set
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    }
  }
})

export const {increment, decrement} = counterSlice.actions

export default counterSlice.reducer