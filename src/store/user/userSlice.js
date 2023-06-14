import {
  createAsyncThunk,
  createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const createUser = createAsyncThunk('users/createUser', async (payload, thunkAPI) => {
  try {
    const res = await axios.post(`${BASE_URL}/users`, payload);
    return res.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const updateUser = createAsyncThunk('users/updateUser', async (payload, thunkAPI) => {
  try {
    const res = await axios.put(`${BASE_URL}/users/${payload.id}`, payload);
    return res.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const userLogin = createAsyncThunk('users/userLogin', async (payload, thunkAPI) => {
  try {
    const res = await axios.post(`${BASE_URL}/auth/login`, payload);
    const login = await axios(`${BASE_URL}/auth/profile`, {
      headers: {
        'Authorization': `Bearer ${res.data.access_token}`
      }
    });

    return login.data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

const addCurrentUser = (state, { payload }) => {
  state.currentUser = payload;
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null ,
    cart: [],
    isLoading: false,
    formType: 'signup',
    showForm: false
  },
  reducers: {
    addProductToCart: (state, {payload}) => {
      let newCart = [...state.cart];
      const productInCart = state.cart.find(({ id }) => id === payload.id);

      if (productInCart) {
        newCart = newCart.map(item => {
          return item.id === payload.id
            ? {...item, quantity: payload.quantity || item.quantity + 1}
            : item;
        });
      } else {
        newCart.push({ ...payload, quantity: 1 });
      }

      state.cart = newCart;
    },
    toggleForm: (state, { payload }) => {
      state.showForm = payload;
    },
    toggleFormType: (state, { payload }) => {
      state.formType = payload;
    },
    removeProductFromCart: (state, {payload}) => {
      state.cart = state.cart.filter(({id}) => id !== payload)
    }
  },
  extraReducers: (builder) => {
    // builder.addCase(getCategories.pending, (state) => {
    //   state.isLoading = true;
    // });
    builder.addCase(createUser.fulfilled, addCurrentUser);
    builder.addCase(userLogin.fulfilled, addCurrentUser);
    builder.addCase(updateUser.fulfilled, addCurrentUser);
    // builder.addCase(getCategories.rejected, (state) => {
    //   state.isLoading = false;
    // });
  }
});

export const { addProductToCart, toggleForm, toggleFormType, removeProductFromCart } = userSlice.actions;
export default userSlice.reducer;