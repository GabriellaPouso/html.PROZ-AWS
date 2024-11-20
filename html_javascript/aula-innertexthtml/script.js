// Captura os elementos do DOM
const titulo = document.getElementById("titulo");
const listaNaoOrdenada = document.querySelector("ul");
const link = document.querySelector("a");
const listaOrdenada = document.getElementById("lista-ordenada");

// Adiciona conteúdo usando .innerText
titulo.innerText = "Bem-vindo ao projeto JavaScript!";
link.innerText = "Visite nosso site";

// Adiciona conteúdo à lista não ordenada usando .innerHTML
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adiciona conteúdo à lista ordenada com links usando .innerHTML
listaOrdenada.innerHTML = `
    <li><a href="https://google.com" target="_blank">Google</a></li>
    <li><a href="https://youtube.com" target="_blank">YouTube</a></li>
    <li><a href="https://github.com" target="_blank">GitHub</a></li>
`;
