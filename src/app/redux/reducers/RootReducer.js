import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import UserReducer from "./UserReducer";
import LayoutReducer from "./LayoutReducer";
import ScrumBoardReducer from "./ScrumBoardReducer";
import NotificationReducer from "./NotificationReducer";
import EcommerceReducer from "./EcommerceReducer";
import OfficerAccountsListReducer from "./OfficerAccountsListReducer";
import EditAccountInformationReducer from "./EditAccountInformationReducer";
import NewAssignmentTaskReducer from "./NewAssignmentTaskReducer";
import AssignmentTasksListReducer from "./AssignmentTasksListReducer";
import AssignmentTaskInfoReducer from "./AssignmentTaskInfoReducer";
import AssignmentResultInvigilatorReducer from "./AssignmentResultInvigilatorReducer";
import AssignmentResultSummaryReducer from "./AssignmentResultSummaryReducer";
import CompileLetterReducer from "./CompileLetterReducer";
import EditAssignmentTaskReducer from "./EditAssignmentTaskReducer";
import EditAssignmentResultReducer from "./EditAssignmentResultReducer";
import NewSchoolsReducer from "./NewSchoolReducer";
import SchoolListReducer from "./SchoolListReducer";
import SchoolInformationReducer from "./SchoolInformationReducer";
import ExamCenterInformationReducer from "./ExamCenterInformationReducer";
import EditSchoolInformationReducer from "./EditSchoolInformationReducer";
import LetterTemplatesListReducer from "./LetterTemplatesListReducer";
import LetterTemplateContentReducer from "./LetterTemplateContentReducer";
import EditLetterTemplateReducer from "./EditLetterTemplateReducer";
import TableReducer from "./TableReducer";
import ErrorModalReducer from "./ErrorModalReducer";
import LoadingReducer from "./LoadingReducer";
import DashboardReducer from "./DashboardReducer";
import { reducer as formReducer } from "redux-form";

const RootReducer = combineReducers({
  login: LoginReducer,
  user: UserReducer,
  layout: LayoutReducer,
  scrumboard: ScrumBoardReducer,
  notification: NotificationReducer,
  ecommerce: EcommerceReducer,
  accountsList: OfficerAccountsListReducer,
  editAccountInformation: EditAccountInformationReducer,
  table: TableReducer,
  newAssignmentTask: NewAssignmentTaskReducer,
  assignmentTasksList: AssignmentTasksListReducer,
  assignmentTaskInfo: AssignmentTaskInfoReducer,
  assignmentResultSummary: AssignmentResultSummaryReducer,
  assignmentResultInvigilator: AssignmentResultInvigilatorReducer,
  compileLetter: CompileLetterReducer,
  editAssignmentTask: EditAssignmentTaskReducer,
  editAssignmentResult: EditAssignmentResultReducer,
  newSchool: NewSchoolsReducer,
  schoolList: SchoolListReducer,
  schoolInformation: SchoolInformationReducer,
  examCenterInformation: ExamCenterInformationReducer,
  editSchoolInformation: EditSchoolInformationReducer,
  letterTemplatesList: LetterTemplatesListReducer,
  letterTemplateContent: LetterTemplateContentReducer,
  editLetterTemplate: EditLetterTemplateReducer,
  error: ErrorModalReducer,
  loading: LoadingReducer,
  dashboard: DashboardReducer,
  form: formReducer,
});

export default RootReducer;
