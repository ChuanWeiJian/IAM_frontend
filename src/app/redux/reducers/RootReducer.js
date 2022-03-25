import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";
import LayoutReducer from "./LayoutReducer";
import ScrumBoardReducer from "./ScrumBoardReducer";
import NotificationReducer from "./NotificationReducer";
import EcommerceReducer from "./EcommerceReducer";
import AssignmentTaskInfoReducer from "./AssignmentTaskInfoReducer";
import EditAssignmentTaskReducer from "./EditAssignmentTaskReducer";
import EditAssignmentResultReducer from "./EditAssignmentResultReducer";
import EditLetterTemplateReducer from "./EditLetterTemplateReducer";
import NewExamCenterReducer from "./NewExamCenterReducer";
import { reducer as formReducer } from "redux-form";

const RootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  layout: LayoutReducer,
  scrumboard: ScrumBoardReducer,
  notification: NotificationReducer,
  ecommerce: EcommerceReducer,
  assignmentTaskInfo: AssignmentTaskInfoReducer,
  editAssignmentTask: EditAssignmentTaskReducer,
  editAssignmentResult: EditAssignmentResultReducer,
  editLetterTemplate: EditLetterTemplateReducer,
  newExamCenter: NewExamCenterReducer,
  form: formReducer,
});

export default RootReducer;
