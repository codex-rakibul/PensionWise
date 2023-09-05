import { configureStore } from "@reduxjs/toolkit";
import allUserReducer from "../feature/allUsers/alluserSlice";
import allFormReducer from "../feature/pensionData/pensionFormSlice";

const store = configureStore({
  reducer: {
    // All User Reducer
    allUserReducer:allUserReducer,
    // All pension Form
    allFormReducer:allFormReducer,
  },
});

export default store;