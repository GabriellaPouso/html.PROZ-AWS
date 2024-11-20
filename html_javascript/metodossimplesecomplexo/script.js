// Método Simples: Adicionando o título
const titulo = document.createElement('h1'); // Criar o elemento
titulo.id = 'titulo'; // Adicionar um ID
titulo.textContent = 'Bem-vindo à Loja Virtual'; // Adicionar o texto
document.body.appendChild(titulo); // Inserir no DOM

// Método Complexo: Adicionando um produto
const produto = document.createElement('div'); // Criar o elemento pai
produto.id = 'produto'; // Adicionar um ID ao container

// Criando os elementos filhos do produto
const nome = document.createElement('h2');
nome.textContent = 'Produto: Fone de Ouvido Bluetooth';

const descricao = document.createElement('p');
descricao.textContent = 'Um fone de ouvido sem fio com qualidade de som superior e bateria de longa duração.';

const preco = document.createElement('p');
preco.textContent = 'Preço: R$ 199,99';

const imagem = document.createElement('img');
imagem.src = 'https://images.tcdn.com.br/img/img_prod/1140357/fone_bluetooth_auric_tws_ep_tws_200bk_pr_c3tech_3517_2_bba7a3e9fbc9c70badc23421d8cd6e0b.jpg';
imagem.alt = 'Imagem de Fone de Ouvido';
imagem.style.width = '150px'; // Estilização simples

// Adicionar os filhos ao container de produto
produto.appendChild(nome);
produto.appendChild(descricao);
produto.appendChild(preco);
produto.appendChild(imagem);

// Inserir o produto no DOM
document.body.appendChild(produto);
