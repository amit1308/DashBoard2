const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const detailsSchema = new Schema(
  {
    RESET: { type: String },
    ToggleRequest: { type: String },
    GatewayID: { type: String },
    OptimizerID: { type: String },
    CustomerName: { type: String },
    Zone: { type: String },
    Location: { type: String },
    FirstPowerOnObservation: { type: String },
    MaxCompressorTurnOffCountPerHour: { type: String },
    MaxObservationTime: { type: String },
    OptimizationTime: { type: String },
    SteadyStateRoomTemperatureTolerance: { type: String },
    SteadyStateCoilTemperatureTolerance: { type: String },
    SteadyStateSamplingDuration: { type: String },
    DeltaT: { type: String },
    MinAirConditionerOffDuration: { type: String },
    AirConditionerOffDeclarationMinPeriod: { type: String },
    GatewayUploadingRate: { type: String },
    thermostateInterval: { type: String },
    thermostateTimeIncrease: { type: String },
    Flag: {type: String}
  },
  {
    timestamps: true,
    toJSON: { getters: true },
  }
);

module.exports = mongoose.model("Details", detailsSchema, "details");
