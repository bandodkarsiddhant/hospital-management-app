import React from 'react';
import DashboardStyle from "./admin.module.css";
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <section className={DashboardStyle.dashy}>
      <button>
        <Link
          to="/allhospital"
          style={{ textDecoration: "none", color: "white" }}
        >
          Get Hospital List
        </Link>{" "}
      </button>
      <button>
        <Link
          to="/allbranches"
          style={{ textDecoration: "none", color: "white" }}
        >
          Get Staff List
        </Link>
      </button>
      <button>Get Branches</button>
    </section>
  );
}

export default Dashboard