import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import axios from "axios";
import SendList from "./SendList";
import { useNavigate } from "react-router-dom";
function Send() {
  const [InboxMessage,SetInboxMessage]=useState([])
  const navigate=useNavigate()
  useEffect(()=>{
    async function GetData(){
      try{
        const config={
          method:"GET",
          url:"http://localhost:3001/user/getSent",
          headers: {
            Authorization: localStorage.getItem("token"),
          }
        }
        const res=await axios(config)
        SetInboxMessage(res.data.message)
      }catch(err){
        console.log(err)
      }
    }
    GetData()
  },[])
  function OpenEmailHandler(id){
    navigate(`/showmail/${id}`)
  }
  return (
    <Container
      fluid
      style={{ border: "2px dotted red", height: "85vh", margin: "10px" }}
    >
      <h3 className="text-center">Sent</h3>
      <hr/>
      {InboxMessage.map((item)=>(
        <SendList key={item.id} id={item.id} subject={item.subject} reciver_email={item.reciver_email} read={item.read} OpenEmail={OpenEmailHandler}></SendList>
      ))}
    </Container>
  );
}
export default Send;