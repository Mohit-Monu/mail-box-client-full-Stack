import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import UnreadList from "./UnreadList";
import { useNavigate } from "react-router-dom";
function Unread() {
  const [InboxMessage, SetInboxMessage] = useState([]);
  const navigate=useNavigate()
  useEffect(() => {
    async function GetData() {
      try {
        const config = {
          method: "GET",
          url: "http://localhost:3001/user/getInbox",
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        };
        const res = await axios(config);
        SetInboxMessage(res.data.message);
      } catch (err) {
        console.log(err);
      }
    }
    GetData();
  }, []);
  function OpenEmailHandler(id){
    navigate(`/showmail/${id}`)
  }
  return (
    <Container
      fluid
      style={{ border: "2px dotted red", height: "85vh", margin: "10px" }}
    >
      <h3 className="text-center">Unread</h3>
      <hr />
      {InboxMessage.map((item) => {
        if (item.read === false) {
          return (
            <UnreadList
              key={item.id}
              id={item.id}
              subject={item.subject}
              senders_email={item.senders_email}
              OpenEmail={OpenEmailHandler}
            ></UnreadList>
          );
        }
      })}
    </Container>
  );
}
export default Unread;
