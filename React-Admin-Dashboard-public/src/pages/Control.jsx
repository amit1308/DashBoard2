import React, { useState } from "react";
import Heading from "../LandinPage/Heading/Heading";
import axios from "axios";
import { useSelector } from "react-redux";


const Analytics = () => {
  const [inputText, setinputText] = useState("");
  const [inputText1, setinputText1] = useState("");
  const [inputText2, setinputText2] = useState("");
  const [inputText3, setinputText3] = useState("");
  const [inputText4, setinputText4] = useState("");
  const [inputText5, setinputText5] = useState("");
  const [inputText6, setinputText6] = useState("");
  const [inputText7, setinputText7] = useState("");
  const [inputText8, setinputText8] = useState("");
  const [inputText9, setinputText9] = useState("");
  const [inputText10, setinputText10] = useState("");
  const [inputText11, setinputText11] = useState("");
  const [inputText12, setinputText12] = useState("");
  const [gatewayId, setGatewayId] = useState("");
  const [optimizerId, setOptimizerId] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [zone, setZone] = useState("");
  const [location, setLocation] = useState("");
  const [reset, setReset] = useState("1");

  // data(gatewayId, optimizerId)
  async function dataopti(
    OptimizerId,
    GatewayId,
    CustomerName,
    Zone,
    Location
  ) {
    setGatewayId(GatewayId);
    setOptimizerId(OptimizerId);
    setCustomerName(CustomerName);
    setZone(Zone);
    setLocation(Location);
  }

  // CustomerName come from redux

  const opti = useSelector((state) => {
    // console.log(
    //   "similar",
    //   state.gatewayOptimizer.CustomerName,
    //   state.gatewayOptimizer.Location,
    //   state.gatewayOptimizer.Zone
    // );
  });

  const handleInputChange = (event) => {
    setinputText(event.target.value);
  };
  const handleInputChange1 = (event) => {
    const time = event.target.value;
    setinputText1(time);
  };
  const handleInputChange2 = (event) => {
    setinputText2(event.target.value);
  };
  const handleInputChange3 = (event) => {
    setinputText3(event.target.value);
  };
  const handleInputChange4 = (event) => {
    setinputText4(event.target.value);
  };
  const handleInputChange5 = (event) => {
    setinputText5(event.target.value);
  };
  const handleInputChange6 = (event) => {
    setinputText6(event.target.value);
  };
  const handleInputChange7 = (event) => {
    setinputText7(event.target.value);
  };
  const handleInputChange8 = (event) => {
    setinputText8(event.target.value);
  };
  const handleInputChange9 = (event) => {
    setinputText9(event.target.value);
  };
  const handleInputChange10 = (event) => {
    setinputText10(event.target.value);
  };
  const handleInputChange11 = (event) => {
    setinputText11(event.target.value);
  };
  const handleInputChange12 = (event) => {
    setinputText12(event.target.value);
  };

  

  const set = async () => {
    setinputText("");
    setinputText1("");
    setinputText2("");
    setinputText3("");
    setinputText4("");
    setinputText5("");
    setinputText6("");
    setinputText7("");
    setinputText8("");
    setinputText9("");
    setinputText10("");
    setinputText11("");
    setinputText12("");

    const response = await axios.post(
      "http://3.106.217.161:5000/controlData",
      // "http://localhost:1234/controlData",

      {
        // RESET: "",
        // ToggleRequest: "",
        CustomerName: customerName,
        Zone: zone,
        Location: location,
        GatewayID: gatewayId,
        OptimizerID: optimizerId,
        FirstPowerOnObservation: inputText,
        MaxCompressorTurnOffCountPerHour: inputText1,
        MaxObservationTime: inputText10,
        OptimizationTime: inputText2,
        SteadyStateRoomTemperatureTolerance: inputText3,
        SteadyStateCoilTemperatureTolerance: inputText4,
        SteadyStateSamplingDuration: inputText5,
        DeltaT: inputText6,
        MinAirConditionerOffDuration: inputText7,
        AirConditionerOffDeclarationMinPeriod: inputText8,
        GatewayUploadingRate: inputText9,
        thermostateInterval: inputText11,
        thermostateTimeIncrease: inputText12,
        // Flag:"1"
      }
    );

    return response.data;
  };

  const Reset = async () => {
    setinputText("");
    setinputText1("");
    setinputText2("");
    setinputText3("");
    setinputText4("");
    setinputText5("");
    setinputText6("");
    setinputText7("");
    setinputText8("");
    setinputText9("");
    setinputText10("");
    setinputText11("");
    setinputText12("");

    const response = await axios.post(
      "http://3.106.217.161:5000/controlData",
      // "http://localhost:1234/controlData",

      {
        RESET: reset,
        // ToggleRequest: "",
        CustomerName: customerName,
        Zone: zone,
        Location: location,
        GatewayID: gatewayId,
        OptimizerID: optimizerId,
        FirstPowerOnObservation: inputText,
        MaxCompressorTurnOffCountPerHour: inputText1,
        MaxObservationTime: inputText10,
        OptimizationTime: inputText2,
        SteadyStateRoomTemperatureTolerance: inputText3,
        SteadyStateCoilTemperatureTolerance: inputText4,
        SteadyStateSamplingDuration: inputText5,
        DeltaT: inputText6,
        MinAirConditionerOffDuration: inputText7,
        AirConditionerOffDeclarationMinPeriod: inputText8,
        GatewayUploadingRate: inputText9,
        thermostateInterval: inputText11,
        thermostateTimeIncrease: inputText12,
        // Flag:"1"

      }
    );

    return response.data;
  };

  return (
    <div style={{ background: `linear-gradient( #e9feef 0%, #628adade 100%)` }}>
      <div
        style={{
          height: "100%",
          width: "100%",
          // position: " sticky",
          //  top: 0
        }}
      >
        <div>
        <Heading dataopti={dataopti} />
        </div>
      </div>
      <div style={{ padding: "3px", marginLeft: "20px" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <p>FirstPowerOnObservation</p>
          </div>
          <div style={{ width: "50%", marginTop: "15px" }}>
            <input
              type="text"
              value={inputText}
              onChange={handleInputChange}
              placeholder="Enter text"
            />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <p>MaxCompressorTurnOffCountPerHour</p>
          </div>
          <div style={{ width: "50%", marginTop: "15px" }}>
            <input
              type="text"
              value={inputText1}
              onChange={handleInputChange1}
              placeholder="Enter text"
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <p>OptimizationTime</p>
          </div>
          <div style={{ width: "50%", marginTop: "15px" }}>
            <input
              type="text"
              value={inputText2}
              onChange={handleInputChange2}
              placeholder="Enter text"
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <p>SteadyStateRoomTemperatureTolerance</p>
          </div>
          <div style={{ width: "50%", marginTop: "15px" }}>
            <input
              type="text"
              value={inputText3}
              onChange={handleInputChange3}
              placeholder="Enter text"
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <p>SteadyStateCoilTemperatureTolerance</p>
          </div>
          <div style={{ width: "50%", marginTop: "15px" }}>
            <input
              type="text"
              value={inputText4}
              onChange={handleInputChange4}
              placeholder="Enter text"
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <p>SteadyStateSamplingDuration</p>
          </div>
          <div style={{ width: "50%", marginTop: "15px" }}>
            <input
              type="text"
              value={inputText5}
              onChange={handleInputChange5}
              placeholder="Enter text"
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <p>DeltaT</p>
          </div>
          <div style={{ width: "50%", marginTop: "15px" }}>
            <input
              type="text"
              value={inputText6}
              onChange={handleInputChange6}
              placeholder="Enter text"
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <p>MinAirConditionerOffDuration</p>
          </div>
          <div style={{ width: "50%", marginTop: "15px" }}>
            <input
              type="text"
              value={inputText7}
              onChange={handleInputChange7}
              placeholder="Enter text"
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <p>AirConditionerOffDeclarationMinPeriod</p>
          </div>
          <div style={{ width: "50%", marginTop: "15px" }}>
            <input
              type="text"
              value={inputText8}
              onChange={handleInputChange8}
              placeholder="Enter text"
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <p>GatewayUploadingRate</p>
          </div>
          <div style={{ width: "50%", marginTop: "15px" }}>
            <input
              type="text"
              value={inputText9}
              onChange={handleInputChange9}
              placeholder="Enter text"
            />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <p>MaxObservationTime</p>
          </div>
          <div style={{ width: "50%", marginTop: "15px" }}>
            <input
              type="text"
              value={inputText10}
              onChange={handleInputChange10}
              placeholder="Enter text"
            />
          </div>
        </div>

     

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <p>ThermoStateTimeIncrease</p>
          </div>
          <div style={{ width: "50%", marginTop: "15px" }}>
            <input
              type="text"
              value={inputText11}
              onChange={handleInputChange11}
              placeholder="Enter text"
            />
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ width: "50%" }}>
            <p>ThermoStateInterval</p>
          </div>
          <div style={{ width: "50%", marginTop: "15px" }}>
            <input
              type="text"
              value={inputText12}
              onChange={handleInputChange12}
              placeholder="Enter text"
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // position: " sticky",
            // bottom: 0,
            // backgroundColor: "#628adade",
          }}
        >
          <div style={{ width: "50%", marginLeft: "160px" }}>
            <button
              style={{
                color: "white",
                backgroundColor: "#55608f",
                borderRadius: 10,
                width: 200,
                height: 45,
                marginLeft: "25%",
                // marginTop: "3.6%",
                cursor: "pointer",
                ":hover": {
                  backgroundColor: "darkblue",
                },
              }}
              onClick={set}
            >
              Set
            </button>
          </div>
          <div style={{ width: "50%", marginLeft: "250px" }}>
            <button
              style={{
                color: "white",
                backgroundColor: "#55608f",
                borderRadius: 10,
                width: 200,
                height: 45,
                marginLeft: "25%",
                // marginTop: "3.6%",
                cursor: "pointer",
                ":hover": {
                  backgroundColor: "darkblue",
                },
              }}
              onClick={Reset}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
