
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  //let a = 90
  let [num, setNum] = useState(90)


  function handleInc() {
    if (num>=100)  return;
      setNum(num + 1)
  }
  function handleDec() {
    if (num <=80) return;
    setNum(num - 1)
  }

  // if (num>=100){
  //   console.log("greater than 100")
  // }
  // else{
  //   console.log("less than 100")
  // }
  // num>=100 ? console.log("greater than 100") :console.log("less than 100")


  return (
    <>


      <div>

        <p>
          {num}
        </p>
        <button disabled={num>=100 ? true:false} onClick={handleInc}>+</button>
        <button disabled={num<=80 ? true:false} onClick={handleDec}>-</button>
      </div>
    </>

  );
}

export default App;
