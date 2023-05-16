import "./App.css";
import Loading from "./pages/loading/loading";
import Home from "./pages/home/home";

function App() {
  return (
    <Loading>
      <Home path="/" />
    </Loading>
  );
}

export default App;
