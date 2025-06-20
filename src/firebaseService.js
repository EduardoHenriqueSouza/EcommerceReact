import { ref, push, set } from "firebase/database";
import { database } from "./firebase";

export async function addProduto(produto) {
  const produtosRef = ref(database, "produtos");
  const novoProdutoRef = push(produtosRef);
  await set(novoProdutoRef, produto);
}