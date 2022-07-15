import { useState } from 'react';
import getJoke from '../api/jokeData';

export default function JokeMeds() {
  const [joke, setJoke] = useState({});
  const [text, btnText] = useState('Get that sweet sweet laugh medicine');

  const jokeHandle = () => {
    if (text === 'Get that sweet sweet laugh medicine' || text === 'Prescription refill?') {
      getJoke()
        .then(setJoke)
        .then(() => {
          btnText('What that joke do?!');
        });
    } else if (text === 'What that joke do?!') {
      btnText('Prescription refill?');
    }
  };

  return (
    <>
      <h1>{text === 'Get that sweet sweet laugh medicine' ? '' : joke.setup}</h1>
      <h2>{text === 'Prescription refill?' ? joke.delivery : ''}</h2>
      <button type="button" onClick={jokeHandle}>
        {text}
      </button>
    </>
  );
}
