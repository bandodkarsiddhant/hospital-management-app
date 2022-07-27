import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AdminLanding from "../AdminLanding";
import AdminNavbar from "../AdminNavbar";
import CreateHospital from "../CreateHospital";
import Dashboard from "../Dashboard";

import ManageStaff from "../ManageStaff";
import ManageBranches from "../ManageBranches";
import GetHospital from "../GetHospital";
import GetStaff from "../GetStaff";
import GetBranches from "../GetBranches";

//css
import hospitalStyle from '../admin.module.css'

//shobhit

import "../../../Global.css";

const AdminHomePage = () => {
  return (
    <>
      <AdminNavbar />
      <AdminLanding />


    </>
  );
};

export default AdminHomePage;
