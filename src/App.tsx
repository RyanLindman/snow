import "./App.css";
import Header from "./Header";
import HomeContent from "./HomeContent";
import Navbar from "./Navbar";
import { navOpts } from "./interfaces/interfaces";

function App() {

  return (
    <>
      <Navbar children={undefined} items={navOpts} />
      <Header />
      <HomeContent />
      
    </>
  );
}

export default App;
