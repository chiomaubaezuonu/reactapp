import logo from "./images/logoresize.jpg"
import jean from "./images/jean gown.jpg"

import './App.css';

function App() {
  return (
    <div className="App">

      <header>

        <img src={logo} alt="logo"/>
      </header>

      <main>

        <img src={jean} alt="jean"/>

        <div className="content"></div>

        <div>

          <h2>Build a community your fans will love</h2>
          <p>There also designs for the mobile view and active states for customers in the impementation of the designs as well</p>

          <button>REGISTER</button>
        </div>
      </main>

      <footer>
      <i class="fab fa-facebook-f"></i> 
      </footer>

      
    </div>
  );
}

export default App;
