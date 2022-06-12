import React from 'react';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';


const Subscribe = () => {
    const [subs, setSubs] = useState('Subscribe');
    const counter =()=>{
        setSubs('✔️ Subscribed this course')
    }

  return (
    <>
    <Button variant="primary"  onClick={counter}>{subs}</Button>
    </>
  );
}

export default Subscribe;
