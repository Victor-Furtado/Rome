import { Image, Space, Stack, Text, Timeline, Title } from '@mantine/core';
import { NextPage } from 'next';

const Page: NextPage = () => {
  return (
    <div style={{ display: 'flex', gap: 32 }}>
      <Stack style={{ overflow: 'auto', height: '80vh', paddingRight: 16 }}>
        <Title>REINO DE ROMA</Title>
        <Timeline style={{ paddingLeft: 16 }}>
          <Timeline.Item title="0 - Fundação do Império" bulletSize={24}>
            <Text color="dimmed" size="sm">
              Morte de Remus pelas mãos de seu irmão e origem do principio da Integridade romana
            </Text>
          </Timeline.Item>
          <Timeline.Item title="38 - Nomeação do Rei Numa Pompilius" bulletSize={24}>
            <Text color="dimmed" size="sm">
              Numa Pompilius foi o lendário segundo rei de Roma, sucedendo Romulus após um ano de interrex. Muitas das instituições religiosas e políticas mais importantes de Roma foram gestadas em seu reinado, como o calendário romano, o culto de Marte e o cargo de pontifex maximus.
            </Text>
          </Timeline.Item>
          <Timeline.Item title="80 - Nomeação do Rei Tullus Hostilius" bulletSize={24}>
            <Text color="dimmed" size="sm">
              Tullus Hostilius foi o lendário terceiro rei de Roma. Ao contrário de seu antecessor, Tullus era conhecido como um rei guerreiro que contrastou a natureza pacífica de seu antecessor. Sua soberba enfureceu Júpiter, que com um raio o matou. Dando origem ao principio romano da equidade
            </Text>
          </Timeline.Item>
          <Timeline.Item title="111 - A assembléia legislativa do Reino Romano, elegeu Ancus Marcius Rei de Roma." bulletSize={24}>
            <Text color="dimmed" size="sm">
              Ancus Marcius foi o lendário quarto rei de Roma. Convocada uma assembléia do povo, elegeu-se o novo rei. Diz-se que Ancus governou em guerras como Romulus, enquanto também promovia a paz e a religião como Numa.
            </Text>
          </Timeline.Item>
          <Timeline.Item title="137 - A Assembléia Curiate elegeu Lúcio Tarquínio Prisco Rei de Roma" bulletSize={24}>
            <Text color="dimmed" size="sm">
              Tarquínio, o Velho, foi o lendário quinto rei de Roma e o primeiro da dinastia etrusca. Tarquínio expandiu o poder romano através da conquista militar e grandes construções arquitetônicas. Sua esposa era a profetisa, Tanaquil.
            </Text>
          </Timeline.Item>
          <Timeline.Item title="178 - O Senado aceitou o regente Sérvio Túlio como rei de Roma" bulletSize={24}>
            <Text color="dimmed" size="sm">
              Sérvio Túlio foi o lendário sexto rei de Roma e o segundo da dinastia etrusca. De origens servis e casado com uma das filhas de Lúcio Tarquínio Prisco, assassinado em 174. Ele é o primeiro rei romano a aderir sem eleição pela Assembleia, tendo conquistado o trono por apoio popular e real, com auxilio da Rainha.
            </Text>
          </Timeline.Item>
          <Timeline.Item title="218 - Morte de Servius Tullius" bulletSize={24}>
            <Text color="dimmed" size="sm">
              Servius Tullius foi assassinado por sua filha Tullia Minor e seu marido Lucius Tarquinius Superbus, que se declarou rei de Roma nos degraus da Cúria Hostilia.
            </Text>
          </Timeline.Item>
          <Timeline.Item title="244 - O fim do reinado" bulletSize={24}>
            <Text color="dimmed" size="sm">
              A patrícia Lucretia foi estuprada pelo filho de Lucius Tarquinius Superbus, Sextus Tarquinius.
            </Text>
            <Space h="md" />
            <Text color="dimmed" size="sm">
              Derrube da monarquia romana: Após o suicídio de Lucretia, Lucius Junius Brutus convocou a Assembleia Curiate, uma das assembleias legislativas do Reino Romano. Este último concordou com a derrubada e expulsão de Lucius Tarquinius Superbus e com uma constituição provisória sob a qual dois cônsules atuavam como um executivo conjunto e uma Assembléia Curiate detinha o poder legislativo, e jurou nunca mais deixar um rei governar Roma.
            </Text>
          </Timeline.Item>
        </Timeline>
      </Stack>
      <Stack style={{ overflow: 'auto', height: '80vh', paddingRight: 16 }}>
        <Title>IMPÉRIO DE ROMA</Title>
        <Timeline style={{ paddingLeft: 16 }}>
          <Timeline.Item title="244 - Batalha de Silva Arsia" bulletSize={24}>
            <Text color="dimmed" size="sm">
              As forças Tarquinianas e Veientinas leais a Lucius Tarquinius Superbus foram derrotadas na Silva Arsia por um exército romano. Lucius Junius Brutus foi morto. Publius Valerius Publicola, retornando a Roma com os despojos de guerra, foi premiado com o primeiro triunfo romano em 1º de março.
            </Text>
          </Timeline.Item>
          <Timeline.Item title="357 - Soldados romanos ganharam um primeiro salário" bulletSize={24} />
          <Timeline.Item title="387 - Lucius Sextius was elected the first plebeian consul." bulletSize={24}>
            <Text color="dimmed" size="sm">
              Lucius Sextius Sextinus Lateranus era um tribuno romano da plebe e é conhecido por ter um que passou as Leges Liciniae Sextiae (Leis de divisão de terras). Tendo sido reeleitos nove vezes, Lucius Sextius Lateranus e Caio Licinius Stolo ocuparam o tribunato plebeu por dez anos. Os dois tribunos da plebe propuseram uma quarta lei relativa aos sacerdotes que eram os guardiões dos sagrados Livros Sibilinos, e Lucius Sextius Lateranus foi eleito para servir como cônsul para o ano 387. Lívio escreveu que ele foi &quot;o primeiro dos plebeus a obter essa honra&quot;.
            </Text>
          </Timeline.Item>
          <Timeline.Item title="415 - Guerras Latinas" bulletSize={24}>
            <Text color="dimmed" size="sm">
              Roma derrotou os exércitos da Liga Latina
            </Text>
          </Timeline.Item>
          <Timeline.Item title="460 - A census counted about 270,000 residents of Rome. " bulletSize={24} />
          <Timeline.Item title="653 - Nascimento de Gaius Julius Caesar " bulletSize={24} />
          <Timeline.Item title="671 - César foi indicado como o novo flamen Dialis" bulletSize={24} />
          <Timeline.Item title="675 - César se torna advogado com honrarias" bulletSize={24} />
          <Timeline.Item title="684 - César foi eleito quaestor e sua esposa Cornelia morre" bulletSize={24} />
          <Timeline.Item title="686 - Promessa de César" bulletSize={24}>
            <Text color="dimmed" size="sm">
              Um encontro com uma estatua de Alexandre, o Grande, César faz uma promessa de grandeza para Roma e é abençoado pelo espirito do grande conquistador.
            </Text>
          </Timeline.Item>
          <Timeline.Item title="695 - César incorpora feiticeiros em suas fileiras na Gália" bulletSize={24} />
          <Timeline.Item title="709 - César Impede seu assassinato no Senado com uso de poder mágico e Nascimento de seu filho Caesarion" bulletSize={24}>
            <Text color="dimmed" size="sm">
              &quot;Não seria César se não dominasse todos os poderes&quot;
            </Text>
          </Timeline.Item>
        </Timeline>
      </Stack>
      <Stack style={{ overflow: 'auto', height: '80vh', paddingRight: 16 }}>
        <Title>IMORTAL ROMA</Title>
        <Timeline style={{ paddingLeft: 16 }}>
          <Timeline.Item title="0 Fundação do Império" bulletSize={24}>
            <Text color="dimmed" size="sm">
              Morte de Remus pelas mãos de seu irmão e origem do principio da Integridade romana
            </Text>
          </Timeline.Item>
          <Timeline.Item title="38 - Nomeação do Rei Numa Pompilius" bulletSize={24}>
            <Text color="dimmed" size="sm">
              Numa Pompilius foi o lendário segundo rei de Roma, sucedendo Romulus após um ano de interrex. Ele era de origem sabina, e muitas das instituições religiosas e políticas mais importantes de Roma são atribuídas a ele, como o calendário romano, as virgens vestais, o culto de Marte, o culto de Júpiter, o culto de Rômulo e o cargo de pontifex maximus.
            </Text>
          </Timeline.Item>
          <Timeline.Item title="80 - Nomeação do Rei Tullus Hostilius" bulletSize={24}>
            <Text color="dimmed" size="sm">
              Tullus Hostilius foi o lendário terceiro rei de Roma. Ao contrário de seu antecessor, Tullus era conhecido como um rei guerreiro que contrastou a natureza pacífica de seu antecessor fortalecendo Roma. Expansionista, superou Rômulo em suas guerras. Tendo se colocado acima dos demais homens ele enfureceu Júpiter, que com um raio o matou. Dando origem ao principio romano da equidade
            </Text>
          </Timeline.Item>
          <Timeline.Item title="111 - A assembléia legislativa do Reino Romano, elegeu Ancus Marcius Rei de Roma." bulletSize={24}>
            <Text color="dimmed" size="sm">
              Ancus Marcius foi o lendário quarto rei de Roma. Após a morte de Tullus Hostilius o Senado romano nomeou um interrex, que por sua vez convocou uma sessão da assembléia do povo que elegeu o novo rei. Diz-se que Ancus governou em guerras como Romulus, enquanto também promovia a paz e a religião como Numa. Ancus Marcius trocou seu nome homônimo Marcii, que pertencia a uma família plebeia.
            </Text>
          </Timeline.Item>
          <Timeline.Item title="137 - A Assembléia Curiate elegeu Lúcio Tarquínio Prisco Rei de Roma" bulletSize={24}>
            <Text color="dimmed" size="sm">
              Lúcio Tarquínio Prisco, ou Tarquínio, o Velho, foi o lendário quinto rei de Roma e o primeiro da dinastia etrusca. Tarquínio expandiu o poder romano através da conquista militar e grandes construções arquitetônicas. Sua esposa era uma profetisa, Tanaquil.
            </Text>
          </Timeline.Item>
          <Timeline.Item title="178 - O Senado aceitou o regente Sérvio Túlio como rei de Roma" bulletSize={24}>
            <Text color="dimmed" size="sm">
              Sérvio Túlio foi o lendário sexto rei de Roma e o segundo da dinastia etrusca. De origens servis e casado com uma das filhas de Lúcio Tarquínio Prisco, assassinado em 174. Ele é o primeiro rei romano a aderir sem eleição pela Assembleia, tendo conquistado o trono por apoio popular e real, com auxilio da Rainha.
            </Text>
          </Timeline.Item>
          <Timeline.Item title="Default bullet" bulletSize={24}>
            <Text color="dimmed" size="sm">
              Default bullet without anything
            </Text>
          </Timeline.Item>
          <Timeline.Item title="Default bullet" bulletSize={24}>
            <Text color="dimmed" size="sm">
              Default bullet without anything
            </Text>
          </Timeline.Item>
          <Timeline.Item title="Default bullet" bulletSize={24}>
            <Text color="dimmed" size="sm">
              Default bullet without anything
            </Text>
          </Timeline.Item>
          <Timeline.Item title="Default bullet" bulletSize={24}>
            <Text color="dimmed" size="sm">
              Default bullet without anything
            </Text>
          </Timeline.Item>
          <Timeline.Item title="Default bullet" bulletSize={24}>
            <Text color="dimmed" size="sm">
              Default bullet without anything
            </Text>
          </Timeline.Item>
          <Timeline.Item title="Default bullet" bulletSize={24}>
            <Text color="dimmed" size="sm">
              Default bullet without anything
            </Text>
          </Timeline.Item>
          <Timeline.Item title="Default bullet" bulletSize={24}>
            <Text color="dimmed" size="sm">
              Default bullet without anything
            </Text>
          </Timeline.Item>
        </Timeline>
      </Stack>
    </div>
  );
}

export default Page