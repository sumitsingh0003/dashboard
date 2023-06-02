import React from 'react'

import { state } from "../../utils/index";

const DropDown = () => {

  // const machineNames = state.map(group => group.machines.map(machine => machine.name));

  return (
    <div>
      <div className="dropdownBox">
          <div className="drpMenu">
            <select>

              {state.map(group =><option key={group.id}>{group.groupType}</option>)}
              
              {state.map(group =>
                    <React.Fragment key={group.id}>
                      {group.machines.map(machine => (
                          <option key={machine.id}>{machine.name}</option>
                      ))}
                      </React.Fragment>
                  )}
            </select>
          </div>
          <div className="drpMenu">
            <select>
              <option>Load Percentage</option>
              <option>Production Plan</option>
              <option>Feed Rate Change</option>
            </select>
          </div>
        </div>
    </div>
  )
}

export default DropDown
