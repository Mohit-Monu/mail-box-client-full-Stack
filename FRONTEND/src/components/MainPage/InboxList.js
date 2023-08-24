import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BlueDot from "./bluedot.png";
import { Image } from "react-bootstrap";

function InboxList(props) {
  return (
    <Row className="m-1" style={{ borderBottom: "1px solid red", height: "40px",cursor:"pointer",fontSize:"20px",justifyContent:"evenly",boxShadow:"0px 4px 6px rgba(0, 0, 0, 0.1)" }} onClick={()=>{props.OpenEmail(props.id)}} >
      <Col  sm={3} style={{ height: "30px" }}>
        <Row>
          <Col sm={2}>
            {!props.read &&<Image  src={BlueDot} style={{ height: "17px" }}></Image>}
          </Col>
          <Col sm={10} style={{ overflow: "hidden" }}>
            <span>
              {props.senders_email}
            </span>
          </Col>
        </Row>
      </Col>
      <Col sm={9} style={{ overflow: "hidden", height: "30px" }}>
        <span>
          {props.subject}
        </span>
      </Col>
    </Row>
  );
}
export default InboxList;
