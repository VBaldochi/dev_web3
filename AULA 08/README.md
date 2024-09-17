# ATIVIDADE 1

## Funcionalidades

- Cálculo de área e perímetro de **retângulos**, **círculos** e **triângulos**.
- Cálculo de área lateral e volume de **cilindros** (sólido geométrico).
- Interface de linha de comando que permite ao usuário escolher a forma e inserir os parâmetros.
  
## Estrutura do Código

### Classes Implementadas

- **Retângulo**:
  - Propriedades: `largura`, `altura`.
  - Métodos:
    - `calcularArea()`: Retorna a área do retângulo.
    - `calcularPerimetro()`: Retorna o perímetro do retângulo.

- **Círculo**:
  - Propriedade: `raio`.
  - Métodos:
    - `calcularArea()`: Retorna a área do círculo.
    - `calcularPerimetro()`: Retorna a circunferência do círculo.

- **Triângulo**:
  - Propriedades: `base`, `altura`.
  - Métodos:
    - `calcularArea()`: Retorna a área do triângulo.
    - `calcularPerimetro()`: Retorna o perímetro de um triângulo equilátero.

- **Cilindro**:
  - Propriedades: `raio`, `altura`.
  - Métodos:
    - `calcularAreaLateral()`: Retorna a área lateral do cilindro.
    - `calcularVolume()`: Retorna o volume do cilindro.

### Função `escolherForma()`

Esta função exibe um menu de opções para que o usuário escolha uma forma geométrica, e então solicita os parâmetros necessários (como raio, altura, etc.) via entrada de texto no terminal.

- Após a seleção, o cálculo correspondente (área, perímetro ou volume) é executado e o resultado é exibido no terminal.

### Estrutura de diretórios

```
.
├── ATIVIDADE1.js  # Arquivo principal do projeto
├── README.md     # Arquivo de documentação
└── package.json  # (opcional) Caso use módulos externos
```

## Instalação

### Pré-requisitos

- **Node.js** instalado no sistema.
- A biblioteca **mathjs** para cálculos matemáticos avançados.

### Passo a passo

1. Clone ou baixe este repositório.
2. Navegue até o diretório do projeto.
3. Instale as dependências executando:
   ```bash
   npm install mathjs
   ```

4. Execute o código:
   ```bash
   node geometria.js
   ```

## Exemplo de Uso

1. Quando o programa é iniciado, um menu será exibido no terminal:

   ```
   Escolha uma forma geométrica para calcular:
   1. Retângulo
   2. Círculo
   3. Triângulo
   4. Cilindro (sólido)
   ```

2. Após escolher a forma (digitando o número correspondente), insira os parâmetros solicitados, como largura, altura ou raio.

### Exemplo 1: Cálculo de Retângulo
```
Digite o número da forma desejada: 1
Digite a largura e altura do retângulo separados por espaço: 5 3
Área do retângulo: 15
Perímetro do retângulo: 16
```

### Exemplo 2: Cálculo de Círculo
```
Digite o número da forma desejada: 2
Digite o raio do círculo: 2
Área do círculo: 12.566370614359172
Perímetro do círculo: 12.566370614359172
```
