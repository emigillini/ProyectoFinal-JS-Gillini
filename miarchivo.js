/*DECLARO VARIABLES Y FUNCIONES GENERALES*/


const puntosCorrecto = 5;
const puntosIncorrecto = -5;
let total = 0;
let rescat;
let i = 0;
let paises = [];

/*funcion async para obtener datos del json*/

let infoPaises = document.getElementById("listaPais")

infoPaises.addEventListener("click", () => {

  const lisPaises = document.createElement ("body");
  lisPaises.className="lista"
  document.body =lisPaises;

  fetch('/api.json')
    .then( (resp) => resp.json() )
    .then( (data) => {
      data.forEach((post) => {
          const li = document.createElement('div')
          li.className="paisesCard"
          li.innerHTML = `
          <div class="tarjeta">
          <div class="titulo">${post.bandera}</div>
          ${post.pais}
          <div class="cuerpo">
          ${post.mapa}
          <p>Capital: ${post.capital}</p>
          </div>
          <div class="pie">
          <p> ${post.habitantes} millones de habitantes</p>
          </div>
          </div>
          `
      lisPaises.append(li)
      })
  })
})

/*recupero objeto de localstorage, lo parseo y utilizo*/

const usuarioActual= JSON.parse(localStorage.getItem("usuario"));

borrar =() => document.getElementById("resultado").innerHTML="";
borrar2 =() => document.getElementById("ptosAcum").innerHTML="";
borrar3 =() => document.getElementById("subtotales1").innerHTML="";
borrar4 =() => document.getElementById("subtotales2").innerHTML="";
borrar5 =() => document.getElementById("subtotales3").innerHTML="";
borrar6 =() => document.getElementById("subtotales4").innerHTML="";


const escribir = (respuestaCorrecta) =>{
	borrar();
  borrar2();
  let texto = respuestaCorrecta ? "\nCorrecto\n "+ usuarioActual.nombre+ "\nde\n" + usuarioActual.pais+"\n Sumaste:\n 5 puntos" : "Equivocado!!\n "+ usuarioActual.nombre+ "\nde\n"+usuarioActual.pais+"\nTe sacamos:\n 5 puntos!!";
  const respuesta = document.createElement("p");
  const puntosAcum = document.createElement("p");
  respuesta.className="sub"
  puntosAcum.className="sub"
  puntosAcum.innerHTML= "<p class='subtotales'>El total es</p>"+"Puntos acumulados" +"<br></br>"+total
  respuesta.innerHTML="<p class='subtotales'>La respuesta es</p>"+texto;
  document.getElementById("resultado").appendChild(respuesta);
  document.getElementById("ptosAcum").appendChild(puntosAcum);
}

const correcto = () => {
  total = total + puntosCorrecto;
  escribir(true);
  const positions = ["left", "right"];
  const gravitys = ["top", "bottom"];
  for (let i=0; i < positions.length; i++) {
    for (let j=0; j < gravitys.length; j++) {
      Toastify({
        text: "CORRECTO",
        duration: 1000,
        newWindow: true,
        gravity: gravitys[j],
        position: positions[i],
        stopOnFocus: true,
        className:"tostada",
        style: {
          background: "linear-gradient(to right, grey, green)",
        }
      }).showToast();
      Swal.fire({
          title: 'CORRECTO',
          color: 'green',
          iconHtml: '<img src=/imagenes/world-2747353.png  width=650px height=650px > ',
          showConfirmButton:false,
          timer:800,
          width:300
      });
    }
  }
}

const incorrecto = ()=>{  
  total= total+puntosIncorrecto;
  escribir(false);  const positions = ["left", "right"];
  const gravitys = ["top", "bottom"];
  for (let i=0; i < positions.length; i++) {
    for (let j=0; j < gravitys.length; j++) {
      Toastify({
        text: "INCORRECTO",
        duration: 1000,
        newWindow: true,
        gravity: gravitys[j],
        position: positions[i],
        stopOnFocus: true,
        className:"tostada",
        style: {
          background: "linear-gradient(to right, grey, red)",
        }
      }).showToast();
      Swal.fire({
          title: 'INCORRECTO',
          color: 'red',
          iconHtml: '<img src=/imagenes/world-2747353.png  width=650px height=650px > ',
          showConfirmButton:false,
          timer:800,
          width:300
      });
    }
  }
}

