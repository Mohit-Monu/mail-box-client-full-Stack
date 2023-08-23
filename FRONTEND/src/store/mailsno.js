import { createSlice } from "@reduxjs/toolkit";

const initialnumberState = { inbox:0,sent:0,unread:0};
const mailNoSlice = createSlice({
  name: "mailno",
  initialState: initialnumberState,
  reducers: {
    SetNumber(state,action){
        state.inbox=action.payload.inbox
        state.sent=action.payload.sent
        state.unread=action.payload.unread
    },
    Setsent(state){
      state.sent=state.sent+1
  }
  },
});
export const mailnoAction = mailNoSlice.actions;
export default mailNoSlice.reducer;
