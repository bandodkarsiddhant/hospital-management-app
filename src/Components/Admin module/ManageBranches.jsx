import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../APIs/Axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import hospitalStyle from "./admin.module.css";
import { FormLabel } from "react-bootstrap";
import AdminNavbar from "./AdminNavbar";
import AdminLanding from "./AdminLanding";

const ManageBranches = () => {
  // let [id, setId] = useState();
  let [area, setArea] = useState("");
  let [mail, setMail] = useState("");
  let [encounter, setEncounter] = useState("");
  let [name, setName] = useState();
  let [tel, setTel] = useState("");

  //   let [range, setRange] = useState(0);
  //   let [encounter, setEncounter] = useState("");
  let navigate = useNavigate();
  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(area, mail, encounter, name, tel);
    try {
      let payload = {
        area,
        mail,
        encounter,
        name,
        tel,
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
        <article >
          <h2 >
            Create Branch
          </h2>
          <Form onSubmit={handleSubmit}>
            <table>
              <tr>
                <td>
                  {/* <label htmlFor="area">Area:</label> */}
                  <input
                    type="text"
                    placeholder="Area"
                    id="area"
                    value={area}
                    onChange={(e) => setArea(e.target.value)}
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
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="tel"
                    placeholder="Phone No."
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="number"
                    placeholder="Hosp_id"
                    value={encounter}
                    onChange={(e) => setEncounter(e.target.value)}
                    required
                  />
                </td>
              </tr>
            </table>
            <tr>
              <button >
                Create Branch
              </button>
            </tr>
          </Form>
        </article>
      </section>
    </>
  );
};
export default ManageBranches;
