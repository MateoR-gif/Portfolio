import "./css/App.css";
import Loading from "./pages/loading/loading";
import Home from "./pages/home/home";
import Footer from "./pages/home/components/footer";
import ToggleDark from "./ToggleDark";

function App() {
  return (
    <div className="app">
      <header>
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
