import "../css/app/App.css";
import Loading from "../pages/loading/loading";
import ToggleDark from "../components/app/ToggleDark";
import Footer from "../components/app/Footer";
import Home from "../pages/home/home";

function App() {
  return (
    <div className="app">
      <header>
        <h1>MR</h1>
        <ToggleDark />
      </header>
      <main className="content">
        <Loading>
          <Home path="/" />
        </Loading>
      </main>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
