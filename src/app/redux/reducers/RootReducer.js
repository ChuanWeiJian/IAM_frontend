import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";
import LayoutReducer from "./LayoutReducer";
import ScrumBoardReducer from "./ScrumBoardReducer";
import NotificationReducer from "./NotificationReducer";
import EcommerceReducer from "./EcommerceReducer";
import EditAssignmentTaskReducer from "./EditAssignmentTaskReducer";
import EditAssignmentResultReducer from "./EditAssignmentResultReducer";
import EditLetterTemplateReducer from "./EditLetterTemplateReducer";
import NewExamCenterReducer from "./NewExamCenterReducer";
import EditExamCenterReducer from "./EditExamCenterReducer";
import TableReducer from "./TableReducer";
import { reducer as formReducer } from "redux-form";

const RootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  layout: LayoutReducer,
  scrumboard: ScrumBoardReducer,
  notification: NotificationReducer,
  ecommerce: EcommerceReducer,
  table: TableReducer,
  editAssignmentTask: EditAssignmentTaskReducer,
  editAssignmentResult: EditAssignmentResultReducer,
  editLetterTemplate: EditLetterTemplateReducer,
  newExamCenter: NewExamCenterReducer,
  editExamCenter: EditExamCenterReducer,
  form: formReducer,
});

export default RootReducer;
