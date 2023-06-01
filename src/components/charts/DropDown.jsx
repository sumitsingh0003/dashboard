import React from 'react'

import { state } from "../../utils/index";

const DropDown = () => {

  const machineNames = state.map(group => group.machines.map(machine => machine.name));


  console.log(machineNames, "Nikal BHadwe")

  return (
    <div>
      <div className="dropdownBox">
          <div className="drpMenu">
            <select>

              {state.map(group =><option key={group.id}>{group.groupType}</option>)}
              
              {state.map(group =>
                    <>
                      {group.machines.map(machine => (
                          <option>{machine.name}</option>
                      ))}
                      </>
                  )}
            </select>
          </div>
          <div className="drpMenu">
            <select>
              <option>Load Current</option>
              <option>Production Plane</option>
              <option>Feet Rate Change</option>
            </select>
          </div>
        </div>
    </div>
  )
}

export default DropDown
