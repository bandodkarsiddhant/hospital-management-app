import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../APIs/Axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import hospitalStyle from "./admin.module.css";
import { FormLabel } from "react-bootstrap";
import AdminNavbar from "./AdminNavbar";
import AdminLanding from "./AdminLanding";

const CreateHospital = () => {
  // let [id, setId] = useState();
  let [area, setArea] = useState("");
  let [mail, setMail] = useState("");
  let [website, setWebsite] = useState("");
  let [date, setDate] = useState();
  let [pincode, setPincode] = useState("");
  let [location, setLocation] = useState("");
  let [range, setRange] = useState(0);
  let [encounter, setEncounter] = useState("");
  let navigate = useNavigate();
  let handleSubmit = async e => {
    e.preventDefault();
    console.log(area, mail, website, pincode, location, range, encounter);
    try {
      let payload = {
        area,
        mail,
        website,
        pincode,
        location,
        range,
        encounter,
      };
      await Axios.post("/hospitals", payload);
      navigate("/");
    } catch (error) {}
  };
  return (
    <>

<AdminNavbar/>
<AdminLanding/>

    <section id="authBlock" className={hospitalStyle.card}>
      <article>
        <h2>
          Create Hospital
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
                  onChange={e => setArea(e.target.value)}
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
                  onChange={e => setMail(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="date"
                  value={date}
                  onChange={e => setDate(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="url"
                  placeholder="Website"
                  value={website}
                  onChange={e => setWebsite(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="number"
                  placeholder="Pin-Code"
                  value={pincode}
                  onChange={e => setPincode(e.target.value)}
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
                  onChange={e => setLocation(e.target.value)}
                  required
                />
              </td>
            </tr>
            <tr>
              <td>
                <div>
                  <label for="vol">
                    Bed Avilability(between 0 and 100) &nbsp;{" "}
                    <span>{range}</span>{" "}
                  </label>
                </div>
                <div>
                  <input
                    type="range"
                    id="vol"
                    name="vol"
                    min="0"
                    max="100"
                    value={range}
                    onChange={e => setRange(e.target.value)}
                    required
                  ></input>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="number"
                  placeholder="gst"
                  value={encounter}
                  onChange={e => setEncounter(e.target.value)}
                  required
                />
              </td>
            </tr>
          </table>
          <tr>
            <button>
              Create Hospital
            </button>
          </tr>
        </Form>
      </article>
    </section>

    </>
    
    );
};
export default CreateHospital;
