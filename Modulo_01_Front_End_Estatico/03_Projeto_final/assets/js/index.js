let carrinho = [];

function adicionarProduto(nome, preco) {
  // Verifica se o produto já está no carrinho
  const produtoNoCarrinho = carrinho.find((item) => item.nome === nome);

  if (produtoNoCarrinho) {
    produtoNoCarrinho.preco += preco;
  } else {
    carrinho.push({ nome, preco });
  }

  atualizarCarrinho();
}

function removerProduto(nome) {
  const index = carrinho.findIndex((item) => item.nome === nome);

  if (index !== -1) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
  }
}

function atualizarCarrinho() {
  const carrinhoLista = document.getElementById("carrinho-lista");
  const totalCarrinho = document.getElementById("total-carrinho");
  let total = 0;

  carrinhoLista.innerHTML = "";

  carrinho.forEach((item) => {
    // const listItem = document.createElement("li");
    // listItem.textContent = `${item.nome} - R$ ${item.preco.toFixed(2)} `;

    const removerButton = document.createElement("button");
    // removerButton.textContent = "Remover";
    removerButton.onclick = () => removerProduto(item.nome);
    // listItem.appendChild(removerButton);

    // carrinhoLista.appendChild(listItem);
    total += item.preco;
  });

  totalCarrinho.textContent = total.toFixed(2);
}
