import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import Follow from './Follow';
import Subscribe from './Subscribe';



const Cards = (props) => {
  return (
    <div >
    <Card  style={{ width: '18rem', backgroundColor:'#caf0f8' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Subscribe/>
        <Follow/>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
    </div>
  );
}

export default Cards;
