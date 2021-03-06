import React from "react";
import { Route } from "react-router";

//JobPosition
import JobPositionList from "../pages/jobPosition/JobPositionList";
import JobPositionAdd from "../pages/jobPosition/JobPositionAdd";
import JobPositionUpdate from "../pages/jobPosition/JobPositionUpdate";

//Staff
import StaffUpdate from "../pages/staff/StaffUpdate";
import StaffList from "../pages/staff/StaffList";

//CurriculumVitae
import CurriculumVitaeCreate from "../pages/curriculumVitae/CurriculumVitaeCreate";
import CurriculumVitaeList from "../pages/curriculumVitae/CurriculumVitaeList";
import CurriculumVitaeUpdate from "../pages/curriculumVitae/CurriculumVitaeUpdate";
import CandidateCVList from "../pages/curriculumVitae/CandidateCVList";
//Candidate
import CandidateList from "../pages/candidate/CandidateList";

//Employer
import EmployerList from "../pages/employer/EmployerList";
import EmployerDetail from "../pages/employer/EmployerDetail";
import CompanyUpdate from "../pages/employer/CompanyUpdate";
import UpdateCompanyConfirm from "../pages/employer/UpdateCompanyConfirm";
import EmployerConfirm from "../pages/employer/EmployerConfirm";
import EmployerUpdate from "../pages/employer/EmployerUpdate";
//JobAdvertisement
import FavoriteJobAdvertisementList from "../pages/jobAdvertisement/FavoriteJobAdvertisementList";
import JobFilter from "../pages/jobAdvertisement/JobFilter";
import JobAdvertisementAdd from "../pages/jobAdvertisement/JobAdvertisementAdd";
import JobAdvertisementList from "../pages/jobAdvertisement/JobAdvertisementList";
import JobAdvertConfirm from "../pages/jobAdvertisement/JobAdvertConfirm";
import JobAdvertChangeStatus from "../pages/jobAdvertisement/JobAdvertChangeStatus";
//Register
import CandidateRegister from "../pages/register/CandidateRegister";
import StaffRegister from "../pages/register/StaffRegister";
import EmployerRegister from "../pages/register/EmployerRegister";

//City
import CityAdd from "../pages/city/CityAdd";
import CityUpdate from "../pages/city/CityUpdate";

//WorkType
import WorkTypeAdd from "../pages/workType/WorkTypeAdd";
import WorkTypeUpdate from "../pages/workType/WorkTypeUpdate";
//WorkProgram
import WorkProgramAdd from "../pages/workProgram/WorkProgramAdd";
import WorkProgramUpdate from "../pages/workProgram/WorkProgramUpdate";
//Role
import RoleAdd from "../pages/role/RoleAdd";
import RoleUpdate from "../pages/role/RoleUpdate";
//Login
import Login from "../pages/login/Login";
import CurriculumVitaeDetails from "../pages/curriculumVitae/CurriculumVitaeDetails";
import JobAdvertDetail from "../pages/jobAdvertisement/JobAdvertDetails";
import CandidateApplies from "../pages/jobAdvertApplies/CandidateApplies";
import ReviewApplications from "../pages/jobAdvertApplies/ReviewAppllications";
import ForgotPassword from "../pages/user/ForgotPassword";
import StaffUpdateSelf from "../pages/staff/StaffUpdateSelf";
import ChangePassword from "../pages/user/ChangePassword";
import CandidateUpdate from "../pages/candidate/CandidateUpdate";

export default function DashBoard() {
  return (
    <div style={{ minHeight: "85vh" }}>
      <Route exact path="/employers" component={EmployerList} />
      <Route path="/employers/:id" component={EmployerDetail} />
      <Route exact path="/job" component={JobPositionList} />
      <Route exact path="/candidate" component={CandidateList} />
      <Route exact path="/cv" component={CurriculumVitaeList} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/forgotPassword" component={ForgotPassword} />
      <Route exact path="/changePassword" component={ChangePassword} />

      <Route exact path="/register/employer" component={EmployerRegister} />
      <Route exact path="/register/candidate" component={CandidateRegister} />
      <Route exact path="/filter" component={JobFilter} />
      <Route exact path="/jobadvert-details/:id" component={JobAdvertDetail} />
      <Route exact path="/jobadvertlist" component={JobAdvertisementList} />
      <Route path="/cv/:id" component={CurriculumVitaeDetails} />
      {/* staff */}
      <Route exact path="/staff" component={StaffList} />
      <Route exact path="/jobadvert-confirm" component={JobAdvertConfirm} />
      <Route exact path="/staff/update/:id" component={StaffUpdate} />
      <Route exact path="/staff-update" component={StaffUpdateSelf} />
      <Route
        exact
        path="/company/update-confirm"
        component={UpdateCompanyConfirm}
      />
      <Route exact path="/employer/confirm" component={EmployerConfirm} />
      <Route exact path="/register/staff" component={StaffRegister} />
      <Route exact path="/add/jobPosition" component={JobPositionAdd} />
      <Route exact path="/add/city" component={CityAdd} />
      <Route exact path="/add/role" component={RoleAdd} />
      <Route exact path="/add/work-program" component={WorkProgramAdd} />
      <Route exact path="/add/work-type" component={WorkTypeAdd} />
      <Route exact path="/update/jobPosition" component={JobPositionUpdate} />
      <Route exact path="/update/city" component={CityUpdate} />
      <Route exact path="/update/role" component={RoleUpdate} />
      <Route exact path="/update/work-program" component={WorkProgramUpdate} />
      <Route exact path="/update/work-type" component={WorkTypeUpdate} />
      <Route exact path="/jobadvert-status" component={JobAdvertChangeStatus} />
      <Route exact path="/jobadvertadd" component={JobAdvertisementAdd} />
      <Route exact path="/company/update" component={CompanyUpdate} />
      <Route exact path="/employer-update" component={EmployerUpdate} />
      <Route exact path="/review-applies/:id" component={ReviewApplications} />
      <Route
        exact
        path="/favoriteJobs"
        component={FavoriteJobAdvertisementList}
      />
      <Route exact path="/cv-create" component={CurriculumVitaeCreate} />
      <Route exact path="/cv-update/:id" component={CurriculumVitaeUpdate} />
      <Route exact path="/cv-candidate" component={CandidateCVList} />
      <Route exact path="/job-applies" component={CandidateApplies} />
      <Route exact path="/candidate-update" component={CandidateUpdate} />
    </div>
  );
}
