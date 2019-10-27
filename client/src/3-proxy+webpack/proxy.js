import axios from 'axios';
const btnGet = document.querySelector('.buttonGet');
const btnPost = document.querySelector('.buttonPost');
const btnOther = document.querySelector('.buttonOther');

function getData() {
  axios
    .get('/get/testGet')
    .then(s => {
      console.log(s);
    })
    .catch(f => {
      console.log(f);
    });
}
function getDataP() {
  axios
    .post('/post/testPost')
    .then(s => {
      console.log(s);
    })
    .catch(f => {
      console.log(f);
    });
}
function getDataO () {
  axios
    .get('/other/get/testGet')
    .then(s => {
      console.log(s);
    })
    .catch(f => {
      console.log(f);
    });
}
btnGet.addEventListener('click', getData);
btnPost.addEventListener('click', getDataP);
btnOther.addEventListener('click', getDataO);
