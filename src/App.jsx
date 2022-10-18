
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  let a = 90
  let handleClick = () => {
    console.log("hello");
  }
  return (
    <>


      <div>
        <button onClick={handleClick}>+</button>
        <p>
          {a * 2}
        </p>
      </div>
    </>

  );
}

export default App;
