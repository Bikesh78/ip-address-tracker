import React, { useContext } from "react";
import { AppContext } from "../App";

const Card = () => {
  const { state } = useContext(AppContext);
  return (
    <div className="card">
      <div className="card-item">
        <div className="card-title">
          <p>IP Address</p>
        </div>
        <div className="card-content">
          {state.data && <p>{state.data.ip}</p>}
        </div>
      </div>
      <div className="card-item">
        <div className="card-title">
          <p>Location</p>
        </div>
        <div className="card-content">
          {state.data && (
            <p>{`${state.data.city}, ${state.data.country_name}`}</p>
          )}
        </div>
      </div>
      <div className="card-item">
        <div className="card-title">
          <p>Time Zone</p>
        </div>
        <div className="card-content">
          {state.data && <p>{state.data.time_zone.name}</p>}
        </div>
      </div>
      <div className="card-item">
        <div className="card-title">
          <p>ISP</p>
        </div>
        <div className="card-content">
          {state.data && <p>{state.data.isp}</p>}
        </div>
      </div>
    </div>
  );
};

export default Card;
