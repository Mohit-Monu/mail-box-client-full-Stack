import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState } from "react";
function ShowMail() {
  const [EmailData, SetEmailData] = useState({});
  const [loaded,SetLoaded]=useState(false)
  const id = useParams().maildid;
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
        SetEmailData(res.data.message)
        SetLoaded(true)
      } catch (err) {
        console.log(err);
      }
    }
    GetData();
  },[id]);
  return (
    <>
      {loaded &&<div
        className="container mt-3 p-3 "
        style={{ border: "1px dotted black" }}
      >
        <span>From.</span>
        <span style={{ width: "92%", float: "right" }}>{EmailData.from}</span>
        <hr />
        <span>To.</span>
        <span style={{ width: "92%", float: "right" }}>{EmailData.to}</span>
        <hr />
        <span>Subject.</span>
        <span style={{ width: "92%", float: "right" }}>{EmailData.result.subject}</span>
        <hr />
        <span>Message.</span>
        <span style={{ width: "92%", float: "right" }} dangerouslySetInnerHTML={{ __html: EmailData.result.message }}/>
        <hr />
        <div  />
      </div>}
    </>
  );
}
export default ShowMail;
