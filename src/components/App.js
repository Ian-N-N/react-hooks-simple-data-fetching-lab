// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  // State to store the dog image URL
  const [dogImage, setDogImage] = useState(null);

  // Fetch a random dog image when the component mounts
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json()) // Parse the JSON from the API
      .then((data) => {
        setDogImage(data.message); // Store the image URL in state
      });
  }, []); // Empty dependency array ensures it runs only once on mount

  // Display "Loading..." until the image is fetched
  if (!dogImage) {
    return <p>Loading...</p>;
  }

  //Once loaded, display the dog image
  return (
    <div>
      <img src={dogImage} alt="A Random Dog" />
    </div>
  );
}

export default App;