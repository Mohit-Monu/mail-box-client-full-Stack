import React, { useState, useMemo } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./SendMail.css";

function SendMail() {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const handleChange = (data) => {
    setEditorState(data);
  };
  var htmlData = useMemo(
    () => draftToHtml(convertToRaw(editorState.getCurrentContent())),
    [editorState]
  );
  const toolbarOptions = {
    options: ["inline", "fontSize",],
    inline: {
      options: ["bold", "italic", "underline", "strikethrough"],
    },
  };

  return (
    <>
      <div className="container mt-3 ">

          <span>To.</span>
          <input
            style={{ width: "92%", float: "right", border: "1px dotted red" }}
          />
          <hr />
          <span>Subject</span>
          <input
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
        </div>
      </div>
    </>
  );
}
export default SendMail;