/* CREO CONSTRUCTOR PARA MI ARRAYS Y CREO OBJETOS QUE LUEGO LOS INGRESO AL ARRAY*/

class paisesDatos {
  constructor(nombre,capital,habitantes,mapa,bandera){
  this.nombre= nombre;
  this.capital= capital;
  this.habitantes = habitantes;
  this.mapa = mapa;
  this.bandera = bandera;
  }
  infoPais(){
  return `El nombre del país es ${this.nombre} y su capital es ${this.capital}. Tiene ${this.habitantes} habitantes.`;
  }
}

const pais1 = new paisesDatos ("Argentina", "Buenos Aires", 47327407, "<img src=/imagenesmapa/argentina-5323216.svg width=150 height=150 alt=mapa >", "<img src=/imagenesBanderas/argentina-162229.svg width=100 alt=bandera>");
const pais2 = new paisesDatos ("Bolivia", "La Paz", 11832986,"<img src=/imagenesmapa/bolivia-1296997.svg width=150 alt=mapa>", "<img src=/imagenesBanderas/bolivia-162245.svg width=100 alt=bandera>");
const pais3 = new paisesDatos ("Cuba", "La habana", 11317498,"<img src=/imagenesmapa/cuba-5323227.svg width=150 alt=mapa>", "<img src=/imagenesBanderas/cuba-149689.svg width=100 alt=bandera>");
const pais4 = new paisesDatos ("Canada", "Ottawa", 38929902,"<img src=/imagenesmapa/canada-42703.svg width=150 alt=mapa>", "<img src=/imagenesBanderas/canada-27003.svg width=100 alt=bandera>");
const pais5 = new paisesDatos ("Alemania", "Berlin", 83811678,"<img src=/imagenesmapa/germany-890238.svg width=150 height=150 alt=mapa>", "<img src=/imagenesBanderas/germany-31017.svg width=100 alt=bandera>");
const pais6 = new paisesDatos ("Francia", "Paris", 66099138,"<img src=/imagenesmapa/francia-160361.svg width=150 alt=mapa>", "<img src=/imagenesBanderas/france-151928.svg width=100 alt=bandera>");
const pais7 = new paisesDatos ("Nigeria", "Abuya", 220546713,"<img src=/imagenesmapa/nigeria-1758969.svg width=150 alt=mapa>", "<img src=/imagenesBanderas/nigeria-162376.svg width=100 alt=bandera>");
const pais8 = new paisesDatos ("Japon", "Tokio", 126212981,"<img src=/imagenesmapa/japan-5905996.svg width=150 alt=mapa>", "<img src=/imagenesBanderas/japan-26803.svg width=100 alt=bandera>");
const pais9 = new paisesDatos ("Rusia", "Moscu", 146085669,"<img src=/imagenesmapa/rusias-1297160.svg width=150 alt=mapa>", "<img src=/imagenesBanderas/russia-162400.svg width=100 alt=bandera>");
const pais10 = new paisesDatos ("Bulgaria", "Sofia", 6878000,"<img src=/imagenesmapa/bulgaria-1758816.svg width=150 alt=mapa>", "<img src=/imagenesBanderas/bulgaria-162254.svg width=100 alt=bandera>");
const pais11 = new paisesDatos ("Holanda", "Amsterdan", 17193499,"<img src=/imagenesmapa/netherlands-1758841.svg width=150 alt=mapa>", "<img src=/imagenesBanderas/netherlands-26885.svg width=100 alt=bandera>");
const pais12 = new paisesDatos ("Peru", "Lima", 33396700,"<img src=/imagenesmapa/Peru-1297000.svg width=150 alt=mapa>", "<img src=/imagenesBanderas/peru-162390.svg width=100 alt=bandera>");
const pais13 = new paisesDatos ("España", "Madrid", 47435597,"<img src=/imagenesmapa/spain-1758851.svg width=150 alt=mapa>", "<img src=/imagenesBanderas/spain-28530.svg width=100 alt=bandera>");
const pais14 = new paisesDatos ("Italia", "Roma", 59263213,"<img src=/imagenesmapa/italy-880116.svg width=150 alt=mapa>", "<img src=/imagenesBanderas/italy-162326.svg width=100 alt=bandera>");
const pais15 = new paisesDatos ("Ucrania", "Kiev", 41167336,"<img src=/imagenesmapa/ukraine-7046472.svg width=150 alt=mapa>", "<img src=/imagenesBanderas/ukraine-162450.svg width=100 alt=bandera>");
const pais16 = new paisesDatos ("Brasil", "Brasilia", 210385000,"<img src=/imagenesmapa/brazil-881119.svg width=200 height=150 alt=mapa>", "<img src=/imagenesBanderas/brazil-305531.svg width=100 alt=bandera>");

