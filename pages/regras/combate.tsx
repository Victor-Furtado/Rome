import { Accordion, List, Stack, Table, Text, Title } from '@mantine/core';
import { NextPage } from 'next';

export const Tab: NextPage = () => {
    return (
        <Stack>
            <Title>Regras de Combate</Title>
            <Text>
                O combate é realizado segundo a
                segundo. Cada personagem ativamente
                envolvido em um combate tem uma
                oportunidade de agir a cada segundo,
                que será denominada seu “turno”.
                Depois que todos os personagens
                envolvidos tiverem terminado seu turno,
                um segundo terá se passado
            </Text>
            <Text>
                O turno de um dado participante é o
                período de um segundo que se estende do
                momento em que ele escolhe sua manobra até
                sua próxima oportunidade de escolher uma
                manobra. Isto ocorre simultaneamente com os
                aos turnos dos outros personagens.
            </Text>
            <Title order={3}>Atacando</Title>
            <List>
                <List.Item>Primeiro, o jogador faz a jogada de ataque. Em caso de sucesso, o ataque foi bem-sucedido.</List.Item>
                <List.Item>Depois, o oponente pode fazer uma jogada de defesa para se defender do ataque. Em caso de sucesso, ele escapa ou detém o ataque e não é atingido.</List.Item>
                <List.Item>Se o alvo fracassar na jogada de defesa, ele é atingido. Faça uma avaliação de dano.</List.Item>
            </List>
            <Title order={3}>Tabela de Manobras</Title>
            <Text>
                Uma “manobra” é uma ação que o personagem pode
                realizar em seu turno. Em cada turno ele tem de
                escolher uma das manobras na tabela. A escolha
                determina o que o personagem vai fazer no seu
                turno, e determina suas opções de defesas ativas
                e movimentação — assim como sua capacidade de se
                esquivar, aparar ou bloquear ataques.
            </Text>
            <Accordion variant="filled" chevronPosition="left">
                <Accordion.Item value="ac">
                    <Accordion.Control>ATAQUES "COMUNS"</Accordion.Control>
                    <Accordion.Panel>
                        <Stack>
                            <Text>Atacar um alvo (ao alcance) desarmado ou com uma arma pronta (-4 para ataques com arma de mão inábil sem Ambidestre, Treinado por um Mestre/Mestre de Armas Etc.)</Text>
                            <Table captionSide='bottom' highlightOnHover>
                                <caption>
                                    <Text size='xs'>Movimento: 1 passo</Text>
                                    <Text size='xs'>* Uma falha crítica em qualquer um desses testes causa um dano adicional de 1 PV no braço (bloqueio, apara, maioria dos ataques) ou perna (esquiva, chute). DR não protege desse dano.</Text>
                                    <Text size='xs'>† Só pode usar uma opção ofensiva por turno (Flurry of Blows, Mighty Blows, Heroic Charge)</Text>
                                    <Text size='xs'>‡ Só pode usar uma opção defensiva por turno (Recuperação Rápida, Defesa Fervecente)</Text>
                                </caption>
                                <thead style={{ backgroundColor: 'black' }}>
                                    {manobrasCC.head.map(h => (
                                        <th>{h}</th>
                                    ))}
                                </thead>
                                <tbody>
                                    {manobrasCC.body.map(b => (
                                        <tr>
                                            <td>{b.name}</td>
                                            <td>{b.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Stack>
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="at">
                    <Accordion.Control>ATAQUES TOTAIS</Accordion.Control>
                    <Accordion.Panel>
                        <Stack>
                            <Text>Sem defesas no seu próximo turno</Text>
                            <Table captionSide='bottom' highlightOnHover>
                                <caption>
                                    <Text size='xs'>Movimento: 1/2 para frente</Text>
                                </caption>
                                <thead style={{ backgroundColor: 'black' }}>
                                    {manobrasAT.head.map(h => (
                                        <th>{h}</th>
                                    ))}
                                </thead>
                                <tbody>
                                    {manobrasAT.body.map(b => (
                                        <tr>
                                            <td>{b.name}</td>
                                            <td>{b.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Stack>
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="ma">
                    <Accordion.Control>MOVER E ATACAR</Accordion.Control>
                    <Accordion.Panel>
                        <Stack>
                            <Text>Mova-se e ainda ataque com uma penalidade de -4 e uma perícia máxima de 9. -2 em rolagens para evitar cair, etc. Não pode aparar ou recuar (sem Recuperação Rápida).</Text>
                            <Table captionSide='bottom' highlightOnHover>
                                <caption>
                                    <Text size='xs'>Movimento: Normal</Text>
                                    <Text size='xs'>* Uma falha crítica em qualquer um desses testes causa um dano adicional de 1 PV no braço (bloqueio, apara, maioria dos ataques) ou perna (esquiva, chute). DR não protege desse dano.</Text>
                                    <Text size='xs'>† Só pode usar uma opção ofensiva por turno (Flurry of Blows, Mighty Blows, Heroic Charge)</Text>
                                    <Text size='xs'>‡ Só pode usar uma opção defensiva por turno (Recuperação Rápida, Defesa Fervecente)</Text>
                                </caption>
                                <thead style={{ backgroundColor: 'black' }}>
                                    {manobrasMA.head.map(h => (
                                        <th>{h}</th>
                                    ))}
                                </thead>
                                <tbody>
                                    {manobrasMA.body.map(b => (
                                        <tr>
                                            <td>{b.name}</td>
                                            <td>{b.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Stack>
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="d">
                    <Accordion.Control>DEFESAS</Accordion.Control>
                    <Accordion.Panel>
                        <Stack>
                            <Text>+2 em uma Defesa Ativa até o próximo turno, ou tente duas defesas contra um ataque. (Meio movimento permitido se aplicar o +2 para Esquivar.)</Text>
                            <Table captionSide='bottom' highlightOnHover>
                                <caption>
                                    <Text size='xs'>Movimento: 1 Passo</Text>
                                    <Text size='xs'>Todas as opções são utilizáveis com qualquer manobra que permita defesa</Text>
                                    <Text size='xs'>* Uma falha crítica em qualquer um desses testes causa um dano adicional de 1 PV no braço (bloqueio, apara, maioria dos ataques) ou perna (esquiva, chute). DR não protege desse dano.</Text>
                                </caption>
                                <thead style={{ backgroundColor: 'black' }}>
                                    {manobrasD.head.map(h => (
                                        <th>{h}</th>
                                    ))}
                                </thead>
                                <tbody>
                                    {manobrasD.body.map(b => (
                                        <tr>
                                            <td>{b.name}</td>
                                            <td>{b.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Stack>
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="o">
                    <Accordion.Control>OUTRAS MANOBRAS</Accordion.Control>
                    <Accordion.Panel>
                        <Stack>
                            <Table captionSide='bottom' highlightOnHover>
                                <thead style={{ backgroundColor: 'black' }}>
                                    {manobrasO.head.map(h => (
                                        <th>{h}</th>
                                    ))}
                                </thead>
                                <tbody>
                                    {manobrasO.body.map(b => (
                                        <tr>
                                            <td>{b.name}</td>
                                            <td>{b.desc}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Stack>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
        </Stack>
    );
}

export default Tab

const manobrasCC = {
    head: ['Manobra', 'Descrição'],
    body: [
        {
            name: 'Ataque Enganador',
            desc: '-1 nas defesas do inimigo para cada -2 que você recebe em sua habilidade de ataque (mínimo de 10).',
        },
        {
            name: 'Ataque com Arma Dupla',
            desc: 'Use as duas mãos para fazer dois ataques desarmados ou com arma ao mesmo tempo, cada um -4, para substituir um ataque normal. Na mão secundária com o habitual -4 para ataques com armas. Pode segmentar inimigos separados se forem adjacentes. O inimigo se defende com -1 se for alvo de ambos os ataques.',
        },
        {
            name: 'Ataque Rápido',
            desc: 'Faça dois ataques, ambos com -6, para substituir um ataque normal (mesmo inimigos separados).',
        },
        {
            name: 'Ataque Telegráfico',
            desc: '+4 para acertar, mas também +2 para as defesas do alvo. Nenhum efeito nas chances de acerto crítico.',
        },
        {
            name: 'Rajada de Golpes*†',
            desc: 'Reduza pela metade a penalidade de Ataque Rápido para -3 gastando 2 PF (1 PF por ataque)',
        },
        {
            name: 'Golpes Poderosos*†',
            desc: 'Gaste 1 PF por ataque para um bônus de dano de +2 sem perder defesas.',
        },
        {
            name: 'Recuperação Rápida*‡',
            desc: 'Gaste 1 PF para aparar com uma arma desequilibrada após um ataque.',
        },
    ]
}
const manobrasAT = {
    head: ['Manobra', 'Descrição'],
    body: [
        {
            name: 'DETERMINADO',
            desc: '+4 de perícia para um único ataque, ou...',
        },
        {
            name: 'DUPLO',
            desc: 'Dois ataques no mesmo alvo (-4 para ataques com arma de mão inábil, como acima), ou...',
        },
        {
            name: 'FORTE',
            desc: '+2 de dano (ou +1 por dado, se for melhor) para um único ataque baseado em ST e...',
        },
        {
            name: 'Ataque Enganador',
            desc: '-1 nas defesas do inimigo para cada -2 que você recebe em sua habilidade de ataque (mínimo de 10).',
        },
        {
            name: 'Ataque Rápido',
            desc: 'Faça dois ataques, ambos com -6, para substituir um ataque normal (mesmo inimigos separados).',
        },
        {
            name: 'Ataque Telegráfico',
            desc: '+4 para acertar, mas também +2 para as defesas do alvo. Nenhum efeito nas chances de acerto crítico.',
        },
    ]
}
const manobrasMA = {
    head: ['Manobra', 'Descrição'],
    body: [
        {
            name: 'Carga Heroica*†',
            desc: 'Gaste 1 PF para ignorar a penalidade de habilidade e o limite (ainda não pode aparar ou recuar).',
        },
        {
            name: 'Recuperação Rápida*‡',
            desc: 'Gaste 1 PF para aparar com qualquer arma após um Movimento e Ataque.',
        },
        {
            name: 'Slam',
            desc: 'Como acima. A penalidade de -4 e o limite de habilidade de 9 não se aplicam, então o Ataque Enganador pode ser usado.',
        },
        {
            name: 'Ataque Telegráfico',
            desc: '+4 para acertar, mas também +2 para as defesas do alvo. Nenhum efeito nas chances de acerto crítico.',
        },
    ]
}
const manobrasD = {
    head: ['Manobra', 'Descrição'],
    body: [
        {
            name: 'Defesa Fervorosa*‡',
            desc: 'Gaste 1 PF para +2 em um único teste de Defesa Ativa (exceto quando for Ataque Total).',
        },
        {
            name: 'Recuar',
            desc: 'Uma vez durante o seu turno, afaste 1 hexágono de um atacante corpo a corpo para +3 de Esquiva, ou para qualquer Boxe, Judô, Karatê ou esgrima; ou +1 para qualquer outra Defesa Ativa contra aquele inimigo.',
        },
        {
            name: 'Desviar e se jogar',
            desc: 'Uma vez no seu turno, cai no chão por +3 para Dodge contra ataques à distância de um único inimigo.',
        },
    ]
}

const manobrasO = {
    head: ['Manobra', 'Descrição'],
    body: [
        {
            name: 'MUDAR POSTURA',
            desc: '(Sem Movimento) Alternar entre ficar em pé, sentado, ajoelhado, rastejando, de bruços ou deitado virado para cima (deitado/prono para ficar em pé dá duas voltas deitado/prono para ajoelhar, ajoelhar para ficar em pé).',
        },
        {
            name: 'CONCENTRADO',
            desc: '(Um passo) Concentre-se em uma tarefa mental. Jogue Vontade-3 para manter a concentração se estiver ferido, derrubado, tomar uma defesa ativa, etc.',
        },
        {
            name: 'FAZER NADA',
            desc: '(Sem Movimento) Não faça nenhuma ação. Defesas Ativas estão em -4 se sofrerem de Atordoamento, em neste caso, jogue no final do turno contra HT (físico) ou IQ (mental) para se recuperar.',
        },
        {
            name: 'MOVER-SE',
            desc: '(Movimento completo) Não faça nada além de mover (+1 hex após um turno completo de corrida para frente).',
        },
        {
            name: 'PRONTO',
            desc: '(Um passo) Recarregue ou prepare uma arma ou outro item, ajuste o alcance, etc.',
        },
        {
            name: 'ESPERA',
            desc: '(varia) Segure sua ação para um evento de gatilho específico e, em seguida, faça um Ataque, Ataque Total ou Manobra pronta como normal',
        },
        {
            name: 'MIRAR',
            desc: '(Um passo) Aponte uma arma/ataque à distância para obter seu bônus de Acc, com um adicional de +1 por dois turnos, e +2 por três ou mais turnos. Nenhum movimento se estiver usando uma arma de duas mãos. Tomando um defesa ativa estraga sua mira. Se ferido, faça um teste de Vontade ou perca sua mira.',
        },
        {
            name: 'AVALIAR',
            desc: '(Um passo) Estude um inimigo antes de atacar para um bônus de +1 por turno gasto Avaliando (máximo +3).',
        },
    ]
}