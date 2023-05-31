import React from "react";
import Areas from "./charts/Areas";

const MainPage = () => {
  
  return (
    <div>
      <section className="drpSec">
        <div className="container">
        <div className="charts">
         <Areas />
        </div>
          <div className="dropdownBox">
            <div className="drpMenu">
              <select>
                <option>Groups</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
              </select>
            </div>
            <div className="drpMenu">
              <select>
                <option>Load Current</option>
                <option>Speed</option>
                <option>Production Plane</option>
                <option>Power Consumer</option>
                <option>Feat Rate Change</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage;
