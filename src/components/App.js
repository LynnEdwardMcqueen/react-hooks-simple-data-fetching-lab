import React, { useState, useEffect } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [randomDogImage, setRandomDogImage] = useState("")

  useEffect(() => {fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      setRandomDogImage(data.message);
      console.log(data.message)
      setIsLoaded(true);
    });
  }, [] )


   // if the data hasn't been loaded, show a loading indicator
  if (!isLoaded) return <h3>Loading...</h3>;

  return  <img src= {randomDogImage} alt="A Random Dog"/> ; 
}

export default App
  
