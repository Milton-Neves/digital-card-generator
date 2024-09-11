import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Form />
      </main>
      <Footer />
    </div>
  );
}

export default App;
