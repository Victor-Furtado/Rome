import { Stack, Text, Title } from '@mantine/core';
import { NextPage } from 'next';

const Page: NextPage = () => {
    return (
        <Stack>
            <Title order={1}>DIREITOS DO CIDADÃO</Title>
            <Text>O Cidadão Romano é sustentado por 3 direitos autoevidentes e um dever fundamental</Text>
            <Title order={3}>OS CIDADÃOS ROMANO SÃO EQUANIMES</Title>
            <Text>Todo cidadão romano está em igual poder politico ou jurídico para com os demais cidadãos</Text>
            <Title order={3}>O CIDADÃO ROMANO É HONESTO</Title>
            <Text>É vedada a toda autoridade questionar a honestidade de um cidadão romano sem provas incontestáveis</Text>
            <Title order={3}>O CIDADÃO ROMANO É INTEGRO</Title>
            <Text>Não se pode ferir a integridade corporal, de propriedade ou moral de nenhum cidadão romano, sujeito a crime capital</Text>
            <Title order={1}>LEI DO POVO</Title>
            <Text>
                Todo o poder é originalmente investido e, consequentemente, derivado do povo.
                As Leis são instituídas e deve ser exercido em benefício do povo; as leis aqui
                descritas são pautadas no gozo da vida, com o direito, em geral, de buscar e obter
                felicidade e segurança.
            </Text>
            <Title order={3}>1ª Lei da Imortal Roma</Title>
            <Text>
                O Senado não fará nenhuma lei a respeito do estabelecimento de uma religião ou
                proibindo seu livre exercício; ou cerceando os direitos autoevidentes dos cidadãos;
                ou o direito do povo de se reunir pacificamente e de solicitar reparação de queixas.
            </Text>
            <Title order={3}>2ª Lei da Imortal Roma</Title>
            <Text>
                Nenhum Soldado poderá, em tempo de paz, alojar-se em qualquer casa, sem o consentimento
                do Proprietário, nem em tempo de guerra, mas na forma que a lei prescrever.
            </Text>
            <Title order={3}>3ª Lei da Imortal Roma</Title>
            <Text>
                É direito do povo de estar seguro em seus bens, contra buscas e apreensões injustificadas,
                não será violado, e nenhum comando será emitido, exceto por causa provável, apoiada por
                juramento ou afirmação de um cidadão, e particularmente descrevendo o local a ser revistado
                e as pessoas ou posses a serem apreendidas.
            </Text>
            <Title order={3}>4ª Lei da Imortal Roma</Title>
            <Text>
                Ninguém será privado de seus direitos, sem o devido processo legal.
            </Text>
            <Title order={3}>5ª Lei da Imortal Roma</Title>
            <Text>
                Em todos os processos criminais, o acusado terá direito a um julgamento célere e público, por
                um júri imparcial de cidadãos, devendo o acusado ser informado a natureza e a causa da acusação;
                ser confrontado com as testemunhas contra ele; ter processo compulsório para obter testemunhas a
                seu favor, e ter a assistência de advogado para sua defesa.
            </Text>
            <Title order={3}>6ª Lei da Imortal Roma</Title>
            <Text>
                Nos processos de direito consuetudinário nenhum fato julgado por um júri será reexaminado de outra
                forma em qualquer tribunal do Império, a não ser à luz de novas evidências.
            </Text>
            <Title order={3}>7ª Lei da Imortal Roma</Title>
            <Text>
                Não será exigida fiança excessiva, nem multas excessivas impostas, nem punições cruéis e incomuns
                infligidas.
            </Text>
            <Title order={3}>8ª Lei da Imortal Roma</Title>
            <Text>
                A enumeração na Lei, de certos direitos, não deve ser interpretada para negar ou menosprezar outros
                retidos pelo povo.
            </Text>
            <Title order={3}>9ª Lei da Imortal Roma</Title>
            <Text>
                Os poderes não delegados ao Senado pelas Leis aqui descritas, nem proibidos por elas às Provincias,
                são reservados às Provincias respectivamente, ou ao povo.
            </Text>
        </Stack>
    );
}

export default Page