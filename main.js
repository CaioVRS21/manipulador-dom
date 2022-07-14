function criaFrase(){const elementos = [
    {tag: 'p', texto: `Frase um`},
    {tag: 'div', texto: `Frase dois`},
    {tag: 'footer', texto: `Frase tres`},
    {tag: 'section', texto: `Frase quatro`}
];
const addItem = document.querySelector('.container');
const div = document.createElement('div');

for (i = 0; i < elementos.length; i++){
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.innerHTML = texto;
    div.appendChild(tagCriada);
};

addItem.appendChild(div);
}
