import React from 'react';
import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import '../App.css';


const Follow = () => {
    const [count, setCount]= useState(13);
    const followers=_=> setCount(count+1)
    
  return (
    <>
    <Button variant='primary' onClick={followers} className="btn">Follow  {count}</Button>
    </>
  );
}

export default Follow;
