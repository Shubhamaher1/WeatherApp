import React, { useState } from "react";
import Weather from "./Weather";
import LogOut from "./LogOut";
function Home() {
  const [page, setPage] = useState(false);
  const [input1, setInput1] = useState();
  const [input2, setInput2] = useState();
  const [error, seterror] = useState(false);
  function ChangePage() {
    setPage(false);
  }
  function validation() {
    if (input1 === "Shubhamaher1" && input2 === "Pass@123") {
      setPage(true);
      setInput1("");
      setInput2("");
      seterror(false);
    } else {
      seterror(true);
    }
  }
  return (
    <>
      <h1>Weather App</h1>
      {page == false ? (
        <div id="LogIn">
          <input
            id="input1"
            value={input1}
            onChange={(e) => {
              setInput1(e.target.value);
            }}
          />
          <br />
          <input
            id="input2"
            type="password"
            value={input2}
            onChange={(e) => {
              setInput2(e.target.value);
            }}
          />
          <br />
          <button
            onClick={() => {
              validation();
            }}
          >
            Log In
          </button>
          {error == true ? <p>Please Enter Right user/Password</p> : null}
        </div>
      ) : (
        <>
          <Weather />
          <LogOut ChangePage={ChangePage} />
        </>
      )}
    </>
  );
}
export default Home;