paises = paises.concat([pais1, pais2, pais3, pais4, pais5, pais6, pais7, pais8, pais9, pais10, pais11, pais12, pais13, pais14, pais15, pais16]);

/* RESULTADOS DE LOS JUEGOS*/

link = () =>{
  window.location.href="/presentacion.html"};
const paisesAprendidos = paises.map ((paisesapren) => paisesapren.nombre);
const x = paisesAprendidos.join(", ");

resultado = () =>{
const restot = document.createElement ("body");
restot.innerHTML= " <div id='lista'></div><h2 class=restotal>El total de puntos acumulados es "+ total +"</h2><p class=resTexto >Aprendiste sobre los siguientes paises =" + x +"</p>"+"<div id='lista'></div>"+  "<h2 class=restotal>" +usuarioActual.nombre+ " "+usuarioActual.apellido+" de "+usuarioActual.pais+ " de "+usuarioActual.edad+ " años</h2>"+"<div id=categoria></div>";
document.body =restot;
localStorage.setItem("puntaje", total);
categoria();
setTimeout(()=>{
  Swal.fire({
    title: 'JUGAMOS DE NUEVO',
    color: 'black',
    iconHtml: '<img src=/imagenes/world-2747353.png  width=800px height=800px > ',
    confirmButtonColor:'black',
    confirmButtonText: 'CLARO!!!',
}).then((result)=>{
    if(result.isConfirmed){
      link()
}})},8000)}

let resultadoTotal = document.getElementById("totalPuntos")
resultadoTotal.addEventListener("click", () => {
  resultado();
})

categoria=()=>{   
  let rescat= document.createElement("div");
  document.getElementById("categoria").appendChild(rescat);
    switch(total){
      case 5:    
        case 10: 
        case 15: 
        case 20:
        case 25:
          rescat.innerHTML=   "<p>Agarra los libros!!!!!</p> <img src=/imagenes/libros.svg alt=libros> ";
          break;
        case 30:
        case 35:
        case 40:
        case 45:
          rescat.innerHTML="<p>Ponete las pilas!!!!!!</p><img src=/imagenes/pilas.svg  alt=pilas> ";
          break;
        case 50:
        case 55:
        case 60:
          case 65:
          rescat.innerHTML="<p>MMMMMMM, maso!!!!!</p><img src=/imagenes/maso.svg  alt=cientifico_medio> ";
          break;
        case 70:
        case 75:
        case 80:
        case 85:
          rescat.innerHTML="<p>Te falta poco, a estudiar!!!!!</p><img src=/imagenes/falto_poco.svg  alt=cientifico_alto> ";
          break;
        case 90:
        case 95:
        case 100:
          rescat.innerHTML="<p>Sos un genio!!!!!</p><img src=/imagenes/sos_un_genio.svg  alt=cientifico_alto> ";
          break;
        default:
          rescat.innerHTML="<p>No hiciste nada</p><img src=/imagenes/no_nada.svg  alt=no_nada> ";
    }
}

/* AQUI CODIGO PARA JUEGO1 ELIGE LA CAPITAL CORRECTA, CADA VEZ QUE SE CARGA GENERA VALORES RANDOM*/

const preguntasOk = [];
const respuestasOk = [];
const respuestaRandom=[];

let arrayDesordenada = paises.slice();
i = paises.length;
while (i--) {
  const randomIndex = Math.floor(Math.random() * (i + 1));
  [arrayDesordenada[i], arrayDesordenada[randomIndex]] = [arrayDesordenada[randomIndex], arrayDesordenada[i]];
}

