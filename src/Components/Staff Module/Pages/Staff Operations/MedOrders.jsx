import React, { useState, useEffect } from "react";
import classes from "./medorders.module.css";

import Axios from "../../../APIs/Axios";
import { useNavigate } from "react-router-dom";

//images import
import img1 from "../../Assets/Images/medorder-2.png";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import StaffNavbar from "../../Navbar/StaffNavbar";

const MedOrders = () => {
  return (
    <>
      <StaffNavbar />

      <main className={classes.medorderMain}>
        <div className={classes.medorderMainText}>
          <h1> medorders </h1>
        </div>
      </main>

      <section className={classes.medorderTitle}>
        <article>
          <h1 className="text-center"> Patient Medorders Form</h1>
        </article>
      </section>

      {/* ============== F O R M ======================== */}

      <section style={{ display: "flex" }}>
        <div className={classes.medorderForm}>
          <form>
            <div className={classes.medorderDate}>
              <input
                type="date"
                name=""
                id="form4Example1"
                className="form-control"
              />
              <label className="form-label" htmlFor="form4Example1">
                Delivery Date
              </label>
            </div>

            <div
              className={classes.medorderDate}
              // style={{marginTop:'30px'}}
            >
              <input
                type="date"
                name=""
                id="form4Example1"
                className="form-control"
              />
              <label className="form-label" htmlFor="form4Example1">
                Delivery Date
              </label>
            </div>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Message"
                variant="standard"
              />
            </Box>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" label="Total" variant="standard" />
            </Box>

            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Encounter ID"
                variant="standard"
              />
            </Box>

            <Button variant="contained">Submit</Button>
          </form>
        </div>

        {/* <div className={classes.vertLine}> */}

        {/* </div> */}

        <div className={classes.medorderFormImg}>
          <img src={img1} alt="" />
        </div>
      </section>
    </>
  );
};

export default MedOrders;
