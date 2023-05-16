import "./App.css";
import Loading from "./pages/loading/loading";
import Home from "./pages/home/home";
import Footer from "./pages/home/components/footer";

function App() {
  return (
    <div className="app">
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
