const pBaru = document.createElement('p');
const textpBaru = document.createTextNode('paragraf baru');

pBaru.appendChild(textpBaru);

const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

const liBaru = document.createElement('li');
const textliBaru = document.createTextNode('item baru');

liBaru.appendChild(textliBaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const texth2Baru = document.createTextNode('judul baru');

h2Baru.appendChild(texth2Baru);

sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';