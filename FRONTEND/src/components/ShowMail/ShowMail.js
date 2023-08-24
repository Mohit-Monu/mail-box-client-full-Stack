import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { mailnoAction } from "../../store/mailsno";

function ShowMail(props) {
  const navigate = useNavigate();
  const [EmailData, SetEmailData] = useState({});
  const [loaded, SetLoaded] = useState(false);
  const id = useParams().maildid;
  const location = useParams().location;
  const dispatch = useDispatch();
  useEffect(() => {
    async function GetData() {
      try {
        const config = {
          method: "GET",
          url: `http://localhost:3001/openmail/${id}`,
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        };
        const res = await axios(config);
        console.log(res);
        if (res.data.message.updateunread) {
          dispatch(mailnoAction.delunread());
        }

        SetEmailData(res.data.message);
        SetLoaded(true);
      } catch (err) {
        console.log(err);
      }
    }
    GetData();
  }, [id, dispatch, location]);
  async function DeleteMailHandler() {
    const userConfirmed = window.confirm("Are you sure?");
    if (userConfirmed) {
      try {
        const config = {
          method: "DELETE",
          url: `http://localhost:3001/user/${id}`,
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        };
        const res = await axios(config);
        if (location === "inbox") {
          dispatch(mailnoAction.delinbox());
        }
        if (location === "send") {
          dispatch(mailnoAction.delsent());
        }
        if (location === "unread") {
          dispatch(mailnoAction.delinbox());
        }
        props.error("Email deleted", `${res.data.message}`);
        setTimeout(() => {
          navigate("/loggedin");
        }, 2000);
      } catch (err) {
        props.error("Opps Something Went Wrong", err.response.data.message);
      }
    }
  }
  return (
    <>
      {loaded && (
        <div
          className="container mt-3 p-3 "
          style={{
            fontSize: "20px",
            border: "2px dotted red",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button variant="primary" onClick={()=>{navigate("/loggedin")}}>
              Back
            </Button>
            <h1 className="text-center" style={{ flex: 1, margin: 0 }}>
              Mail
            </h1>
            <Button variant="danger" onClick={DeleteMailHandler}>
              Delete
            </Button>
          </div>
          <hr />
          <span>From.</span>
          <span style={{ width: "90%", float: "right" }}>{EmailData.from}</span>
          <hr />
          <span>To.</span>
          <span style={{ width: "90%", float: "right" }}>{EmailData.to}</span>
          <hr />
          <span>Subject.</span>
          <span style={{ width: "90%", float: "right" }}>
            {EmailData.result.subject}
          </span>
          <hr />
          <span>Message.</span>
          <span
            style={{ width: "90%", float: "right" }}
            dangerouslySetInnerHTML={{ __html: EmailData.result.message }}
          />
        </div>
      )}
    </>
  );
}
export default ShowMail;
