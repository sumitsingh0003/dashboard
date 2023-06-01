import React from "react";
import Areas from "./charts/Areas";
import PageHeader from "./PageHeader";
import { useNavigate } from "react-router-dom";
import DropDown from "./charts/DropDown";

import { state } from "../utils/index";

const MainPage = () => {
  const navigate = useNavigate();
  const innerBox = state[0].machines;

  const handleGroup = (boxData, grpNum) => {
    const data = boxData;
    const grpNums = grpNum;
    navigate("/group", { state: { data, grpNums } });
  };

  return (
    <div>
      <div className="container">
        <div className="titlBx">
          <PageHeader name='All Groups' />
        </div>

        <div className="grpSection">
          <div className="row">
            {state.map((value, ind) => {
              return (
                <div
                  className="col-md-6"
                  key={ind}
                  onClick={() => handleGroup(value.machines, value.groupType )}
                >
                  <div className="grpBox">
                    <div className="row">
                      {innerBox.map((val, i) => {
                        return (
                          <div className="col-md-6" key={`${ind}-${i}`}>
                            <div className="grpMchn" >
                              <img src={val.img} alt={val.name} />
                              <p>{val.name}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="botmSection">
        <div className="drp">
          <DropDown />
        </div>
        <div className="charts">
          <Areas />
        </div>
        </div>


      </div>
    </div>
  );
};

export default MainPage;
