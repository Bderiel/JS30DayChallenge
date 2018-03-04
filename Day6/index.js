const endpoint = 'https://jsonplaceholder.typicode.com/posts';

const cities = [];
fetch(endpoint)
  .then(blob => blob.json())
  .then((data) => {
    cities.push(...data);
    console.log(cities);
  });

const input = document.getElementsByTagName('input');
const list = document.getElementById('myList');

function search() {
  list.innerHTML = '';
  const render = cities.filter(el => (el.title).match((this.value)));
  render.map((el) => {
    const liNode = document.createElement('LI');
    const text = document.createTextNode(el.title);
    liNode.appendChild(text);
    list.appendChild(liNode);
    return liNode;
  });
}

input[0].addEventListener('keyup', search);
