import { createSlice } from "@reduxjs/toolkit";
import { allPensionFormData } from "@/dummyData/pensionForm";

const initialAllPensionFormData = {
    allPensionFormData: allPensionFormData, // All PensionForm Data
};

const pensionFormSlice = createSlice({
  name: "form",
  initialState: initialAllPensionFormData,
  reducers: {
    addPensionForm: (state, action) => {
      state.allPensionFormData.push(action.payload);
    },
  },
});

export const {
    addPensionForm,
} = pensionFormSlice.actions;
export default pensionFormSlice.reducer;
