import React from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const DogCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/dogs/${item.name}`);
  };

  return (
    <ul onClick={() => showDetail()}>
      <img className="card-img" src={item.src} />
      <li key={uuidv4()} className="DogCard-li name">
        <strong>Name: </strong>
        {item.name}
      </li>
      <li className="DogCard-li age">
        <strong>Age: </strong>
        {item.age}
      </li>
    </ul>
  );
};

export default DogCard;