const valoresRandom = arrayDesordenada.slice(0, 5);
const valoresRandom2= arrayDesordenada.slice(6, 16);

valoresRandom.forEach(pais => {
    let preguntaSel = pais.nombre;
    preguntasOk.push(preguntaSel);
    let respuestaSel = pais.capital;
    respuestasOk.push(respuestaSel);
});

valoresRandom2.forEach((pais) => {
    let respuestasVarias = pais.capital;
    respuestaRandom.push(respuestasVarias);
});

preguntasOk.forEach((pais, indice) => {
    let pregCapital = document.getElementById("capital" + (indice + 1));
    pregCapital.innerText = pais;
  });

  respuestasOk.forEach((capital, indice) => {
    let botonOk = document.getElementById("botc" + (indice + 1));
    botonOk.innerText = capital;
  });

  respuestaRandom.forEach((capital, indice) => {
    let botonInc = document.getElementById("bot" + (indice + 1));
    botonInc.innerText = capital;
  });

let botIncorrectoIds = ["bot1", "bot2", "bot3","bot4","bot5","bot6","bot7","bot8","bot9","bot10"];
  let botCorrectoIds =["botc1", "botc2", "botc3","botc4","botc5"];
  var totaljuego1=0;

  for (let i = 0; i < botCorrectoIds.length; i++) {
    let botonId = botCorrectoIds[i];
    let botonCorrecto = document.getElementById(botonId);
    botonCorrecto.addEventListener("click", () => {
      borrar3();
      totaljuego1=puntosCorrecto+totaljuego1;
      let subtotal1= document.createElement("p");
      document.getElementById("subtotales1").appendChild(subtotal1);
      subtotal1.innerText="Total Juego 1: " +totaljuego1+ " puntos";
    })};
  
    for (let i = 0; i < botIncorrectoIds.length; i++) {
      let botonId = botIncorrectoIds[i];
      let botonIncorrectoIds = document.getElementById(botonId);
      botonIncorrectoIds.addEventListener("click", () => {
        borrar3();
        totaljuego1=totaljuego1+puntosIncorrecto;
        let subtotal1= document.createElement("p");
      document.getElementById("subtotales1").appendChild(subtotal1);
      subtotal1.innerText="Total Juego 1: " +totaljuego1+ " puntos";
      })};
      
  /* AQUI CODIGO PARA JUEGO2 A QUE PAIS CORRESPONDE LA BANDERA, CADA VEZ QUE SE CARGA GENERA VALORES RANDOM*/

const preguntasBanderaOk = [];
const respuestasBanderaOk = [];
const respuestaBanderaRandom=[];

let arrayDesordenada2 = paises.slice();
i = paises.length;
while (i--) {
  const randomIndex = Math.floor(Math.random() * (i + 1));
  [arrayDesordenada2[i], arrayDesordenada2[randomIndex]] = [arrayDesordenada2[randomIndex], arrayDesordenada2[i]];
}

const valoresRandomBandera = arrayDesordenada2.slice(0, 5);
const valoresRandom2Bandera= arrayDesordenada2.slice(6, 16);

valoresRandomBandera.forEach(pais=> {
  let preguntaSelBandera = pais.bandera;
  preguntasBanderaOk.push(preguntaSelBandera);
  let respuestaSelBandera = pais.nombre;
  respuestasBanderaOk.push(respuestaSelBandera);
});

valoresRandom2Bandera.forEach((pais) => {
  let respuestasVarias = pais.nombre;
  respuestaBanderaRandom.push(respuestasVarias);
});

preguntasBanderaOk.forEach((pais, indice) => {
  let pregBandera = document.getElementById("bandera" + (indice + 1));
  pregBandera.innerHTML = pais;
});

respuestasBanderaOk.forEach((pais, indice) => {
  let botonbOk = document.getElementById("botcb" + (indice + 1));
  botonbOk.innerText = pais;
});

