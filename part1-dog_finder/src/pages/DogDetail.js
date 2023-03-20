import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const DogDetail = () => {
  const [dog, setDog] = useState([]);
  const { name } = useParams();
  console.log(name);

  useEffect(() => {
    const getADogs = async () => {
      let url = `http://localhost:3005/dogs?q=${name}`;

      let res = await fetch(url);
      console.log(res);
      let data = await res.json();
      console.log(data[0]);
      setDog(data[0]);
    };
    getADogs();
  }, [name]);

  const fact = dog.facts;

  console.log(fact);
  return (
    <div>
      <ul>
        {console.log(dog.src)}
        <img className="card-img" src={dog.src} />
        <li key={uuidv4()} className="DogCard-li name">
          <strong>Name: </strong>
          {dog.name}
        </li>
        <li className="DogCard-li age">
          <strong>Age: </strong>
          {dog.age}
        </li>
        <li>
          <strong>Facts:</strong>
          {dog.facts?.map((f) => (
            <p>{f}</p>
          ))}
        </li>
      </ul>
      <Link to="/dogs"> GoBack</Link>
    </div>
  );
};

export default DogDetail;
