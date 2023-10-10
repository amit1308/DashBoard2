import React from "react";
import "./Landing.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// import CircularPro from "../CircularPro/CircularPro";
// parent Card

const Card = ({ data }) => {
  return (
    <div className="cardSize">
      <CompactCard param={data} />
    </div>
  );
};

// Compact Card
function CompactCard({ param }) {
  // const Png = icons[param.id];
  return (
    <div className="">
     
      <div className="Progressbar2">
        <div     style={{display:'flex',flexDirection:"row",}}>
        <div>
          <CircularProgressbar
            strokeWidth={20}
            styles={buildStyles({
              textColor: "red",
              pathColor: "#6CE5E8",
              trailColor: "#41B8D5",
              
            })}
            // backgroundPadding={2}
            // background={true}
            value={param.RoomTemperature}
            // text={param.RoomTemperature}
          />
           <div>
            <h4 >Average room  </h4>
            <h4 style={{marginTop:"-15px"}} >temperature</h4>
          </div>
          </div>
         
          <div style={{ textAlign: "center" }}>
            <h4>{param.RoomTemperature}</h4>
          </div>
        
        </div>

        <div>
        <div style={{display:'flex',flexDirection:"row",}}>
          <CircularProgressbar
            strokeWidth={20}
            styles={buildStyles({
              textColor: "red",
              pathColor: "#6CE5E8",
              trailColor: "#41B8D5",
            })}
            value={param.CoilTemperature}
            // text={param.CoilTemperature}
          />
            <div style={{ paddingLeft:"15px",textAlign: "center" }}>
            <h4>{param.CoilTemperature}</h4>
            </div>
        
        </div>
    
            <div>
            <h4>Coil Temperature</h4>
            <h4 style={{marginTop:"-15px",color:"white"}}>..</h4>
          </div>
        </div>

        <div>
        <div style={{display:'flex',flexDirection:"row",}}>
          <CircularProgressbar
            strokeWidth={20}
            styles={buildStyles({
              // textColor: "red",
              pathColor: "#6CE5E8",
              trailColor: "#41B8D5",
            })}
            value={param["Humidity(%)"]}
            // text={` ${param["Humidity(%)"]}%`}
          />
            <div style={{ paddingLeft:"15px", textAlign: "center" }}>
        
        <h4>{` ${param["Humidity(%)"]}%`}</h4>
      </div>
          </div>
        
          <div>
          <h4>Average room</h4>
          <h4 style={{marginTop:"-15px"}}> humidity</h4>
          </div>
        </div>

    

      
      </div>
    </div>
  );
}

export default Card;
