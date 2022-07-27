import { Image, Space, Stack, Text, Title } from '@mantine/core';
import { NextPage } from 'next';

const Page: NextPage = () => {
    return (
        <Stack>
            <Title order={1}>O império de Jade</Title>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <Image src='/images/CHINA.png' width={200} />
                <Stack>
                    <Text>
                        Com um terço da população do planeta e mais de 6000 anos de história
                        o império de Jade é o segundo maior império do planeta. Com um culto em
                        volta de seu imperador, virtualmente ele se torna a persona mais poderosa
                        em termos mágicos.
                    </Text>
                    <Text>
                        Seu povo é focado e sua magia é poderosa, entretanto o estudo e prática mágica
                        é controlada pelos representantes de sua figura divina. E à população comum
                        resta apenas os rituais comunitários para colheita e fertilidade dos animais.
                    </Text>
                    <Text>
                        "Povos bárbaros podem vir até as portas do castelo, mas eles jamais deixam o território.
                        A cultura superior absorve qualquer um que com ela se encontre, transformando invasores
                        em cidadãos e sua terra natal em provicias. Talvez não tenhamos o rigor militar de Roma
                        mas o senso de propriedade e honra permeia nossa cultura. Esse é o Império de Jade."
                    </Text>

                    <Text align='right'>
                        -- Sang Lee, primeiro diplomata de Jade em Roma
                    </Text>
                </Stack>
            </div>
            <Space />
            <Title order={1} style={{ textAlign: 'right' }}>União dos Reinos Hindi</Title>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <Stack>
                    <Text>
                        Com o foco comercial em regiões estratégicas, eles parecem ter um olho para terras
                        férteis, montanhas cheias de joias e outros campos produtivos. O território hoje
                        ocupado pela União ficou distanciado dos demais e se manteve economicamente pelo
                        comércio interno das especiarias, evoluindo sua tecnologia na extração de recursos.
                    </Text>
                    <Text>
                        Desde tempos antigos o povo hindu teve forte proximidade com a religião. Os superiores
                        pensavam estar conectados ao deus superior Brahma, dividindo seu povo em castas inflexíveis.
                        As castas são vistas pelos Vedas (escrituras sagradas do Hinduísmo) como uma organização
                        espontânea das pessoas e seus talentos.
                    </Text>
                </Stack>
                <Image src='/images/India.png' width={200} />
            </div>
        </Stack>
    );
}

export default Page