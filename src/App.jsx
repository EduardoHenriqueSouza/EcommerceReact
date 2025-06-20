import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CadastrarProduto from "./CadastrarProduto";
import { addProduto } from "./addData";

function App() {
  return (
    <Router>
      <div>
        {/* Navegação entre as páginas */}
        <nav>
          <ul>
            <li><Link to="/cadastrar-produto">Cadastrar Produto</Link></li>
            <li><Link to="/adicionar-usuario">Adicionar Usuário</Link></li>
          </ul>
        </nav>

        {/* Rotas */}
        <Routes>
          <Route path="/cadastrar-produto" element={<CadastrarProduto />} />

          {/* Página para testar o addData */}
          <Route path="/adicionar-usuario" element={
            <div>
              <h2>Adicionar Usuário</h2>
              <button onClick={addProduto}>Adicionar Usuário</button>
            </div>
          } />

          {/* Página inicial só pra exemplo */}
          <Route path="/" element={<h2>Bem-vindo ao App</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;