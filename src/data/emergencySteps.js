export const STEPS = {
  engasgo: {
    title: 'Engasgo',
    description: 'Obstrução das vias aéreas por corpos estranhos.',
    steps: [
      'Verifique se a pessoa consegue tossir ou falar.',
      'Se conseguir tossir, incentive a tosse e monitore.',
      'Se não consegue respirar ou falar, chame ajuda imediatamente.',
      'Faça compressões abdominais (Heimlich) se aplicável.',
      'Continue até o objeto sair ou a ajuda chegar.'
    ],
    dont: ['Não bata nas costas com muita força em adultos inconscientes.']
  },
  desmaio: {
    title: 'Desmaio',
    description: 'Perda temporária de consciência, geralmente breve.',
    steps: [
      'Deite a pessoa de costas.',
      'Eleve as pernas se não houver suspeita de lesão na coluna.',
      'Verifique respiração e pulso.',
      'Afrouxe roupas apertadas ao redor do pescoço e cintura.',
      'Se não recuperar, chame ajuda.'
    ],
    dont: ['Não deixe a pessoa sozinha até recuperação completa.']
  },
  convulsao: {
    title: 'Convulsão',
    description: 'Movimentos involuntários e perda de controle muscular.',
    steps: [
      'Proteja a cabeça e afaste objetos perigosos.',
      'Coloque algo macio sob a cabeça se possível.',
      'Não segure a pessoa com força nem coloque nada na boca.',
      'Observe duração da convulsão; chame ajuda se >5 minutos.',
      'Após a convulsão, coloque em posição lateral de segurança se estiver respirando.'
    ],
    dont: ['Não tente restringir movimentos vigorosamente.']
  },
  parada: {
    title: 'Parada cardiorrespiratória',
    description: 'Interrupção súbita da respiração e circulação.',
    steps: [
      'Verifique resposta: chame alto e toque nos ombros.',
      'Verifique respiração; se ausente, peça alguém para chamar 192.',
      'Inicie compressões torácicas vigorosas (100-120/min).',
      'Continue RCP até a chegada do SAMU ou DEA.'
    ],
    dont: ['Não pare as compressões por longos períodos.']
  },
  quedas: {
    title: 'Quedas e acidentes',
    description: 'Traumas causados por impacto ou queda.',
    steps: [
      'Evite mover a vítima sem necessidade.',
      'Verifique sinais vitais e ferimentos visíveis.',
      'Controle sangramentos com pressão direta.',
      'Se houver dor intensa ou suspeita de fratura, chame resgate.',
      'Mantenha a pessoa calma e aquecida.'
    ],
    dont: ['Não mova a vítima se houver suspeita de lesão na coluna.']
  }
};
