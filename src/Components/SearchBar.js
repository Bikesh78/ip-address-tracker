import React, { useContext, useEffect } from "react";
import { useState } from "react";
import backgroundImage from "../images/pattern-bg.png";
import arrow from "../images/icon-arrow.svg";
import { AppContext } from "../App";
import axios from "axios";
import Card from "./Card";

const SearchBar = () => {
  const [ipAddress, setIpAddress] = useState("");
  const { state, dispatch } = useContext(AppContext);
  const API_KEY = "83b75bba633141818ab244d251a3a390";

  // useEffect(() => {
  //   async function getVisitorData() {
  //     try {
  //       const response = await axios.get(
  //         `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}`
  //       );
  //       if (response) {
  //         console.log("response", response.data);
  //         dispatch({ type: "getIpData", payload: response.data });
  //         console.log("state", state);
  //       }
  //     } catch (error) {
  //       console.log("error", error);
  //     }
  //   }
  //   getVisitorData();
  // }, []);
  return (
    <section
      className="search-bar"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1>IP Address Tracker</h1>
      <form>
        <input
          type="text"
          placeholder="Search for any IP address"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <button className="btn-main">
          <img src={arrow} alt="" />
        </button>
      </form>
      <Card />
    </section>
  );
};

export default SearchBar;
