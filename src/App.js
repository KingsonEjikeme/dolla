import "./app.scss";
import Navbar from "./components/Navbar";
import {BrowserRouter as Router} from 'react-router-dom';
import Sidebar from "./components/Sidebar/index";
import {Home} from "./pages/index";
function App() {
  return (
    <Router>
      <Home/>
    </Router>
  );
}

export default App;
