import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../Context/MyContext";
import Axios from "../../../APIs/Axios";

import classes from "./encounters.module.css";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

//images import
import img1 from "../../Assets/Images/encounter-2.png";
import StaffNavbar from "../../Navbar/StaffNavbar";

// import Stack from '@mui/material/Stack';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
// import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const Encounters = () => {
  let [date, setDate] = useState();
  let [reason, setReason] = useState("");
  let [branchId, setBranchId] = useState();
  let [staffId, setStaffId] = useState();

  let navigate = useNavigate();

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //!http request payload

      let payload = { date, reason, branchId, staffId };
      await Axios.post("/branch/{b_id}/person/{p_id}/encounter", payload);

      navigate("/staff-home");
      console.log(payload);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <StaffNavbar />
      <main className={classes.mainBg}>
        <div className={classes.mainText}>
          <h1> Write your grievances </h1>
        </div>
      </main>
      <section className={classes.encountersHeader}>
        <h1>Encounter Form</h1>
      </section>
      {/* <div className={classes.encounterForm}>
        <form>
          // Name input */}
      {/* <div className="form-outline ">
            <input
              type="date"
              name=""
              id="form4Example1"
              className="form-control"
            />
            <label className="form-label" htmlFor="form4Example1">
              Date of Admit
            </label>
          </div>

          {/* ========================================= */}
      {/* Reason input */}
      {/* <div className="form-outline">
            <input type="text" id="form12" className="form-control" />
            <label className="form-label" htmlFor="form12">
              Example label
            </label>
          </div> */}
      {/* Message input */}
      {/* <input
            type="text"
            name=""
            className="form-control"
            id="form4Example3"
          />
          <label className="form-label" htmlFor="form4Example3">
            Branch ID
          </label>
 */}
      {/* Staff ID */}
      {/* <input
            type="text"
            name=""
            className="form-control"
            id="form4Example4"
          />
          <label className="form-label" htmlFor="form4Example4">
            Staff ID
          </label>
 */}
      {/* Checkbox */}
      {/* <div className="form-check d-flex justify-content-center mb-4">
            <input
              className="form-check-input me-2"
              type="checkbox"
              defaultValue
              id="form4Example4"
              defaultChecked
            />
            <label className="form-check-label" htmlFor="form4Example4">
              Send me a copy of this message
            </label>
          </div> */}
      {/* Submit button */}
      {/* <button
            type="submit"
            className="btn btn-primary btn-block mb-4"
            onClick={handleSubmit}
          >
            Send
          </button>
        </form>
      </div> */}
      {/* ========================================================================== */}

      <section style={{ display: "flex" }}>
        <div className={classes.encounterForm}>
          <form>
            <div className={classes.encounterDate}>
              <input
                type="date"
                name=""
                id="form4Example1"
                className="form-control"
              />
              <label className="form-label" htmlFor="form4Example1">
                Date of Admit
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
                label="Reason"
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
              <TextField
                id="standard-basic"
                label="Staff ID"
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
              <TextField
                id="standard-basic"
                label="Branch ID"
                variant="standard"
              />
            </Box>

            <Button variant="contained">Submit</Button>
          </form>
        </div>

        {/* <div className={classes.vertLine}> */}

        {/* </div> */}

        <div className={classes.formImg}>
          <img src={img1} alt="" />
        </div>
      </section>{" "}
    </>
  );
};

export default Encounters;
