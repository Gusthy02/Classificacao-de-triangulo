let lado = [];

lado[0] = parseFloat(prompt("Digite o 1° lado do triangulo"));
lado[1] = parseFloat(prompt("Digite o 2° lado do triangulo"));
lado[2] = parseFloat(prompt("Digite o 3° lado do triangulo"));

if (lado[0] === lado[1] && lado[1] === lado[2]) {
  alert("Esse é um triangulo equilatero.");
} else if (lado[0] !== lado[1] && lado[1] !== lado[2] && lado[0] !== lado[2]) {
  alert("Esse é um triangulo escaleno.");
} else {
  alert("Esse é um triangulo isoceles");
}
