/*temperatura*/
const form = document.querySelector('#form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputCelsius = e.target.querySelector('#tempC');
    const celsius =  Number(inputCelsius.value);
    console.log(inputCelsius);

    if(!celsius){
        setResultado('Valor invalido', false);
        return ;
        
    }
    const temperatura = getCelsius(celsius);
    const msg = `Temperatura em Farenheight: ${temperatura}`;
    setResultado(msg, true);
});


function getCelsius(celsius) {
    const cels = ((celsius * 9) / 5)+32;
    return cels;
    
};

function criaP() {
const p = document.createElement('p');
return p;
};

function setResultado(msg, isvalid) {
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();
    if(isvalid) {
        p.classList.add('paragrafo-resultado');
    }else{
        p.classList.add('bad');
    }
    p.innerHTML = msg;
    resultado.appendChild(p);
};

/* Pressao  */
const form2 = document.querySelector('#form2');
form2.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPsi = e.target.querySelector('#press');
    const psi =  Number(inputPsi.value);
    /*console.log(inputPsi);*/

    if(!psi){
        setResultados('Valor invalido', false);
        return ;
        
    }
    const pressao = getPress(psi);
    const msgm = `Pressão em Bar: ${pressao}`;
    setResultados(msgm, true);
});


function getPress(ps) {
    const pressao = (ps / 14.504);
    return pressao;
    
};

function criaPP() {
const pp = document.createElement('pp');
return pp;
};

function setResultados(msgm, isvalid) {
    const resultados = document.querySelector('#resultado2');
    resultados.innerHTML = '';

    const pp = criaPP();
    if(isvalid) {
        pp.classList.add('paragrafo-resultado2');
    }else{
        pp.classList.add('bad');
    }
    pp.innerHTML = msgm;
    resultados.appendChild(pp);
};

