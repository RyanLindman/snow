import "./App.css";
import Header from "./Header";
import Navbar from "./Navbar";
import { navOpts } from "./interfaces/interfaces";

function App() {

  return (
    <>
      <Navbar children={undefined} items={navOpts} />
      <Header />
      
    </>
  );
}

export default App;
