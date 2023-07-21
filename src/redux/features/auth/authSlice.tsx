import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface User {
  createdAt: string;
  email: string;
  id: string;
  name: {
    firstName: string;
    lastName: string;
    _id: string;
    id: string;
  };
  updatedAt: string;
  __v: number;
  _id: string;
  userId: string;
}
interface AuthState {
  accessToken?: string | null;
  user?: User | null;
}

const initialState: AuthState = {
  accessToken: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn: (
      state,
      action: PayloadAction<{ accessToken: string; user: User }>,
    ) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
    },
    userLoggedOut: (state) => {
      state.accessToken = null;
      state.user = null;
    },
  },
});

export const { userLoggedIn, userLoggedOut } = authSlice.actions;
export default authSlice.reducer;

// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
// } from 'firebase/auth';

// interface IUserState {
//   user: {
//     email: string | null;
//   };
//   isLoading: boolean;
//   isError: boolean;
//   error: string | null;
// }

// interface ICredential {
//   email: string;
//   password: string;
// }

// const initialState: IUserState = {
//   user: {
//     email: null,
//   },
//   isLoading: false,
//   isError: false,
//   error: null,
// };

// export const createUser = createAsyncThunk(
//   'user/createUser',
//   async ({ email, password }: ICredential) => {
//     const data = await createUserWithEmailAndPassword(auth, email, password);

//     return data.user.email;
//   }
// );

// export const loginUser = createAsyncThunk(
//   'user/loginUser',
//   async ({ email, password }: ICredential) => {
//     const data = await signInWithEmailAndPassword(auth, email, password);

//     return data.user.email;
//   }
// );

// const userSlice = createSlice({
//   name: 'user ',
//   initialState,
//   reducers: {
//     setUser: (state, action: PayloadAction<string | null>) => {
//       state.user.email = action.payload;
//     },
//     setLoading: (state, action: PayloadAction<boolean>) => {
//       state.isLoading = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(createUser.pending, (state) => {
//         state.isLoading = true;
//         state.isError = false;
//         state.error = null;
//       })
//       .addCase(createUser.fulfilled, (state, action) => {
//         state.user.email = action.payload;
//         state.isLoading = false;
//       })
//       .addCase(createUser.rejected, (state, action) => {
//         state.user.email = null;
//         state.isLoading = false;
//         state.isError = true;
//         state.error = action.error.message!;
//       })
//       .addCase(loginUser.pending, (state) => {
//         state.isLoading = true;
//         state.isError = false;
//         state.error = null;
//       })
//       .addCase(loginUser.fulfilled, (state, action) => {
//         state.user.email = action.payload;
//         state.isLoading = false;
//       })
//       .addCase(loginUser.rejected, (state, action) => {
//         state.user.email = null;
//         state.isLoading = false;
//         state.isError = true;
//         state.error = action.error.message!;
//       });
//   },
// });

// export const { setUser, setLoading } = userSlice.actions;

// export default userSlice.reducer;
