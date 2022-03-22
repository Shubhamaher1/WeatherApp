import React, { useState, useEffect } from "react";
import Dummy from "./Dummy";
const cityname = [
  "----",
  "Londen",
  "New York",
  "Houston",
  "Dallas",
  "Londen",
  "Londen"
];
const ApiKey = "3fbb2b31fd3e77c536be64abc677a4d1";
function Weather() {
  const [selectVal, setSelectVal] = useState("Londen");
  const [dummy, setDummy] = useState(false);
  const [currentData, setCurrentData] = useState();
  const [lat, setlat] = useState();
  const [lon, setlon] = useState();
  const [wether5, setWeather5] = useState();
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${selectVal}&appid=${ApiKey}`
    )
      .then((data) => data.json())
      .then((res) => {
        // console.log(res);
        setCurrentData(res.base);
        setlat(res.coord.lat);
        setlon(res.coord.lon);
        // data();

        console.log(currentData);
      });
  }, [selectVal]);
  function data() {}
  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${ApiKey}`
    )
      .then((data) => data.json())
      .then((res) => {
        // console.log(res.list);
        setWeather5(res.list);
      });
  }, [lon]);
  return (
    <>
      <div>
        <select
          value={selectVal}
          onChange={(e) => {
            setSelectVal(e.target.value);
          }}
        >
          {cityname.map((ele) => (
            <option value={ele}>{ele}</option>
          ))}
        </select>
        <div id="output">
          <div id="output1">
            Current weather Data
            <br />
            Base:
            {currentData}
          </div>
          <div id="output2">
            5 Weather ForeCast
            {wether5 &&
              wether5.map((ele, index) => {
                if (index < 5) {
                  return <li id={ele.weather.id}>{ele.weather[0].main}</li>;
                }
              })}
          </div>
          {dummy == true ? <Dummy /> : null}
        </div>

        <div
          onClick={() => {
            setDummy(true);
          }}
          id="Footer"
        >
          About Us{" "}
        </div>
      </div>
    </>
  );
}
export default Weather;
