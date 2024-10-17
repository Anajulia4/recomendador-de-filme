//drama romance comedia aventura acao 
//minios 18 comedia aventura 
//malevola 10 romance aventura}//crepusculo 13 drama romance comedia aventura 
//crepusculo 13 drama romance comedia e aventura
// os incriveis 6 drama comedia aventura
// a era do gelo;livre,aventura e comedia
//divertidamente ,livre,aventura e comedia 
// fantasia farica de chocolate livre,aventura e comedia 
//as aventuras de pi 10 aventura e drama
//avatar,14 aventura
mulher maravilha
//drama romance comedia aventura acao 
//minios 18 comedia aventura 
//malevola 10 romance aventura}//crepusculo 13 drama romance comedia aventura 
//crepusculo 13 drama romance comedia e aventura
// os incriveis 6 drama comedia aventura
// a era do gelo;livre,aventura e comedia
//divertidamente ,livre,aventura e comedia 
// fantasia farica de chocolate livre,aventura e comedia 
//as aventuras de pi 10 aventura e drama
//avatar,14 aventura
//mulher maravilha
let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("10");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("white");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "malevola";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "mulher maravinha";          
        } else{
         return "as aventuras de pi";
        }
      } else {
        if (gostaDeFantasia) {
          return "As aventuras de pi";
        } else {
          return "avatar";
        }
      }
    }
  } else {
    if (gostaDeFantasia) {
      return "a fantastica fabrica de chocolat";
    } else {
      return "O feitiço do tempo";
    }
  }
}
