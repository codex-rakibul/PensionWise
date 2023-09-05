import { createSlice } from "@reduxjs/toolkit";
import { allPensionFormData } from "@/dummyData/pensionForm";

const initialAllPensionFormData = {
    allPensionFormData: allPensionFormData, // All PensionForm Data
};

const pensionFormSlice = createSlice({
  name: "form",
  initialState: initialAllPensionFormData,
  reducers: {
    // Apply New Form
    addPensionForm: (state, action) => {
      state.allPensionFormData.push(action.payload);
    },
    // Update Pension Form Status
    updateJuniorOfficerStatus: (state, action) => {
      const { userId, status } = action.payload;
      const userIndex = state.allPensionFormData.findIndex(
        (formData) => formData.userId === userId
      );
      if (userIndex !== -1) {
        state.allPensionFormData[userIndex].form_status.junior_officer = status;
      }
    },
    // Update Pension Form Status
    updateGenarelOfficerStatus: (state, action) => {
      const { userId, status } = action.payload;
      const userIndex = state.allPensionFormData.findIndex(
        (formData) => formData.userId === userId
      );
      if (userIndex !== -1) {
        state.allPensionFormData[userIndex].form_status.general_officer = status;
      }
    },
    // Update Pension Form Status
    updateHeadOfficerStatus: (state, action) => {
      const { userId, status } = action.payload;
      const userIndex = state.allPensionFormData.findIndex(
        (formData) => formData.userId === userId
      );
      if (userIndex !== -1) {
        state.allPensionFormData[userIndex].form_status.head_offficer = status;
      }
    },
  },
});

export const {
    addPensionForm,
    updateJuniorOfficerStatus,
    updateGenarelOfficerStatus,
    updateHeadOfficerStatus,
} = pensionFormSlice.actions;
export default pensionFormSlice.reducer;
