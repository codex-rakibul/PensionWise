import { createSlice } from "@reduxjs/toolkit";
import { allJuniorOfficer } from "@/dummyData/juniorOfficer";

const initialjuniorOfficerData = {
    alljuniorOfficerData: allJuniorOfficer, 
};

const juniorOfficerSlice = createSlice({
  name: "form",
  initialState: initialjuniorOfficerData,
  reducers: {
    addJuniorOfficerStatus: (state, action) => {
      state.alljuniorOfficerData.push(action.payload);
    },
    updateJuniorOfficerComplains: (state, action) => {
      const userIdToUpdate = action.payload;
      const userToUpdate = state.alljuniorOfficerData.find(
        (user) => user.userId === userIdToUpdate
      );
      if (userToUpdate) {
        userToUpdate.complains += 1; // Increment complain count
      }
    },
  },
});

export const {
  addJuniorOfficerStatus,
  updateJuniorOfficerComplains,
} = juniorOfficerSlice.actions;
export default juniorOfficerSlice.reducer;
