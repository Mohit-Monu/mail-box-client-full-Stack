import { createSlice } from "@reduxjs/toolkit";

let local = false;
if (localStorage.getItem("token") != null) {
  local = true;
}
const initialAuthState = { isAuthenticated: local};
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
