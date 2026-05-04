export const firstAidGuides = [
  {
    id: '1',
    title: 'Ressuscitação Cardiopulmonar (RCP)',
    category: 'Crítico',
    icon: 'heart',
    description: 'Primeiros passos para RCP em casos de parada cardiorrespiratória',
    steps: [
      {
        number: 1,
        title: 'Verificar Responsividade',
        description: 'Toque a pessoa e grite para checar se está consciente. Se não responder, coloque em posição de recuperação.',
      },
      {
        number: 2,
        title: 'Chamar Emergência',
        description: 'Ligue para 192 (SAMU) ou 911 imediatamente. Se em local público, procure por um desfibrilador automático.',
      },
      {
        number: 3,
        title: 'Iniciar Compressões Torácicas',
        description: 'Coloque a vítima em decúbito dorsal (costas). Ajoelhe-se ao lado do tórax. Coloque o calcanhar de uma mão no centro do tórax e a outra sobre ela.',
      },
      {
        number: 4,
        title: 'Manter Ritmo',
        description: 'Comprima o tórax a uma profundidade de 5-6 cm, mantendo uma taxa de 100-120 compressões por minuto. Use a música "Stayin\' Alive" como referência de ritmo.',
      },
      {
        number: 5,
        title: 'Alternar com Respiração',
        description: 'Faça 30 compressões, depois 2 respirações de resgate (boca a boca ou boca-nariz). Continue o ciclo até a chegada do SAMU ou sinais de vida retornarem.',
      },
    ],
    tips: [
      'Não desista até chegar ajuda profissional',
      'Se não souber fazer respiração de resgate, apenas faça as compressões',
      'Qualquer ajuda é melhor do que nenhuma',
    ],
  },
  {
    id: '2',
    title: 'Engasgo',
    category: 'Crítico',
    icon: 'alert-circle',
    description: 'Como desobstruir as vias aéreas de uma pessoa engasgada',
    steps: [
      {
        number: 1,
        title: 'Identificar o Engasgo',
        description: 'Se a pessoa não consegue falar, tossir ou respirar, está com engasgo crítico. Se consegue tossir, deixe tossir primeiro.',
      },
      {
        number: 2,
        title: 'Posicionar-se',
        description: 'Fique em pé ou ajoelhado atrás da vítima. Abrace a cintura dela com seus braços.',
      },
      {
        number: 3,
        title: 'Localizar o Ponto de Pressão',
        description: 'Coloque um punho logo acima do umbigo, abaixo da caixa torácica. Coloque a outra mão sobre o punho.',
      },
      {
        number: 4,
        title: 'Executar Compressões Abdominais',
        description: 'Com movimento rápido e para cima, comprima o abdômen. Repita 5 vezes. Se não sair o objeto, alterne com palmadas nas costas.',
      },
      {
        number: 5,
        title: 'Continuar Procedimento',
        description: 'Continue alternando 5 compressões abdominais com 5 palmadas nas costas até o objeto ser expelido ou a pessoa desmaiar.',
      },
    ],
    tips: [
      'Em bebês, use compressões torácicas leves',
      'Se a pessoa desmaiar, inicie RCP',
      'Procure emergência mesmo após desobstruir',
    ],
  },
  {
    id: '3',
    title: 'Hemorragia',
    category: 'Urgente',
    icon: 'droplet',
    description: 'Controle de sangramento em feridas',
    steps: [
      {
        number: 1,
        title: 'Segurança Pessoal',
        description: 'Use luvas de látex se disponível. Proteja-se de doenças infecciosas.',
      },
      {
        number: 2,
        title: 'Aplicar Pressão Direta',
        description: 'Use uma gaze ou tecido limpo e aplique pressão firme no local do sangramento. Não remova o primeiro pano, adicione novos sobre ele.',
      },
      {
        number: 3,
        title: 'Elevar o Membro',
        description: 'Se a ferida estiver em um membro, eleve acima do nível do coração para reduzir o fluxo de sangue.',
      },
      {
        number: 4,
        title: 'Aplicar Torniquete (em casos graves)',
        description: 'Se o sangramento não parar, aplique um torniquete 2-3 cm acima da ferida. Escreva a hora de aplicação na pele.',
      },
      {
        number: 5,
        title: 'Procurar Emergência',
        description: 'Ligue para emergência (192). Mantenha pressão enquanto aguarda ajuda. Se possível, mantenha a vítima deitada.',
      },
    ],
    tips: [
      'Pressão contínua é mais eficaz que pressionões intermitentes',
      'Não remova objetos empalados',
      'Observe sinais de choque',
    ],
  },
  {
    id: '4',
    title: 'Queimaduras',
    category: 'Urgente',
    icon: 'zap',
    description: 'Primeiros socorros para queimaduras de vários graus',
    steps: [
      {
        number: 1,
        title: 'Parar a Queimadura',
        description: 'Remova a vítima da fonte de calor. Se as roupas estão pegando fogo, abafe com um cobertor ou deite-a no chão e role-a.',
      },
      {
        number: 2,
        title: 'Esfriar a Área',
        description: 'Coloque água fria (não gelo) na área queimada por 10-20 minutos. Água fria reduz a profundidade e a dor.',
      },
      {
        number: 3,
        title: 'Remover Restrições',
        description: 'Remova anéis, pulseiras, relógios e roupas (se não estiverem aderidas). O inchaço virá em breve.',
      },
      {
        number: 4,
        title: 'Cobrir a Queimadura',
        description: 'Use bandagens ou pano limpo e seco. Mantenha estéril. Para queimaduras graves, use filme de plástico ou saco plástico limpo.',
      },
      {
        number: 5,
        title: 'Procurar Emergência',
        description: 'Queimaduras moderadas a graves precisam de atendimento médico. Ligue para 192 se: queimadura > 2,5 cm, rosto, mãos, pés ou genitais.',
      },
    ],
    tips: [
      'Nunca use gelo diretamente na pele',
      'Não use manteiga, óleos ou pasta de dente',
      'Observe sinais de choque',
    ],
  },
  {
    id: '5',
    title: 'Desmaio',
    category: 'Urgente',
    icon: 'eye-off',
    description: 'O que fazer quando alguém desmaiar',
    steps: [
      {
        number: 1,
        title: 'Colocar em Posição de Segurança',
        description: 'Deite a vítima no chão. Coloque-a de lado em "posição de recuperação" para evitar que a língua bloqueie as vias aéreas.',
      },
      {
        number: 2,
        title: 'Verificar Responsividade',
        description: 'Toque a vítima e fale em voz alta. Verifique se está respirando normalmente.',
      },
      {
        number: 3,
        title: 'Elevar as Pernas',
        description: 'Levante as pernas da vítima para cerca de 30 cm para aumentar o fluxo de sangue para o cérebro (a menos que haja suspeita de lesão medular).',
      },
      {
        number: 4,
        title: 'Mantenha Alerta',
        description: 'Fique perto da vítima. Monitore a respiração. Se não acordar em 5-10 minutos, ligue para emergência.',
      },
      {
        number: 5,
        title: 'Procurar Ajuda Médica',
        description: 'Ligue para 192 se não acordar rapidamente, se houver queda de altura, ou se houver lesão aparente.',
      },
    ],
    tips: [
      'Não coloque nada na boca da vítima',
      'Não tente dar bebida',
      'Mantenha a pessoa confortável e aquecida',
    ],
  },
  {
    id: '6',
    title: 'Envenenamento/Intoxicação',
    category: 'Crítico',
    icon: 'alert-triangle',
    description: 'Procedimento para casos de envenenamento ou intoxicação',
    steps: [
      {
        number: 1,
        title: 'Garantir Segurança',
        description: 'Remova a vítima da fonte de toxina se for seguro. Não toque em substâncias perigosas sem proteção.',
      },
      {
        number: 2,
        title: 'Ligar para Emergência',
        description: 'Ligue para 192 ou Centro de Toxicologia (0800 722 6001 em SP). Tenha informações sobre a substância pronta.',
      },
      {
        number: 3,
        title: 'Não Induzir Vômito',
        description: 'Em geral, NÃO tente induzir vômito. Isto pode ser prejudicial com certos venenos.',
      },
      {
        number: 4,
        title: 'Manter Amostra',
        description: 'Se possível, guarde a embalagem ou amostra da substância para mostrar aos paramédicos.',
      },
      {
        number: 5,
        title: 'Monitorar Vítima',
        description: 'Observe sinais de vida. Se ficar inconsciente, coloque em posição de recuperação e monitore respiração.',
      },
    ],
    tips: [
      'Sempre tenha números de emergência à mão',
      'Mantenha antídotos comuns em casa',
      'Evite contato com pele e roupas',
    ],
  },
  {
    id: '7',
    title: 'Fratura/Luxação',
    category: 'Urgente',
    icon: 'box',
    description: 'Imobilização de ossos e articulações lesionadas',
    steps: [
      {
        number: 1,
        title: 'Parar o Movimento',
        description: 'Imediatamente imobilize a área. Evite qualquer movimento do membro afetado.',
      },
      {
        number: 2,
        title: 'Aplicar Gelo',
        description: 'Coloque gelo ou bolsa fria coberta com tecido no local. Isso reduz inchaço e dor. Máximo 20 minutos.',
      },
      {
        number: 3,
        title: 'Elevar o Membro',
        description: 'Se possível, mantenha o membro elevado acima do nível do coração para reduzir inchaço.',
      },
      {
        number: 4,
        title: 'Imobilizar Adequadamente',
        description: 'Use atadura, tipoia ou tala para imobilizar. Para suspeita de fratura na coluna, NÃO mova a vítima desnecessariamente.',
      },
      {
        number: 5,
        title: 'Procurar Emergência',
        description: 'Procure atendimento médico para avaliação radiográfica. Ligue para 192 se houver suspeita de fratura grave ou lesão medular.',
      },
    ],
    tips: [
      'R.I.C.E.: Rest, Ice, Compression, Elevation',
      'Não tente colocar um osso fraturado de volta no lugar',
      'Observar dormência ou formigamento',
    ],
  },
];
