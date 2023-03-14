import {Button, Card} from 'react-bootstrap';

function Cardjurusan(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.Image} />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>{props.Text}</Card.Text>
        <Button variant="primary">Lihat</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardjurusan;