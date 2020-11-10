//alert('Täällä ollaan');
/*Monta
riviä
kommenttia
*/
function laskutehtava(ekaNumero, tokaNumero){
  return ekaNumero + tokaNumero;
}

console.log('Täällä ollaan');

// Muuttuja: var let tai const

let ika = 16;
ika = ika+1;

console.log(ika);

const pii=3.14;
console.log('Piin likiarvo: ' + pii);

const etunimi='Karri';  //string
const sukunimi='Sarmanne';  //string
const syntymavuosi=2004;  //number, eli kokonaisluku
const lahtelaine=true;  //boolean
let maarittelematon; //undefined

console.log('syntymävuoden tyyppi: ' + typeof syntymavuosi);
console.log('nimen tyyppi: ' + typeof etunimi);
console.log('lahtelaisuuden tyyppi: ' + typeof lahtelaine);

//template string
console.log('Nimeni on ' + etunimi + ' ' + sukunimi + ' ja syntymävuoteni on ' + syntymavuosi);

const henkilotieto = `Nimeni on ${etunimi} ${sukunimi} ja syntymävuoteni on ${syntymavuosi}`;

console.log(henkilotieto);

console.log(`Henkilötiedon pituus on: ${henkilotieto.length}`);
console.log(henkilotieto.toUpperCase())

console.log(henkilotieto.substring(0, 9));

console.log(henkilotieto.substring(0, 9).toUpperCase());

console.log(henkilotieto.split(' ')[2]);

console.log(henkilotieto.split(' '));

const autoja = ['Hyundai', 'Toyota', 'Volvo'];

autoja[3]='BMW';

autoja.push('Saab');

autoja.unshift('Mersu');

autoja.pop();

console.log(autoja);

const opiskelija = {
  id: 1,
  etunimi: 'Karri',
  sukunimi: 'Sarmanne',
  syntymavuosi: 2004,
  koulutus: ['peruskoulu'],
  osoite: {
    katu: 'Ståhlberginkatu4A',
    postinumero:15500,
    kunta: 'Lahti'
  }
}

console.log(opiskelija.etunimi);

const laksyt = [
  {
    id: 1,
    tehtava: 'Ohjelmointi, HTML',
    tehty: true
  },
  {
    id: 2,
    tehtava: 'Ohjelmointi, CSS',
    tehty: true
  },
  {
    id: 3,
    tehtava: 'Ohjelmointi, JavaScript',
    tehty: false
  }
];

for(let i=0; i <= 10; i++){
  console.log(`For loopin iteraatioluku on: ${i}`);
}

let i = 0;
while(i<=10){
  console.log(`While loopin iteraatioluku on: ${i}`);
  i++;
}

for(let i=0; i<laksyt.length; i++){
  console.log(laksyt[i].tehtava);
}

const laksyTehtava = laksyt.map(function(laksy){
  return laksy.tehtava;
});

console.log(laksyTehtava);

console.log('-------------------------')

const tehtavaTehty = laksyt.filter(function(laksy){
  return laksy.tehty === false; 
}).map(function(laksy){
  return laksy.tehtava;
});

console.log(tehtavaTehty);

const numero = 18;
const nimi = 'Jorma';

if(numero < 20 || nimi === 'Jorma'){
  console.log('Olet alaikäinen tai Jorma. Et ole tervetullut');
}else if(numero === 18){
  console.log('Onnea, olet juuri tullut täysi-ikäiseksi!');
}else{
  console.log('Olet täysi-ikäinen.');
}

const access = numero > 18 ? 'granted' : 'denied';
console.log(access);

laskutehtava(5, 2);

console.log(laskutehtava(5, 2))