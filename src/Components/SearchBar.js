import React from "react";
import { useState } from "react";
import backgroundImage from "../images/pattern-bg.png";
import arrow from "../images/icon-arrow.svg";

const SearchBar = () => {
  const [ipAddress, setIpAddress] = useState("");
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
    </section>
  );
};

export default SearchBar;
