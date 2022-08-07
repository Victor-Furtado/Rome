import { Stack, Table, Tabs, Title } from '@mantine/core';
import { NextPage } from 'next';

const Page: NextPage = () => {
    return (
        <Tabs variant="outline" radius="lg" defaultValue='HOWTO'>
            <Tabs.List>
                <Tabs.Tab value="HOWTO">COMO UTILIZAR</Tabs.Tab>
                <Tabs.Tab value="VANTAGENS">VANTAGENS</Tabs.Tab>
                <Tabs.Tab value="DESVANTAGENS">DESVANTAGENS</Tabs.Tab>
                <Tabs.Tab value="PERÍRICIAS">PERÍRICIAS</Tabs.Tab>
                <Tabs.Tab value="OUTROS">OUTROS</Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="HOWTO" pt="xs">
            </Tabs.Panel>
            <Tabs.Panel value="VANTAGENS" pt="xs">
                <Table>
                    <thead>
                        <th>VANTAGEM</th>
                        <th>TIPO EFEITO</th>
                        <th>TIPO FONTE</th>
                        <th>CUSTO</th>
                        {/* <th>DESCRIÇÃO</th> */}
                    </thead>
                    <tbody>
                        {vant.map(v => (
                            <tr key={v.name}>
                                <td>{v.name}</td>
                                <td>{v.effe}</td>
                                <td>{v.font}</td>
                                <td>{v.cost}</td>
                                {/* <td>{v.desc}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Tabs.Panel>
            <Tabs.Panel value="DESVANTAGENS" pt="xs">
                <Table>
                    <thead>
                        <th>DESVANTAGEM</th>
                        <th>TIPO EFEITO</th>
                        <th>TIPO FONTE</th>
                        <th>CUSTO</th>
                        {/* <th>DESCRIÇÃO</th> */}
                    </thead>
                    <tbody>
                        {desv.map(d => (
                            <tr key={d.name}>
                                <td>{d.name}</td>
                                <td>{d.effe}</td>
                                <td>{d.font}</td>
                                <td>{d.cost}</td>
                                {/* <td>{v.desc}</td> */}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Tabs.Panel>
            <Tabs.Panel value="PERÍRICIAS" pt="xs">
                <Table>
                    <thead>
                        <th>PERÍCIA</th>
                        <th>ATRIBUTO</th>
                        <th>DIFICULDADE</th>
                        <th>PRÉ DEFINIDO</th>
                        {/* <th>DESCRIÇÃO</th> */}
                    </thead>
                    <tbody>
                        {peri.map(p => (
                            <tr key={p.name}>
                                <td>{p.name}</td>
                                <td>{p.atri}</td>
                                <td>{p.difi}</td>
                                <td>{p.pred}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Tabs.Panel>
            <Tabs.Panel value="OUTROS" pt="xs">
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                    <Stack>
                        <Title>APARÊNCIA</Title>
                        <Table>
                            <thead>
                                <th>NOME</th>
                                <th>CUSTO</th>
                                {/* <th>DESCRIÇÃO</th> */}
                            </thead>
                            <tbody>
                                {aparencia.map(a => (
                                    <tr key={a.nome}>
                                        <td>{a.nome}</td>
                                        <td>{a.cost}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Stack>
                    <Stack>
                        <Title>RIQUEZA</Title>
                        <Table>
                            <thead>
                                <th>NOME</th>
                                <th>CUSTO</th>
                                {/* <th>DESCRIÇÃO</th> */}
                            </thead>
                            <tbody>
                                {riqueza.map(a => (
                                    <tr key={a.nome}>
                                        <td>{a.nome}</td>
                                        <td>{a.cost}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Stack>
                </div>
            </Tabs.Panel>
        </Tabs>
    );
}

export default Page

const vant = [
    {
        name: 'Abafador de Mana',
        effe: 'Mental',
        font: 'Sobrenatural',
        cost: '10/N',
        desc: 'O personagem anula a energia mágica (“mana”) que existe ao seu redor, dificultando ou impossibilitando que outros personagens façam mágicas.',
    },
    {
        name: 'Abascanto',
        effe: 'Mental',
        font: 'Sobrenatural',
        cost: '2/N',
        desc: '',
    },
    {
        name: 'Ambidestria',
        effe: 'Físico',
        font: 'Natural',
        cost: '5',
        desc: '',
    },
    {
        name: 'Apagado',
        effe: 'Social',
        font: 'Natural',
        cost: '10',
        desc: '',
    },
    {
        name: 'Audição Discriminatória',
        effe: 'Físico',
        font: '<X></X>',
        cost: '15',
        desc: '',
    },
    {
        name: 'Boa Forma',
        effe: 'Físico',
        font: 'Natural',
        cost: '5',
        desc: '',
    },
    {
        name: 'Ótima Forma',
        effe: 'Físico',
        font: 'Natural',
        cost: '15',
        desc: '',
    },
    {
        name: 'Calculos Instantâneos',
        effe: 'Mental',
        font: 'Natural',
        cost: '2',
        desc: '',
    },
    {
        name: 'Canalização',
        effe: 'Mental',
        font: 'Sobrenatural',
        cost: '10',
        desc: '',
    },
    {
        name: 'Consumo Reduzido',
        effe: 'Físico',
        font: 'Natural',
        cost: '2/N',
        desc: '',
    },
    {
        name: 'Cura',
        effe: 'Mental',
        font: 'Exótico',
        cost: '30',
        desc: '',
    },
    {
        name: 'Defesas Ampliadas',
        effe: 'Mental',
        font: 'Natural',
        cost: 'v',
        desc: '',
    },
    {
        name: 'Destreza Manual Elevada',
        effe: 'Físico',
        font: 'Natural',
        cost: '5/N',
        desc: '',
    },
    {
        name: 'Duro de Matar',
        effe: 'Físico',
        font: 'Natural',
        cost: '2/N',
        desc: '',
    },
    {
        name: 'DX Braçal',
        effe: 'Físico',
        font: 'Exótico',
        cost: '12 ou 16/N',
        desc: '',
    },
    {
        name: 'Empatia com Animais',
        effe: 'Mental',
        font: 'Natural',
        cost: '5',
        desc: '',
    },
    {
        name: 'Empatia com Espíritos',
        effe: 'Mental',
        font: 'Sobrenatural',
        cost: '10',
        desc: '',
    },
    {
        name: 'Empatia com Plantas',
        effe: 'Mental',
        font: 'Natural',
        cost: '5',
        desc: '',
    },
    {
        name: 'Equilíbrio Perfeito',
        effe: 'Físico',
        font: 'Natural',
        cost: '15',
        desc: '',
    },
    {
        name: 'Facilidade para Idiomas',
        effe: 'Mental',
        font: 'Natural',
        cost: '10',
        desc: '',
    },
    {
        name: 'Fleuma',
        effe: 'Mental',
        font: 'Natural',
        cost: '15',
        desc: '',
    },
    {
        name: 'Flexibilidade',
        effe: 'Físico',
        font: 'Natural',
        cost: '5',
        desc: '',
    },
    {
        name: 'Ultraflexibilidades nas Juntas',
        effe: 'Físico',
        font: 'Natural',
        cost: '15',
        desc: '',
    },
    {
        name: 'Hipoalgia (Alto Limiar de Dor)',
        effe: 'Físico',
        font: 'Natural',
        cost: '10',
        desc: '',
    },
    {
        name: 'Língua Ferina',
        effe: 'Mental',
        font: 'Natural',
        cost: '5',
        desc: '',
    },
    {
        name: 'Noção Exata do Tempo',
        effe: 'Mental',
        font: 'Natural',
        cost: '2',
        desc: '',
    },
    {
        name: 'Obstinado',
        effe: 'Mental',
        font: 'Natural',
        cost: '5',
        desc: '',
    },
    {
        name: 'Oráculo',
        effe: 'Mental',
        font: 'Sobrenatural',
        cost: '15',
        desc: '',
    },
    {
        name: 'Reflexos em Combate',
        effe: 'Mental',
        font: 'Natural',
        cost: '15',
        desc: '',
    },
    {
        name: 'Senso de Direção',
        effe: 'Físico',
        font: 'Natural',
        cost: '5',
        desc: '',
    },
    {
        name: 'Sorte',
        effe: 'Mental',
        font: 'Natural',
        cost: 'v',
        desc: '',
    },
    {
        name: 'ST de Golpe',
        effe: 'Físico',
        font: 'Exótico',
        cost: '5/N',
        desc: '',
    },
    {
        name: 'Super Sorte',
        effe: 'Mental',
        font: 'Sobrenatural',
        cost: '100',
        desc: '',
    },
    {
        name: 'Venturoso',
        effe: 'Mental',
        font: 'Natural',
        cost: '15',
        desc: '',
    },
];

const desv = [
    {
        name: 'Altruísmo',
        effe: 'Mental',
        font: 'Natural',
        cost: '-5',
        desc: '',
    },
    {
        name: 'Assustar animais',
        effe: 'Mental',
        font: 'Exótico',
        cost: '-10',
        desc: '',
    },
    {
        name: 'Avareza',
        effe: 'Mental',
        font: 'Natural',
        cost: '-10',
        desc: '',
    },
    {
        name: 'Bestial',
        effe: 'Mental',
        font: 'Exótico',
        cost: '-10 ou -15',
        desc: '',
    },
    {
        name: 'Briguento',
        effe: 'Mental',
        font: 'Natural',
        cost: '-10',
        desc: '',
    },
    {
        name: 'Cegueira',
        effe: 'Físico',
        font: 'Natural',
        cost: '-50',
        desc: '',
    },
    {
        name: 'Cleptomania',
        effe: 'Mental',
        font: 'Natural',
        cost: '-15',
        desc: '',
    },
    {
        name: 'Consumo Ampliado',
        effe: 'Físico',
        font: 'Natural',
        cost: '-10/nível',
        desc: '',
    },
    {
        name: 'Covardia',
        effe: 'Mental',
        font: 'Natural',
        cost: '-10',
        desc: '',
    },
    {
        name: 'Credulidade',
        effe: 'Mental',
        font: 'Natural',
        cost: '-10',
        desc: '',
    },
    {
        name: 'Curiosidade',
        effe: 'Mental',
        font: 'Natural',
        cost: '-5',
        desc: '',
    },
    {
        name: 'Deficiência Física',
        effe: 'Físico',
        font: 'Natural',
        cost: '-10 a -30',
        desc: '',
    },
    {
        name: 'Dependência',
        effe: 'Físico',
        font: 'Natural',
        cost: 'v',
        desc: '',
    },
    {
        name: 'Entorpecido',
        effe: 'Físico',
        font: 'Natural',
        cost: '-20',
        desc: '',
    },
    {
        name: 'Epilepsia',
        effe: 'Físico',
        font: 'Natural',
        cost: '-30',
        desc: '',
    },
    {
        name: 'Fanatismo',
        effe: 'Mental',
        font: 'Natural',
        cost: '-15',
        desc: '',
    },
    {
        name: 'Fantasias',
        effe: 'Mental',
        font: 'Natural',
        cost: '-1 ou -5 a -15',
        desc: '',
    },
    {
        name: 'Fúria',
        effe: 'Mental',
        font: 'Natural',
        cost: '-10',
        desc: '',
    },
    {
        name: 'Gregário',
        effe: 'Mental',
        font: 'Natural',
        cost: '-10',
        desc: '',
    },
    {
        name: 'Hemofilia',
        effe: 'Físico',
        font: 'Natural',
        cost: '-30',
        desc: '',
    },
    {
        name: 'Hiperalgia',
        effe: 'Físico',
        font: 'Natural',
        cost: '-10',
        desc: '',
    },
    {
        name: 'Honestidade',
        effe: 'Mental',
        font: 'Natural',
        cost: '-10',
        desc: '',
    },
    {
        name: 'Insone',
        effe: 'Físico',
        font: 'Natural',
        cost: '-10 ou -15',
        desc: '',
    },
    {
        name: 'Irritabilidade',
        effe: 'Mental',
        font: 'Natural',
        cost: '-10',
        desc: '',
    },
    {
        name: 'Luxúria',
        effe: 'Mental',
        font: 'Natural',
        cost: '-15',
        desc: '',
    },
    {
        name: 'Magnetismo Sobrenatural',
        effe: 'Mental',
        font: 'Sobrenatural',
        cost: '-15',
        desc: '',
    },
    {
        name: 'Maneta (um braço)',
        effe: 'Físico',
        font: 'Natural',
        cost: '-20',
        desc: '',
    },
    {
        name: 'Maneta (uma mão)',
        effe: 'Físico',
        font: 'Natural',
        cost: '-15',
        desc: '',
    },
    {
        name: 'Mão Fraca',
        effe: 'Físico',
        font: 'Natural',
        cost: '-5/nível',
        desc: '',
    },
    {
        name: 'Mudez',
        effe: 'Físico',
        font: 'Natural',
        cost: '-15',
        desc: '',
    },
    {
        name: 'Paralisia Frente ao Combate',
        effe: 'Físico',
        font: 'Natural',
        cost: '-15',
        desc: '',
    },
    {
        name: 'Pesadelos',
        effe: 'Mental',
        font: 'Natural',
        cost: '-5',
        desc: '',
    },
    {
        name: 'Piromania',
        effe: 'Mental',
        font: 'Natural',
        cost: '-5',
        desc: '',
    },
    {
        name: 'Recuperação Lenta',
        effe: 'Físico',
        font: 'Natural',
        cost: '-5/nível',
        desc: '',
    },
    {
        name: 'Sem um Dedo',
        effe: 'Físico',
        font: 'Natural',
        cost: '-2 ou -5',
        desc: '',
    },
    {
        name: 'Supersensitivo',
        effe: 'Mental',
        font: 'Sobrenatural',
        cost: '-15',
        desc: '',
    },
    {
        name: 'Surdez',
        effe: 'Físico',
        font: 'Natural',
        cost: '-20',
        desc: '',
    },
    {
        name: 'Veracidade',
        effe: 'Mental',
        font: 'Natural',
        cost: '-5',
        desc: '',
    },
    {
        name: 'Vício',
        effe: 'M-F',
        font: 'Natural',
        cost: 'v',
        desc: '',
    },
    {
        name: 'Vozes Fantasmagóricas',
        effe: 'Mental',
        font: 'Natural',
        cost: '-5 a -15',
        desc: '',
    },
    {
        name: 'Zarolho',
        effe: 'Físico',
        font: 'Natural',
        cost: '-15',
        desc: '',
    },
]

const peri = [
    {
        name: 'Acrobacia',
        atri: 'DX',
        difi: 'Difícil',
        pred: 'DX-6',
        desc: '',
    },
    {
        name: 'Adestramento de Animais',
        atri: 'IQ',
        difi: 'Médio',
        pred: 'IQ-5',
        desc: '',
    },
    {
        name: 'Aparar Armas Projétil',
        atri: 'DX',
        difi: 'Difícil',
        pred: '',
        desc: '',
    },
    {
        name: 'Armas',
        atri: 'DX',
        difi: 'Médio',
        pred: 'Especial',
        desc: 'Ver Equipamentos',
    },
    {
        name: 'Armeiro*',
        atri: 'IQ',
        difi: 'Médio',
        pred: 'IQ-5, Engenharia (mesma)-4',
        desc: '',
    },
    {
        name: 'Arremesso',
        atri: 'DX',
        difi: 'Médio',
        pred: 'DX-3, Saltar-4',
        desc: '',
    },
    {
        name: 'Arrombamento',
        atri: 'IQ',
        difi: 'Médio',
        pred: 'IQ-5',
        desc: '',
    },
    {
        name: 'Atuação',
        atri: 'IQ',
        difi: 'Médio',
        pred: 'IQ-5, Oratória-2, Dissimulação-2',
        desc: '',
    },
    {
        name: 'Boleadeira',
        atri: 'DX',
        difi: 'Médio',
        pred: '',
        desc: '',
    },
    {
        name: 'Capa',
        atri: 'DX',
        difi: 'Médio',
        pred: 'DX-5, Escudo-4, Rede-4',
        desc: '',
    },
    {
        name: 'Cavalgar*',
        atri: 'DX',
        difi: 'Médio',
        pred: 'DX-5, Adestramento de Animais (mesmo)-3',
        desc: '',
    },
    {
        name: 'Comércio',
        atri: 'IQ',
        difi: 'Médio',
        pred: 'IQ-5, análise de Mercado-4, Finanças-6',
        desc: '',
    },
    {
        name: 'Condução*',
        atri: 'DX',
        difi: 'Médio',
        pred: 'DX-5, IQ-5',
        desc: '',
    },
    {
        name: 'Diagnose',
        atri: 'IQ',
        difi: 'Difícil',
        pred: 'IQ-6, Medicina-4, Primeiros Socorros-8, Veterinária-5',
        desc: '',
    },
    {
        name: 'Disfarce*',
        atri: 'IQ',
        difi: 'Médio',
        pred: 'IQ-5, Maquiagem-3',
        desc: '',
    },
    {
        name: 'Escalada',
        atri: 'DX',
        difi: 'Difícil',
        pred: 'DX-5',
        desc: '',
    },
    {
        name: 'Escudo*',
        atri: 'DX',
        difi: 'Fácil',
        pred: 'DX-4',
        desc: '',
    },
    {
        name: 'Falsificação',
        atri: 'IQ',
        difi: 'Difícil',
        pred: 'IQ-6, Falsificação de Dinheiro-2',
        desc: '',
    },
    {
        name: 'Ferreiro*',
        atri: 'IQ',
        difi: 'Médio',
        pred: 'IQ-5*',
        desc: '',
    },
    {
        name: 'Filosofia*',
        atri: 'IQ',
        difi: 'Difícil',
        pred: 'IQ-6',
        desc: '',
    },
    {
        name: 'Fuga',
        atri: 'DX',
        difi: 'Difícil',
        pred: 'DX-6',
        desc: '',
    },
    {
        name: 'Gladiatura',
        atri: 'DX',
        difi: 'Médio',
        pred: '',
        desc: '',
    },
    {
        name: 'Heráldica',
        atri: 'IQ',
        difi: 'Médio',
        pred: 'IQ-5, Trato Social(alta sociedade)-3',
        desc: '',
    },
    {
        name: 'Intimidação',
        atri: 'Von',
        difi: 'Médio',
        pred: 'Vontade-5, Dissimulação-3',
        desc: '',
    },
    {
        name: 'Jogos de Azar',
        atri: 'IQ',
        difi: 'Médio',
        pred: 'IQ-5, Matemática(Estatística)-5',
        desc: '',
    },
    {
        name: 'Jurisprudência*',
        atri: 'IQ',
        difi: 'Difícil',
        pred: 'IQ-6',
        desc: '',
    },
    {
        name: 'Lábia',
        atri: 'IQ',
        difi: 'Médio',
        pred: 'IQ-5, Dissimulação-5',
        desc: '',
    },
    {
        name: 'Leitura Labial',
        atri: 'Per',
        difi: 'Médio',
        pred: 'Per-10',
        desc: '',
    },
    {
        name: 'Liderança',
        atri: 'IQ',
        difi: 'Médio',
        pred: 'IQ-5',
        desc: '',
    },
    {
        name: 'Manejo de Barcos*',
        atri: 'IQ',
        difi: 'Difícil',
        pred: 'IQ-6*',
        desc: '',
    },
    {
        name: 'Mecânica*',
        atri: 'IQ',
        difi: 'Médio',
        pred: 'IQ-5, Engenharia(mesma)-4, Maquinista-5',
        desc: '',
    },
    {
        name: 'Medicina',
        atri: 'IQ',
        difi: 'Difícil',
        pred: 'IQ-7, Primeiros Socorros-11, Veterinária-5',
        desc: '',
    },
    {
        name: 'Meditação',
        atri: 'VON',
        difi: 'Difícil',
        pred: 'Von-6, Auto-Hipinose-4',
        desc: '',
    },
    {
        name: 'Natação',
        atri: 'HT',
        difi: 'Fácil',
        pred: 'HT-4',
        desc: '',
    },
    {
        name: 'Navegação*',
        atri: 'IQ',
        difi: 'Médio',
        pred: 'Especial',
        desc: '',
    },
    {
        name: 'Oratória',
        atri: 'IQ',
        difi: 'Médio',
        pred: 'IQ-5, Atuação-2, Dissimulação-5, Política-5',
        desc: '',
    },
    {
        name: 'Prestidigitação',
        atri: 'DX',
        difi: 'Difícil',
        pred: 'Surrupiar-5',
        desc: '',
    },
    {
        name: 'Primeiros Socorros',
        atri: 'IQ',
        difi: 'Fácil',
        pred: 'IQ-4, Medicina, Medicina Alternativa ou Veterinária-4',
        desc: '',
    },
    {
        name: 'Rastreamento',
        atri: 'PER',
        difi: 'Médio',
        pred: 'Per-5, Naturalista-5',
        desc: '',
    },
    {
        name: 'Sacar Rápido*',
        atri: 'DX',
        difi: 'Fácil',
        pred: '',
        desc: '',
    },
    {
        name: 'Sobrevivência*',
        atri: 'PER',
        difi: 'Médio',
        pred: 'Per-5, Naturalista(mesmo planeta)-3',
        desc: '',
    },
    {
        name: 'Sobrevivência Urbana',
        atri: 'PER',
        difi: 'Médio',
        pred: 'Per-5',
        desc: '',
    },
    {
        name: 'Taumatologia',
        atri: 'IQ',
        difi: 'MD',
        pred: 'IQ-7(apenas em cenários mágicos)',
        desc: '',
    },
    {
        name: 'Trato Social*',
        atri: 'IQ',
        difi: 'Fácil',
        pred: 'IQ-4*',
        desc: '',
    },
    {
        name: 'Veneficio',
        atri: 'IQ',
        difi: 'Difícil',
        pred: 'IQ-6, Farmácia(qq)-3, Química-5, Medicina-3',
        desc: '',
    },
    {
        name: 'Veterinária',
        atri: 'IQ',
        difi: 'Difícil',
        pred: 'Adestramento de Animais(qq)-6, Cirurgia-5, Medicina-5',
        desc: '',
    },
]

const aparencia = [
    {
        nome: 'Horrendo',
        cost: '-24',
        desc: 'Extremamente repugnante; não pode interagir com seres humanos comuns \n Reação: -6',
    },
    {
        nome: 'Monstruoso',
        cost: '-20',
        desc: 'Horrível e anormal, é tido como um monstro , um ser não inteligente \n Reação: -5',
    },
    {
        nome: 'Hediondo',
        cost: '-16',
        desc: 'Possui uma ou mais características repugnantes em sua aparência \n Reação: -4',
    },
    {
        nome: 'Feio',
        cost: '-8',
        desc: 'Como o anterior, mas não tão grave. Ex: Cabelo seboso, dentes tortos \n Reação: -2',
    },
    {
        nome: 'Sem Atrativos',
        cost: '-4',
        desc: 'Algo de antipático que não pode ser apontado com precisão \n Reação: -1',
    },
    {
        nome: 'Comum',
        cost: '0',
        desc: 'Se mistura com facilidade na multidão \n Reação: 0',
    },
    {
        nome: 'Atraente',
        cost: '4',
        desc: 'Boa aparencia, boa pinta \n Reação: +1',
    },
    {
        nome: 'Elegante',
        cost: '12',
        desc: 'Personagem poderia entrar em concursos de beleza \n Reação: +2',
    },
    {
        nome: 'Muito Elegante',
        cost: '16',
        desc: 'Melhor que o anterior. Dependendo do lugar, pode ser importunado \n Reação: +2/+6',
    },
    {
        nome: 'Lindo',
        cost: '20',
        desc: 'Espécime Ideal. Vantagem para anjos e divindades \n Reação: +2/+8',
    },
]

const riqueza = [
    {
        nome: 'Falido',
        cost: '-25',
        desc: 'Personagem não tem nada e não pode encontrar emprego',
    },
    {
        nome: 'Pobre',
        cost: '-15',
        desc: 'Persongem começa com 1/5 da riqueza inicial. Bons empregos não estão disponíveis',
    },
    {
        nome: 'Batalhador',
        cost: '-10',
        desc: 'Persongem começa com 1/2 da riqueza inicial',
    },
    {
        nome: 'Médio',
        cost: '0',
        desc: 'Riqueza inicial normal',
    },
    {
        nome: 'Conforável',
        cost: '10',
        desc: '2x a riqueza inicial. Ainda trabalha para viver',
    },
    {
        nome: 'Rico',
        cost: '20',
        desc: '5x a riqueza inicial. Vive muito bem',
    },
    {
        nome: 'Muito Rico',
        cost: '30',
        desc: '20x a riqueza inicial',
    },
    {
        nome: 'Podre de Rico',
        cost: '50',
        desc: '100x a riqueza inicial',
    },
    {
        nome: 'Multimilhonário',
        cost: '50 + 25/N',
        desc: '100x a R.I. + x10^N (ex: 75 pontos começa-se com x1.000 R.I., 100 pontos x10.000 R.I...)',
    },
]

const others = []