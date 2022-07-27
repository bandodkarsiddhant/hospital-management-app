import React, { useState, useEffect } from "react";
import Axios from "../APIs/Axios";
import { Link } from "react-router-dom";
import hosStyle from "./admin.module.css";

const GetHospital = () => {
  let [state, setState] = useState(null);
  let [loading, setLoading] = useState(false);
  let deletePost = async id => {
    await Axios.delete(`/posts/${id}`);
    window.location.assign("/");
  };

  useEffect(() => {
    let fetchPosts = async () => {
      try {
        let { data } = await Axios.get("/hospitals");
        setLoading(true);
        setState(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
    setLoading(false);
  }, []);
  return (
    <div className={hosStyle.tab}>
      <h2>HOSPITAL LIST</h2>
      <table className={hosStyle.tablehos}>
        <thead className="thead-dark text-capitalize">
        
          <tr>
            <th>id</th>
            <th>Area</th>
            <th>Mail</th>
            <th>location</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {state === null
            ? "loading..."
            : state.map(hospital => {
                return (
                  <tr key={hospital.id}>
                    <td>{hospital.id}</td>
                    <td>{hospital.area}</td>
                    <td>{hospital.mail}</td>
                    <td>{hospital.location}</td>
                    <td>
                      <Link
                        className="btn btn-primary btn-sm"
                        to={`/edit-staff/${hospital.id}`}
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deletePost(hospital.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default GetHospital;
