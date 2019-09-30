import React from "react";
import Grid from "../Grid";
import ColumnsChanger from "../ColumnsChanger";
import Search from "../Search";

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <div className="input-group mt-3 mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">Search & View</span>
          </div>
          <Search />
          <ColumnsChanger />
        </div>
        <Grid />
      </div>
    </div>
  );
};

export default App;
