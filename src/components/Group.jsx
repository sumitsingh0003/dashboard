import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import Areas from "./charts/Areas";
import PageHeader from "./PageHeader";
import {dataLink } from '../utils/index';
import DropDown from "./charts/DropDown";

const Group = () => {
  const location = useLocation();
  const groupData = location.state.data;
  const groupNumber = location.state.grpNums;

  const [prdctTitle, setPrdctTitle] = useState('')
  const [popTitle, setPopTitle] = useState([]);
  const [accordionData, setAccordiondata] = useState('general_Info')

  const handleGrp = (detailes) => {
    const keysWithArrays = Object.keys(detailes).filter((key) =>
      Array.isArray(detailes[key])
    );
    setPopTitle(keysWithArrays);
    setPrdctTitle(detailes.name)
  };

  const handleGrpAcc = (accTitle) =>{
    setAccordiondata(accTitle)
  }
  
  

  return (
    <>
      <PageHeader name={groupNumber} />

      <div className="snglGrpBx">
        <div className="container">
          <div className="row">
            {groupData.map((key, val) => {
              return (
                <div
                  className="col-md-6"
                  key={val}
                >
                  <div
                    className="sgrpBx"
                    onClick={() => handleGrp(key)}
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <img src={key.img} alt={key.name} />
                    <p>{key.name}</p>
                  </div>
                </div>
              );
            })}
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
      

      {/* Modal  */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                {prdctTitle}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="tableForm">
                <ul>
                  {popTitle.map((item, id) => {
                    return <li key={id} className={`${accordionData === item ? 'active' : '' }`} onClick={()=> handleGrpAcc(item)}>{item.replace("_"," ").replace("_"," ")}</li>;
                  })}

                </ul>
                <div className="tableSec">
                  <table>
                    <tbody>
                    {dataLink[accordionData].map((val, i)=>{
                      return(
                      <tr key={i}>
                        <td>{val.keyName}</td>
                        <td>{val.value}</td>
                      </tr>
                      )
                    })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Group;
