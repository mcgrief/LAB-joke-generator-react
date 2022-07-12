import { useState } from 'react';
import getJoke from '../api/jokeData';

function GetJoke() {
  const [joke, setJoke] = useState();

  const jokeSetup = () => {
    getJoke().then((jokeObject) => setJoke(jokeObject.setup));
  };
  // const jokeDelivery = () => {
    // getJoke().then((jokeObject) => setJoke(jokeObject.delivery));
  // };
  return (
    <>
      <h1>{ joke }</h1>
      <button type="button" onClick={jokeSetup}>Get that sweet sweet laugh medicine!</button>
    </>
  );
}

export default GetJoke;
