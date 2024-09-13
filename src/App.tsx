import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import ResultPage from "./pages/ResultPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Importando Router, Route e Routes

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main>
          <Routes>
            {/* Definindo rotas para o Form e para o componente de resultado */}
            <Route path="/" element={<Form />} />
            <Route path="/resultado" element={<ResultPage />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
