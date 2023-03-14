import { Card } from "react-bootstrap";

const Cardkegiatan = (props) => {
  return (
    <Card>
      <Card.Img variant="top" src={props.Image} />
      <Card.Body>
        <Card.Text>{props.Description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Cardkegiatan;
