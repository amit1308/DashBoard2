import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  GatewayId:"",
  OptimizerId:""
}

export const gatewayOptimizerSlice = createSlice({
  name: 'gatewayOpti',
  initialState,
  reducers: {
    updateGateway:(state,action)=>{
      state.GatewayId = action.payload;
    },
    updateOptimizer:(state,action)=>{
      state.OptimizerId = action.payload;
    }
  },
})
 
// Action creators are generated for each case reducer function
export const { updateGateway, updateOptimizer } = gatewayOptimizerSlice.actions

export default gatewayOptimizerSlice.reducer;