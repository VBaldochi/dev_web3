const math = require('mathjs');

// Classe para Retângulo
class Retangulo {
  constructor(largura, altura) {
    this.largura = largura;
    this.altura = altura;
  }

  // Calcula a área do retângulo
  calcularArea() {
    return this.largura * this.altura;
  }

  // Calcula o perímetro do retângulo
  calcularPerimetro() {
    return 2 * (this.largura + this.altura);
  }
}

// Classe para Círculo
class Circulo {
  constructor(raio) {
    this.raio = raio;
  }

  // Calcula a área do círculo
  calcularArea() {
    return math.pi * math.pow(this.raio, 2);
  }

  // Calcula o perímetro (circunferência) do círculo
  calcularPerimetro() {
    return 2 * math.pi * this.raio;
  }
}

// Classe para Triângulo
class Triangulo {
  constructor(base, altura) {
    this.base = base;
    this.altura = altura;
  }

  // Calcula a área do triângulo
  calcularArea() {
    return (this.base * this.altura) / 2;
  }

  // Calcula o perímetro do triângulo equilátero
  calcularPerimetro() {
    return this.base * 3;
  }
}

// Classe para Cilindro (sólido)
class Cilindro {
  constructor(raio, altura) {
    this.raio = raio;
    this.altura = altura;
  }

  // Calcula a área lateral do cilindro
  calcularAreaLateral() {
    return 2 * math.pi * this.raio * this.altura;
  }

  // Calcula o volume do cilindro
  calcularVolume() {
    return math.pi * math.pow(this.raio, 2) * this.altura;
  }
}

// Função para capturar entrada do usuário e processar cálculos
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

function escolherForma() {
  console.log("\nEscolha uma forma geométrica para calcular:");
  console.log("1. Retângulo");
  console.log("2. Círculo");
  console.log("3. Triângulo");
  console.log("4. Cilindro (sólido)");

  readline.question("\nDigite o número da forma desejada: ", (escolha) => {
    switch (escolha) {
      case '1':
        readline.question("Digite a largura e altura do retângulo separados por espaço: ", (input) => {
          const [largura, altura] = input.split(' ').map(Number);
          const retangulo = new Retangulo(largura, altura);
          console.log("Área do retângulo:", retangulo.calcularArea());
          console.log("Perímetro do retângulo:", retangulo.calcularPerimetro());
          readline.close();
        });
        break;
      case '2':
        readline.question("Digite o raio do círculo: ", (input) => {
          const raio = Number(input);
          const circulo = new Circulo(raio);
          console.log("Área do círculo:", circulo.calcularArea());
          console.log("Perímetro do círculo:", circulo.calcularPerimetro());
          readline.close();
        });
        break;
      case '3':
        readline.question("Digite a base e altura do triângulo separados por espaço: ", (input) => {
          const [base, altura] = input.split(' ').map(Number);
          const triangulo = new Triangulo(base, altura);
          console.log("Área do triângulo:", triangulo.calcularArea());
          console.log("Perímetro do triângulo equilátero:", triangulo.calcularPerimetro());
          readline.close();
        });
        break;
      case '4':
        readline.question("Digite o raio e altura do cilindro separados por espaço: ", (input) => {
          const [raio, altura] = input.split(' ').map(Number);
          const cilindro = new Cilindro(raio, altura);
          console.log("Área lateral do cilindro:", cilindro.calcularAreaLateral());
          console.log("Volume do cilindro:", cilindro.calcularVolume());
          readline.close();
        });
        break;
      default:
        console.log("Escolha inválida. Tente novamente.");
        escolherForma();
    }
  });
}

// Inicializa o programa
escolherForma();