respuestaBanderaRandom.forEach((pais, indice) => {
  let botonbInc = document.getElementById("botb" + (indice + 1));
  botonbInc.innerText = pais;
});

  let botIncorrectobIds = ["botb1", "botb2", "botb3","botb4","botb5","botb6","botb7","botb8","botb9","botb10"];
  let botCorrectobIds =["botcb1", "botcb2", "botcb3","botcb4","botcb5"];
  let totaljuego2=0;

  for (let i = 0; i < botCorrectobIds.length; i++) {
    let botonId = botCorrectobIds[i];
    let botonCorrecto = document.getElementById(botonId);
    botonCorrecto.addEventListener("click", () => {
      borrar4()
      totaljuego2=puntosCorrecto+totaljuego2;
      let subtotal2= document.createElement("p");
      document.getElementById("subtotales2").appendChild(subtotal2);
      subtotal2.innerText="Total Juego 2: " +totaljuego2+ " puntos";
    
    })};
  
    for (let i = 0; i < botIncorrectobIds.length; i++) {
      let botonId = botIncorrectobIds[i];
      let botonIncorrectoIds = document.getElementById(botonId);
      botonIncorrectoIds.addEventListener("click", () => {
        borrar4();
        totaljuego2=totaljuego2+puntosIncorrecto;
        let subtotal2= document.createElement("p");
      document.getElementById("subtotales2").appendChild(subtotal2);
      subtotal2.innerText="Total Juego 2: " +totaljuego2+ " puntos";

      })};

  /*AQUI CODIGO JS JUEGO3 CUANTOS HABITANTES*/

const preguntasOkHab = [];
const respuestasOkHab = [];
const respuestaRandomHab=[];

let arrayDesordenada3 = paises.slice();
i = paises.length;

while (i--) {
  const randomIndex = Math.floor(Math.random() * (i + 1));
  [arrayDesordenada[i], arrayDesordenada[randomIndex]] = [arrayDesordenada[randomIndex], arrayDesordenada[i]];
}

const valoresRandomHab = arrayDesordenada.slice(0, 5);
const valoresRandomHab2= arrayDesordenada.slice(6, 16);

valoresRandomHab.forEach(pais => {
  let preguntaSelHab = pais.nombre;
  preguntasOkHab.push(preguntaSelHab);
  let respuestaSelHab = pais.habitantes;
  respuestasOkHab.push(respuestaSelHab);
});

valoresRandomHab2.forEach((pais) => {
  let respuestasVariasHab = pais.habitantes;
  respuestaRandomHab.push(respuestasVariasHab);
});

preguntasOkHab.forEach((hab, indice) => {
  let pregHabitantes = document.getElementById("habitantes" + (indice + 1));
  pregHabitantes.innerText = hab;
  });

respuestasOkHab.forEach((hab, indice) => {
  let botonOkHab = document.getElementById("bothc" + (indice + 1));
  botonOkHab.innerText = hab;
  });

respuestaRandomHab.forEach((hab, indice) => {
  let botonInc = document.getElementById("both" + (indice + 1));
  botonInc.innerText = hab;
  });

let botIncorrectohIds = ["both1", "both2", "both3","both4","both5","both6","both7","both8","both9","both10"];
let botCorrectohIds =["bothc1", "bothc2", "bothc3","bothc4","bothc5"];

let totaljuego3=0;

for (let i = 0; i < botCorrectohIds.length; i++) {
  let botonId = botCorrectohIds[i];
  let botonCorrecto = document.getElementById(botonId);
  botonCorrecto.addEventListener("click", () => {
    borrar5();
    totaljuego3=puntosCorrecto+totaljuego3;
    let subtotal3= document.createElement("p");
    document.getElementById("subtotales3").appendChild(subtotal3);
    subtotal3.innerText="Total Juego 3: " +totaljuego3+ " puntos";
    
    })};
  
for (let i = 0; i < botIncorrectohIds.length; i++) {
  let botonId = botIncorrectohIds[i];
  let botonIncorrectoIds = document.getElementById(botonId);
  botonIncorrectoIds.addEventListener("click", () => {
    borrar5();
    totaljuego3=totaljuego3+puntosIncorrecto;
    let subtotal3= document.createElement("p");
    document.getElementById("subtotales3").appendChild(subtotal3);
    subtotal3.innerText="Total Juego 3: " +totaljuego3+ " puntos";

    })};

/*AQUI CODIGO JS JUEGO4 ADIVINA EL PAIS*/

const preguntasOkPais = [];
const respuestasOkPais = [];
const respuestaRandomPais=[]
let arrayDesordenada4 = paises.slice();
i = paises.length;

