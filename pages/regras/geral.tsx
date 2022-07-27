import { Stack, Text, Title } from '@mantine/core';
import { NextPage } from 'next';

export const Tab: NextPage = () => {
    return (
        <Stack>
            <Title>Guia Rápido</Title>
            <Text>
                Existem 3 mecanismos de jogo básicos em GURPS.
                Aprenda estas três regras e você estará pronto
                para jogar:
            </Text>
            <Title order={3}>Testes de Habilidade</Title>
            <Text>
                Um “teste de habilidade” é uma jogada de dados
                feita quando o personagem precisa colocar a prova
                um de seus atributos ou perícias. Por exemplo,
                você pode precisar jogar contra a Força do
                personagem para ver se ele é capaz de evitar que
                uma porta pesada se feche ou contra seu NH em
                Armas de Fogo para ver se ele acerta o inimigo
                com sua pistola. O GURPS usa apenas dados de seis
                faces. Um teste é feito com 3 dados. Se o resultado
                dos dados for menor ou igual ao nível da perícia ou
                habilidade que está sendo testada, o personagem terá
                obtido sucesso. Caso contrário, ele terá fracas sado.
                Se, por exemplo, você estiver testando a Força do
                personagem e o valor deste atributo for 12, um
                resultado menor ou igual a 12 será um sucesso. Às vezes
                uma jogada recebe modificadores. Se, por exemplo, um
                personagem estiver tentando evitar que uma porta muito
                pesada se feche, o jogador pode ter que jogar contra a
                Força submetida a uma penalidade de -2 (abreviado por
                ST-2). Neste caso, com um valor de Força 12, você
                precisaria de um resultado menor ou igual a 10 nos dados
                para que o personagem obtivesse sucesso. Obter um resultado
                menor ou igual a 10 nos dados é mais difícil do que um menor
                ou igual a 12, assim como segurar uma porta pesada é mais
                difícil que segurar uma porta normal. No caso de o personagem
                estar realizando uma tarefa excepcionalmente fácil, ele também
                pode receber um bônus. Você pode ter que fazer um teste de
                “Adestramento de Animais+4” para ver se o personagem é capaz
                de fazer amizade com um cachorro dócil. Se o nível de habilidade
                do personagem nesta perícia for igual a 12, um resultado menor ou
                igual a 16 indicaria um sucesso. E mais fácil obter um resultado
                menor ou igual a 16 do que um resultado menor ou igual a 12.
                Consulte os detalhes sobre os Testes de Habilidade nas págs. 343-361 do Módulo Básico.
            </Text>
            <Title order={3}>Testes de Reação</Title>
            <Text>
                Um “teste de Reação” é uma jogada feita pelo Mestre para determinar
                qual será 'a reação de um PdM (Personagem do Mestre) diante do personagem.
                Essa jogada será sempre opcional, pois o Mestre pode pré-determinar essas
                reações. No entanto, pelo menos de vez em quando, é mais divertido deixar
                que os dados decidam.
            </Text>
            <Title order={3}>Avaliação de Dano</Title>
            <Text>
                Uma avaliação de dano é feita quando se precisa saber a extensão do dano causa do contra um adversário durante um combate. As avaliações de dano usam o formato “dados+acréscimos”. Muitas coisas podem afetar a intensidade do dano provocado pelo ataque do personagem. Uma armadura reduz o dano sofrido por quem a usa; alguns ataques causam mais dano se ultrapassarem a armadura: “Golpes Fulminantes” também causam dano adicional. Todos esses detalhes são explicados na aba de combate.
            </Text>
        </Stack>
    );
}

export default Tab