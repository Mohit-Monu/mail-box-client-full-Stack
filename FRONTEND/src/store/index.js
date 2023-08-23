import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth"
import mailsnoReducer from "./mailsno"

const store = configureStore({
  reducer: { mailsno: mailsnoReducer, auth: authReducer},
});
export default store;