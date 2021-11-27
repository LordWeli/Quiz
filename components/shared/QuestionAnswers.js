const questions = {
  1: {
    question: 'O lixo hospitalar é classificado em quantos grupos?',
    answers: [
      { answer: '1 grupo', correct: false },
      { answer: '3 grupos', correct: false },
      { answer: '5 grupos***', correct: true },
      { answer: '4 grupos ', correct: false },
    ]
  },
  2: {
    question: 'Qual a classificação do lixo hospitalar?',
    answers: [
      { answer: 'A, B, C, D, E***', correct: true },
      { answer: 'A, B, E', correct: false },
      { answer: 'B, C, D, E ', correct: false },
      { answer: 'Não tem classificação ', correct: false },
    ]
  },
  3: {
    question: 'Onde desse ser descartado o lixo radioativo?',
    answers: [
      { answer: 'Em aterro sanitário ', correct: false },
      { answer: 'Em caixas blindadas***', correct: true },
      { answer: 'Tratamento de esgoto', correct: false },
      { answer: 'Rios e lagos ', correct: false },
    ]
  },
  4: {
    question: 'Qual a classificação do lixo hospitalar que oferece maior risco?',
    answers: [
      { answer: 'Resíduos orgânicos', correct: false },
      { answer: 'Resíduos recicláveis', correct: false },
      { answer: 'Materiais perfuro cortantes ', correct: false },
      { answer: 'Resíduos infectantes***', correct: true },
    ]
  },
  5: {
    question: 'O grupo B é formado por quais resíduos?',
    answers: [
      { answer: 'Resíduos químicos***', correct: true },
      { answer: 'Resíduos recicláveis ', correct: false },
      { answer: 'Resíduos infectante', correct: false },
      { answer: 'Resíduos orgânicos', correct: false },
    ]
  },
  6: {
    question: 'Qual a cor da sacola que é realizado o descarte de lixo contaminado?',
    answers: [
      { answer: 'Sacola Branca***', correct: true },
      { answer: 'Sacola verde ', correct: false },
      { answer: 'Sacola preta ', correct: false },
      { answer: 'Sacola vermelha ', correct: false },
    ]
  },
  7: {
    question: 'Os resíduos são separados e identificados por sacolas coloridas. Quais são as cores?',
    answers: [
      { answer: 'Preto, verde e branco***', correct: true },
      { answer: 'Preto, verde e vermelho ', correct: false },
      { answer: 'Vermelho, preto e azul ', correct: false },
      { answer: 'Azul, amarelo e roxo ', correct: false },
    ]
  },
  8: {
    question: 'Algumas instituições realizam a incineração do lixo. Qual o ponto negativo desse processo?',
    answers: [
      { answer: 'As cinzas formadas contaminam a atmosfera, poluindo o ar***', correct: true },
      { answer: 'Ocorre a poluição dos rios ', correct: false },
      { answer: 'Os animais sofrem intoxicação ', correct: false },
      { answer: 'As plantas sofrem com o acumulo das cinzas ', correct: false },
    ]
  },
  9: {
    question: 'Qual o maior desastre radiológico do Brasil?',
    answers: [
      { answer: 'Césio-137 ***', correct: true },
      { answer: 'Chernobyl ', correct: false },
      { answer: 'Fukushima ', correct: false },
      { answer: 'Tree mile island', correct: false },
    ]
  },
  10: {
    question: 'Materiais biológicos contaminados com sangue ou patógenos são denominados como:',
    answers: [
      { answer: 'Lixo doméstico', correct: false },
      { answer: 'Lixo eletrônico', correct: false },
      { answer: 'Lixo hospitalar***', correct: true },
      { answer: 'Lixo industrial', correct: false },
    ]
  },
  11: {
    question: 'Quais destes objetos não fazem parte do lixo hospitalar:',
    answers: [
      { answer: 'Bolsa de sangue', correct: false },
      { answer: 'Agulha', correct: false },
      { answer: 'Seringas ', correct: false },
      { answer: 'Papel higiênico***', correct: true },
    ]
  },
  12: {
    question: 'Marque a única alternativa que não é um resíduo hospitalar:',
    answers: [
      { answer: 'Resíduos perfurocortantes', correct: false },
      { answer: 'Resíduos químicos', correct: false },
      { answer: 'Resíduos infectantes', correct: false },
      { answer: 'Resíduos eletrônicos***', correct: true },
    ]
  },
  13: {
    question: 'Materiais escarificantes, tais como agulhas, lâminas e vidros são resíduos:',
    answers: [
      { answer: 'Químicos', correct: false },
      { answer: 'Radioativos', correct: false },
      { answer: 'Perfuro cortantes ***', correct: true },
      { answer: 'Eletrônicos', correct: false },
    ]
  },
  14: {
    question: 'Resíduos hospitalares devem ser descartados de forma correta para que não haja nenhum risco à saúde da população e nem ao meio ambiente, qual a cor de sacola correta?',
    answers: [
      { answer: 'Sacolas verdes – lixo reciclável ', correct: false },
      { answer: 'Sacolas pretas – lixo doméstico', correct: false },
      { answer: 'Sacolas brancas – lixo contaminado ***', correct: true },
      { answer: 'Sacolas amarelas – perfuro cortantes ', correct: false },
    ]
  },
  15: {
    question: 'As caixas de papelão para materiais perfuro cortantes devem conter um símbolo de substância:',
    answers: [
      { answer: 'Comum', correct: false },
      { answer: 'Infecciosa ***', correct: true },
      { answer: 'Químico', correct: false },
      { answer: 'Reciclável ', correct: false },
    ]
  },
  16: {
    question: 'O método GAIA conta com três fases:',
    answers: [
      { answer: 'Sensibilização, conscientização e capacitação***', correct: true },
      { answer: 'Técnicas científicas, políticas e conscientização', correct: false },
      { answer: 'Qualificação, políticas e preservação', correct: false },
      { answer: 'Capacitação, sensibilização e técnicas científicas', correct: false },
    ]
  },
  17: {
    question: 'Assinale qual destes é um objeto perfuro cortante no ambiente hospitalar:',
    answers: [
      { answer: 'Faca', correct: false },
      { answer: 'Agulhas***', correct: true },
      { answer: 'Prego', correct: false },
      { answer: 'Canivete', correct: false },
    ]
  },
  18: {
    question: 'Entre os materiais abaixo, qual desses é de caráter potencialmente infectante?',
    answers: [
      { answer: 'Bolsas de sangue***', correct: true },
      { answer: 'Frasco de soro', correct: false },
      { answer: 'Embalagem de medicamentos ', correct: false },
      { answer: 'Resto de alimentos ', correct: false },
    ]
  },
  19: {
    question: 'Qual material possuem substâncias químicas?',
    answers: [
      { answer: 'Embalagens de materiais estéreis ', correct: false },
      { answer: 'Caixa perfuro cortante ', correct: false },
      { answer: 'Frascos de antibióticos***', correct: true },
      { answer: 'Pomadas tópicas ', correct: false },
    ]
  },
  20: {
    question: 'Qual desse material abaixo não possuem risco biológico, químico ou radiológico?',
    answers: [
      { answer: 'Lâminas de bisturi usadas ', correct: false },
      { answer: 'Agulhas usadas ', correct: false },
      { answer: 'Tubos de coleta sanguínea ', correct: false },
      { answer: 'Resto de alimentos***', correct: true },
    ]
  },
  21: {
    question: 'Dentre os materiais abaixo qual pode ser reaproveitado?',
    answers: [
      { answer: 'Ampolas de vidro', correct: false },
      { answer: 'Scalpe ', correct: false },
      { answer: 'Frasco de soro vazio***', correct: true },
      { answer: 'Tubos capilares ', correct: false },
    ]
  },
  22: {
    question: 'O transporte utilizado para levar os resíduos sólidos de saúde até seu destino final?',
    answers: [
      { answer: 'Veículo com carroceria fechada***', correct: true },
      { answer: 'Carro de coleta de lixo', correct: false },
      { answer: 'Caminhão ', correct: false },
      { answer: 'Tratores ', correct: false },
    ]
  },
  23: {
    question: 'O descarte de materiais perfurocortantes deve ser feito em:',
    answers: [
      { answer: 'Caixa coletora de perfuro cortantes ***', correct: true },
      { answer: 'Garrafa pet ', correct: false },
      { answer: 'Lixo comum ', correct: false },
      { answer: 'Aterro sanitário ', correct: false },
    ]
  },
  24: {
    question: 'A cor da sacola significa que há?',
    answers: [
      { answer: 'Lixo contaminado***', correct: true },
      { answer: 'Restos de comida ', correct: false },
      { answer: 'Lixo doméstico ', correct: false },
      { answer: 'Nenhuma alternativa correta ', correct: false },
    ]
  },
  25: {
    question: 'Descarte final dos resíduos sólidos de saúde é feito pelo fabricante?',
    answers: [
      { answer: 'Sim', correct: false },
      { answer: 'Não***', correct: true },
      { answer: 'É feito pela prefeitura da cidade ', correct: false },
      { answer: 'É feito pela empresa coletora dos resíduos ', correct: false },
    ]
  },
  26: {
    question: 'Assinale onde deve ser feito o descarte das sobras de sangue do laboratório:',
    answers: [
      { answer: 'No sistema de coleta de esgoto***', correct: true },
      { answer: 'No lixo comum', correct: false },
      { answer: 'Nas ruas da cidade', correct: false },
      { answer: 'Nos rios e mares', correct: false },
    ]
  },
  27: {
    question: 'O que são resíduos químicos:',
    answers: [
      { answer: 'Restos de refeições, fraldas e absorventes.', correct: false },
      { answer: 'Agulhas, lâminas e vidros.', correct: false },
      { answer: 'Medicamentos vencidos, produtos de limpeza e resíduos com materiais de laboratório***', correct: true },
      { answer: 'Bolsas de sangue, órgãos e tecidos', correct: false },
    ]
  },
  28: {
    question: 'Em quais locais o processo de tratamento dos resíduos de saúde vem se diversificando:',
    answers: [
      { answer: 'Em locais onde foram gerados***', correct: true },
      { answer: 'Em locais hospitalares. ', correct: false },
      { answer: 'Em ambientes domésticos.', correct: false },
      { answer: 'Em ambientes industriais.', correct: false },
    ]
  },
  29: {
    question: 'O descarte incorreto do lixo hospitalar pode trazer malefícios, EXCETO?',
    answers: [
      { answer: 'Riscos de contaminação ao solo e água.', correct: false },
      { answer: 'Risco de terremotos e enchentes***', correct: true },
      { answer: 'Risco de acidentes ao descarte. ', correct: false },
      { answer: 'Risco de possíveis patologias.', correct: false },
    ]
  },
  30: {
    question: 'O que é o método Gaia?',
    answers: [
      { answer: 'É um método de gerenciamento de aspectos e impactos ambientais***', correct: true },
      { answer: 'É um método de fiscalização hospitalar ', correct: false },
      { answer: 'É um método de reciclagem ', correct: false },
      { answer: 'É um método de redução na produção de lixo', correct: false },
    ]
  },
  31: {
    question: 'O que é aspecto ambiental?',
    answers: [
      { answer: 'Todo elemento que pode causar alguma modificação ao meio ambiente***', correct: true },
      { answer: 'Todo elemento que causa impactos ambientais ', correct: false },
      { answer: 'Todo elemento insubstituível na natureza ', correct: false },
      { answer: 'Matéria prima ', correct: false },
    ]
  },
  32: {
    question: 'Qual objetivo do método Gaia?',
    answers: [
      { answer: 'Auxiliar a organização, destacando impactos ambientais, e sugerindo estratégias para diminuição***', correct: true },
      { answer: 'Aumentar os impactos ambientais ', correct: false },
      { answer: 'Aumentar a poluição ', correct: false },
      { answer: 'Auxiliar nas queimadas e destruição de fauna e flora', correct: false },
    ]
  },
  33: {
    question: 'Porque materiais contaminados não podem entrar em contato com lagos e rios?',
    answers: [
      { answer: 'Com o tempo acabam modificando a cor da água', correct: false },
      { answer: 'A contaminação se espalha com maior facilidade, prejudicando qualquer ser vivo que entre em contato***', correct: true },
      { answer: 'Aumentam a quantidade de plantas no leito do rio', correct: false },
      { answer: 'Aumentam a quantidade de peixes ', correct: false },
    ]
  },
  34: {
    question: 'Como é feita a lavagem de lençóis usados em hospitais?',
    answers: [
      { answer: 'Cada paciente lava seus lençóis ', correct: false },
      { answer: 'Não são lavados ', correct: false },
      { answer: 'Lavadoras de roupa convencionais ', correct: false },
      { answer: 'Lavanderias próprias em temperatura altas***', correct: true },
    ]
  },
  35: {
    question: 'Quais as etapas de descarte do lixo hospitalar?',
    answers: [
      { answer: 'Coleta, tratamento e destino', correct: false },
      { answer: 'Tratamento, coleta e destino', correct: false },
      { answer: 'Separação, coleta, tratamento e destino***', correct: true },
      { answer: 'Destino, separação e tratamento', correct: false },
    ]
  },
  36: {
    question: 'Em relação a questão ambiental, o que os resíduos hospitalares podem causar?',
    answers: [
      { answer: 'Aumento da imunidade adaptativa ', correct: false },
      { answer: 'Mortalidade de colônia de ratos ', correct: false },
      { answer: 'Diminuição de insetos nas grandes cidades', correct: false },
      { answer: 'Dispersão de doenças infecciosas***', correct: true },
    ]
  },
  37: {
    question: 'Nem todos os materiais são incinerados, qual o destino dos que não são?',
    answers: [
      { answer: 'Aterros sanitários***', correct: true },
      { answer: 'Sistema de tratamento de esgoto ', correct: false },
      { answer: 'Retornam para os hospitais ', correct: false },
      { answer: 'Espalhados pela cidade ', correct: false },
    ]
  },
  38: {
    question: 'Qual o destino final dos resíduos do grupo A?',
    answers: [
      { answer: 'Passam por tratamento', correct: false },
      { answer: 'São autoclavados ou incinerados***', correct: true },
      { answer: 'São reciclados ', correct: false },
      { answer: 'Passam por uma leve limpeza ', correct: false },
    ]
  },
  39: {
    question: 'O que é a autoclavagem?',
    answers: [
      { answer: 'Lavagem simples dos aparelhos', correct: false },
      { answer: 'Limpeza de bancadas e mesas ', correct: false },
      { answer: 'Lavagem dos ambientes hospitalares ', correct: false },
      { answer: 'Processo que submete os resíduos a uma temperatura elevada***', correct: true },
    ]
  },
  40: {
    question: 'Os resíduos perfurantes, contaminados com patógenos ou infecciosos, quando descartados de forma incorreta em aterros sanitários comuns, trazem um grande risco aos:',
    answers: [
      { answer: 'Flanelinhas ', correct: false },
      { answer: 'Catadores de lixo***', correct: true },
      { answer: 'Garçons ', correct: false },
      { answer: 'Trabalhadores da saúde ', correct: false },
    ]
  },
  41: {
    question: 'O risco de contaminação é elevado, uma vez que os materiais médicos podem:',
    answers: [
      { answer: 'Disseminar gripe à população', correct: false },
      { answer: 'Auxiliar no processo saúde-doença ', correct: false },
      { answer: 'Ajudar na cura de algumas doenças ', correct: false },
      { answer: 'Provocar e disseminar doenças, alterando o solo e a água***', correct: true },
    ]
  },
  42: {
    question: 'O contato destes materiais com o solo ou a água pode provocar contaminações no ambiente, tais como:',
    answers: [
      { answer: 'Comprometimento de rios, lagos e até mesmo lençóis freáticos, e solos***', correct: true },
      { answer: 'Não provocam contaminações', correct: false },
      { answer: 'Contaminam somente os solos ', correct: false },
      { answer: 'Só contaminam seres aquáticos ', correct: false },
    ]
  },
  43: {
    question: 'Uma das práticas usadas é a incineração dos lixos infectantes, no entanto:',
    answers: [
      { answer: 'É uma pratica que não oferece risco a natureza', correct: false },
      { answer: 'Oferece risco de queimadas', correct: false },
      { answer: 'As cinzas contaminam rios que tiverem próximos', correct: false },
      { answer: 'Libera cinzas contaminadas com substâncias nocivas à atmosfera, aumentando a poluição***', correct: true },
    ]
  },
  44: {
    question: 'O perigo mais significativo para o ecossistema, está presente em materiais que são potencialmente:',
    answers: [
      { answer: 'Infectantes e perfurocortantes (Grupos A e E)***', correct: true },
      { answer: 'Resíduos comuns (Grupo D)', correct: false },
      { answer: 'Rejeitos radioativos (Grupo C)', correct: false },
      { answer: 'Remédios vencidos ', correct: false },
    ]
  },
  45: {
    question: 'Quais os riscos dos agentes biológicos, como sangue, secreções e excreções humanas, além de partes de órgãos, tecidos e resíduos laboratoriais:',
    answers: [
      { answer: 'Chegam ao solo ou entram em contato com água, ocorrem sérias contaminações e danos à vegetação***', correct: true },
      { answer: 'Não apresentam risco ', correct: false },
      { answer: 'Risco baixo', correct: false },
      { answer: 'Somente danos a água ', correct: false },
    ]
  },
  46: {
    question: 'Acerca da armazenagem e transporte dos Resíduos sólidos e resíduos líquidos, marque a alternativa CORRETA:',
    answers: [
      { answer: 'Sacos de acondicionamento para resíduos do sistema de saúde devem ser constituídos de material resistente a ruptura e vazamento', correct: false },
      { answer: 'Não é necessário o uso de equipamentos de proteção individual ', correct: false },
      { answer: 'Armazenamento temporário consiste na guarda permanente dos recipientes ', correct: false },
      { answer: 'Devem ser acondicionados em recipientes constituídos de material compatível com o líquido armazenado ***', correct: true },
    ]
  },
  47: {
    question: 'Sobre a classificação de resíduos, assinale a alternativa CORRETA.',
    answers: [
      { answer: 'Resíduos farmacêuticos e rejeitos radioativos são resíduos classificados como especiais. ***', correct: true },
      { answer: 'Resíduos farmacêuticos, de sangue e hemoderivados são resíduos infectantes', correct: false },
      { answer: 'Resíduos biológicos, cirúrgicos e anatomopatológicos são resíduos especiais', correct: false },
      { answer: 'Nenhumas das alternativas ', correct: false },
      { answer: 'Perfuro cortantes são resíduos orgânicos ', correct: false },
    ]
  },
  48: {
    question: 'São resíduos infectantes, exceto:',
    answers: [
      { answer: 'Gaze usada, esparadrapo usado', correct: false },
      { answer: 'Sonda usada, dreno usado', correct: false },
      { answer: 'Frascos de soro, papel de embrulho***', correct: true },
      { answer: 'Campos protetores de superfície', correct: false },
      { answer: 'Luvas usadas', correct: false },
    ]
  },
  49: {
    question: 'Qual o destino final dos resíduos do grupo C?',
    answers: [
      { answer: 'Realizar o decaimento da radioatividade levando em consideração o tempo de meia vida do resíduo***', correct: true },
      { answer: 'Descarte em rios e lagos ', correct: false },
      { answer: 'Descarte em aterros sanitários ', correct: false },
      { answer: 'Incineração em ala hospitalar ', correct: false },
    ]
  },
  50: {
    question: 'Quais resíduos componentes do grupo E?',
    answers: [
      { answer: 'Perfuro cortantes***', correct: true },
      { answer: 'Lixo reciclado', correct: false },
      { answer: 'Bolsas de sangue', correct: false },
      { answer: 'Lixo radioativo', correct: false },
      { answer: 'Resíduos farmacêuticos', correct: false },
    ]
  },
}

export const returnShuffle = () => {
  let keys = Object.keys(questions);

  let shuffle = keys.sort(() => .5 - Math.random()).slice(0, 20);

  let shuffle_questions = shuffle.map(function (i) {
    return questions[i];
  });

  return shuffle_questions;
}
