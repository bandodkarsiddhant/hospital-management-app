import React, { useState, useEffect } from "react";
import Axios from "../APIs/Axios";
import { Link } from "react-router-dom";
import hosStyle from "./admin.module.css";

const GetBranches = () => {
  let [state, setState] = useState(null);
  let [loading, setLoading] = useState(false);
  let deletePost = async id => {
    await Axios.delete(`/posts/${id}`);
    window.location.assign("/");
  };

  useEffect(() => {
    let fetchPosts = async () => {
      try {
        let { data } = await Axios.get("/staff");
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
      <h2>BRANCHES LIST</h2>
      <table className={hosStyle.tablehos}>
        <thead className="thead-dark text-capitalize">
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Mail</th>

            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {state === null
            ? "loading..."
            : state.map(staffs => {
                return (
                  <tr key={staffs.id}>
                    <td>{staffs.id}</td>
                    <td>{staffs.name}</td>
                    <td>{staffs.mail}</td>
                    {/* <td>{staffs.Role}</td> */}
                    <td>
                      <Link
                        className="btn btn-primary btn-sm"
                        to={`/edit-hospital/${staffs.id}`}
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => deletePost(staffs.id)}
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

export default GetBranches;
