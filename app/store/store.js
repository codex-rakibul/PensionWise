import { configureStore } from "@reduxjs/toolkit";
import allUserReducer from "../feature/allUsers/alluserSlice";
import allFormReducer from "../feature/pensionData/pensionFormSlice";
import alljuniorOfficerDataReducer from "../feature/juniorOfficer/juniorOfficerSlice";
import allGeneralOfficerDataReducer from "../feature/generalOfficer/generalOfficerSlice";

const store = configureStore({
  reducer: {
    // All User Reducer
    allUserReducer:allUserReducer,
    // All pension Form
    allFormReducer:allFormReducer,
    // All Junior Officer Data
    alljuniorOfficerDataReducer:alljuniorOfficerDataReducer,
    // All General Officer Data
    allGeneralOfficerDataReducer:allGeneralOfficerDataReducer,
  },
});

export default store;