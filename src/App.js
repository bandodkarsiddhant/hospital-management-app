import "./Global.css";
import "bootstrap/dist/css/bootstrap.min.css";

import StaffNavbar from "./Components/Staff Module/Navbar/StaffNavbar";
import StaffLanding from "./Components/Staff Module/Pages/Staff Home/StaffLanding";

//react-router-dom imports
import { BrowserRouter as Router } from "react-router-dom";
import CustomRoutes from "./Components/Routes/CustomRoutes";
import Encounters from "./Components/Staff Module/Pages/Staff Operations/Encounters";

// context-api
import MyProvider from "./Components/Staff Module/Context/MyContext";
import StaffHome from "./Components/Staff Module/Pages/Staff Home/StaffHome";

//toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <MyProvider>
        <ToastContainer/>
        <Router>
          {/* <StaffNavbar /> */}
          <CustomRoutes />
        </Router>
      </MyProvider>
    </>
  );
}

export default App;
