import {
  GET_ASSIGNMENT_TASK_INFO,
  UPDATE_ASSIGNMENT_TASK,
} from "../actions/AssignmentTaskInfoActions";

const initialState = {
  assignmentTask: {},
};

const AssignmentTaskInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ASSIGNMENT_TASK_INFO:
      return {
        ...state,
        assignmentTask: action.payload.assignmentTask,
      };
    case UPDATE_ASSIGNMENT_TASK:
      return {
        ...state,
        assignmentTask: {
          ...state.assignmentTask,
          assignmentResults: action.payload.assignmentResults.map(
            (result) => result.id
          ),
          chiefInvigilatorComplete: action.payload.chiefInvigilatorComplete,
          viceChiefInvigilatorComplete:
            action.payload.viceChiefInvigilatorComplete,
          invigilatorComplete: action.payload.invigilatorComplete,
          environmentalSupervisorComplete:
            action.payload.environmentalSupervisorComplete,
          roomKeeperComplete: action.payload.roomKeeperComplete,
          reservedInvigilatorComplete:
            action.payload.reservedInvigilatorComplete,
        },
      };
    default:
      return state;
  }
};

export default AssignmentTaskInfoReducer;
