import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../APIs/Axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import hospitalStyle from "./admin.module.css";
import { FormLabel } from "react-bootstrap";
import AdminNavbar from "./AdminNavbar";
import AdminLanding from "./AdminLanding";

const ManageStaff = () => {
  // let [id, setId] = useState();
  let [name, setName] = useState("");
  let [mail, setMail] = useState("");
  let [password, setPassword] = useState("");
  let [doj, setDoj] = useState();
  let [pincode, setPincode] = useState("");
  let [location, setLocation] = useState("");
  //   let [range, setRange] = useState(0);
  //   let [encounter, setEncounter] = useState("");
  let navigate = useNavigate();
  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, mail, password, doj, location);
    try {
      let payload = {
        name,
        mail,
        password,
        doj,
        location,
      };
      await Axios.post("/staff", payload);
      navigate("/");
    } catch (error) {}
  };
  return (
    <>
      <AdminNavbar />
      <AdminLanding />
      <section id="authBlock" className={hospitalStyle.card}>
        <article>
          <h2>Create Staff</h2>
          <Form onSubmit={handleSubmit}>
            <table>
              <tr>
                <td>
                  {/* <label htmlFor="area">Area:</label> */}
                  <input
                    type="text"
                    placeholder="Name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="email"
                    placeholder="Email"
                    value={mail}
                    onChange={(e) => setMail(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="date"
                    value={doj}
                    onChange={(e) => setDoj(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </td>
              </tr>
            </table>
            <tr>
              <button>Create Staff</button>
            </tr>
          </Form>
        </article>
      </section>
    </>
  );
};
export default ManageStaff;
