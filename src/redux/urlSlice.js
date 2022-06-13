import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  urlList: []
}

export const getUrlList = createAsyncThunk('urlList/getUrlList', async (_, { rejectWithValue, dispatch }) => {
  const response = await axios.get('http://localhost:3001/urlList')
  dispatch(setUrlList(response.data))
})

export const createUrl = createAsyncThunk('addUrl/createUrl', async (data, { rejectWithValue, dispatch }) => {
  await axios.post('http://localhost:3001/urlList', data)
  dispatch(addUrl(data))
})

export const setViews = createAsyncThunk('setViews', async (data, { rejectWithValue, dispatch }) => {
  await axios.put(`http://localhost:3001/urlList/${data.id}`, data)
})

export const urlSlice = createSlice({
  name: 'urlList',
  initialState,
  reducers: {
    setUrlList: (state, action) => {
      state.urlList = action.payload
    },
    addUrl: (state, action) => {
      state.urlList.push(action.payload)
    }
  },
  extraReducers: {
    [getUrlList.rejected]: () => console.log('getUrlList >> rejected'),
    [createUrl.rejected]: () => console.log('createUrl >> rejected'),
    [setViews.rejected]: () => console.log('setViews >> rejected')
  }
})

export const { setUrlList, addUrl } = urlSlice.actions
export default urlSlice.reducer