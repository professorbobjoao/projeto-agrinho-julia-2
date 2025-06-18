var img01;
var img02;

var x;
var y = 0;
var l = 50;

var xP = 50;
var yP = 300;
var r = 50;

var pontos = 0;

var colisao = false;
var fimDeJogo = false;

function setup() {
  createCanvas(400, 450);
  img01 = loadImage("Captura de tela de 2025-06-17 19-56-50.png");
  img02= loadImage("Captura de tela de 2025-06-17 21-03-04.png");
  x = random(50, 350);
}

function draw() {
  if (fimDeJogo) {
    mostrarTelaFinal();
    return;
  }

  background(img01);

  textSize(20);
  fill("#ED225D");
  text("Pontos: " + pontos, 10, 20);

  // Letra "C" caindo
  textSize(40);
  textAlign(CENTER, CENTER);
  fill("red");
  text("🍅", x, y);

  y = y + 3;

  if (y > 400 || colisao == true) {
    x = random(50, 350);
    y = 0;
    colisao = false;
  }

  // Jogador como letra "C"
  textSize(40);
  textAlign(CENTER, CENTER);
  fill("#FFC107");
  text("🧺", xP, yP);

  // colisão
  c = dist(xP, yP, x, y);

  if (c > 0 && c < r) {
    colisao = true;
    pontos++;
  }

  if (pontos >= 10) {
    fimDeJogo = true;
  }
}

function mostrarTelaFinal() {
  background(img02);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(40);
  text("Fim de Jogo!", width / 2, height / 2 - 20);
  textSize(20);
  text("Você fez 10 pontos!", width / 2, height / 2 + 20);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xP = xP - 20;
  } else if (keyCode === RIGHT_ARROW) {
    xP = xP + 20;
  } else if (keyCode === UP_ARROW) {
    yP = yP - 20;
  } else if (keyCode === DOWN_ARROW) {
    yP = yP + 20;
  }
}