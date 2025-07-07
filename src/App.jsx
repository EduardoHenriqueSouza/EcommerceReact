import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CadastrarProduto from "./CadastrarProduto";

function App() {
  return (
    <Router>
      <div>
        {/* Rotas */}
        <Routes>
          <Route path="/cadastrar-produto" element={<CadastrarProduto />} />

          {/* Página inicial só pra exemplo */}
          <Route path="/" element={<h2>Bem-vindo ao App</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;