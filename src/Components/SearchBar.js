import React, { useContext, useEffect } from "react";
import { useState } from "react";
import backgroundImage from "../images/pattern-bg.png";
import arrow from "../images/icon-arrow.svg";
import { AppContext } from "../App";
import axios from "axios";
import Card from "./Card";

const SearchBar = () => {
  const [ipAddress, setIpAddress] = useState("");
  const [submitCount, setSubmitCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const { state, dispatch } = useContext(AppContext);
  const ipRegex =
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  const websiteRegex = /^(?:(ftp|http|https):\/\/)?(?:[\w-]+\.)+[a-z]{2,6}$/;
  useEffect(() => {
    async function getVisitorData() {
      try {
        const response = await axios.get(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_KEY}`
        );
        if (response) {
          dispatch({ type: "getdata", payload: response.data });
        }
      } catch (error) {
        console.log("error", error);
      }
    }
    getVisitorData();
  }, []);
  useEffect(() => {
    if (submitCount) {
      async function getNewIpAddress() {
        try {
          const response = await axios.get(
            `https://geo.ipify.org/api/v2/country,city?apiKey=${process.env.REACT_APP_KEY}&domain=${ipAddress}`
          );
          if (response) {
            dispatch({ type: "getdata", payload: response.data });
          }
        } catch (error) {
          console.log("error", error);
        }
      }
      getNewIpAddress();
    }
  }, [submitCount]);
  function handleSubmit(e) {
    e.preventDefault();
    if (ipRegex.test(ipAddress) || websiteRegex.test(ipAddress)) {
      setSubmitCount((submitCount) => submitCount + 1);
      setErrorMessage("");
    } else {
      setErrorMessage("Enter valid IP address or domain name");
    }
  }
  return (
    <section
      className="search-bar"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1>IP Address Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for any IP address or domain"
          value={ipAddress}
          onChange={(e) => setIpAddress(e.target.value)}
        />
        <button className="btn-main">
          <img src={arrow} alt="" />
        </button>
      </form>
      {ipAddress && errorMessage && (
        <p style={{ color: "red" }}>{errorMessage}</p>
      )}
      <Card />
    </section>
  );
};

export default SearchBar;
