
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  //let a = 90
  let [num, setNum] = useState(90)


  function handleClick() {
    setNum(num+1)
  }
  return (
    <>


      <div>
        
        <p>
          {num}
        </p>
        <button onClick={handleClick}>+</button>
      </div>
    </>

  );
}

export default App;
