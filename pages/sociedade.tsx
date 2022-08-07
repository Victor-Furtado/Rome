import { Accordion, Image, Space, Stack, Text, Title } from '@mantine/core';
import { NextPage } from 'next';

const Page: NextPage = () => {
    return (
        <Stack>
            <Title order={1}>Sociedade Romana</Title>
            <Text>
                Roma é o nome tanto do império quanto
                da cidade que o gerou. Para a maioria de
                seus cidadãos os dois são a mesma coisa.
                &quot;Todos os caminhos levam a Roma&quot; é uma
                verdade literal; as inúmeras vias pavimentadas
                que ligam o Império tem a cidade Imperial
                como destino.
            </Text>
            <Image alt='' src='/images/Rome2.png' />
            <Title order={3}>O povo romano</Title>
            <Text>
                Os cidadãos de Roma eram divididos em várias
                classes. No início da história da cidade, essas
                divisões eram muito rígidas, mas após o inicio
                do Império as linhas demarcatórias começaram a
                ficar embaçadas. Ex-escravos ficaram ricos e
                poderosos o suficiente para se misturar e se
                tornar cidadãos. O patronato (uma série de
                relações pessoais que mantinham a sociedade
                romana junta) existia como uma instituição
                informal em todas as classes sociais.
            </Text>
            <Accordion variant="filled" radius="xs" chevronPosition="left">
                <Accordion.Item value="Familia">
                    <Accordion.Control>Familia Romana</Accordion.Control>
                    <Accordion.Panel>
                        <Text>
                            Os romanos consideravam a família como o componente mais importante de
                            sua sociedade. A maioria das relações sociais e políticas estavam baseadas no
                            modelo familiar. O César era a imagem do pai supremo, pater de todo o Império.
                            Os escravos e crianças eram consideradas incapazes de tomar decisões por si e
                            precisando do controle de um mestre.
                        </Text>
                        <Space h='sm' />
                        <Title order={5}>Pater ou Mater</Title>
                        <Text>
                            Os lideres das familias era o membro mais velho ainda vivo de uma família. Numa famflia
                            muito grande, isto podia significar uma bisavó com controle sobre três gerações
                            de sua família, se bem que a maioria das pessoas não vivia tanto, somente nos
                            cidadãos mais ricos. O pater tinha poder absoluto sobre todos os membros da família.
                            Tradicionalmente, Pater ou Mater controlava toda a propriedade e tinha o direito de
                            matar ou vender seus filhos como escravos. Na prática, isso acontece muito raramente,
                            mas um homem pennanecia sob o controle de seu pater até a hora que esse antepassado
                            morresse mesmo que tivesse emprego e familia.
                        </Text>
                        <Space h='sm' />
                        <Title order={5}>Casamentos</Title>
                        <Text>
                            Em Roma, o casamento era normalmente arranjado por razões sociais e econômicas,
                            romance não tinha nada a ver com isso. O lider familiar escolhia o noivo ou a noiva para
                            seu descendente. Antes, os cônjuges tinham pouca escolha, mas durante o imério passaram
                            a ter o direito de se recusar a se casar com alguém que achassem inaceitável além de
                            sugerir cônjuges. É claro que, o fato de o lider familiar controlar todos os outros
                            aspectos da vida de seus filhos fazia com que fosse muito difícil se recusar a atender
                            seus desejos.
                        </Text>
                        <Text>
                            O casamento em Roma era uma questão legal e não religiosa. Se um homem e uma mulher
                            viviam juntos durante um ano, eles eram declarados oficialmente casados. A cerimônia em
                            si era um evento festivo; a noiva vestia uma toga branca tradicional e um véu laranja e o
                            noivo vestia uma toga vinho com pregas em azul. Na seqüência o contrato de casamento era
                            assinado, com a presença de dez testemunhas.
                        </Text>
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="Virtudes">
                    <Accordion.Control>As Virtudes Romanas</Accordion.Control>
                    <Accordion.Panel>
                        <Text>
                            Existiam certas qualidades que são um exemplo do que um romano deveria ser. A
                            maioria dos cidadãos, principalmente os de boa familia, tenta viver de acordo com
                            esses ideais, e aqueles que não os seguem, fingiam que sim.
                        </Text>
                        <Space h='sm' />
                        <Title order={5}>Obediência</Title>
                        <Text>
                            Era necessário obedecer ao lider da familia, a uma pessoa de posto militar superior
                            e às leis já razoaveis em exercício. O dever era um conceito importante em Roma. Os
                            romanos deviam cumprir seu dever para com a família, os clientes, os patronos e o
                            Império, ou morrer tentando.
                        </Text>
                        <Space h='sm' />
                        <Title order={5}>Honra</Title>
                        <Text>
                            A honra baseia-se no cumprimento do dever, em levar uma vida irrepreensível e
                            em conseguir renome. Todo romano sonha ficar famoso. Os que tem meios,
                            constroem monumentos, patrocinam jogos na arena e fazem caridade para ganhar
                            notoriedade. Os soldados tentam superar uns aos outros pelo mesmo motivo, desde
                            o recruta modesto que escalava as defesas inimigas até os generais que iniciavam
                            campanhas em países exóticos. Um nobre que chegue à meia-idade sem ter realizado
                            uma proeza memorável era considerado um fracasso.
                        </Text>
                        <Title order={5}>Coragem</Title>
                        <Text>
                            Os homens (e tamém asmulheres) de Roma deviam suportar a guerra, as privações e os
                            azares da vida sem recuar. Atacar alguém pelas costas era uma desonra grave. Se uma
                            unidade do exército demonstrava covardia, ela era dizimada: um homem em cada dez era
                            executado. Se um romano fosse desonrado de forma grave poderia redimir-se parcialmente,
                            enfrentando a morte com bravura ao cometer suicídio.
                        </Text>
                    </Accordion.Panel>
                </Accordion.Item>
                <Accordion.Item value="Patronato">
                    <Accordion.Control>Patronos e Clientes</Accordion.Control>
                    <Accordion.Panel>
                        <Text>
                            A prática da patronagem já era uma parte importante da vida dos romanos
                            desde antes da República. Na época do império, se tornou a forma corrente
                            de se fazer qualquer tipo de negócio desde os problemas familiares até a política
                            externa. O Imperador é o patrono máximo; de César até o último cidadão livre,
                            praticamente todo homem nas cidades é patrono de uma pessoa e cliente de uma
                            outra.
                        </Text>
                        <Text>
                            Existe um conjunto informal mas obrigatório de direitos e deveres entre um
                            patrono e um cliente. Os clientes devem fazer uma visita protocolar a
                            seu patrono e ajuda-lo, passando-lhe qualquer informação que possa afetá-lo
                            e dar-lhe todo o apoio. Os patronos normalmente recompensam a visita de seus
                            clientes com uma pequena soma de dinheiro. Os patronos mais poderosos retribuem
                            seus clientes com um prêmio mais valioso. O magistrado de uma cidade, por exemplo,
                            normalmente concede contratos de construção para seus clientes. Em troca,
                            os clientes tem que atender qualquer pedido razoável por parte de seu patrono.
                        </Text>
                        <Text>
                            A patronagem é uma combinação de um ritual tradicional e uma troca de favores.
                            Exemplo: o dono de uma adega teria como patrono um grande distribuidor de vinho.
                            Uma vez por dia, o dono da adega fazia uma visita de cortesia a seu patrono, trocava
                            algumas gentilezas e partia. Se havia, por exemplo, uma rebelião na cidade e uma
                            multidão invadisse a adega e destruísse o estoque, o proprietário da loja iria pedir
                            um crédito a seu patrono para continuar no negócio. O distribuidor de vinho não daria
                            este crédito para qualquer pessoa mas apenas para seus clientes; ele enviaria várias
                            anforas de vinho para serem pagas quando a adega se recuperasse. Da mesma forma, se um
                            distribuidor rival oferecesse o mesmo vinho por um preço menor, o dono da adega deveria
                            recusar a oferta e continuar comprando de seu patrono.
                        </Text>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>
            <Space h='xl' />
        </Stack>
    );
}

export default Page