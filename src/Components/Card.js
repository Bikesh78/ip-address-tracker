import React, { useContext } from "react";
import { AppContext } from "../App";

const Card = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div className="card">
      <div className="card-item">
        <div className="card-title">
          <p>IP Address</p>
        </div>
        <div className="card-content">
          {/* <p>{state.ipData.ip}</p> */}
          <p>Random Text</p>
        </div>
      </div>
      <div className="card-item">
        <div className="card-title">
          <p>Location</p>
        </div>
        <div className="card-content">
          {/* <p>{`${state.ipData.city}, ${state.ipData.country_name}`}</p> */}
          <p>Random Text</p>
        </div>
      </div>
      <div className="card-item">
        <div className="card-title">
          <p>Time Zone</p>
        </div>
        <div className="card-content">
          {/* <p>{state.ipData.time_zone.name}</p> */}
          <p>Random Text</p>
        </div>
      </div>
      <div className="card-item">
        <div className="card-title">
          <p>ISP</p>
        </div>
        <div className="card-content">
          {/* <p>{state.ipData.isp}</p> */}
          <p>Random Text</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
