import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  GatewayId:"",
  OptimizerId:"",
  client:null
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
    // ,
    // updateClient:(state,action)=>{
    //   state.client = action.payload;
    // }
  },
})
 
// Action creators are generated for each case reducer function
export const { updateGateway, updateOptimizer,
  // updateClient
 } = gatewayOptimizerSlice.actions

export default gatewayOptimizerSlice.reducer;