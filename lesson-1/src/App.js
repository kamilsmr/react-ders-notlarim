
import User from "./components/User";
import User2 from "./components/User2";

import './App.css';

function App() {
  const motto = "guzel bır gun gelecek"
  return (
    <div className="App">
      <h2>{8+2}</h2>
      <h2>{"İSTANBUL".toLowerCase()}</h2>
      <h2>{motto}</h2>  {/*hello*/}

      <User />
      <User2 />
      
    </div>
  );
}

export default App;
