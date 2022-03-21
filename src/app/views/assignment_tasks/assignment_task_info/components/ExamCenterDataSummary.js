import React from "react";
import ActionButtons from "./ActionButtons";

const ExamCenterDataSummary = ({ status, examCenterData, assignmentTask }) => {
  return (
    <div className="card-body pt-1">
      <div className="table-responsive">
        <table className="display w-100 table table-bordered text-center">
          <thead>
            <tr>
              <th>Invigilator Roles</th>
              <th>Total Number of Invigilators Required</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {status === "Collection in progress" ? (
              <tr>
                <td colSpan="3">
                  Data Collection in progress, please come back again after the
                  collection deadline
                </td>
              </tr>
            ) : (
              <React.Fragment>
                <tr>
                  <td valign="middle">Chief Of Invigilator</td>
                  <td valign="middle">
                    {examCenterData
                      .map((data) => data.numberOfChiefInvigilatorRequired)
                      .reduce((total, num) => total + num)}
                  </td>
                  <td>
                    <ActionButtons
                      role="chiefInvigilator"
                      assignmentTask={assignmentTask}
                      isComplete={assignmentTask.chiefInvigilatorComplete}
                    />
                  </td>
                </tr>
                <tr>
                  <td valign="middle">Vice Chief Of Invigilator</td>
                  <td valign="middle">
                    {examCenterData
                      .map((data) => data.numberOfViceChiefInvigilatorRequired)
                      .reduce((total, num) => total + num)}
                  </td>
                  <td>
                    <ActionButtons
                      role="viceChiefInvigilator"
                      assignmentTask={assignmentTask}
                      isComplete={assignmentTask.viceChiefInvigilatorComplete}
                    />
                  </td>
                </tr>
                <tr>
                  <td valign="middle">Invigilator in Duty</td>
                  <td valign="middle">
                    {examCenterData
                      .map((data) => data.numberOfInvigilatorRequired)
                      .reduce((total, num) => total + num)}
                  </td>
                  <td>
                    <ActionButtons
                      role="invigilator"
                      assignmentTask={assignmentTask}
                      isComplete={assignmentTask.invigilatorComplete}
                    />
                  </td>
                </tr>
                <tr>
                  <td valign="middle">Environmental Supervisor</td>
                  <td valign="middle">
                    {examCenterData
                      .map(
                        (data) => data.numberOfEnvironmentalSupervisorRequired
                      )
                      .reduce((total, num) => total + num)}
                  </td>
                  <td>
                    <ActionButtons
                      role="environmentalSupervisor"
                      assignmentTask={assignmentTask}
                      isComplete={
                        assignmentTask.environmentalSupervisorComplete
                      }
                    />
                  </td>
                </tr>
                <tr>
                  <td valign="middle">Room Keeper</td>
                  <td valign="middle">
                    {examCenterData
                      .map((data) => data.numberOfRoomKeeperRequired)
                      .reduce((total, num) => total + num)}
                  </td>
                  <td>
                    {" "}
                    <ActionButtons
                      role="roomKeeper"
                      assignmentTask={assignmentTask}
                      isComplete={assignmentTask.roomKeeperComplete}
                    />
                  </td>
                </tr>
                <tr>
                  <td valign="middle">Reserved Invigilator</td>
                  <td valign="middle">
                    {examCenterData
                      .map((data) => data.numberOfReservedInvigilatorRequired)
                      .reduce((total, num) => total + num)}
                  </td>
                  <td>
                    {" "}
                    <ActionButtons
                      role="reservedInvigilator"
                      assignmentTask={assignmentTask}
                      isComplete={assignmentTask.reservedInvigilatorComplete}
                    />
                  </td>
                </tr>
              </React.Fragment>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExamCenterDataSummary;
