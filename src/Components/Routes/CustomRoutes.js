import React from "react";
import { useRoutes } from "react-router-dom";
import AdminSignupForm from "../Home/Forms/AdminSignupForm";
import AdminLoginForm from "../Home/Forms/AdminLoginForm";
import HomePage from "../Home/HomePage";
import StaffLanding from "../Staff Module/Pages/Staff Home/StaffLanding";
import Encounters from "../Staff Module/Pages/Staff Operations/Encounters";
import MedItems from "../Staff Module/Pages/Staff Operations/MedItems";
import MedOrders from "../Staff Module/Pages/Staff Operations/MedOrders";
import StaffLoginForm from "../Home/Forms/StaffLoginForm";
import AdminHomePage from "../Admin module/AdminHomePage/AdminHomePage";
import Dashboard from "../Admin module/Dashboard";
import CreateHospital from "../Admin module/CreateHospital";
import ManageStaff from "../Admin module/ManageStaff";
import ManageBranches from "../Admin module/ManageBranches";

const CustomRoutes = () => {
  let myRoutes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },

    {
      path: "/encounters",
      element: <Encounters />,
    },
    {
      path: "/medorders",
      element: <MedOrders />,
    },
    {
      path: "/staff-home",
      element: <StaffLanding />,
    },
    {
      path: "/meditems",
      element: <MedItems />,
    },
    {
      path:'/admin-signup',
      element:<AdminSignupForm/>
    },
    {
      path:'/admin-login',
      element:<AdminLoginForm/>
    },
    {
      path:'/staff-login',
      element:<StaffLoginForm/>
    },
    {
      path:'/admin-home',
      element:<AdminHomePage/>
    },
    {
      path:'/hospital',
      element:<CreateHospital/>
    },
    {
      path:'/staff',
      element:<ManageStaff/>
    },
    {
      path:'/branch',
      element:<ManageBranches/>
    }
    
  ]);
  return myRoutes;
};

export default CustomRoutes;
