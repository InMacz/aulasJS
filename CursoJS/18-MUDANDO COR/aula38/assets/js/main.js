const paragrafos = document.querySelector('.paragrafos');
let ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;


for (p of ps){
    console.log(p);
    p.style.backgroundColor = backgroundColorBody;
    p.style.color = 'white';
}

