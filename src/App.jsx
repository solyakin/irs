import './App.css'
import Homepage from './pages/homepage/homepage'
// import { Switch, Route } from 'react-router-dom';
import ForgetPassword from './pages/forget-password/ForgetPassword';
import InformationForm from './pages/info-form/info-form';
import Header from './components/header/header';
import Profile from './pages/profile/profile';
import DashboardHome from './pages/dahsboardHome/DashboardHome';
import DocumentComponent from './pages/DocumentComponent/DocumentComponent';
import PrimeraAcademy from './pages/PrimeraAcademy/PrimeraAcademy';
import Staff from './pages/staff/Staff';
import HelpDesk from './pages/HelpDesk/HelpDesk';
import WorkTool from './pages/workTool/WorkTool';
import Compliance from './pages/compliance/Compliance';
import IDCARD from './pages/IDCARD/IDCARD';
import Appraisal from './pages/Appraisal/Appraisal';
import TokenizeCard from './pages/TokenizeCard/TokenizeCard';
import Leave from './pages/Leave/Leave';
import BoardroomBorading from './pages/BoardroomBoarding/BoardroomBorading';
import SuggestionPortal from './pages/SuggestionPortal/SuggestionPortal';
import AssetDeposit from './pages/AssetDeposit/AssetDeposit';
import HelpDeskDashboard from './pages/HelpDeskDashboard/HelpDeskDashboard';
import Interview from './pages/Interview/Interview';

function App() {

  return (
    <div className="App">
      {/* <ForgetPassword /> */}
      {/* <Profile /> */}
      {/* <InformationForm /> */}
      {/* <DashboardHome /> */}
      {/* <DocumentComponent /> */}
      {/* <PrimeraAcademy /> */}
      {/* <Staff /> */}
      {/* <HelpDesk /> */}
      {/* <Homepage /> */}
      {/* <WorkTool /> */}
      {/* <Compliance /> */}
      {/* <IDCARD /> */}
      <Appraisal />
      {/* <TokenizeCard /> */}
      {/* <Leave /> */}
      {/* <BoardroomBorading /> */}
      {/* <SuggestionPortal /> */}
      {/* <AssetDeposit /> */}
      {/* <HelpDeskDashboard /> */}
      {/* <Interview /> */}
      {/* <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/reset-password' component={ForgetPassword}/>
      </Switch> */}
    </div>
  )
}

export default App
