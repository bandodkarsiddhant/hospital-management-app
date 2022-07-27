import React, { useState } from "react";
import classes from "./meditems.module.css";

import Axios from "../../../APIs/Axios";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

//images import
import img1 from "../../Assets/Images/meditem-2.jpg";
import StaffNavbar from "../../Navbar/StaffNavbar";

const MedItems = () => {
  return (
    <>

<StaffNavbar/>

      <main className={classes.mainBg}>
        <div className={classes.mainText}>
          <h1> Medicinal Items </h1>
        </div>
      </main>

      <section className={classes.encountersHeader}>
        <h1>Medicinal Item Form</h1>
      </section>

      <section style={{ display: "flex" }}>
        <div className={classes.encounterForm}>
          <form>
            {/* <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Cost"
                variant="standard"
                placeholder="₹"
              />
            </Box> */}

<Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-number"
                label="Cost"
                type="number"
                placeholder="₹"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{ inputProps: { min: 0} }}
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
              <TextField id="standard-basic" label="Name" variant="standard" />
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
                id="outlined-number"
                label="Quantity"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                InputProps={{ inputProps: { min: 0, max: 10 } }}
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
              <TextField id="standard-basic" label="Medorder ID" variant="standard" />
            </Box>


            <Button variant="contained">Submit</Button>
          </form>
        </div>

        <div className={classes.formImg}>
          <img src={img1} alt="" />
        </div>
      </section>
    </>
  );
};

export default MedItems;
