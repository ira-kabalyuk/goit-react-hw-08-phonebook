
import { createAsyncThunk, createSlice, isAnyOf } from "@reduxjs/toolkit";

import {loginRequest, logoutRequest, refreshRequest, setToken, signUpRequest } from "services/api";


export const apiRegisterUser = createAsyncThunk('auth/apiRegisterUser', async (formData, thunkApi) => {
  try {
    const data = await signUpRequest(formData);
    // console.log(data) {user: {name 'name', email: 'user@gmail.com'}, token: 'jhrgskjhtgkht} приходить з запиту
    // в Арр:
    // const dispatch = useDispatch();
    // useEffect(() => {
    // dispatch(apiRefreshUser())
    // }, [dispatch]);
    setToken(data.token)
    thunkApi.dispatch(authSlice.actions.setErrorCode(null));
    return data;
  } catch (error) {
    thunkApi.dispatch(authSlice.actions.setErrorCode(error.response.status));
    return thunkApi.rejectWithValue(error.message)
  }
});

export const apiLoginUser = createAsyncThunk('auth/apiLoginUser', async (formData, thunkApi) => {
  try {
    const data = await loginRequest(formData);   
    setToken(data.token)
    thunkApi.dispatch(authSlice.actions.setErrorCode(null));
    return data;
  } catch (error) {
    thunkApi.dispatch(authSlice.actions.setErrorCode(error.response.status));
    return thunkApi.rejectWithValue(error.message);
  }
});

//apiRefreshUser для того, щоб після завантаження сторінки стейт не скидувався до initialState. Для цього потрібен токен
export const apiRefreshUser = createAsyncThunk('auth/apiRefreshUser', async (_, thunkApi) => {
  const state = thunkApi.getState() // метод thunkApi для отримання стейту
  const token = state.auth.token;
  if (!token) return thunkApi.rejectWithValue('You don`t have token')
  try {
    setToken(token)
    const data = await refreshRequest();
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
});

export const apiLogoutUser = createAsyncThunk('auth/apiLogoutUser', async (_, thunkApi) => {
  try {
    await logoutRequest();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message)
  }
});


const initialState = {
  token: null,
  isLoggedIn: false,
  userData: null,
  error: null,
  errorCode: null,
  isLoading: false,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setErrorCode(state, action) {
      state.errorCode = action.payload;
    },   
  },
  extraReducers: (builder) => builder
    .addCase(apiRegisterUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.userData = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(apiLoginUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.userData = action.payload.user;
      state.token = action.payload.token;
    })
    .addCase(apiRefreshUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.userData = action.payload;
    })
    .addCase(apiLogoutUser.fulfilled, () => {
      return initialState;
    })

    .addMatcher(
      isAnyOf(
        apiRegisterUser.pending,
        apiLoginUser.pending,
        apiRefreshUser.pending,
        apiLogoutUser.pending,
      ),
      state => {
        state.isLoading = true;
        state.error = null;
      }
    )
    .addMatcher(
      isAnyOf(
        apiRegisterUser.rejected,
        apiLoginUser.rejected,
        apiRefreshUser.rejected,
        apiLogoutUser.rejected,
      ),
      (state, action) => {
        state.isLoading = false;
        state.error = action.payload;        
      }
    ),
});


export const authReducer = authSlice.reducer;
