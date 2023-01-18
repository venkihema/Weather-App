import "./App.css";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");
  const changeHandler = (e) => {
    setCity(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();

    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((Response) => Response.json())
      .then((res) => {
        const kelvin = res.main.temp;
        const celcius = kelvin - 272.15;
        setTemp(`Temperature at ${city} is ${Math.round(celcius)}°C `);
      });
    setCity("");
  };
  return (
    <div className="App">
      <center>
        <form onSubmit={submitHandler}>
          <div className="inputDiv">
            <input
              type={"text"}
              name="city"
              value={city}
              onChange={changeHandler}
            />
          </div>
          <div className="submitDiv">
            <input type="submit" value="Get Temperature" />
          </div>
        </form>
        <div className="tempDiv">
          <h1>{temp}</h1>
        </div>
      </center>
    </div>
  );
}
export default App;
