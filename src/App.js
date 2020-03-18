import React from "react";
import "./styles.css";

import Dashboard from "./Dashboard";
import SignInSide from "./SignIn";
import Checkout from "./SiteMaintenance/Checkout";

export default function App() {
  return (
    <div className="App">
      <Checkout />
    </div>
  );
}
