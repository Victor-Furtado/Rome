import { Accordion, Stack, Table, Text, Title } from '@mantine/core';
import { NextPage } from 'next';

export const Tab: NextPage = () => {
    return (
        <Stack>
            <Title>Regras de Magia</Title>
            <Text>
                A utilização de uma mágica funciona da mesma forma
                que a utilização de qualquer outra perícia. O operador
                joga 3 dados e compara o resultado com seu nível de
                habilidade efetivo (seu nível de habilidade naquela
                mágica ajustado por quaisquer modificadores). Se o
                resultado for menor ou igual ao nível de habilidade
                efetivo, a mágica funciona. Se o resultado for maior
                que o NH efetivo, a mágica fracassa.
            </Text>
            <Text>
                Um sucesso no teste de habilidade indica que a mágica
                foi feita e seu custo de energia deve ser subtraído dos
                pontos de fadiga ou dos pontos de vida. Os efeitos da
                mágica ocorrem imediatamente. Um sucesso decisivo indica
                que a mágica funcionou muito bem. Os detalhes são deixados
                inteiramente por conta do Mestre, que deve ser generoso e
                criativo. Não há gasto de energia quando um personagem obtém
                um sucesso decisivo durante uma operação mágica.
            </Text>
            <Text>
                Um fracasso indica que a mágica não funcionou. Se a mágica
                apresentava um custo de energia em caso de sucesso, o
                operador perde um ponto de energia. Caso contrário, o
                operador também não perde nada (exceção: no caso de uma mágica
                de informação, o personagem deve pagar todo o custo de energia,
                mesmo que ocorra um fracasso). Uma falha crítica indica que o
                custo de energia da mágica foi gasto, mas o resultado foi muito
                ruim. O Mestre pode utilizar a Tabela de Falhas Críticas em
                Operações Mágicas ou improvisar qualquer “choque de retorno” que
                julgar mais divertido.
            </Text>
            <Title order={3}>Ferimento e Concentração</Title>
            <Text>
                Se ele ficar atordoado enquanto estiver se concentrando, a mágica
                é perdida automaticamente.
            </Text>
            <Text>
                Se for ferido, — mas não ficar atordoado — enquanto estiver se
                concentrando e obtiver um sucesso no teste de habilidade para
                evitar a distração, o operador pode fazer a mágica
            </Text>
            <Title order={3}>Tabela de Magias</Title>
            <Text>Consulte abaixo a lista de magias, suas descrições e efeitos</Text>
            <Accordion variant="filled" radius="xs" chevronPosition="left">
                <Accordion.Item value="Alquimia">
                    <Accordion.Control>Verto res (Alquimia)</Accordion.Control>
                    <Accordion.Panel>
                        <Text>A alquimia é baseada na suposição de que todas as coisas possuem uma certa energia, e quando esta energia entra em contato com outras energias de outras substâncias, pode surgir um componente resultante específico que pode ser forte o suficiente para criar um certo efeito.Esta habilidade ensina quais são os melhores ingredientes, como obtê-los (o melhor momento e método) e como misturá-los nas proporções certas. Um ligeiro contratempo em uma operação alquímica pode ser fatal, e os erros geralmente deixam marcas duradouras nos alquimistas.</Text>
                        <Table style={{ overflowX: 'auto' }} captionSide='bottom' highlightOnHover>
                            <thead style={{ backgroundColor: 'black' }}>
                                {alquimia.head.map(h => (
                                    <th key={h}>{h}</th>
                                ))}
                            </thead>
                            <tbody>
                                {alquimia.body.map((b, i) => (
                                    <tr key={i}>
                                        <td style={{ width: 84 }}>{b.name}</td>
                                        <td style={{ width: 16 }}>{b.mod}</td>
                                        <td style={{ width: 42 }}>{b.conj}</td>
                                        <td style={{ width: 64 }}>{b.dur}</td>
                                        <td style={{ width: 256 }}>{b.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="Divinação">
                    <Accordion.Control>Augurium (Divinação)</Accordion.Control>
                    <Accordion.Panel>
                        <Text>Adivinhação é a arte de conhecer o divino e um dos ramos mais imprecisos da magia. Um mago divinatório tem conhecimento das razões que movem os deuses e dos mistérios que cercam os eventos que acontecem no que os mundanos chamam de vida. A arte divinatória permite ao praticante penetrar no futuro, conhecer o passado, viajar a lugares distantes, saber o porquê das coisas acontecerem e até mesmo penetrar na natureza do próprio universo, se ele, pelo menos, interpretar corretamente as visões que tem.</Text>
                        <Table style={{ overflowX: 'auto' }} captionSide='bottom' highlightOnHover>
                            <thead style={{ backgroundColor: 'black' }}>
                                {divinacao.head.map(h => (
                                    <th key={h}>{h}</th>
                                ))}
                            </thead>
                            <tbody>
                                {divinacao.body.map((b, i) => (
                                    <tr key={i}>
                                        <td style={{ width: 84 }}>{b.name}</td>
                                        <td style={{ width: 16 }}>{b.mod}</td>
                                        <td style={{ width: 42 }}>{b.conj}</td>
                                        <td style={{ width: 64 }}>{b.dur}</td>
                                        <td style={{ width: 256 }}>{b.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="Elementarismo">
                    <Accordion.Control>Natura Imperium (Elementarismo)</Accordion.Control>
                    <Accordion.Panel>
                        <Text>Esta é a ciência que permite ao mago controlar as forças elementares e elementares da natureza, da chuva de verão às erupções vulcânicas, da chama de uma vela à força de um tufão.Esta habilidade assume o controle dos 4 elementos, e normalmente não é ensinada a menos que o mago seja submetido a testes muito fortes, para assegurar aos mestres a integridade moral do aluno.</Text>
                        <Table style={{ overflowX: 'auto' }} captionSide='bottom' highlightOnHover>
                            <thead style={{ backgroundColor: 'black' }}>
                                {elementarismo.head.map(h => (
                                    <th key={h}>{h}</th>
                                ))}
                            </thead>
                            <tbody>
                                {elementarismo.body.map((b, i) => (
                                    <tr key={i} key={i}>
                                        <td style={{ width: 84 }}>{b.name}</td>
                                        <td style={{ width: 16 }}>{b.mod}</td>
                                        <td style={{ width: 42 }}>{b.conj}</td>
                                        <td style={{ width: 64 }}>{b.dur}</td>
                                        <td style={{ width: 256 }}>{b.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="Levitação">
                    <Accordion.Control>Praevolo (Levitação)</Accordion.Control>
                    <Accordion.Panel>
                        <Text>É a capacidade de criar um campo de energia em torno de um determinado objeto que pode diminuir ou anular o campo gravitacional do planeta, permitindo que o alvo se mova à distância.Portanto, não é o mesmo que telecinesia de levitação psiônica, que afeta um objeto por dentro, em nível molecular.</Text>
                        <Table style={{ overflowX: 'auto' }} captionSide='bottom' highlightOnHover>
                            <thead style={{ backgroundColor: 'black' }}>
                                {levitacao.head.map(h => (
                                    <th key={h}>{h}</th>
                                ))}
                            </thead>
                            <tbody>
                                {levitacao.body.map((b, i) => (
                                    <tr key={i}>
                                        <td style={{ width: 84 }}>{b.name}</td>
                                        <td style={{ width: 16 }}>{b.mod}</td>
                                        <td style={{ width: 42 }}>{b.conj}</td>
                                        <td style={{ width: 64 }}>{b.dur}</td>
                                        <td style={{ width: 256 }}>{b.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="Cura">
                    <Accordion.Control>Theurgia (Cura)</Accordion.Control>
                    <Accordion.Panel>
                        <Text>Esta é a habilidade de um mago de causar ou curar aflições simplesmente por um esforço de sua vontade.A priori, uma pessoa não precisa saber nada de anatomia ou medicina para realizar um ato de teurgia.</Text>
                        <Table style={{ overflowX: 'auto' }} captionSide='bottom' highlightOnHover>
                            <thead style={{ backgroundColor: 'black' }}>
                                {cura.head.map(h => (
                                    <th key={h}>{h}</th>
                                ))}
                            </thead>
                            <tbody>
                                {cura.body.map((b, i) => (
                                    <tr key={i}>
                                        <td style={{ width: 84 }}>{b.name}</td>
                                        <td style={{ width: 16 }}>{b.mod}</td>
                                        <td style={{ width: 42 }}>{b.conj}</td>
                                        <td style={{ width: 64 }}>{b.dur}</td>
                                        <td style={{ width: 256 }}>{b.desc}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
            <Title order={3}>Duração e Conjuração</Title>
            <div style={{ display: 'flex' }}>
                <Table style={{ marginRight: 8 }} captionSide='bottom' highlightOnHover>
                    <thead style={{ backgroundColor: 'black' }}>
                        <th>Valor</th>
                        <th>Tempo</th>
                        <th>Duração</th>
                    </thead>
                    <tbody>
                        {conjDur.map((obj, i) => (
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{obj.conj}</td>
                                <td>{obj.dur}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Stack>
                    <Text>
                        Na grande maioria dos casos, o efeito mágico dura “o que for necessário”, ou é instantâneo, ou dura enquanto o mago se concentrar nele, enquanto a conjuração tem um tempo de lançamento especificado em sua descrição. Uma cura, por exemplo, dura o tempo que precisa durar, ou seja, até que o alvo seja ferido novamente. Um efeito de adivinhação dura o tempo necessário para o conjurador receber sua visão. Em caso de dúvida, o mestre é o árbitro final. Alguns efeitos mágicos têm duração diferenciada. As durações que um efeito são as da tabela ao lado
                    </Text>
                    <Text>
                        Se o mago quiser, ANTES de lançar a magia, ele pode anunciar que a está lançando antes do normal ou com maior duração com uma penalidade adicional. Esta penalidade é dada pela diferença do tempo listado para lançar e aquele tentado conforme descrito na tabela ao lado.
                    </Text>
                    <Text>
                        Por exemplo: se um efeito é descrito como levando 1 hora para ser lançado, um mago pode tentar lançá-lo em 1 minuto com uma penalidade de (6-3) 3 pontos em seu nível de habilidade.
                    </Text>
                    <Text>
                        Um mago pode deliberadamente levar mais tempo do que o normal para realizar uma magia ou fazer uma magia que dure menos e, com isso, ganhar um bônus em seu nível da mesma forma. O maior bônus possível é +3.
                    </Text>
                </Stack>
            </div>
            <div style={{ display: 'flex' }}>
                <Stack style={{ marginRight: 8 }}>
                    <Title order={3}>Concentração</Title>
                    <Text>Sua concetração é determinada pelo seu nível na perícia 'meditação'. Quanto maior a habilidade, maior sua capacidade de se concentrar.</Text>
                    <Text>Este período pressupõe que o mago esteja relaxado e livre de interferências. Se ele estiver distraído por algo, ele deve rolar sua “meditação” para evitar perder o controle da magia. Se ele se distrair repetidamente, ele deve rolar com uma penalidade cumulativa apropriada.</Text>
                </Stack>
                <Table captionSide='bottom' highlightOnHover>
                    <thead style={{ backgroundColor: 'black' }}>
                        <th>NH</th>
                        <th>Concentração</th>
                    </thead>
                    <tbody>
                        {concentracao.map((t, i) => (
                            <tr key={i}>
                                <td style={{ textAlign: 'center' }}>{i + 12}</td>
                                <td style={{ textAlign: 'center' }}>{t}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
            <Title order={3}>Duração Fixa</Title>
            <Text>Outros efeitos têm sua duração descrita como <b>fixa</b>. Isso significa que a duração desses efeitos mágicos não pode ser alterada com sucessos. Dura apenas o que é indicado. Na grande maioria dos casos, são efeitos instantâneos ou que duram enquanto o mago se concentra.</Text>

            <Title order={3}>Familiaridade</Title>
            <Text>Muitos efeitos mágicos são modificados pela familiaridade do conjurador com o alvo. A tabela que relaciona a familiaridade com o modificador de perícia é a seguinte:</Text>
            <Table captionSide='bottom' highlightOnHover>
                <thead style={{ backgroundColor: 'black' }}>
                    <th>Modificador</th>
                    <th>Familiaridade</th>
                </thead>
                <tbody>
                    {familiaridade.map((f, i) => (
                        <tr key={i}>
                            <td style={{ textAlign: 'center' }}>{f.mod}</td>
                            <td>{f.fam}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Stack >
    );
}

export default Tab

const alquimia = {
    head: ['Magia', 'Mod.', 'Conj.', 'Duracao', 'Efeito'],
    body: [
        {
            name: 'Poções de cura e doênça',
            mod: '0',
            conj: '1 hora',
            dur: 'Instantaneo',
            desc: 'Cura ou gera doênças de menor proporção, capazes de gerar febre, mal estar e enjoos',
        },
        {
            name: 'Poções de natalidade e anti-natais',
            mod: '-1',
            conj: '1 hora',
            dur: '1 Mês',
            desc: 'Torna o alvo istéril ou ultra fértil, em gestântes causa aborto ou nascimento prematuro',
        },
        {
            name: 'Poção sensorial',
            mod: '-2',
            conj: '1 hora',
            dur: '1 Dia',
            desc: 'Adiciona +2 no sentido escolhido e remove efeitos negativos do mesmo.',
        },
        {
            name: 'Poção rejuvenecedora',
            mod: '-3',
            conj: '1 hora',
            dur: '1 Mês',
            desc: 'Não rejuvenece realmente o alvo, mas modifica a aparência, e remove efeitos da velhice como: queda de cabelo, rugas, menopáusa, impotência.',
        },
        {
            name: 'Poção de Hector',
            mod: '-4',
            conj: '1 hora',
            dur: '5 Minutos',
            desc: 'Quando ingerido, o alvo ganha uma dose de vitalidade, e pode resistir à doênças e venenos além de negar efeitos de fadiga sobre o alvo.',
        },
        {
            name: 'Poção de Mopheus',
            mod: '-4',
            conj: '1 dia',
            dur: '1 Hora',
            desc: 'Se ingerido, o alvo dorme por 1D + 5 horas. Pode ser posta em chamas e o aroma causa efeito de sono. Se o alvo falhar em um teste de (Will - Qualidade da poção)',
        },
        {
            name: 'Poção Herculea',
            mod: '-5',
            conj: '1 dia',
            dur: '1 Hora',
            desc: 'O alvo recebe +2 em ST',
        },
        {
            name: 'Poção de Eros',
            mod: '-5',
            conj: '1 dia',
            dur: 'Instantaneo',
            desc: 'Esta poção vem em pares e torna os dois alvos apaixonados um pelo outro. A duração da paixão é inconstante.',
        },
        {
            name: 'Poção de Aquiles',
            mod: '-6',
            conj: '1 dia',
            dur: '1 Hora',
            desc: 'O alvo é imune a dor e efeitos de sono. Ele somente cairá quando morto.',
        },
        {
            name: 'Poção de Brutus',
            mod: '-7',
            conj: '2 dias',
            dur: '1 Hora',
            desc: 'O alvo cresce signitivamente e ganha +3 em HT e na PV máxima',
        },
        {
            name: 'Poção de Proteus',
            mod: '-10',
            conj: '1 dia',
            dur: '3 Horas',
            desc: 'O alvo irá se transformar em outra pessoa. (O sangue da pessoa é necessário)',
        },
        {
            name: 'Poção de Helena',
            mod: '-12',
            conj: '5 dias',
            dur: '1 Hora',
            desc: 'O aroma exalado pela poção causa as reações mais positivas aos que veem o alvo e inimigos declarados se intimidam ao máximo.',
        },
        {
            name: 'Poção de Mercúrio',
            mod: '-14',
            conj: '7 dias',
            dur: '3 Minutos',
            desc: 'O alvo ganha +5 em rolagens fisicas e um ataque extra por turno',
        },
    ]
}
const divinacao = {
    head: ['Magia', 'Mod.', 'Conj.', 'Duracao', 'Efeito'],
    body: [
        {
            name: 'Clarividência',
            mod: '0*',
            conj: '5 min.',
            dur: 'Concentração Fixo (Familiaridade)',
            desc: 'Este é o efeito que permite ao mago saber o que está acontecendo ao longe. Permite a obtenção de informações sobre eventos que vão além do que os sentidos costumam perceber. Escolha o que deseja ver (Pessoa, Lugar, Objeto) antes do teste',
        },
        {
            name: 'Retrocognição',
            mod: '-5*',
            conj: '30 min.',
            dur: 'Concentração Fixo (Familiaridade)',
            desc: 'Esse efeito é como a clarividência, mas para coisas que aconteceram no passado. Alguns eventos deixam uma marca mais profunda do que outros, e estes são mais fáceis de sentir.',
        },
        {
            name: 'Précognição',
            mod: '-7*',
            conj: '5 min.',
            dur: 'Concentração Fixo (Familiaridade)',
            desc: 'Basicamente, tudo o que não aconteceu ainda pode mudar. No entanto,  algumas coisas são MUITO improváveis, enquanto outras são muito prováveis. Uma precognição mostra os eventos mais prováveis de acontecer',
        },
        {
            name: 'Telepatia',
            mod: '-8*',
            conj: '1 min.',
            dur: 'Concentração Fixo (Familiaridade)',
            desc: 'Esta é a capacidade de reunir os pensamentos e sentimentos de outras  pessoas na própria mente. Com essa habilidade, o mago sabe como diferencie  de seus próprios pensamentos dos dos outros. Todos os pensamentos dos  sentidos do mago vêm a ele como se fossem seus, e isso é muito mais treinamento para identificar o que é dele e o que não é (e se apegar a isso) do  que qualquer outra coisa.',
        },
        {
            name: 'Intuíção',
            mod: '-12*',
            conj: 'Instant',
            dur: 'Instantaneo Fixo (Familiaridade)',
            desc: 'Este efeito dá ao mago uma intuição, uma dica, uma ajuda nos momentos difíceis e até nos fáceis. Todas as intuições são instantâneas e, embora possam ser bastante específicas, vêm como imagens/noções sobre algo fixo e atemporal, por exemplo: Não entre aí, Aposte no cavalo branco, Ele está mentindo Etc.',
        },
        {
            name: 'Oráculo',
            mod: '-15/-20',
            conj: '9 horas',
            dur: 'Concentração Fixo',
            desc: 'Este efeito permite ao mago saber a resposta para qualquer pergunta. O mago tem uma penalidade adicional de 5 pontos se a questão for sobre algo com que ele esteja pessoalmente envolvido.',
        },
    ]
}
const elementarismo = {
    head: ['Magia', 'Mod.', 'Conj.', 'Duracao', 'Efeito'],
    body: [
        {
            name: 'Ignição',
            mod: '0',
            conj: '5 seg.',
            dur: 'Instantaneo',
            desc: 'Este efeito permite ao mago faiscar objetos ou superfícies inflamáveis.',
        },
        {
            name: 'Windblast',
            mod: '0',
            conj: '5 seg.',
            dur: 'Concentração',
            desc: 'Este efeito permite que o lançador convoque um vendaval.',
        },
        {
            name: 'Controle de temperatura',
            mod: '-2',
            conj: '5 seg.',
            dur: 'Próx. nascer ou por do sol',
            desc: 'Este efeito permite que o mago altere a temperatura ao redor de uma pessoa, objeto ou área. Ele pode alterar esta temperatura para qualquer valor de 20 a 100 Cº a uma taxa máxima de 1 Cº/s.',
        },
        {
            name: 'Golpe distante',
            mod: '-3',
            conj: '5 seg.',
            dur: 'Instantaneo Fixo',
            desc: 'Com este efeito, o mago pode projetar sua própria energia à distância e golpear coisas distantes. O golpe projetado tem a força de um soco. (Conte na tabela de GdP com seu IQ)',
        },
        {
            name: 'Sem alimentação',
            mod: '-5',
            conj: '5 min.',
            dur: 'Próx. nascer ou por do sol',
            desc: 'Este efeito permite ao mago suprimir toda a sua necessidade de comer por um determinado período de tempo. Se ele se alimentar enquanto a magia estiver em vigor, a comida passará por seu corpo sem ser processada.',
        },
        {
            name: 'Controlar o Clima',
            mod: '-8',
            conj: '30 min.',
            dur: 'Instantaneo',
            desc: 'This effect allows the mage to control the forces of the climate, as long as it`s not disastrous.He can, basically, determine the climate in a certain region.If the region is far away from where he is, apply the Familiarity modifiers.',
        },
        {
            name: 'Explosão',
            mod: '-10',
            conj: '1 min.',
            dur: 'Instantaneo Fixo',
            desc: 'O mago se concentra e causa uma rajada de fogo. Com isso, ele pode explodir quase qualquer objeto. Este efeito causa 4d dano explosivo centralizado em um ponto visível.',
        },
        {
            name: 'Não respira',
            mod: '-15',
            conj: '5 min.',
            dur: 'Concentração',
            desc: 'Durante a duração do efeito, o mago se absterá de respirar, também se tornará imune aos efeitos da pressão extrema (positiva ou negativa).',
        },
        {
            name: 'Raio',
            mod: '-15',
            conj: '1 min.',
            dur: 'Instantaneo Fixo',
            desc: 'Este efeito permite ao mago fazer com que um raio caia do céu em um local de sua escolha. Ele deve ver o lugar, deve ser ao ar livre e o clima deve ser favorável. Causa 6d de dano a tudo o que toca. Nenhuma armadura protege contra esse dano, mas uma gaiola de Faraday o dissipa inteiramente.',
        },
    ]
}
const levitacao = {
    head: ['Magia', 'Mod.', 'Conj.', 'Duracao', 'Efeito'],
    body: [
        {
            name: 'Telecinese',
            mod: '0',
            conj: '5 seg.',
            dur: 'Concentração Fixo',
            desc: 'Este efeito permite que o mago controle o movimento de um objeto à distância. Depende do volume, não do peso, e objetos maiores incorrem em penalidades maiores. (-8 para levitar uma pessoa)',
        },
        {
            name: 'Impulso',
            mod: '-3',
            conj: 'Instant',
            dur: 'Concentração Fixo',
            desc: 'Este efeito permite que um mago crie um impulso repentino de movimento para um objeto. O efeito é o mesmo como se alguém tivesse empurrado (ou puxado) repentinamente o objeto com um ST igualando o QI do mago.',
        },
        {
            name: 'Flutuar',
            mod: '-8',
            conj: '5 seg.',
            dur: 'Concentração Fixo',
            desc: 'Este efeito permite que um mago levite e voe para longe. Isso dura enquanto o mago se concentra. A velocidade com que ele voa é igual a 2m/s vezes a margem de sucessos (para 0 de margem, a velocidade é de 1m / s).',
        },
        {
            name: 'Manipulação',
            mod: '-4',
            conj: '1 seg.',
            dur: 'Concentração Fixo',
            desc: 'Este efeito permite que um mago, com intensa concentração, manipule algum objeto à distância. Ele poderia, por exemplo, trancar/destrancar uma porta (com um teste de lockpicking), tocar um instrumento musical Etc. O objeto não levitará, mas simplesmente começará a trabalhar.',
        },
    ]
}
const cura = {
    head: ['Magia', 'Mod.', 'Conj.', 'Duracao', 'Efeito'],
    body: [
        {
            name: 'Diagnose',
            mod: '0',
            conj: '5 seg.',
            dur: 'Instantâneo Fixo',
            desc: 'Este efeito permite que o mago sinta o que está fisicamente errado com o alvo.',
        },
        {
            name: 'Estabilizar',
            mod: '-2',
            conj: '5 min.',
            dur: 'Instantâneo Fixo',
            desc: 'Com este efeito, o mago estabiliza o corpo do alvo de forma a diminuir seus ferimentos evitando sua morte.',
        },
        {
            name: 'Curar/Infectar',
            mod: '-2',
            conj: '5 min.',
            dur: 'Instantâneo Fixo',
            desc: 'Este efeito permite ao mago curar ou causar uma doença no alvo. A penalidade aumenta de acordo com a força e intensidade da doença',
        },
        {
            name: 'Regenerar',
            mod: '-4',
            conj: '30 min.',
            dur: 'Instantâneo Fixo',
            desc: 'Este efeito permite que o mago recupere tecidos perdidos e feche feridas, recuperando assim o dano estrutural a um corpo. Cada margem de sucesso cura 1 ponto de PV para um alvo. (A penalidade pode aumentar para regeneração de orgãos ou membros)',
        },
    ]
}

const conjDur = [
    {
        conj: 'Instantâneo',
        dur: 'Instantâneo',
    },
    {
        conj: '2 segundos',
        dur: 'Concentração',
    },
    {
        conj: '5 segundos',
        dur: '1 hora',
    },
    {
        conj: '1 minute',
        dur: '1 semana',
    },
    {
        conj: '5 minutes',
        dur: '1 mês',
    },
    {
        conj: '30 minutes',
        dur: 'Uma estação',
    },
    {
        conj: '1 hora',
        dur: '1 ano',
    },
    {
        conj: '3 horas',
        dur: '10 anos',
    },
]

const concentracao = [
    '5 segundos',
    '10 segundos',
    '30 segundos',
    '1 minuto',
    '3 minutos'
]

const familiaridade = [
    {
        mod: '+2',
        fam: 'Pode ver o alvo'
    },
    {
        mod: '+1',
        fam: 'Possui representação física do alvo (Quadro, Estátua)'
    },
    {
        mod: '0',
        fam: 'Possui imagem mental do alvo'
    },
    {
        mod: '-2',
        fam: 'Sem imagem do alvo'
    },
    {
        mod: '+1',
        fam: 'Pode tocar o alvo'
    },
    {
        mod: '0',
        fam: 'Possui um objeto que pertence ao alvo'
    },
    {
        mod: '0',
        fam: 'As auras do alvo e do conjurador estão se tocando'
    },
    {
        mod: '-2',
        fam: 'Não existe contato com o alvo'
    },
    {
        mod: '+2',
        fam: 'Sabe o nome verdadeiro do alvo'
    },
    {
        mod: '+2',
        fam: 'Conhece o alvo intimamente (Esposo/pai/irmão)'
    },
    {
        mod: '+1',
        fam: 'Conhece bem o alvo (Grandes amigos, Amantes)'
    },
    {
        mod: '0',
        fam: 'Conhece o alvo minimamente (Amigo, colega de trab)'
    },
    {
        mod: '-1',
        fam: 'Conhece de ouvir falar do alvo'
    },
    {
        mod: '-2',
        fam: 'Não faz ideia de quem seja o alvo'
    }
]