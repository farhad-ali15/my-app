
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  let [person,setPerson] = useState({
    name:"farhad", age:34 ,salary:45000
  })
return(
  <div>
    <Header person={person} />
  </div>
)
}

export default App;