while (i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [arrayDesordenada[i], arrayDesordenada[randomIndex]] = [arrayDesordenada[randomIndex], arrayDesordenada[i]];
  }

const valoresRandomPais = arrayDesordenada.slice(0, 5);
const valoresRandomPais2= arrayDesordenada.slice(6, 16);

valoresRandomPais.forEach(pais => {
  let preguntaSelPais = pais.mapa;
  preguntasOkPais.push(preguntaSelPais);
  let respuestaSelPais = pais.nombre;
  respuestasOkPais.push(respuestaSelPais);
  });

valoresRandomPais2.forEach((pais) => {
  let respuestasVariasPais = pais.nombre;
  respuestaRandomPais.push(respuestasVariasPais);
  });
  
preguntasOkPais.forEach((pais, indice) => {
  let pregPais = document.getElementById("mostrarPais" + (indice + 1));
  pregPais.innerHTML = pais;
  });
  
respuestasOkPais.forEach((pais, indice) => {
  let botonOkPais = document.getElementById("botcp" + (indice + 1));
  botonOkPais.innerText = pais;
  });

respuestaRandomPais.forEach((pais, indice) => {
  let botonIncPais = document.getElementById("botp" + (indice + 1));
  botonIncPais.innerText = pais;
  });

let botIncorrectoPIds = ["botp1", "botp2", "botp3","botp4","botp5","botp6","botp7","botp8","botp9","botp10"];
let botCorrectoPIds =["botcp1", "botcp2", "botcp3","botcp4","botcp5"];
let totaljuego4=0;

for (let i = 0; i < botCorrectoPIds.length; i++) {
  let botonId = botCorrectoPIds[i];
  let botonCorrecto = document.getElementById(botonId);
  botonCorrecto.addEventListener("click", () => {
    borrar6();
    totaljuego4=puntosCorrecto+totaljuego4;
    let subtotal4= document.createElement("p");
    document.getElementById("subtotales4").appendChild(subtotal4);
    subtotal4.innerText="Total Juego 4: " +totaljuego4+ " puntos";
    
    })};
  
for (let i = 0; i < botIncorrectoPIds.length; i++) {
  let botonId = botIncorrectoPIds[i];
  let botonIncorrectoIds = document.getElementById(botonId);
  botonIncorrectoIds.addEventListener("click", () => {
    borrar6();
    totaljuego4=totaljuego4+puntosIncorrecto;
    let subtotal4= document.createElement("p");
    document.getElementById("subtotales4").appendChild(subtotal4);
    subtotal4.innerText="Total Juego 4: " +totaljuego4+ " puntos";

    })};

/*DOM COMPARTIDO JUEGO1 , JUEGO2 , JUEGO3 y JUEGO4/*/

  botIncorrectoIds=  botIncorrectoIds.concat(botIncorrectobIds);
  botCorrectoIds= botCorrectoIds.concat(botCorrectobIds);
  botIncorrectoIds=  botIncorrectoIds.concat(botIncorrectohIds);
  botCorrectoIds= botCorrectoIds.concat(botCorrectohIds);
  botIncorrectoIds=  botIncorrectoIds.concat(botIncorrectoPIds);
  botCorrectoIds= botCorrectoIds.concat(botCorrectoPIds);

for (let i = 0; i < botIncorrectoIds.length; i++) {
  let botonId = botIncorrectoIds[i];
  let botonIncorrecto = document.getElementById(botonId);
  botonIncorrecto.addEventListener("click", () => {
    incorrecto();

  });
}

for (let i = 0; i < botCorrectoIds.length; i++) {
  let botonId = botCorrectoIds[i];
  let botonCorrecto = document.getElementById(botonId);
  botonCorrecto.addEventListener("click", () => {
    correcto();
  
  })};

let preguntas = document.querySelectorAll('[id^="pregunta"]');
  preguntas.forEach(function(pregunta) {
    pregunta.addEventListener('click', function(e) {
      if (e.target.tagName === 'BUTTON') {
        let clickedButton = e.target;
        e.target.disabled = true;
        let buttons = pregunta.querySelectorAll('button');
        buttons.forEach(function(button) {
          if (button !== clickedButton) {
            button.remove();
          }
        });
      }
    });
  });

