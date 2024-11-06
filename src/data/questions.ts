import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    text: "Qual é a fórmula química da água?",
    options: ["H2O", "CO2", "NaCl", "O2"],
    correct: "H2O",
    explanation: "A água (H2O) é formada por dois átomos de hidrogênio (H) e um átomo de oxigênio (O).",
    subject: "chemistry",
    difficulty: 1
  },
  {
    id: 2,
    text: "Qual é o resultado de 3² + 4²?",
    options: ["25", "7", "49", "16"],
    correct: "25",
    explanation: "3² = 9 e 4² = 16. Então, 3² + 4² = 9 + 16 = 25",
    subject: "math",
    difficulty: 1
  },
  {
    id: 3,
    text: "Qual é a principal função das mitocôndrias?",
    options: [
      "Produção de energia",
      "Digestão celular",
      "Armazenamento de água",
      "Síntese de proteínas"
    ],
    correct: "Produção de energia",
    explanation: "As mitocôndrias são as 'usinas de energia' das células, responsáveis pela produção de ATP através da respiração celular.",
    subject: "biology",
    difficulty: 2
  },
  {
    id: 4,
    text: "Qual é a primeira lei de Newton?",
    options: [
      "Lei da Inércia",
      "Lei da Ação e Reação",
      "Lei da Gravidade",
      "Lei da Aceleração"
    ],
    correct: "Lei da Inércia",
    explanation: "A primeira lei de Newton, ou Lei da Inércia, afirma que um corpo tende a permanecer em seu estado de repouso ou movimento uniforme em linha reta, a menos que uma força externa atue sobre ele.",
    subject: "physics",
    difficulty: 2
  },
  {
    id: 5,
    text: "Qual é o valor de π (pi) arredondado para duas casas decimais?",
    options: ["3.14", "3.41", "3.12", "3.16"],
    correct: "3.14",
    explanation: "O número π (pi) é aproximadamente igual a 3.14159... Arredondando para duas casas decimais, temos 3.14.",
    subject: "math",
    difficulty: 1
  },
  {
    id: 6,
    text: "Qual é o processo pelo qual as plantas produzem seu próprio alimento?",
    options: ["Fotossíntese", "Respiração", "Digestão", "Fermentação"],
    correct: "Fotossíntese",
    explanation: "A fotossíntese é o processo em que plantas usam luz solar, água e CO2 para produzir glicose e oxigênio.",
    subject: "biology",
    difficulty: 1
  },
  {
    id: 7,
    text: "Qual é o número atômico do carbono?",
    options: ["6", "12", "8", "4"],
    correct: "6",
    explanation: "O carbono tem número atômico 6, significando que possui 6 prótons em seu núcleo.",
    subject: "chemistry",
    difficulty: 2
  },
  {
    id: 8,
    text: "Qual é a fórmula para calcular a área de um círculo?",
    options: ["πr²", "2πr", "πd", "r²"],
    correct: "πr²",
    explanation: "A área de um círculo é calculada multiplicando π pelo quadrado do raio (πr²).",
    subject: "math",
    difficulty: 2
  },
  {
    id: 9,
    text: "Qual é a unidade de medida para força no Sistema Internacional?",
    options: ["Newton", "Joule", "Pascal", "Watt"],
    correct: "Newton",
    explanation: "O Newton (N) é a unidade de força no SI, definida como a força necessária para acelerar 1 kg a 1 m/s².",
    subject: "physics",
    difficulty: 2
  },
  {
    id: 10,
    text: "Qual é o pH de uma solução neutra?",
    options: ["7", "0", "14", "1"],
    correct: "7",
    explanation: "Uma solução neutra tem pH = 7. Valores menores são ácidos e maiores são básicos.",
    subject: "chemistry",
    difficulty: 1
  }
];