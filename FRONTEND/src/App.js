import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
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
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { mailnoAction } from "./store/mailsno";
function App() {
  const [ErrorAl, SetErrorAl] = useState(false);
  const [Errormessage, SetErrorMessage] = useState("");
  const [ErrorHead, SetErrorHead] = useState("");
  const dispatch = useDispatch();
  const IsLoggedIn = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    if (IsLoggedIn) {
      async function GetData() {
        try {
          const config = {
            method: "GET",
            url: "http://localhost:3001/user/getallNo",
            headers: {
              Authorization: localStorage.getItem("token"),
            },
          };
          const res = await axios(config);
          const res2 = res.data.message;
          const obj = {
            inbox: res2.receivedmailno,
            sent: res2.sentmailno,
            unread: res2.unreadmailno,
          };
          dispatch(mailnoAction.SetNumber(obj));
        } catch (err) {
          console.log(err);
        }
      }
      GetData();
    }
  }, [IsLoggedIn,dispatch]);

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
          element={ IsLoggedIn ? (
            <>
            <MainPageHeader></MainPageHeader>
              <Inbox></Inbox>
            </>
          ):(<Navigate to="/login"></Navigate>)
          }
        />
        <Route
          path="/unread"
          element={IsLoggedIn ? (
            <>
            <MainPageHeader></MainPageHeader>
              <Unread></Unread>
            </>
          ):(<Navigate to="/login"></Navigate>)
          }
        />
        <Route
          path="/sent"
          element={IsLoggedIn ? (
            <>
            <MainPageHeader></MainPageHeader>
              <Send></Send>
            </>
          ):(<Navigate to="/login"></Navigate>)
          }
        />
        <Route
          path="/showmail/:maildid"
          element={IsLoggedIn ? (
            <>
            <MainPageHeader></MainPageHeader>
              <ShowMail></ShowMail>
            </>
          ):(<Navigate to="/login"></Navigate>)
          }
        />
        <Route
          path="/compose"
          element={IsLoggedIn ? (
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
          ):(<Navigate to="/login"></Navigate>)
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
