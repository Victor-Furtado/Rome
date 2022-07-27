import { Stack, Table, Text, Title } from '@mantine/core';
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
            <Table captionSide="bottom" striped highlightOnHover>
                <caption>
                    <Text>* Fazer uma defesa ativa estraga sua mira; se você estiver ferido, faça um teste de Vontade ou perca sua Mira</Text>
                    <Text>** Tomar uma defesa ativa ou ser derrubado, ferido, distraído etc. requer um teste de Vontade-3 para manter.</Text>
                    <Text>*** O atacante não pode aparar com a(s) mão(s) que ele usou para atacar, bloquear se ele atacou com seu escudo ou manto, ou esquivar se ele chutou. Ele pode usar qualquer outra defesa, mas com -2. Ele não pode recuar</Text>
                    <Text>**** Se você atacou usando um braço, você não pode usar esse braço para aparar (se o ataque envolver um punho, cotovelo ou arma) ou bloquear (se você usar um escudo ou capa). Se você usou qualquer outra parte do corpo para atacar, você não pode se esquivar. Você pode usar qualquer outra defesa, mas não pode recuar</Text>
                </caption>
                <thead>
                    <th style={{ borderRight: '1px solid gray', paddingRight: 8, paddingLeft: 8 }}>Manobra</th>
                    <th style={{ borderRight: '1px solid gray', paddingRight: 8, paddingLeft: 8 }}>Descrição</th>
                    <th style={{ borderRight: '1px solid gray', paddingRight: 8, paddingLeft: 8 }}>Acerto</th>
                    <th style={{ borderRight: '1px solid gray', paddingRight: 8, paddingLeft: 8 }}>Dano</th>
                    <th style={{ borderRight: '1px solid gray', paddingRight: 8, paddingLeft: 8 }}>Defesa</th>
                    <th style={{ paddingRight: 8, paddingLeft: 8 }}>Movimento</th>
                </thead>
                <tbody>
                    <tr>
                        <td>Mira</td>
                        <td>
                            Adiciona a Acc da arma ao acerto (+1 para preparo, +1 para 2 turnos, +2 para 3 ou mais turnos)
                            Obs.: Os bonus não podem exceder a Acc da Arma
                        </td>
                        <td>+Acc+bônus</td>
                        <td>Normal</td>
                        <td>Normal*</td>
                        <td>Normal/0 se Preparado</td>
                    </tr>
                    <tr>
                        <td>Ataque determinado</td>
                        <td>--</td>
                        <td>+4</td>
                        <td>Normal</td>
                        <td>0</td>
                        <td>Metade</td>
                    </tr>
                    <tr>
                        <td>Ataque duplo</td>
                        <td>2 ataques no mesmo inimigo com mão/arma pronta (ataques de arma -4 para mão inábil)</td>
                        <td>Normal/-4</td>
                        <td>Normal</td>
                        <td>0</td>
                        <td>Metade</td>
                    </tr>
                    <tr>
                        <td>Ataque com Finta</td>
                        <td>--</td>
                        <td>Normal</td>
                        <td>Normal</td>
                        <td>0</td>
                        <td>Metade</td>
                    </tr>
                    <tr>
                        <td>Ataque Forte</td>
                        <td>--</td>
                        <td>Normal</td>
                        <td>+2 ou +1/dado</td>
                        <td>0</td>
                        <td>Metade</td>
                    </tr>
                    <tr>
                        <td>Movimento defensivo</td>
                        <td>--</td>
                        <td>--</td>
                        <td>--</td>
                        <td>+2</td>
                        <td>Metade</td>
                    </tr>
                    <tr>
                        <td>Defensa Dupla</td>
                        <td>Você pode realizar duas defesas diferentes para ataques ao personagem</td>
                        <td>--</td>
                        <td>--</td>
                        <td>2xNormal</td>
                        <td>1 Passo</td>
                    </tr>
                    <tr>
                        <td>Ataque normal</td>
                        <td>-4 se atacar com mão inábil</td>
                        <td>Normal</td>
                        <td>Normal</td>
                        <td>Normal</td>
                        <td>1 Passo (Antes ou depois)</td>
                    </tr>
                    <tr>
                        <td>Mudar Postura</td>
                        <td>Em pé, sentado, ajoelhado, rastejando, de bruços, deitado de bruços</td>
                        <td>--</td>
                        <td>--</td>
                        <td>Consultar postura</td>
                        <td>Consultar postura</td>
                    </tr>
                    <tr>
                        <td>Concentrar</td>
                        <td>Focar em uma tarfa mental</td>
                        <td>--</td>
                        <td>--</td>
                        <td>Normal**</td>
                        <td>1 Passo (Antes ou depois)</td>
                    </tr>
                    <tr>
                        <td>Fazer Nada</td>
                        <td>Não faça nenhuma ação (Defesas Ativas com -4 se receber Não Fazer Nada devido a Atordoamento; role contra HT/IQ)</td>
                        <td>--</td>
                        <td>--</td>
                        <td>Normal</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Fazer Nada</td>
                        <td>Não faça nenhuma ação (Defesas Ativas com -4 se receber Não Fazer Nada devido a Atordoamento; role contra HT/IQ)</td>
                        <td>--</td>
                        <td>--</td>
                        <td>Normal</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>Avaliar combate (Corpo a Corpo)</td>
                        <td>Estude um inimigo antes de um ataque corpo a corpo (+1 por turno para ataques ou fintas subsequentes, máx. +3); também pode usar o bônus de avaliação para cancelar penalidades de ataques enganosos ou fintas</td>
                        <td>--</td>
                        <td>--</td>
                        <td>Normal</td>
                        <td>Passo</td>
                    </tr>
                    <tr>
                        <td>Finta Defensiva</td>
                        <td>Aplique a penalidade de uma Finta bem-sucedida na jogada de ataque do inimigo em vez da defesa</td>
                        <td>--</td>
                        <td>--</td>
                        <td>Normal</td>
                        <td>1 Passo (Antes ou depois)</td>
                    </tr>
                    <tr>
                        <td>Finta</td>
                        <td>Desafio de habilidade de combate (corpo a corpo ou à distância) vs. habilidade de combate, manto/escudo ou DX</td>
                        <td>--</td>
                        <td>--</td>
                        <td>Normal</td>
                        <td>1 Passo (Antes ou depois)</td>
                    </tr>
                    <tr>
                        <td>Finta Corporal</td>
                        <td>Desafio  de habilidade de combate baseada em ST vs. habilidade baseada em ST ou DX do inimigo</td>
                        <td>--</td>
                        <td>--</td>
                        <td>Normal</td>
                        <td>1 Passo (Antes ou depois)</td>
                    </tr>
                    <tr>
                        <td>Finta Astuta</td>
                        <td>Desafio de habilidade de combate baseada em IQ vs. habilidade baseada em Per do inimigo, habilidade baseada em DX ou Táticas</td>
                        <td>--</td>
                        <td>--</td>
                        <td>Normal</td>
                        <td>1 Passo (Antes ou depois)</td>
                    </tr>
                    <tr>
                        <td>Mover e Atacar</td>
                        <td>Mova-se e ataque com penalidade (Distância: -2 ou Bulk da arma; Corpo a corpo: -4, habilidade máx. 9). Não compatível com Flurry of Blows, Mighty Blow, Giant Step, Combos, Rapid Strike ou Deceptive Attack.</td>
                        <td>-2/-4/Variável</td>
                        <td>Normal</td>
                        <td>Normal</td>
                        <td>Movimento completo (-2 para testes de equilíbrio)</td>
                    </tr>
                    <tr>
                        <td>Ataque enganoso</td>
                        <td>O alvo sofre -1 nas defesas para cada -2 no seu acerto (Min. 10)</td>
                        <td>Varia</td>
                        <td>Normal</td>
                        <td>Normal</td>
                        <td>Um Passo</td>
                    </tr>
                    <tr>
                        <td>Ataque com duas armas</td>
                        <td>Use as duas mãos para fazer dois ataques (incluindo pistolas), ambos com -4, para substituir um ataque normal. Na mão secundária com o habitual -4 para ataques com armas. Pode atingir inimigos separados (se adjacentes para corpo a corpo). O inimigo se defende com -1 se for alvo de ambos os ataques.</td>
                        <td>-4/-8</td>
                        <td>Normal</td>
                        <td>Normal</td>
                        <td>Um Passo</td>
                    </tr>
                    
                    <tr>
                        <td>Ataque Rápido</td>
                        <td>Faça dois ataques (com a mão/arma pronta), ambos com -6, para substituir um ataque normal. Pode atingir inimigos separados. Ataques à distância requerem uma arma com CdT de 2+. Divida o CdT uniformemente em dois ataques separados e use cada um para determinar o bônus de tiro rápido</td>
                        <td>-6</td>
                        <td>Normal</td>
                        <td>Normal</td>
                        <td>Um Passo</td>
                    </tr>
                    <tr>
                        <td>Mover</td>
                        <td>--</td>
                        <td>--</td>
                        <td>--</td>
                        <td>Normal</td>
                        <td>Movimento completo</td>
                    </tr>
                    <tr>
                        <td>Mover</td>
                        <td>--</td>
                        <td>--</td>
                        <td>--</td>
                        <td>Normal</td>
                        <td>Movimento completo</td>
                    </tr>
                    <tr>
                        <td>Preparar</td>
                        <td>Preparar ou recarregar uma arma, ajustar o alcance (B269), mudar de empunhadura, mudar de mão</td>
                        <td>--</td>
                        <td>--</td>
                        <td>Normal</td>
                        <td>1 Passo</td>
                    </tr>
                </tbody>
            </Table>
        </Stack>
    );
}

export default Tab