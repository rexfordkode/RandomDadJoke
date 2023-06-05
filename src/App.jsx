import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [joke, setJoke] = useState('');

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch('https://icanhazdadjoke.com/', {
          headers: {
            Accept: 'application/json',
          },
        });
        const data = await response.json();
        setJoke(data.joke);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJoke();
  }, []);

  const handleGet = async () => {
    const jokeId = document.getElementById('jokeid').value;
    try {
      const response = await fetch(`https://icanhazdadjoke.com/j/${jokeId}`, {
        headers: {
          Accept: 'application/json',
        },
      });
      const data = await response.json();
      setJoke(data.joke);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="App">
        <h1>Random Dad Joke</h1>
        <h1>{joke}</h1>
        <hr />
        <h2>Enter Joke ID</h2>
        <input type="text" id="jokeid" />
        <button className="button" onClick={handleGet}>
          Get Joke
        </button>
      </div>
    </>
  );
};

export default App;
