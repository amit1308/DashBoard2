import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  GatewayId: "",
  OptimizerId: "",
  client: null,
  CustomerName: "",
  Location: "",
  Zone: "",
};

export const gatewayOptimizerSlice = createSlice({
  name: "gatewayOpti",
  initialState,
  reducers: {
    updateGateway: (state, action) => {
      state.GatewayId = action.payload;
    },
    updateOptimizer: (state, action) => {
      state.OptimizerId = action.payload;
    },
    updateCustomerName: (state, action) => {
      state.CustomerName = action.payload;
    },
    updateLocation: (state, action) => {
      state.Location = action.payload;
    },
    updateZone: (state, action) => {
      state.Zone = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateGateway,
  updateOptimizer,
  updateCustomerName,
  updateLocation,
  updateZone,
} = gatewayOptimizerSlice.actions;

export default gatewayOptimizerSlice.reducer;
