import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BlueDot from "./bluedot.png";
import { Image } from "react-bootstrap";

function UnreadList(props) {
  return (
    <Row style={{ borderBottom: "1px solid red", height: "32px",cursor:"pointer" }} onClick={()=>{props.OpenEmail(props.id)}}>
      <Col fluid sm={3} style={{ height: "30px" }}>
        <Row>
          <Col sm={2}>
            <Image fluid src={BlueDot} style={{ height: "17px" }}></Image>
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
export default UnreadList;
