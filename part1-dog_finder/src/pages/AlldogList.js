import React,{useState,useEffect} from 'react'
import {useParams } from "react-router-dom"
import DogCard from './DogCard'

import { v4 as uuidv4 } from 'uuid';

const AlldogList = () => {
  const [dogs,setDogs]=useState([])

  const getAllDogs=async()=>{
   
    let url=`http://localhost:3005/dogs/`
    let res=await fetch(url);
    let data=await res.json();
    console.log(data)
    setDogs(data)
  
  }
  useEffect(()=>{
    getAllDogs()
  },[])

  return (
  
   
    <div key={uuidv4()}>
{dogs.map(dog=>(<DogCard item={dog} key={uuidv4()} />))}

    </div>
    
  )
}

export default AlldogList