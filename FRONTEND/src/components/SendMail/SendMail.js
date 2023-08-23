import React, { useState, useMemo, useRef } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./SendMail.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { mailnoAction } from "../../store/mailsno";
function SendMail(props) {
  const RecieverEmailRef = useRef();
  const RecieverEmailSubject = useRef();
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const handleChange = (data) => {
    setEditorState(data);
  };
  var htmlData = useMemo(
    () => draftToHtml(convertToRaw(editorState.getCurrentContent())),
    [editorState]
  );
  const navigate = useNavigate();
  const dispatch=useDispatch()

  async function SendMailHandler() {
    if (RecieverEmailRef.current.value === "") {
      props.error(
        "Please Enter Reciever Email",
        "Please Enter Reciever Email To send the email "
      );
      return;
    }
    if (RecieverEmailSubject.current.value === "") {
      props.error(
        "Please Enter Subject",
        "Please Enter Subject To send the email "
      );
      return;
    }
    const msg = convertToRaw(editorState.getCurrentContent()).blocks[0].text;
    if (msg === "") {
      props.error(
        "Please Enter Message",
        "Please Enter Message To send the email "
      );
      return;
    }
    try {
      const config = {
        method: "POST",
        url: "http://localhost:3001/user/sendmail",
        data: {
          recieverEmail:RecieverEmailRef.current.value,
          subject:RecieverEmailSubject.current.value,
          message:htmlData
        },
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      };
      const res = await axios(config);
      console.log(res)
      await props.error("Email sent",`${res.data.message}`)
      dispatch(mailnoAction.Setsent())
      setTimeout(()=>{
        navigate("/loggedin")
      },2000)
    } catch (err) {
      console.log(err)
      props.error("Opps Something Went Wrong",err.response.data.message)
    }
  }
  return (
    <>
      <div
        className="container mt-3 p-3 "
        style={{ border: "1px dotted black" }}
      >
        <span>To.</span>
        <input
          ref={RecieverEmailRef}
          style={{ width: "92%", float: "right", border: "1px dotted red" }}
        />
        <hr />
        <span>Subject.</span>
        <input
          ref={RecieverEmailSubject}
          style={{ width: "92%", float: "right", border: "1px dotted red" }}
        />
        <hr />
        <div className="app">
          <Editor
            editorState={editorState}
            onEditorStateChange={handleChange}
            wrapperClassName="editor-wrapper"
            editorClassName="message-editor"
            toolbarClassName="message-toolbar"
          />
          <div className="html-output">{htmlData}</div>
          <div>
            <Button
              variant="outline-danger"
              className="mt-3"
              style={{ float: "right", marginLeft: "8px" }}
              onClick={() => {
                navigate("/loggedin");
              }}
            >
              Cancel
            </Button>
            <Button
              variant="outline-success"
              className="mt-3"
              style={{ float: "right" }}
              onClick={SendMailHandler}
            >
              Send
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SendMail;
