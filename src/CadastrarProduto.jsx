import { useState } from "react";
import { ref, push, set } from "firebase/database";
import { database } from "../firebase";
import "./CadastrarProduto.css";

function CadastrarProduto() {
  const [nome, setNome] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const produtosRef = ref(database, "produtos");
      const novoProdutoRef = push(produtosRef);
      await set(novoProdutoRef, { nome });

      alert("Produto cadastrado com sucesso!");
      setNome("");
    } catch (error) {
      console.error("Erro ao cadastrar produto:", error);
    }
  };

  return (
    <div className="container">
      <h2>Cadastrar Produto</h2>
      <form className="form-cadastro" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do produto"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default CadastrarProduto;