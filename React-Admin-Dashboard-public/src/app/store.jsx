import { configureStore } from '@reduxjs/toolkit'
import gatewayOptimizerReducer from '../features/gatewayOptimizerSlice'

export const store = configureStore({
  reducer: {
    gatewayOptimizer: gatewayOptimizerReducer,

  },

})