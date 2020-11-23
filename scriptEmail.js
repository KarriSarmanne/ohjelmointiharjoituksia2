console.log("on toimii")

const emailnappi = document.querySelector('.laheta-nappi');
const virhe = document.querySelector('.virheilmoitus')

emailnappi.addEventListener('click', e => {
  e.preventDefault();
  sendJSON();
});

function sendJSON(){
  let xhr = new XMLHttpRequest();
  let url = "https://salpausemail.azurewebsites.net/api/HttpTriggerCSharp1?code=lWOELqiU07AqsBviOQYzuNIrQP7xoV7NV7C5W2ctgjIRcf7nXE2biw==";

  xhr.open("POST", url, true);

  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
      console.log("yhteys on toimii");
    }
  };
  var data = JSON.stringify({
    "EmailMsg": "Tähän tulee postin sisältö", //Kirjoittaa sähköpostin sisällön
    "EmailAddress": "karri.sarmanne@edu.salpaus.fi", //viestin kirjoittajan sähköposti
    "EmailTo": "karri.sarmanne@edu.lahti.fi", //oma sähköposti
    "EmailName": "Teppo Tyyppi" //Nimi-kentän sisältö
  });
//////////////////////////////////////////////////
  emailnappi.addEventListener('click', e =>{
    e.preventDefault();
    
    if(EmailMsg.value === '' || EmailAddress.value === '' || EmailName.value === ''){
      virhe.classList.add('virhe');
      virhe.innerHTML = 'Täytä kaikki kentät!';
      emailnappi.style.background = 'rgb(160, 7, 7)';
      emailnappi.value = 'Virhe! En lisännyt tietoa.';
      
      setTimeout(() => virhe.remove(), 3000);
      setTimeout(() => emailnappi.style.background = 'rgb(51, 44, 44)' , 3000);
      setTimeout(() => emailnappi.value = 'Lähetä', 3000);
    }else{
      const li = document.createElement('li');

      li.appendChild(document.createTextNode(`${nimiSisalto.value}: ${asiaSisalto.value}`));

      viesti.appendChild(li);

      nimiSisalto.value = '';
      asiaSisalto.value = '';
    }
  });
//////////////////////////////////////////////////


//xhr.send(data);
};