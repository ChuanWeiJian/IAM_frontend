import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";
import LayoutReducer from "./LayoutReducer";
import ScrumBoardReducer from "./ScrumBoardReducer";
import NotificationReducer from "./NotificationReducer";
import EcommerceReducer from "./EcommerceReducer";
import NewAssignmentTaskReducer from "./NewAssignmentTaskReducer";
import AssignmentTasksListReducer from "./AssignmentTasksListReducer";
import AssignmentTaskInfoReducer from "./AssignmentTaskInfoReducer";
import AssignmentResultSummaryReducer from "./AssignmentResultSummaryReducer";
import CompileLetterReducer from "./CompileLetterReducer";
import EditAssignmentTaskReducer from "./EditAssignmentTaskReducer";
import EditAssignmentResultReducer from "./EditAssignmentResultReducer";
import NewSchoolsReducer from "./NewSchoolReducer";
import SchoolListReducer from "./SchoolListReducer";
import SchoolInformationReducer from "./SchoolInformationReducer";
import ExamCenterInformationReducer from "./ExamCenterInformationReducer";
import LetterTemplatesListReducer from "./LetterTemplatesListReducer";
import LetterTemplateContentReducer from "./LetterTemplateContentReducer";
import EditLetterTemplateReducer from "./EditLetterTemplateReducer";
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
  newAssignmentTask: NewAssignmentTaskReducer,
  assignmentTasksList: AssignmentTasksListReducer,
  assignmentTaskInfo: AssignmentTaskInfoReducer,
  assignmentResultSummary: AssignmentResultSummaryReducer,
  compileLetter: CompileLetterReducer,
  editAssignmentTask: EditAssignmentTaskReducer,
  editAssignmentResult: EditAssignmentResultReducer,
  newSchool: NewSchoolsReducer,
  schoolList: SchoolListReducer,
  schoolInformation: SchoolInformationReducer,
  examCenterInformation: ExamCenterInformationReducer,
  editExamCenter: EditExamCenterReducer,
  letterTemplatesList: LetterTemplatesListReducer,
  letterTemplateContent: LetterTemplateContentReducer,
  editLetterTemplate: EditLetterTemplateReducer,
  form: formReducer,
});

export default RootReducer;
