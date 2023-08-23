import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Signup from "./components/Auth/Signup";
import LogIn from "./components/Auth/Login";
import ErrorAlert from "./UI/ErrorAlert/ErrorAlert";
import SendMail from "./components/SendMail/SendMail";
import MainPageHeader from "./components/Header/MainPageHeader";
import Inbox from "./components/MainPage/Inbox";
import Unread from "./components/MainPage/Unread";
import Send from "./components/MainPage/Send";
import ShowMail from "./components/ShowMail/ShowMail";
function App() {
  const [ErrorAl, SetErrorAl] = useState(false);
  const [Errormessage, SetErrorMessage] = useState("");
  const [ErrorHead, SetErrorHead] = useState("");
  function ErrorAlertHandler(head, error) {
    if (ErrorAl === false) {
      SetErrorMessage(error);
      SetErrorHead(head);
      SetErrorAl(true);
    } else {
      SetErrorAl(false);
    }
  }
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header></Header>
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              {ErrorAl && (
                <ErrorAlert
                  ErrorHead={ErrorHead}
                  message={Errormessage}
                  onHide={ErrorAlertHandler}
                ></ErrorAlert>
              )}
              <Header></Header>
              <Signup error={ErrorAlertHandler}></Signup>
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              {ErrorAl && (
                <ErrorAlert
                  ErrorHead={ErrorHead}
                  message={Errormessage}
                  onHide={ErrorAlertHandler}
                ></ErrorAlert>
              )}
              <Header></Header>
              <LogIn error={ErrorAlertHandler}></LogIn>
            </>
          }
        />
        <Route
          path="/loggedin"
          element={
            <>
              <MainPageHeader></MainPageHeader>
              <Inbox></Inbox>
            </>
          }
        />
        <Route
          path="/unread"
          element={
            <>
              <MainPageHeader></MainPageHeader>
              <Unread></Unread>
            </>
          }
        />
        <Route
          path="/sent"
          element={
            <>
              <MainPageHeader></MainPageHeader>
              <Send></Send>
            </>
          }
        />
        <Route
          path="/showmail/:maildid"
          element={
            <>
              <MainPageHeader></MainPageHeader>
              <ShowMail></ShowMail>
            </>
          }
        />
        <Route
          path="/compose"
          element={
            <>
              {ErrorAl && (
                <ErrorAlert
                  ErrorHead={ErrorHead}
                  message={Errormessage}
                  onHide={ErrorAlertHandler}
                ></ErrorAlert>
              )}
              <Header></Header>
              <SendMail error={ErrorAlertHandler}></SendMail>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
